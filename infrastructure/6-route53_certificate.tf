resource "aws_acm_certificate" "dev_cert" {
  domain_name       = var.dev_client_app_domain
  validation_method = "DNS"

  tags = {
    "Name"      = local.prefix
    Environment = terraform.workspace
  }

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_route53_record" "cert_validation_record" {
  count           = length(aws_acm_certificate.dev_cert.domain_validation_options)
  allow_overwrite = false
  ttl             = 60
  zone_id         = data.aws_route53_zone.main.zone_id[count.index]
  name            = tolist(aws_acm_certificate.dev_cert.domain_validation_options)[count.index].resource_record_name
  records         = [tolist(aws_acm_certificate.dev_cert.domain_validation_options)[count.index].resource_record_value]
  type            = tolist(aws_acm_certificate.dev_cert.domain_validation_options)[count.index].resource_record_type
}

// Lookup the existing record to check if it already exists
resource "aws_route53_record" "cert_validation_record_lookup" {
  count   = length(aws_acm_certificate.dev_cert.domain_validation_options)
  zone_id = data.aws_route53_zone.main.zone_id[count.index]
  name    = tolist(aws_acm_certificate.dev_cert.domain_validation_options)[count.index].resource_record_name
  type    = tolist(aws_acm_certificate.dev_cert.domain_validation_options)[count.index].resource_record_type
}

resource "aws_acm_certificate_validation" "cert_validation" {
  certificate_arn         = aws_acm_certificate.dev_cert.arn
  validation_record_fqdns = aws_route53_record.cert_validation_record.*.fqdn
}

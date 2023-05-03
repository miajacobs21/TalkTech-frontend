# Get your already created hosted zone
data "aws_route53_zone" "main" {
  name         = "talktechstream.com"
  private_zone = false
}

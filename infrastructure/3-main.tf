terraform {
  backend "s3" {
    bucket  = "talktechapp-client-terraform-state" # my AWS S3 bucket
    key     = "develop/talktechapp-client.tfstate"
    region  = "us-east-1" # my AWS region
    encrypt = true
  }
}

locals {
  prefix = "${var.prefix}-${terraform.workspace}"

  common_tags = {
    Environment = terraform.workspace
    Project     = var.project
    ManagedBy   = "Terraform"
    Owner       = "Mia Jacobs"
  }
}

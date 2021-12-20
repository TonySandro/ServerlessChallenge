terraform {
  required_version = "1.1.2"
}

provider "aws" {
  region  = var.aws_region
  profile = var.aws_profile

  default_tags {
    tags = {
      Project   = "Serverless REST API"
      CreatedAt = "2021-12-19"
      ManagedBy = "Terraform"
      Owner     = "Tony S."
      Env       = var.env
    }
  }
}

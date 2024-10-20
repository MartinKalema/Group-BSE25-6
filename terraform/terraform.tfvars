# Region where resources will be created
region = "us-east-2"

# Project name - used in naming resources
project_name = "bse256"

# VPC and Subnet CIDR blocks
vpc_cidr    = "10.0.0.0/16"
subnet_cidr = "10.0.1.0/24"

# S3 bucket name for Terraform state
state_bucket = "terraform-state-bucket-bse256"

# AMI ID 
ami_id = "ami-00eb69d236edcfaf8"

# EC2 instance type
instance_type = "t2.medium"

# Name tag for the EC2 instance
instance_name = "BSE256"

# Path to your public key file
public_key_path = "~/.ssh/id_rsa.pub"

# Common tags to apply to all resources
common_tags = {
  Environment = "Development"
  Project     = "bse256"
  ManagedBy   = "Terraform"
}
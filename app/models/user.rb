class User < ActiveRecord::Base
  attr_accessible :email, :password, :password_confirmation, :username
  has_many :games
  has_secure_password
  
  validates :email, :uniqueness => { case_sensitive: false }, :format => { :with => /.+@.+\..+/i }
  validates :username, :uniqueness => { case_sensitive: false }, :format => { :with => /^[a-zA-Z0-9]+$/ }, :length => { in: 3..15 }
end

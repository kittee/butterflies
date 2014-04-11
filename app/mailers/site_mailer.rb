class SiteMailer < ActionMailer::Base
  from_address = Mail::Address.new "caraheacock@gmail.com"
  from_address.display_name = "Cara"
  default from: from_address.format
  
  def welcome(user)
    mail({
      :to => user.email, 
      :subject => "Welcome to Lydia Butterfly!"
    })
  end
end

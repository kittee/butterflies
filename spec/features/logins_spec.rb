require 'spec_helper'

describe "Logins" do
  it "can sign up", :js => true do
    visit root_path
    click_link("Sign Up")
    fill_in("user[username]", :with => "kitty")
    fill_in("user[email]", :with => "caraheacock@gmail.com")
    fill_in("user[password]", :with => "kitty")
    click_on("Sign Up")
    expect(page).to have_content("Welcome, kitty!")
  end
  
  it "can log out", :js => true do
    visit root_path
    click_link("Sign Up")
    fill_in("user[username]", :with => "kitty")
    fill_in("user[email]", :with => "caraheacock@gmail.com")
    fill_in("user[password]", :with => "kitty")
    click_on("Sign Up")
    click_on ("Sign Out")
    expect(page).to have_content("Sign In")
  end
  
  it "can log in", :js => true do
    visit root_path
    click_link("Sign Up")
    fill_in("user[username]", :with => "kitty")
    fill_in("user[email]", :with => "caraheacock@gmail.com")
    fill_in("user[password]", :with => "kitty")
    click_on("Sign Up")
    click_on ("Sign Out")
    click_on ("Sign In")
    fill_in("username", :with => "kitty")
    fill_in("password", :with => "kitty")
    click_on("Log In")
    expect(page).to have_content("Welcome, kitty!")
  end
end

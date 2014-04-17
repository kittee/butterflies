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
  
  it "shows error messages for signing up", :js => true do
    visit root_path
    click_link("Sign Up")
    click_on("Sign Up")
    expect(page).to have_content("Password digest can't be blank, Email is invalid, Username is invalid, Username is too short (minimum is 3 characters)")
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
  
  it "shows error messages for signing in", :js => true do
    visit root_path
    click_link("Sign In")
    click_on("Log In")
    expect(page).to have_content("Invalid login information")
  end
end

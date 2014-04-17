require 'spec_helper'

describe "Games" do
  it "starts a game", :js => true do
    Capybara.default_wait_time = 4
    visit root_path
    find("#start_button").click
    expect(page).to have_content("seconds")
  end
end

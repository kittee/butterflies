require 'test_helper'

class GamesControllerTest < ActionController::TestCase
  test "should get new" do
    get :new
    assert_response :success
  end

end

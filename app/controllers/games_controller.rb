class GamesController < ApplicationController
  def new
    @user = User.new
  end
end

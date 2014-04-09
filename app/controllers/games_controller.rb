class GamesController < ApplicationController
  def new
    @user = User.new
  end
  
  def index
    @user = User.new
  end
end

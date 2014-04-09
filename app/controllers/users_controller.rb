class UsersController < ApplicationController
  def new
    @user = User.new
  end
  
  def create
    @user = User.new(params[:user])
    
    if @user.save
      session[:user_id] = @user.id
      session[:username] = @user.username
      respond_to do |format|
        format.js
      end
    else
      render "new"
    end
  end
  
  def show
    @user = User.new
  end
end

class LoginsController < ApplicationController
  def new
    if current_user
      redirect_to(:new_game)
    else
      @user = User.new
    end
  end
  
  def create
    @user = User.find_by_username(params[:username])
    
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      session[:username] = @user.username
      redirect_to :new_game
    else
      @failed_login = true;
      render "new"
    end
  end
  
  def destroy
    session[:user_id] = nil
    
    redirect_to :root
  end
end

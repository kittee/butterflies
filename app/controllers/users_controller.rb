class UsersController < ApplicationController
  def new
    @user = User.new
  end
  
  def create
    @user = User.new(params[:user])
    
    if @user.save
      session[:user_id] = @user.id
      session[:username] = @user.username
      SiteMailer.welcome(@user).deliver
      redirect_to :new_game
    else
      render "new"
    end
  end
  
  def show
    @user = User.find_by_username(params[:username])
    #@personal_top_games = @user.games.order('final_score').reverse[0..9]
    
    # @personal_top_games = Game.joins(:user).select("games.*, users.username AS user_username").where("games.user_id" => @user.id).order('final_score').reverse[0..9]
    # 
    # @levels = Level.joins(@personal_top_games).select("levels.*")
    
    #@personal_top_games = User.includes(games: [:levels]).find_by_username(params[:username]).games.order('final_score').reverse[0..9]
    
    #@personal_top_games = Game.joins(:user, :levels).select("games.*, levels.level_num AS level_num").where("games.user_id" => @user.id).order('final_score').reverse[0..9]
    
    @personal_top_games = Game.includes(:levels).where("games.user_id" => @user.id).order('final_score').reverse[0..9]
  end
end

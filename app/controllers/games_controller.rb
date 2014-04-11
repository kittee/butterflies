class GamesController < ApplicationController
  def new
    @user = User.new
    @game = Game.new
    @level = Level.new
    
    respond_to do |format|
      format.html
      format.js
    end
  end
  
  def create
    @user = User.new
    @game = Game.create(params[:game])

    respond_to do |format|
      format.js
    end
  end
  
  def index
    @user = User.new
    
    @all_top_games = []
    
    users = User.all
    
    users.each do |user|
      game = user.games.order('final_score').reverse[0]
      if game
        @all_top_games << game
      end
    end
    
    @all_top_games.sort! { |a, b| b.final_score <=> a.final_score }
    
    @all_top_games = @all_top_games[0..9]
  end
  
  def edit
    @game = Game.find(params[:id])
  end
  
  def update
    @game = Game.find(params[:id])
    @game.update_attributes(params[:game])
    
    respond_to do |format|
      format.js
    end
  end
end

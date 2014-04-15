class GamesController < ApplicationController
  def new
    if !current_user
      @user = User.new
    end
    
    @game = Game.new
    @level = Level.new
    
    respond_to do |format|
      format.html
      format.js
    end
  end
  
  def create
    if !current_user
      @user = User.new
    end
    
    @game = Game.create(params[:game])

    respond_to do |format|
      format.js
    end
  end
  
  def index
    if !current_user
      @user = User.new
    end
    
    # ORIGINAL working one that does too many queries
    # 
    # @all_top_games = []
    # 
    # users = User.all
    # 
    # users.each do |user|
    #   game = user.games.order('final_score').last
    #   if game
    #     @all_top_games << game
    #   end
    # end
    # 
    # @all_top_games.sort! { |a, b| b.final_score <=> a.final_score }
    # 
    # @all_top_games = @all_top_games[0..9]
    
    all_games = Game.joins(:user, :levels).select("users.username AS username, games.final_score AS final_score, games.id AS game_id, games.updated_at AS updated_at, levels.level_num AS level_num").order('username').order('final_score DESC').order('level_num DESC')
    
    @all_top_games = [all_games[0]]
    
    all_games.each do |game|
      if game.game_id != @all_top_games.last.game_id && game.username != @all_top_games.last.username
        @all_top_games << game
      end
    end
    
    @all_top_games.sort! { |a, b| b.final_score <=> a.final_score }
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

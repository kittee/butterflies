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
    
    @all_top_games = []
    
    users = User.all
    
    # ORIGINAL working one that does too many queries
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
    # ORIGINAL ends here
    
    # users = User.joins(games: [:levels]).select("users.username AS username, games.id AS game_id, games.user_id AS game_user_id, games.final_score AS game_final_score").order('game_id')
    # 
    # @top_games = [users[0]]
    # 
    # users.each do |user|
    #   if user.game_id != @top_games.last.game_id && user
    #     @top_games << user
    #   end
    # end
    # 
    # @top_games.sort! { |a, b| b.final_score <=> a.final_score }
    # 
    # @top_games.each do |top_game|
    # end
    
    #@all_top_games = Game.includes(:levels).order('final_score DESC')
    #@top_10_users = @all_top_games.select()
    
    
    #@all_top_games = Game.joins(:user, :levels)
    
    #@all_top_games = Game.joins(:user).select("games.*, users.id, users.username AS username").group("users.username").maximum("games.final_score")
    
    @all_games = Game.joins(:user, :levels).select("users.username AS username, games.final_score AS final_score, games.id AS game_id, games.updated_at AS updated_at, levels.*").order('username').order('final_score DESC')
    
    @all_top_games = [@all_games[0]]
    
    @all_games.each do |game|
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

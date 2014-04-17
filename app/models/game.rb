class Game < ActiveRecord::Base
  attr_accessible :final_score, :user_id, :levels_attributes
  belongs_to :user
  has_many :levels
  accepts_nested_attributes_for :levels
  
  scope :get_personal_games, ->(user) { joins(:levels).where("user_id = ?", user.id).select("games.final_score AS final_score, games.id AS game_id, games.updated_at AS updated_at, levels.level_num AS level_num").order('final_score DESC').order('game_id DESC').order('level_num DESC') }
  
  scope :get_all_games, -> { joins(:user, :levels).select("users.username AS username, games.final_score AS final_score, games.id AS game_id, games.updated_at AS updated_at, levels.level_num AS level_num").order('username').order('final_score DESC').order('game_id DESC').order('level_num DESC') }
  
  # Takes an ActiveRecord joined table and removed duplicates.
  #
  # all_games - an ActiveRecord::Relation object containing
  # many_users - a check to see if this is creating an array for all users or just one user. If nil or false, the returned array is the top 10 games of one user. If true or truthy, the returned array contains the games for the top 10 users.
  #
  # Returns an array with ActiveRecord::Relation objects.
  def self.get_all_top_games(all_games, many_users = nil)
    all_top_games = [all_games[0]]
    
    all_games.each do |game|
      if many_users
        if game.game_id != all_top_games.last.game_id && game.username != all_top_games.last.username
          all_top_games << game
        end
      else
        if game.game_id != all_top_games.last.game_id
          all_top_games << game
        end
      end
    end
    
    all_top_games.sort! { |a, b| b.final_score <=> a.final_score }
    all_top_games = all_top_games[0..9]
  end
  
  def pretty_time(time)
    time.getlocal.strftime("%-m/%-d/%y, %l:%M %p")
  end
end

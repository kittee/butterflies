class Game < ActiveRecord::Base
  attr_accessible :final_score, :user_id, :levels_attributes
  belongs_to :user
  has_many :levels
  accepts_nested_attributes_for :levels
  
  scope :get_all_games, -> { joins(:user, :levels).select("users.username AS username, games.final_score AS final_score, games.id AS game_id, games.updated_at AS updated_at, levels.level_num AS level_num").order('username').order('final_score DESC').order('level_num DESC') }
  
  def self.get_all_top_games(all_games)
    all_top_games = [all_games[0]]
    
    all_games.each do |game|
      if game.game_id != all_top_games.last.game_id && game.username != all_top_games.last.username
        all_top_games << game
      end
    end
    
    all_top_games.sort! { |a, b| b.final_score <=> a.final_score }
    all_top_games = all_top_games[0..9]
  end
  
  def pretty_time(time)
    time.getlocal.strftime("%-m/%-d/%y, %l:%M %p")
  end
end

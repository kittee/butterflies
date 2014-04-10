class Level < ActiveRecord::Base
  attr_accessible :game_id, :level_num, :score, :time_elapsed
  belongs_to :game
end

class Level < ActiveRecord::Base
  attr_accessible :game_id, :layout_id, :level_num, :score, :time_elapsed
end

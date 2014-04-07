class Game < ActiveRecord::Base
  attr_accessible :final_score, :user_id
  belongs_to :user
  has_many :levels
end

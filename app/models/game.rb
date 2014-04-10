class Game < ActiveRecord::Base
  attr_accessible :final_score, :user_id, :levels_attributes
  belongs_to :user
  has_many :levels
  accepts_nested_attributes_for :levels
  
  def pretty_time
    updated_at.getlocal.strftime("%-m/%-d/%y, %l:%M %p")
  end
end

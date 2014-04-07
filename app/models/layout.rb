class Layout < ActiveRecord::Base
  attr_accessible :difficulty
  serialize :sections, Array
end

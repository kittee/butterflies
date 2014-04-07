class CreateLevels < ActiveRecord::Migration
  def change
    create_table :levels do |t|
      t.integer :game_id
      t.integer :layout_id
      t.integer :level_num
      t.integer :time_elapsed
      t.integer :score

      t.timestamps
    end
  end
end

class CreateLayouts < ActiveRecord::Migration
  def change
    create_table :layouts do |t|
      t.text :sections
      t.integer :difficulty

      t.timestamps
    end
  end
end

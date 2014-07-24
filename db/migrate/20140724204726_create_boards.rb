class CreateBoards < ActiveRecord::Migration
  def change
    create_table :boards do |t|
      t.integer :user_id
      t.string :title, null: false
      
      t.timestamps
    end
    add_index :boards, :user_id
  end
end
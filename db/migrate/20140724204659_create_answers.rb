class CreateAnswers < ActiveRecord::Migration
  def change
    create_table :answers do |t|
      t.integer :post_id, null: false
      t.integer :user_id, null: false
      t.string :body, null: false
      
      t.timestamps
    end
    add_index :answers, :user_id
    add_index :answers, :post_id
    add_index :answers, [:post_id, :user_id], unique: true
  end
end

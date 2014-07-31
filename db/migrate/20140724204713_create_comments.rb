class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.references :commentable, polymorphic: true
      t.integer :commenter_id, null: false
      t.string :body, null: false
      
      t.timestamps
    end
    add_index :comments, :commenter_id
  end
end


# t.integer :imageable_id, null: false
# t.string  :imageable_type, null: false
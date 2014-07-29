class Comment < ActiveRecord::Base
  validates :commenter_id, :body, presence: true
  
  belongs_to :commentable, polymorphic: true
  belongs_to :user, foreign_key: :commenter_id, class_name: User
end

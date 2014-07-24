class Comment < ActiveRecord::Base
  validates :commenter_id, :body, presence: true
  
  belongs_to :commentable, polymorphic: true
end

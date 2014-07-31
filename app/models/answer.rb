class Answer < ActiveRecord::Base
  validates :body, :post_id, presence: true

  belongs_to :post
  belongs_to :user
  
  has_many :comments, dependent: :destroy, as: :commentable
end

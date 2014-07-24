class Post < ActiveRecord::Base
  validates :title, :user_id, :body, presence: true

  belongs_to :user
  has_many :answers, dependent: :destroy
  has_many :comments, dependent: :destroy, as: :commentable
end

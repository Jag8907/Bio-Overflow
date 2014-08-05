class Board < ActiveRecord::Base
  validates :title, :user_id, presence: true

  belongs_to :owner, foreign_key: :user_id, class_name: User

  has_many :board_memberships, dependent: :destroy
  has_many :members, through: :board_memberships, source: :user
  has_many :comments, dependent: :destroy, as: :commentable

  def is_member?(u)
    return true if u.id == ownder.id
    board_memberships.where(user_id: u.id).exists?
  end
end

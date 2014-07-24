class User < ActiveRecord::Base
  validates :username, :session_token, presence: true

  has_many :boards
  has_many :posts
  has_many :answers
  has_many :board_memberships
  has_many :comments, foreign_key: :commenter_id, class_name: Comment
  has_many :member_boards, through: :board_memberships, source: :board
  has_many :comments, as: :commentable

  attr_reader :password
  after_initialize :ensure_session_token

  def self.find_by_credentials(user_params)
    user = User.find_by_username(user_params[:username])
    user.try(:is_password?, user_params[:password]) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  protected

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end

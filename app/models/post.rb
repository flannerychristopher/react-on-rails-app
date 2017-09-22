class Post < ApplicationRecord
  belongs_to :user

  validates :title,   presence: true, length: { maximum: 140 }
  validates :content, presence: true
  validates :user_id, presence: true

end

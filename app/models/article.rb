class Article
  include Mongoid::Document
  include Mongoid::Timestamps

  field :content,              type: String, default: ""

  has_many :comments
  belongs_to :user
end

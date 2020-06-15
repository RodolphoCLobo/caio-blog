class Comment
  include Mongoid::Document
  include Mongoid::Timestamps

  field :content,              type: String, default: ""

  belongs_to :article
  belongs_to :user
end

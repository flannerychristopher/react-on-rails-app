require 'rails_helper'

RSpec.describe Post, type: :model do
  
  before(:each) do
    @user = User.create(name: "Bill Murray", email: "bill@example.com")
    @post = Post.create(title: "title", content: "content", user_id: 1)
  end

  it "attribute type of" do
    expect(@post).to_not be_nil
    expect(@post.id).to be_a_kind_of(Integer)
    expect(@post.user_id).to be_a_kind_of(Integer)
    expect(@post).to have_attributes(user_id: 1)
    expect(@post.title).to be_a_kind_of(String)
    expect(@post).to have_attributes(title: "title")
    expect(@post.content).to be_a_kind_of(String)
    expect(@post).to have_attributes(content: "content")
  end

  context "validations" do
    it { should belong_to(:user) }
    it { should validate_presence_of(:title) }
    it { should validate_presence_of(:content) }
    it { should validate_presence_of(:user_id) }
    
    it "title should be less than 140 characters" do
      @post.title = "a"*141
      expect(@post).to_not be_valid
    end

    it "content should be less than 1024 characters" do
      @post.content = "a"*1025
      expect(@post).to_not be_valid
    end

    it "must have a title" do
      @post.title = "      "
      expect(@post).to_not be_valid
    end

    it "must have content" do
      @post.title = "      "
      expect(@post).to_not be_valid
    end

    it "must have a user id" do
      @post.user_id = nil
      expect(@post).to_not be_valid
    end
  end
  
end

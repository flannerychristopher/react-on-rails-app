require 'rails_helper'

RSpec.describe "GET posts#index", :type => :request do
  context "API renders JSON of all posts" do
    before do
      get "/posts"
    end
    
    it "returns http success" do
      expect(response).to have_http_status(:success)
    end
    
    it "has a response with JSON body" do
      hash_body = nil
      expect { 
        hash_body = JSON.parse(response.body)
      }.not_to raise_exception
    end
  end
end

RSpec.describe "GET posts#show", :type => :request do
  context "API renders JSON of a single post" do
    before do
      @user = User.create(name: "Bill Murray", email: "bill@example.com")
      @post = Post.create(title: "title", content: "content", user_id: 1)
      get "/posts/#{@post.id}"
    end
    
    it "returns valid http success" do
      expect(response).to have_http_status(:success)
      expect(response).to have_http_status(200)
    end
    
    it "responds with JSON body" do
      hash_body = nil
      expect { 
        hash_body = JSON.parse(response.body)
      }.not_to raise_exception
      expect(hash_body).not_to be_empty
    end
    
    it "responds with correct data" do
      hash_body = JSON.parse(response.body)
      expect(hash_body).to include({
        "id" => @post.id,
        "title" => @post.title,
        "content" => @post.content
      })
    end
  end  
end

RSpec.describe "save from RecordNotFound", :type => :request do
  context "post record" do
    before do
      get "/posts/1000000000000"
    end

    it "returns http status" do
      expect(response).to have_http_status(400)
    end

    it "returns json message" do
      expect { JSON.parse(response.body) }.not_to raise_exception
    end

  end
end

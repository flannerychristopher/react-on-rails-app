require 'rails_helper'

RSpec.describe "GET users#index", :type => :request do
  context "API renders JSON of all users" do
    before do
      get "/users"
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

RSpec.describe "GET users#show", :type => :request do
  context "API renders JSON of a single" do
    before do
      @user = User.create(name: "Bill Murray", email: "bill@example.com")
      get "/users/#{@user.id}"
    end
    
    it "returns valid http success" do
      expect(response).to have_http_status(:success)
    end
    
    it "responds with JSON body" do
      hash_body = nil
      expect { 
        hash_body = JSON.parse(response.body)
      }.not_to raise_exception
    end
    
    it "responds with correct data" do
      hash_body = JSON.parse(response.body)
      expect(hash_body).to include({
        "id" => @user.id,
        "name" => @user.name,
        "email" => @user.email
      })
    end
  end  
end

RSpec.describe "unpermitted routes rejected", :type => :request do
  context "API does not allow to create, delete, or edit users" do
    before do
      @user = User.create(name: "Bill Murray", email: "bill@example.com")
    end
    
    it "DELETE returns no route" do
      expect { 
        delete "/users/#{@user.id}" 
      }.to raise_error(ActionController::RoutingError)
      expect(response).to be_nil
    end
    
    it "POST returns no route" do
      expect { 
        post "/users/#{@user.id}" 
      }.to raise_error(ActionController::RoutingError)
      expect(response).to be_nil
    end 
    
    it "PATCH returns no route" do
      expect { 
        patch "/users/#{@user.id}" 
      }.to raise_error(ActionController::RoutingError)
      expect(response).to be_nil
    end 
    
    it "PUT returns no route" do
      expect { 
        put "/users/#{@user.id}" 
      }.to raise_error(ActionController::RoutingError)
      expect(response).to be_nil
    end
  end
end

RSpec.describe "save from RecordNotFound", :type => :request do
  context "User record" do
    before do
      get "/users/1000000000000"
    end

    it "returns http status" do
      expect(response).to have_http_status(400)
    end

    it "returns json message" do
      expect { JSON.parse(response.body) }.not_to raise_exception
    end

  end
end

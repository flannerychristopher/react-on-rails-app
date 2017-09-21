require 'rails_helper'

RSpec.describe "GET #index json all users index", :type => :request do
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

RSpec.describe "GET #show a single user", :type => :request do
  before do
    @user = User.create(name: "Bill Murray", email: "bill@example.com")
    get "/users/#{@user.id}"
  end

  it "returns http success" do
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

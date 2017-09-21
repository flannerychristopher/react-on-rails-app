require 'rails_helper'

RSpec.describe "routing to users", :type => :routing do
  it "routes /users to users#index" do
    expect(:get => "/users").to route_to(
      :controller => "users",
      :action => "index"
    )
  end

  it "routes /user/:id to profile#show for ID" do
    expect(:get => "/users/5").to route_to(
      :controller => "users",
      :action => "show",
      :id => "5"
    )
  end
end
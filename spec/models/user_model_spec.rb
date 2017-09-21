require "rails_helper"

RSpec.describe User, :type => :model do
  before(:each) do
    @user = User.create(name: "Bill Murray", email: "bill@example.com")
  end

  it 'should be a valid instance' do
    expect(@user).to_not be_nil
    expect(@user.id).to be_a_kind_of(Integer)
    expect(@user.name).to be_a_kind_of(String)
    expect(@user).to have_attributes(name: "Bill Murray")
    expect(@user.email).to be_a_kind_of(String)
    expect(@user).to have_attributes(email: "bill@example.com")
  end

end
require "rails_helper"

RSpec.describe User, :type => :model do
  context "instance of User" do
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

  context "validations" do
    before do
      @user = User.new(name: "Bill", email: "bill@example.com")
    end

    it "name should be less than 50 characters" do
      @user.name = "a"*51
      expect(@user).to_not be_valid
    end
    
    it "must have a name" do
      @user.name = "       "
      expect(@user).to_not be_valid
    end
    
    it "email should be less than 255 character" do
      @user.email = "tenletters"*240 + "@example.com"
      expect(@user).to_not be_valid
    end

    it "must have an email" do
      @user.email = ''
      expect(@user).to_not be_valid
    end

    it "emails should be unique" do
      @user.save
      duplicate = User.create(name: "Duplicate", email: @user.email.upcase)
      expect(duplicate).to_not be_valid
    end
  end

end
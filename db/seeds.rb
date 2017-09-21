require 'faker'

User.create!(name: "Bill Murray",
             email: "bill@example.com")

12.times do |n|
  name = Faker::Name.unique.name
  email = Faker::Internet.unique.safe_email
  User.create!(name:  name,
               email: email)
end

puts "seed completed"
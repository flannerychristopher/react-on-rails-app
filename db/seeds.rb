require 'faker'

User.create!(name: "Bill Murray",
             email: "bill@example.com")

12.times do |n|
  name = Faker::Name.unique.name
  email = Faker::Internet.unique.safe_email
  user  = User.create!(name:  name,
                       email: email)

  5.times do |n|
    title = Faker::Lorem.sentence(3, false, 0)
    content = Faker::Lorem.paragraph(10, false)
    Post.create!(title: title,
                 content: content,
                 user_id: user.id)
  end
end

puts "seed completed"
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
u1 = User.create({ username: 'Anonymous', password_digest: "password", session_token: 'token' })
u2 = User.create({ username: 'Bill', password_digest: "password1", session_token: 'token' })
u3 = User.create({ username: 'Law', password_digest: "password2", session_token: 'token' })

p1 = Post.create({ title: "Name a protein in muscle tissue.", body: "Myosin, Actin or Keratin?", 
  user_id: 1, author: "Anonymous" })
p2 = Post.create({ title: "Name a protein in skin tissue.", body: "Myosin, Actin or Keratin?", 
  user_id: 1, author: "Anonymous" })

a1 = Answer.create({ post_id: 1, user_id: 2, body: "Myosin", username: "Bill" })
a2 = Answer.create({ post_id: 2, user_id: 3, body: "Keratin", username: "Law" })
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Gift.destroy_all
User.destroy_all

u1 = User.create!(name: "Barry Badger", photo: "http://www.subtleenergies.com/ormus/tw/BarryMay06.jpg")
u2 = User.create!(name: "Davey Ravey", photo: "http://business-school.exeter.ac.uk/images/profiles/Matthew_Davey.jpg")


g1 = Gift.create!(receiver_id: u1.id, giver_id: u2.id, present:"socks", present_img:"https://www.smartturnout.com/media/catalog/product/cache/2/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/9/1/912lancer_2.jpg", shop_link: "https://www.amazon.co.uk/dp/B00SZT5BGG/ref=asc_df_B00SZT5BGG47918838/?tag=googshopuk-21&creative=22110&creativeASIN=B00SZT5BGG&linkCode=df0&hvadid=214081594724&hvpos=1o1&hvnetw=g&hvrand=7590939846554675754&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9045886&hvtargid=pla-348424698200", price: 8.99)

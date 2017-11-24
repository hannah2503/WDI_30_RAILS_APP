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
u3 = User.create!(name: "Susie Sausage", photo: "https://pbs.twimg.com/profile_images/558155702363901952/jteenLWn.jpeg")
u4 = User.create!(name: "Micky Knickers", photo: "https://www.thesun.co.uk/wp-content/uploads/2017/04/04_05_mfthinkingaloud_s01.jpeg?strip=all&w=960")
u5 = User.create!(name: "Paul Panty", photo: "https://pbs.twimg.com/profile_images/744845474990014464/PlNkgS_b.jpg")
u6 = User.create!(name: "Flora  McNugget", photo: "https://static1.squarespace.com/static/5167d71ee4b02d0863321c66/t/55689756e4b066b695277c41/1432917852199/Susie+Gill")
u7 = User.create!(name: "Charles Cheapskate", photo: "https://media.barfoot.co.nz/staffimages/high/SPW_B.JPG?width=261&height=348&mode=Crop&quality=80&anchor=TopCenter")
u8 = User.create!(name: "Jimmy Jumbotron", photo: "https://www.biography.com/.image/t_share/MTE1ODA0OTcxNjE1ODgwNzE3/jimmy-durante-9282022-1-402.jpg")
u9 = User.create!(name: "Edith Eggman", photo: "https://www.nrel.gov/about/assets/images/leadership_kurtz_32182_@2x.jpg")
u10 = User.create!(name: "Amanda Saurus", photo: "http://findadoc.oumedicine.com/assets/images/doctor-images/DorrisJanislynnPA-PedsPulm.jpg")

g1 = Gift.create!(receiver_id: u1.id, giver_id: u10.id, present:"socks", present_img:"https://www.smartturnout.com/media/catalog/product/cache/2/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/9/1/912lancer_2.jpg", shop_link: "https://www.amazon.co.uk/dp/B00SZT5BGG/ref=asc_df_B00SZT5BGG47918838/?tag=googshopuk-21&creative=22110&creativeASIN=B00SZT5BGG&linkCode=df0&hvadid=214081594724&hvpos=1o1&hvnetw=g&hvrand=7590939846554675754&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9045886&hvtargid=pla-348424698200", price: 8.99)
g2 = Gift.create!(receiver_id: u2.id, giver_id: u9.id, present:"cheeseboard", present_img:"https://media.gettingpersonal.co.uk/289806/images/products/79/23979/rwf/personalised-wooden-cheeseboard-set---cheese-lovers_a.jpg?width=700", shop_link: "https://www.gettingpersonal.co.uk/gifts/personalised-wooden-cheeseboard-set-cheese-lovers.htm?utm_source=google-shopping&utm_content=stWQLz1G_dc|pcrid|99174267142|pkw||pmt|&gclid=CjwKCAiAo9_QBRACEiwASknDwWbeSC_EMNEFmaofO9PNecXywHgTRJ_ntzzw6KnS_C2P7kra9GvK_xoCu7YQAvD_BwE", price: 19.99)
g3 = Gift.create!(receiver_id: u3.id, giver_id: u8.id, present:"cards", present_img:"https://photo.jessops.com/wp-content/uploads/2015/09/dflt_detpop_gft_games_poker_cards_01.jpg", shop_link: "https://photo.jessops.com/gifts/toys-games-pets/playing-cards/?quantity=55&cref=ref_shop_goo_x_30607_x_9731&gclid=CjwKCAiAo9_QBRACEiwASknDwUuip-xcy_4-AC_vC1bmHjmkjd5B3PuUo_8S0hQcNmMhmwhfy33_phoCgf8QAvD_BwE", price: 8)
g4 = Gift.create!(receiver_id: u4.id, giver_id: u7.id, present:"pringles", present_img:"https://img.tesco.com/Groceries/pi/722/5053990138722/IDShot_540x540.jpg", shop_link: "https://www.tesco.com/groceries/en-GB/products/296734865?sc_cmp=ppc*GHS+-+Grocery+-+New*PX+%7C+Shopping+GSC+%7C+Top+Offers*PRODUCT+GROUP296734865*&gclid=CjwKCAiAo9_QBRACEiwASknDwV7lTyq1AzgAlNnz7V9J0_aiUNoTf-BjhFlAyB2av84HrGG5BeUbLRoCoNEQAvD_BwE&gclsrc=aw.ds", price: 1.12)
g5 = Gift.create!(receiver_id: u5.id, giver_id: u6.id, present:"gloves", present_img:"s", shop_link: "", price: 8)
g6 = Gift.create!(receiver_id: u6.id, giver_id: u5.id, present:"football", present_img:"s", shop_link: "s", price: 8)
g7 = Gift.create!(receiver_id: u7.id, giver_id: u4.id, present:"fountain pen", present_img:"s", shop_link: "s", price: 8)
g8 = Gift.create!(receiver_id: u8.id, giver_id: u3.id, present:"salad tongs", present_img:"s", shop_link: "s", price: 8)
g9 = Gift.create!(receiver_id: u9.id, giver_id: u2.id, present:"garden hoe", present_img:"s", shop_link: "s", price: 8)
g10 = Gift.create!(receiver_id: u10.id, giver_id: u1.id, present:"flip flops", present_img:"s", shop_link: "s", price: 8)

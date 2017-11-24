class CreateGifts < ActiveRecord::Migration[5.1]
  def change
    create_table :gifts do |t|
      t.bigint :receiver_id
      t.bigint :giver_id
      t.string :present
      t.string :present_img
      t.string :shop_link
      t.float :price

      t.timestamps
    end
  end
end

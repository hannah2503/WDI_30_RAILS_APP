require 'test_helper'

class GiftsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @gift = gifts(:one)
  end

  test "should get index" do
    get gifts_url, as: :json
    assert_response :success
  end

  test "should create gift" do
    assert_difference('Gift.count') do
      post gifts_url, params: { gift: { giver_id: @gift.giver_id, present: @gift.present, present_img: @gift.present_img, price: @gift.price, receiver_id: @gift.receiver_id, shop_link: @gift.shop_link } }, as: :json
    end

    assert_response 201
  end

  test "should show gift" do
    get gift_url(@gift), as: :json
    assert_response :success
  end

  test "should update gift" do
    patch gift_url(@gift), params: { gift: { giver_id: @gift.giver_id, present: @gift.present, present_img: @gift.present_img, price: @gift.price, receiver_id: @gift.receiver_id, shop_link: @gift.shop_link } }, as: :json
    assert_response 200
  end

  test "should destroy gift" do
    assert_difference('Gift.count', -1) do
      delete gift_url(@gift), as: :json
    end

    assert_response 204
  end
end

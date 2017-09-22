class UsersController < ApplicationController

  # def index
  #   q = params[:q]

  #   if q.blank?
  #     render status: 400, json: { error: 'Expected paramater `q`' }
  #   else
  #     render(
  #       status: 200,
  #       json: @users.to_json
  #     )
  #   end
  # end

  def index
    @users = User.all
    render json: @users
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

end

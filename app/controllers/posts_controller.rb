class PostsController < ApplicationController
  def index
    render json: Post.all
    # render json: format_posts
  end

  def show
    render json: Post.find(params[:id])
  end

  def create
    @post = Post.create(post_params)
    if @post.save
      render json: @post
    else
      render json: { error: 'post not created, check params' }
    end
  end

  private

    def post_params
      params.require(:post).permit(:title, :content)
    end

    # def format_posts
    #   results = []
    #   Post.all.each do |post|
    #     user = User.find(post.user_id)
    #     results.push({
    #       author: user.name,
    #       author_id: post.user_id,
    #       title: post.title,
    #       content: post.content,
    #       id: post.id
    #     })
    #   end
    #   return results
    # end

end

class PostsController < ApplicationController
  def index
    render json: Post.all
    # render json: format_posts
  end

  def show
    render json: Post.find(params[:id])
  end

  private

  def format_posts
    results = []
    Post.all.each do |post|
      user = User.find(post.user_id)
      results.push({
        author: user.name,
        author_id: post.user_id,
        title: post.title,
        content: post.content,
        id: post.id
      })
    end
    return results
  end

end

class PostsController < ApplicationController
  def index
    # @posts = Post.all
    # render json: @posts
    render json: format_posts
  end

  def show
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

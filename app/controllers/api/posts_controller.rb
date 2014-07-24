module Api
  class PostsController < ApiController

    def create
      @post = Posts.new(post_params)

      if @post.save
        render json: @post
      else
        render json: @post.errors.full_messages, status: :unprocessable_entity
      end
    end

    def update
      @post = Post.find(params[:id])
      if @post.update_attributes(post_params)
        render json: @post
      else
        render json: @post.errors.full_messages, status: :unprocessable_entity
      end
    end

    private

    def post_params
      params.require(:post).permit(:title, :body, :user_id)
    end
  end
end

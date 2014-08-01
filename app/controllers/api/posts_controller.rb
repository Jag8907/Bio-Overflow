module Api
  class PostsController < ApiController

    def create
      @post = Post.new(post_params)
      if current_user
        @post.user_id = current_user.id
        @post.author = current_user.username
      else
        @post.user_id = 1
        @post.author = "Anonymous"
      end
      
      if @post.save
        render json: @post
      else
        render json: @post.errors.full_messages, status: :unprocessable_entity
      end 
    end
    
    def index
      @posts = Post.all
      render json: @posts
    end
    
    def show
      @post = Post.find(params[:id])
      render json: @post, include: [:comments, :answers]
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
      params.require(:post).permit(:title, :body, :user_id, :author)
    end
  end
end

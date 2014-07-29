module Api
  class CommentsController < ApiController

    def create
      @comment = Comment.new(comment_params)
      @comment.commenter_id = current_user.id

      if @comment.save
        render json: @comment
      else
        render json: @comment.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @comment = Comment.find(params[:id])
      @comment.destroy
      render json: {}
    end
    
    def show
      @comment = Comment.find(params[:id])
      render json: @comment, include: [:comments]
    end

    def update
      @comment = Comment.find(params[:id])

      if @comment.update_attributes(comment_params)
        render json: @comment
      else
        render json: @comment.errors.full_messages, status: :unprocessable_entity
      end
    end

    private

    def comment_params
      params.require(:comment).permit(:body, :commentable)
    end
  end
end

module Api
  class AnswersController < ApiController

    def create
      @answer = Answer.new(answer_params)
      if current_user
        @answer.user_id = current_user.id
        @answer.username = current_user.username
      else
        @answer.user_id = nil
        @answer.username = 'Anonymous'
      end

      if @answer.save
        render json: @answer
      else
        render json: @answer.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @answer = Answer.find(params[:id])
      @answer.destroy
      render json: {}
    end
    
    def show
      @answer = Answer.find(params[:id])
      render json: @answer, include: [:comments]
    end

    def update
      @answer = Answer.find(params[:id])

      if @answer.update_attributes(answer_params)
        render json: @answer
      else
        render json: @answer.errors.full_messages, status: :unprocessable_entity
      end
    end

    private

    def answer_params
      params.require(:answer).permit(:body, :post_id)
    end
  end
end

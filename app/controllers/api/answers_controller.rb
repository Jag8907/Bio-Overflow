module Api
  class AnswersController < ApiController

    def create
      @answer = Answer.new(answer_params)
      @answer.user_id = current_user.id

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

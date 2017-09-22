class ApplicationController < ActionController::API
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

  # def fallback_index_html
  #   render :file => 'public/index.html'
  # end

  private

    def record_not_found
      render status: 400, json: { error: 'record does not exist' }
    end

end

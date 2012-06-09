class ApplicationController < ActionController::Base
  protect_from_forgery

  helper_method :authorize
  helper_method :admin?

  def authorize
    unless admin?
      redirect_to :root #'/admin/authentication?return_to=' + request.request_uri
    end
  end

  def admin?
    cookies['admin'] == 'true'
  end

end

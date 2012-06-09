#encoding: utf-8
class AuthenticationController < ApplicationController
  #layout nil#'admin'

  def index
  end

  def login
    if params[:password] && params[:password] == '111'
			cookies['admin'] = 'true'
	    redirect_to :root
	  else
	    render :action => 'index'
    end
  end

  def logout
    cookies['admin'] = ''
    redirect_to :root
  end
end

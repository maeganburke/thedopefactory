require 'net/http'

class LyricsController < ApplicationController
    wrap_parameters format: [:json]

  def search
    searchInfo = params[:query]
    uri = URI.parse("http://api.genius.com/search?q=#{searchInfo}&access_token=#{ENV["genius_access_token"]}")
    response = Net::HTTP.get_response(uri)
    render :json => response.body
  end

  # def get_access_token
  #
  # end

end

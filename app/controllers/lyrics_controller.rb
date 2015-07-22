require 'net/http'

class LyricsController < ApplicationController
    wrap_parameters format: [:json]

  def search
    searchInfo = params[:query]
    uri = URI.parse('http://api.genius.com/search?q=' + searchInfo)
    response = Net::HTTP.get_response(uri)
    render :json => response.body
  end

end

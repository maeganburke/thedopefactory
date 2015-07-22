class PhrasesController < ApplicationController

  def home
    @phrases = Phrases.all
    @images = Images.all
  end
  
end

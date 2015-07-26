class PhrasesController < ApplicationController

  def index
    @phrases = Phrase.all
  end

  def create
    @phrase = Phrase.new(phrase_params)
    if @phrase.save
      render json: @phrase, status: :created
    else
      render json: @phrase.errors, status: :unprocessable_entity
    end
  end

private

  def phrase_params
    params.require(:phrase).permit(:text)
  end

end

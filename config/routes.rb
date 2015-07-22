Rails.application.routes.draw do

  resources :phrases, only:[:index]

  get '/search/:query' => 'lyrics#search'

end

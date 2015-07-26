Rails.application.routes.draw do

  get '/' => 'sites#home'
  get '/hireme' => 'sites#forhire'

  resources :phrases, only:[:index, :create]

  get '/search' => 'lyrics#search'

  resources :blogs, only:[:index, :show]

end

Rails.application.routes.draw do

  get '/' => 'sites#home'
  get '/aboutmae' => 'sites#aboutmae'

  get '/sayye' => 'phrases#index'
  post '/sayye' => 'phrases#create'
  # resources :phrases, only:[:index, :create]

  get '/search' => 'lyrics#search'

  get '/flight5289' => 'blogs#index'

end

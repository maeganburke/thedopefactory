Rails.application.routes.draw do

  resources :phrases, only:[:index]

end

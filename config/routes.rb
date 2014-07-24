StackClone::Application.routes.draw do
  root to: 'static_pages#root'
  
  resources :users
  resource :session
  
  namespace :api, defaults: {format: :json} do
    resources :posts, only: [:create, :update, :destroy]
  end
  
  resources :posts, except: [:create, :update, :destroy]
end
Butterflies::Application.routes.draw do
  # resources :users, only: [:show]
  # resources :games, only: [:new, :index]
  
  get 'users/:username', to: 'users#show', as: 'user'
  
  get 'games/new', to: 'games#new', as: 'new_game'
  get 'games', to: 'games#index', as: 'games'
  
  root :to => 'games#new'
end

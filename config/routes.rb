Rails.application.routes.draw do
  devise_for :users
  root to: "home#index"
  match "*path", to: "home#index", via: :get
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, and :omniauthable, :recoverable :rememberable,
  devise :database_authenticatable, :registerable, :validatable, :trackable
end

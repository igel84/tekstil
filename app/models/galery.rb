class Galery < ActiveRecord::Base
	has_many :images, :dependent => :destroy
end

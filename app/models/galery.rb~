class Project < ActiveRecord::Base
	has_many :images, :dependent => :destroy
	has_many :house_prices, :dependent => :destroy

	def sizes
		s = []
		house_prices.each do |pr|
			s << pr.size
		end
		s
	end

end

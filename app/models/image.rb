class Image < ActiveRecord::Base
	belongs_to :galery

  has_attached_file :photo, :styles => {
  	:thumb=> ["180x120", :jpg], :small  => ["200>x200", :jpg], :normal => ["600x600>", :jpg]
  }

  def set_main
  	Image.where(:galery_id => galery_id).each do |image|
			image.main = false if image.id != self.id
			image.save
		end
		self.main = true
		self.save
  end

	def self.favorite(galery_id)
		return Image.where(:galery_id=>galery_id).where(:main=>true).first
	end

end

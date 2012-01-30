class GaleriesController < ApplicationController
	before_filter :authorize, :except => [:show, :index]

  def add_image
  	@galery = Galery.find(params[:galery_id])
  	if params[:photos]
      params[:photos].each do |p|
        image = Image.new(:photo=>p)
        image.name = params[:image_name]
        @galery.images << image
			end
			@galery.save
		end
  	redirect_to edit_galery_path(@galery)
  	#render :partial => 'imagelist'
  end

  def del_image
  	@galery = Galery.find(params[:proj_id])
  	Image.find(params[:image_id]).destroy
		render 'edit'
  end

  def main_image
  	@galery = Galery.find(params[:proj_id])
  	Image.find(params[:image_id]).set_main
  	render 'edit'
  end

  def index
    @galeries = Galery.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @projects }
    end
  end

  # GET /projects/1
  # GET /projects/1.json
  def show
    @galery = Galery.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
    end
  end

  # GET /projects/new
  # GET /projects/new.json
  def new
    @galery = Galery.new

    respond_to do |format|
      format.html # new.html.erb
    end
  end

  # GET /projects/1/edit
  def edit
    @galery = Galery.find(params[:id])
  end

  # POST /projects
  # POST /projects.json
  def create
    @galery = Galery.new(params[:galery])

    respond_to do |format|
      if @galery.save
        format.html { redirect_to edit_galery_path(@galery), notice: 'Project was successfully created.' }
      else
        format.html { render action: "new" }
      end
    end
  end

  # PUT /projects/1
  # PUT /projects/1.json
  def update
    @galery = Galery.find(params[:id])

    respond_to do |format|
      if @galery.update_attributes(params[:galery])
        format.html { redirect_to edit_galery_path(@galery), notice: 'Project was successfully updated.' }
        format.json { head :ok }
      else
        format.html { render action: "edit" }
        format.json { render json: @project.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /projects/1
  # DELETE /projects/1.json
  def destroy
    @galery = Galery.find(params[:id])
    @galery.destroy

    respond_to do |format|
      format.html { redirect_to galeries_url }
      format.json { head :ok }
    end
  end
end

class ContactsController < ApplicationController

  skip_before_action :verify_authenticity_token, only: [:create]

  def create
    ContactMailer.contact(contact_params).deliver!
    head :ok
  end

  private

  def contact_params
    params.permit(:email, :subject, :body, :phone, :first_name, :last_name)
  end
end

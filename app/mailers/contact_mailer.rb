class ContactMailer < ApplicationMailer

  def contact(contact_params)
    @entry = contact_params
    mail(to: 'rodolpholobo24@gmail.com', subject: @entry[:subject])
  end
end

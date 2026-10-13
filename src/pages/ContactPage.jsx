import { useSearchParams } from 'react-router-dom'
import PageHeader from '../components/common/PageHeader'
import SectionHeading from '../components/common/SectionHeading'
import ConsultationForm from '../components/contact/ConsultationForm'
import { brandDetails } from '../data/navigationData'

export default function ContactPage() {
  const [searchParams] = useSearchParams()

  const defaultSector = searchParams.get('sector') || 'residential'
  const defaultBill = searchParams.get('bill')
  const defaultCapacity = searchParams.get('capacity')
  const defaultSolution = searchParams.get('solution')

  let initialMonthlyBill = '7k-15k'
  if (defaultBill) {
    const billNum = Number(defaultBill)
    if (billNum < 7000) initialMonthlyBill = '3k-7k'
    else if (billNum <= 15000) initialMonthlyBill = '7k-15k'
    else if (billNum <= 30000) initialMonthlyBill = '15k-30k'
    else initialMonthlyBill = '30k+'
  }

  const defaultNotes = defaultCapacity
    ? `Calculated estimate: ~${defaultCapacity} kWp system capacity.`
    : defaultSolution
    ? `Inquiring about ${defaultSolution} solar package.`
    : ''

  const defaultValues = {
    propertyType: defaultSector,
    monthlyBill: initialMonthlyBill,
    notes: defaultNotes
  }

  const offices = [
    {
      city: 'Bengaluru (Headquarters)',
      address: 'Indiranagar 100ft Road, Stage 1, Bengaluru, Karnataka 560038',
      phone: '+91 80 4123 4567'
    },
    {
      city: 'Pune Hub',
      address: 'Prathamesh Horizon, Baner Road, Pune, Maharashtra 411045',
      phone: '+91 20 2567 8901'
    },
    {
      city: 'Mumbai Hub',
      address: 'Maker Maxity, Bandra Kurla Complex (BKC), Mumbai, Maharashtra 400051',
      phone: '+91 22 6123 4567'
    },
    {
      city: 'Hyderabad Branch',
      address: 'Road No. 36, Jubilee Hills, Hyderabad, Telangana 500033',
      phone: '+91 40 4012 3456'
    }
  ]

  return (
    <div className="flex flex-col w-full">
      <PageHeader
        badge="LET'S TALK SOLAR"
        title="Book Your Free Architectural"
        highlight="Solar Consultation."
        description="Our lead engineering team will review your DISCOM tariffs and terrace layout to calculate custom 3D shadow models and turnkey payback proposals."
      />

      <section className="w-full px-5 sm:px-8 py-16 sm:py-20 bg-[#F7F7F2]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <SectionHeading
              badge="DIRECT INQUIRY"
              title="Request Your Free Proposal & Site Visit."
              description="Fill out the form below. A licensed solar design engineer will reach out in under 2 hours."
            />

            <ConsultationForm defaultValues={defaultValues} />
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#edf6ef] flex flex-col gap-4">
              <h3 className="font-headline-sm text-xl text-[#002519] font-bold">
                Direct Contact & Support
              </h3>

              <div className="flex flex-col gap-3 text-sm">
                <a
                  href={`tel:${brandDetails.phone}`}
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#f3fbf5] text-[#002519] hover:bg-[#e2eae4] transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px] text-[#006d3e]">
                    call
                  </span>
                  <div>
                    <span className="font-label-ui block font-bold">Call Technical Desk</span>
                    <span className="text-xs text-[#737A75]">{brandDetails.phone}</span>
                  </div>
                </a>

                <a
                  href={`mailto:${brandDetails.email}`}
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#f3fbf5] text-[#002519] hover:bg-[#e2eae4] transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px] text-[#006d3e]">
                    mail
                  </span>
                  <div>
                    <span className="font-label-ui block font-bold">Email Inquiries</span>
                    <span className="text-xs text-[#737A75]">{brandDetails.email}</span>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#f3fbf5] text-[#002519]">
                  <span className="material-symbols-outlined text-[20px] text-[#006d3e]">
                    schedule
                  </span>
                  <div>
                    <span className="font-label-ui block font-bold">Operating Hours</span>
                    <span className="text-xs text-[#737A75]">Monday - Saturday: 9:00 AM - 7:00 PM IST</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-[#edf6ef] flex flex-col gap-4">
              <h3 className="font-headline-sm text-lg text-[#002519] font-bold">
                Metro Regional Presence
              </h3>

              <div className="flex flex-col gap-3">
                {offices.map((office, idx) => (
                  <div key={idx} className="flex flex-col pb-3 last:pb-0">
                    <span className="font-label-ui text-sm font-bold text-[#006d3e]">
                      {office.city}
                    </span>
                    <p className="font-body-sm text-xs text-[#737A75] mt-0.5">
                      {office.address}
                    </p>
                    <span className="font-label-caps text-[11px] text-[#202824] font-medium mt-1">
                      {office.phone}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

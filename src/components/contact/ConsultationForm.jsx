import { useState } from 'react'

export default function ConsultationForm({ defaultValues = {} }) {
  const [formData, setFormData] = useState({
    fullName: defaultValues.fullName || '',
    phone: defaultValues.phone || '',
    email: defaultValues.email || '',
    city: defaultValues.city || '',
    pincode: defaultValues.pincode || '',
    propertyType: defaultValues.propertyType || 'residential',
    monthlyBill: defaultValues.monthlyBill || '7k-15k',
    notes: defaultValues.notes || ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 800)
  }

  function handleReset() {
    setIsSubmitted(false)
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      city: '',
      pincode: '',
      propertyType: 'residential',
      monthlyBill: '7k-15k',
      notes: ''
    })
  }

  return (
    <div className="w-full max-w-2xl mx-auto rounded-2xl bg-white shadow-xl border border-[#E2E5DF] p-6 sm:p-8 flex flex-col gap-6">
      {isSubmitted ? (
        <div className="p-8 rounded-xl bg-[#87f6b0]/30 text-[#007241] flex flex-col items-center text-center gap-3">
          <span className="material-symbols-outlined text-[48px] text-[#006d3e]">
            check_circle
          </span>
          <h4 className="font-headline-sm text-2xl font-bold text-[#002519]">
            Consultation Booked Successfully
          </h4>
          <p className="font-body-sm text-sm text-[#006d3e] max-w-md">
            Thank you, {formData.fullName}! Our senior solar engineer has received your request and will contact you at +91 {formData.phone} within 2 hours to confirm your rooftop analysis schedule.
          </p>
          <button
            type="button"
            onClick={handleReset}
            className="mt-3 px-6 py-2.5 bg-[#006d3e] text-white rounded-lg font-label-ui text-sm font-semibold hover:bg-[#123c2d] transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="fullName"
              className="font-label-ui text-sm text-[#002519] font-semibold"
            >
              Full Name *
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              placeholder="e.g. Vikramaditya Rao"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full h-12 px-4 rounded-xl bg-[#edf6ef]/50 border border-[#E2E5DF] text-[#202824] font-body-md text-sm placeholder-[#737A75]/60 focus:outline-none focus:ring-2 focus:ring-[#006d3e]/40 shadow-sm"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="phone"
              className="font-label-ui text-sm text-[#002519] font-semibold"
            >
              Mobile Number (+91) *
            </label>
            <div className="flex gap-2">
              <div className="h-12 px-3.5 rounded-xl bg-[#e7f0e9] border border-[#E2E5DF] flex items-center justify-center font-label-ui text-sm text-[#002519] font-bold shrink-0">
                +91
              </div>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                pattern="[6-9][0-9]{9}"
                placeholder="98765 43210"
                value={formData.phone}
                onChange={handleChange}
                className="flex-1 h-12 px-4 rounded-xl bg-[#edf6ef]/50 border border-[#E2E5DF] text-[#202824] font-body-md text-sm placeholder-[#737A75]/60 focus:outline-none focus:ring-2 focus:ring-[#006d3e]/40 shadow-sm"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="email"
              className="font-label-ui text-sm text-[#002519] font-semibold"
            >
              Email Address *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="vikram@domain.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-12 px-4 rounded-xl bg-[#edf6ef]/50 border border-[#E2E5DF] text-[#202824] font-body-md text-sm placeholder-[#737A75]/60 focus:outline-none focus:ring-2 focus:ring-[#006d3e]/40 shadow-sm"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="city"
                className="font-label-ui text-sm text-[#002519] font-semibold"
              >
                City *
              </label>
              <input
                id="city"
                name="city"
                type="text"
                required
                placeholder="e.g. Bengaluru"
                value={formData.city}
                onChange={handleChange}
                className="w-full h-12 px-4 rounded-xl bg-[#edf6ef]/50 border border-[#E2E5DF] text-[#202824] font-body-md text-sm placeholder-[#737A75]/60 focus:outline-none focus:ring-2 focus:ring-[#006d3e]/40 shadow-sm"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="pincode"
                className="font-label-ui text-sm text-[#002519] font-semibold"
              >
                Pincode *
              </label>
              <input
                id="pincode"
                name="pincode"
                type="text"
                required
                pattern="[0-9]{6}"
                placeholder="560001"
                value={formData.pincode}
                onChange={handleChange}
                className="w-full h-12 px-4 rounded-xl bg-[#edf6ef]/50 border border-[#E2E5DF] text-[#202824] font-body-md text-sm placeholder-[#737A75]/60 focus:outline-none focus:ring-2 focus:ring-[#006d3e]/40 shadow-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="propertyType"
                className="font-label-ui text-sm text-[#002519] font-semibold"
              >
                Property Category
              </label>
              <select
                id="propertyType"
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                className="w-full h-12 px-4 rounded-xl bg-[#edf6ef]/50 border border-[#E2E5DF] text-[#202824] font-body-md text-sm focus:outline-none focus:ring-2 focus:ring-[#006d3e]/40 shadow-sm"
              >
                <option value="residential">Independent Villa / Bungalow</option>
                <option value="commercial">Commercial Building / Office</option>
                <option value="industrial">Industrial Shed / Factory</option>
                <option value="institution">Educational / Hospital Campus</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="monthlyBill"
                className="font-label-ui text-sm text-[#002519] font-semibold"
              >
                Approx. Monthly Bill (INR)
              </label>
              <select
                id="monthlyBill"
                name="monthlyBill"
                value={formData.monthlyBill}
                onChange={handleChange}
                className="w-full h-12 px-4 rounded-xl bg-[#edf6ef]/50 border border-[#E2E5DF] text-[#202824] font-body-md text-sm focus:outline-none focus:ring-2 focus:ring-[#006d3e]/40 shadow-sm"
              >
                <option value="3k-7k">₹3,000 to ₹7,000 / month</option>
                <option value="7k-15k">₹7,000 to ₹15,000 / month</option>
                <option value="15k-30k">₹15,000 to ₹30,000 / month</option>
                <option value="30k+">₹30,000+ / month (High slab)</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="notes"
              className="font-label-ui text-sm text-[#002519] font-semibold"
            >
              Notes / Terrace Details (Optional)
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={3}
              placeholder="Tell us about roof orientation, shade issues, or EV charger readiness..."
              value={formData.notes}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-[#edf6ef]/50 border border-[#E2E5DF] text-[#202824] font-body-md text-sm placeholder-[#737A75]/60 focus:outline-none focus:ring-2 focus:ring-[#006d3e]/40 shadow-sm resize-none"
            />
          </div>

          <div className="flex items-start gap-2 pt-1">
            <span className="material-symbols-outlined text-[18px] text-[#006d3e] shrink-0 mt-0.5">
              lock
            </span>
            <p className="font-body-sm text-xs text-[#737A75] leading-tight">
              We honor your privacy. No unsolicited promotional spam. Your contact details are strictly used for engineer scheduling. Expected response in under 2 hours.
            </p>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 rounded-xl bg-[#006d3e] text-white font-label-ui text-sm flex items-center justify-center gap-2 hover:bg-[#87f6b0] hover:text-[#007241] transition-all shadow-[0_4px_14px_rgba(54,169,107,0.35)] active:scale-95 font-semibold disabled:opacity-70"
          >
            {isSubmitting ? (
              <span>Verifying Address...</span>
            ) : (
              <>
                <span>Request a Free Consultation</span>
                <span className="material-symbols-outlined text-[20px]">
                  arrow_forward
                </span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  )
}

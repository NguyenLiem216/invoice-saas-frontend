export function InvoiceIllustration() {
  return (
    <div className="relative">
      <div className="bg-white rounded-xl p-8 shadow-2xl w-80 h-56 relative">
        <div className="text-primary font-bold text-2xl mb-6 font-sans">INVOICE</div>
        <div className="space-y-3">
          <div className="h-4 bg-primary rounded-md w-3/4"></div>
          <div className="h-3 bg-primary/60 rounded-md w-1/2"></div>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-6">
          <div className="h-8 bg-card rounded-md border border-border"></div>
          <div className="h-8 bg-card rounded-md border border-border"></div>
          <div className="h-8 bg-card rounded-md border border-border"></div>
          <div className="h-8 bg-card rounded-md border border-border"></div>
        </div>
        <div className="flex justify-between mt-6">
          <div className="h-3 bg-primary rounded-md w-1/3"></div>
          <div className="h-3 bg-accent rounded-md w-1/4"></div>
        </div>
      </div>

      {/* Dollar Sign */}
      <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 text-7xl font-bold text-white/90">$</div>

      {/* Chart Bars */}
      <div className="absolute -right-8 bottom-12 flex items-end space-x-2">
        <div className="w-4 h-10 bg-white/90 rounded-sm"></div>
        <div className="w-4 h-16 bg-white/90 rounded-sm"></div>
        <div className="w-4 h-8 bg-white/90 rounded-sm"></div>
        <div className="w-4 h-12 bg-white/90 rounded-sm"></div>
      </div>

      {/* Arrow */}
      <div className="absolute -right-6 -top-6 text-white/90">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M7 17l9.2-9.2M17 17V7M17 7H7"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  )
}

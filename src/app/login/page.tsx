import { LoginForm } from "../../components/login-form"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          {/* Left Panel - Brand Section */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-12 flex flex-col justify-center items-center text-white relative">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">Invoice SaaS</h1>
              <p className="text-blue-100 text-lg leading-relaxed">
                Quản lý hóa đơn & khách hàng dễ
                <br />
                dàng. Tất cả ở một nơi.
              </p>
            </div>

            {/* Invoice Illustration */}
            <div className="relative">
              <div className="bg-white rounded-lg p-6 shadow-lg w-64 h-48 relative">
                <div className="text-blue-600 font-bold text-xl mb-4">INVOICE</div>
                <div className="space-y-2">
                  <div className="h-3 bg-blue-600 rounded w-3/4"></div>
                  <div className="h-2 bg-blue-400 rounded w-1/2"></div>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <div className="h-6 bg-blue-100 rounded"></div>
                  <div className="h-6 bg-blue-100 rounded"></div>
                  <div className="h-6 bg-blue-100 rounded"></div>
                  <div className="h-6 bg-blue-100 rounded"></div>
                </div>
                <div className="flex justify-between mt-4">
                  <div className="h-2 bg-blue-600 rounded w-1/3"></div>
                  <div className="h-2 bg-blue-400 rounded w-1/4"></div>
                </div>
              </div>

              {/* Dollar Sign */}
              <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 text-6xl font-bold text-white opacity-80">
                $
              </div>

              {/* Chart Bars */}
              <div className="absolute -right-6 bottom-8 flex items-end space-x-1">
                <div className="w-3 h-8 bg-white opacity-80 rounded"></div>
                <div className="w-3 h-12 bg-white opacity-80 rounded"></div>
                <div className="w-3 h-6 bg-white opacity-80 rounded"></div>
                <div className="w-3 h-10 bg-white opacity-80 rounded"></div>
              </div>

              {/* Arrow */}
              <div className="absolute -right-4 -top-4 text-white opacity-80">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
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
          </div>

          {/* Right Panel - Login Form */}
          <div className="p-12 flex flex-col justify-center">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  )
}

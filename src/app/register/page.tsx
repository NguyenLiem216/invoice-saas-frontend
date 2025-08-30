import { RegisterForm } from "../../components/auth/register-form"
import { InvoiceIllustration } from "../../components/auth/invoice-illustration"
import { RouteGuard } from "../../components/auth/route-guard"

export default function RegisterPage() {
  return (
    <RouteGuard requireAuth={false}>
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="w-full max-w-6xl bg-card rounded-2xl shadow-2xl overflow-hidden border border-border">
          <div className="grid lg:grid-cols-2 min-h-[700px]">
            {/* Left Panel - Brand Section */}
            <div className="bg-gradient-to-br from-primary to-primary/90 p-12 flex flex-col justify-center items-center text-primary-foreground relative">
              <div className="text-center mb-12">
                <h1 className="text-5xl font-bold mb-6 font-sans">Invoice SaaS</h1>
                <p className="text-primary-foreground/90 text-xl leading-relaxed font-mono">
                  Bắt đầu quản lý hóa đơn
                  <br />
                  chuyên nghiệp ngay hôm nay.
                </p>
              </div>
              <InvoiceIllustration />
            </div>

            {/* Right Panel - Register Form */}
            <div className="p-12 flex flex-col justify-center bg-background">
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
    </RouteGuard>
  )
}

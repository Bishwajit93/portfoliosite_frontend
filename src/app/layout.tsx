export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div
          className="min-h-screen bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/workspace_background.png')" }}
        >
          <div className="bg-black/50 min-h-screen"> {/* Optional dark overlay */}
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

import '@/app/global.css'

export const metadata = {
    title: 'Laravel',
}
const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body className="antialiased" suppressHydrationWarning={true}>
                {children}
            </body>
        </html>
    )
}

export default RootLayout

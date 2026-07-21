export default function Page() {
    return (
        <main className="max-w-md mx-auto p-6 bg-white shadow-md rouded-md">
            <h1 className="text-2xl font-bold text-center mb-6">Contact Us</h1>
            <form className="space-y-4">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input id="email" typr="email" name="email" required className="border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
                </div>
                <div>
                    <label htmlFor="messsage" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea id="message" name="message" rows="4" required className="border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
                </div>
                <button className="text-white bg-blue-500 rounded-md p-3" type="submit">Send Message</button>
            </form>
        </main>
    );
}
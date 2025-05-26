
const NoChatSelected = () => {
    return (
        // creame un no chat selected page bonito, con icono de lucide react
        // y un texto que diga "No chat selected"
        <div className="flex flex-col items-center justify-center h-full">
            <div className="h-14 w-14 rounded-full bg-gray-500 flex items-center justify-center">
                <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"

                        className="h-6 w-6 text-primary"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 1.5a6.5 6.5 0 110 13A6.5 6.5 0 0110 3.5zM9.25 7a.75.75 0 00-1.5 0v4a.75.75 0 001.5 0V7zm1.25-2a1.25 1.25 0 100-2.5A1.25 1.25 0 0010.5 5z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mt-4">No chat selected</h1>
            <p className="text-gray-600 mt-2">Please select a chat to start messaging.</p>
        </div>
    )
}

export default NoChatSelected
import { Link } from "react-router"

const TestingPage = () => {
    return (
        <div className="flex flex-col gap-6">
            <span>TestingPage</span>
            <Link to={"/auth/login"} className="text-blue-500 hover:underline">
                Go to Login Page
            </Link>
        </div>

    )
}

export default TestingPage
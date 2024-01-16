import { HashLoader } from "react-spinners"

export const Loader = ({ isLoading }: { isLoading: boolean }) => {
    return (
        <>
            {isLoading && <div className="absolute bottom-10 right-10">
                <HashLoader color="#36d7b7" />
            </div>}
        </>
    )
}

const Input = ({ name , type , value , placeholder , onChenge }) => {
    return(
        <>
            <label htmlFor="last-name" className="block text-sm text-right font-medium text-gray-700 mb-2">
                شماره همراه
            </label>
            <input
                type={type}
                name={name}
                onChange={onChenge}
                value={value}
                placeholder={placeholder}
                className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
        </>
    )
}

export default Input;
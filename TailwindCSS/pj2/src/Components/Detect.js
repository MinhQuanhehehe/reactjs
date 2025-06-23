import React from 'react'
import Content from './Content'

const Detect = ({ data, loading, fetchError }) => {
    return (
        <div className='flex-grow w-full overflow-y-auto'>
            {loading ? (
                <div className="text-center mt-10">
                    <h1 className="text-2xl font-bold text-center">Loading...</h1>
                </div>
            ) : null}
            {fetchError ? (
                <div className="text-red-500 mt-10">
                    <h1 className="text-2xl font-bold text-center">Error: {fetchError}</h1>
                </div>
            ) : null}
            {!loading && !fetchError && data.length === 0 ? (
                <div className="text-center mt-10">
                    <h1 className="text-2xl font-bold text-center">No data available</h1>
                </div>
            ) : null}
            {!loading && !fetchError && data.length > 0 ? (
                <div className="text-center mt-10">
                    <h1 className="text-2xl font-bold text-center">Data Loaded Successfully</h1>
                </div>
            ) : null}
            <Content data={data} />
        </div>
    )
}

export default Detect
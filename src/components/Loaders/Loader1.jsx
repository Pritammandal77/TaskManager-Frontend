import React from 'react';

function Loader1() {
    return (
        <>
            <div className="flex-col gap-4 w-full flex items-center justify-center">
                <div
                    className="w-17 h-17 border-4 border-transparent text-blue-600 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full"
                >
                    <div
                        className="w-14 h-14 border-4 border-transparent text-green-700 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"
                    ></div>
                </div>
            </div>


        </>
    );
}

export default Loader1;

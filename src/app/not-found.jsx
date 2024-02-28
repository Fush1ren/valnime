"use client"

import { FileSearch } from "@phosphor-icons/react"
import Link from "next/link"

const NotFound = () => {
    return(
        <div className="flex justify-center items-center py-4">
            <div className="flex justify-center items-center gap-4 flex-col">
                <FileSearch size={32} className="text-white"/>
                <h3 className="text-white font-bold text-3xl">Not Found</h3>
                <Link href="/" className="text-white hover:text-indigo-400 underline">Kembali</Link>
            </div>
        </div>
    )
}

export default NotFound
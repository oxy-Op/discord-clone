import { getAuth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { NextApiRequest } from "next";


export const currentProfPages = async (req: NextApiRequest) => {
    const {userId} = getAuth(req)

    if (!userId){
        return null
    }

    const profile = await db.profile.findUnique({
        where: {
            user_id: userId,
        }
    })

    return profile
}
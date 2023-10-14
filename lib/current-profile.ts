import { auth } from "@clerk/nextjs";
import { db } from "@/lib/db";


export const currentProf = async () => {
    const {userId} = auth()

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
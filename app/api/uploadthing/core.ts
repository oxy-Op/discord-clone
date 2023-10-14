import { createUploadthing, type FileRouter } from "uploadthing/next";
import { auth } from "@clerk/nextjs"; 

const f = createUploadthing();
 
const handle = () => {
    const { userId } = auth()
    if (!userId) throw new Error("Unauthorized")
    return {user_id: userId}
}

export const ourFileRouter = {
  serverImage: f({ image : {maxFileSize: "4MB", maxFileCount: 1}}).
  middleware(() => handle()).onUploadComplete(() => {}),
  messageFile: f(["image", "pdf"]).middleware(() => handle()).onUploadComplete(() => {})
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;
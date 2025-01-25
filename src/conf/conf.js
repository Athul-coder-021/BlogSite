const conf = {
    appwriteUrl : String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId : String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}

export default conf

// this way of loading env is done kyuki kayi baar aisa hota hai ki environment var load hi na ho ab websie crash ho sakt hai uss wakt debug karna hard hoga
// so this method is used
// and morever when id are in numeric value it might not consider in string so for String should be written
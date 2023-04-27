import { SimpleCache, getCachedValue } from "@/lib/cache";
import { getUserData } from "@/lib/github/user";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const userDataCache: SimpleCache<any> = {
  updatedAt: 0,
};

export async function GET() {
  const userData = await getCachedValue(userDataCache, 20000, async () => {
    console.log("[info/github] user data - cache invalidated.");
    const user = await getUserData();
    return user;
  });

  return NextResponse.json(userData);
}

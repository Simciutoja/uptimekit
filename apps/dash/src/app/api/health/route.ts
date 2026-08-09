import { postgresClient, timeseries } from "@uptimekit/db";
import { NextResponse } from "next/server";
import { withEvlog } from "@/lib/evlog";
import { runReadinessChecks } from "@/lib/health";

async function handleGet() {
    const readiness = await runReadinessChecks({
        database: () => postgresClient`select 1`,
        timeseries: () => timeseries.ping(),
    });

    return NextResponse.json(readiness, {
        status: readiness.ok ? 200 : 503,
    });
}

export const GET = withEvlog(handleGet);

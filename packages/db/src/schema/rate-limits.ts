import { index, integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const rateLimitBucket = pgTable(
    "rate_limit_bucket",
    {
        key: text("key").primaryKey(),
        attempts: integer("attempts").default(1).notNull(),
        expiresAt: timestamp("expires_at").notNull(),
    },
    (table) => [index("rate_limit_bucket_expires_at_idx").on(table.expiresAt)],
);

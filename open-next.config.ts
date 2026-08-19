// open-next.config.ts for the Cloudflare Workers adapter.
// The site is fully static/SSG (only /api/contact is dynamic and needs no
// revalidation), so we use the static-assets cache instead of provisioning
// an R2 or KV binding just for ISR we don't use.
import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
});

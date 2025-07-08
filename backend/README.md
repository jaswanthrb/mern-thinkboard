## 🛡️ Rate Limiting with Redis (Upstash)

To protect the API from abuse and ensure fair usage, rate limiting was implemented using:

- **Redis** for fast, in-memory request tracking
- **Upstash** as a serverless Redis provider with low-latency global edge access
- **Custom middleware** in Express to limit API calls per IP/user

### 🔧 Key Features
- Limits repeated requests to sensitive routes (e.g., notes create/delete)
- Prevents spamming and DoS attacks
- Can be tuned per route (e.g., `X requests per 15 minutes`)

### 🛠️ Tools & Libraries
- `express-rate-limit`
- `@upstash/ratelimit` (for edge-compatible Redis rate limiting)
- `axios` or `fetch` for backend logging/monitoring

### 🔐 Environment Example
```env
UPSTASH_REDIS_REST_URL=your_upstash_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_token

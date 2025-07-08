import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {

    try{
        const {success} = await ratelimit.limit("my-limit-key"); // Use req.ip for rate limiting

        if (!success) {
            return res.status(429).json({message: "Too many requests, please try again later."});
        }
        next(); // Proceed to the next middleware or route handler

    }catch(error) {
        console.error("Error in rateLimiter middleware:", error);
        return res.status(500).json({message: "Internal Server Error"});
    }
}

export default rateLimiter;
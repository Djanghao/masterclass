# scala code with comments

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/logger-rate-limiter/solutions/4346729/](https://leetcode.com/problems/logger-rate-limiter/solutions/4346729/)

---

# Code
```
// Class definition: Logger without any constructor parameters.
class Logger() {

    // Private variable 'cache' to store messages with their next allowable print time as a Map.
    private var cache: Map[String, Int] = Map.empty

    // Method to determine if a message should be printed based on its timestamp.
    def shouldPrintMessage(timestamp: Int, message: String): Boolean = {
        // Retrieve the message from the cache.
        cache.get(message) match {
            // Case when the message exists in the cache and the current timestamp is less than 
            // the allowed next print time (upperBound).
            case Some(upperBound) if timestamp < upperBound => 
                false // Do not print the message.
            // Default case: either the message is not in the cache or the timestamp is past the upperBound.
            case _ =>
                // Update the cache by setting the next allowable print time for this message to current timestamp + 10 seconds.
                cache = cache + (message -> (timestamp + 10))
                true // Print the message.
        }
    }
}
/**
 * Usage of the Logger class:
 * A Logger object is instantiated: var obj = new Logger()
 * The shouldPrintMessage method is called with a timestamp and a message: 
 * var param_1 = obj.shouldPrintMessage(timestamp, message)
 */

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */
```
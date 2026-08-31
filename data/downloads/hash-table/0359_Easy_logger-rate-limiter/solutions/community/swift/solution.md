# Swift 🦋🦋 easy solution

**Author:** anitaagrawal298
**Votes:** 2
**Link:** [https://leetcode.com/problems/logger-rate-limiter/solutions/3064533/](https://leetcode.com/problems/logger-rate-limiter/solutions/3064533/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Hashmap looks good candidate to solve this problem in the easiest way.
# Approach
<!-- Describe your approach to solving the problem. -->
1. Store every new message or time stamp greater than previous timestamp + 10 in the hashmap.
2. Return false otherwise
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(1)$$ --> There is no loop involved here
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$ --> We are storing data in hashmap
# Code
```
class Logger {

    var hashMap: [String: Int]
    init() {
        hashMap = [:]
    }
    
    func shouldPrintMessage(_ timestamp: Int, _ message: String) -> Bool {
        if let time = hashMap[message], (time + 10) > timestamp {
            return false
        }
        hashMap[message] = timestamp 
        return true
    }
}

/**
 * Your Logger object will be instantiated and called as such:
 * let obj = Logger()
 * let ret_1: Bool = obj.shouldPrintMessage(timestamp, message)
 */
```
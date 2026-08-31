# C#

**Author:** vaishaligm
**Votes:** 0
**Link:** [https://leetcode.com/problems/logger-rate-limiter/solutions/5835756/](https://leetcode.com/problems/logger-rate-limiter/solutions/5835756/)

---

# Complexity
- Time complexity:O(1)

- Space complexity:O(n)

# Code
```csharp []
public class Logger {
    Dictionary<string, int> map = null;

    public Logger() {
        map = new Dictionary<string, int>();
    }
    
    public bool ShouldPrintMessage(int timestamp, string message) {
        if(!map.ContainsKey(message)){
            map.Add(message, timestamp);
            return true;
        }
        if(map[message]+10 <= timestamp){
             map[message] = timestamp;
            return true;
        }
        return false;
    }
}

/**
 * Your Logger object will be instantiated and called as such:
 * Logger obj = new Logger();
 * bool param_1 = obj.ShouldPrintMessage(timestamp,message);
 */
```
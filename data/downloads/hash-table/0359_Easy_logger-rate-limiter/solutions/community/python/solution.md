# Short C++/Java/Python, bit different

**Author:** StefanPochmann
**Votes:** 184
**Link:** [https://leetcode.com/problems/logger-rate-limiter/solutions/83273/](https://leetcode.com/problems/logger-rate-limiter/solutions/83273/)

---

Instead of logging print times, I store when it's ok for a message to be printed again. Should be slightly faster, because I don't always have to add or subtract (e.g., `timestamp < log[message] + 10`) but only do in the `true` case. Also, it leads to a shorter/simpler longest line of code. Finally, C++ has 0 as default, so I can just use `ok[message]`.

---

**C++**

    class Logger {
    public:
    
        map<string, int> ok;

        bool shouldPrintMessage(int timestamp, string message) {
            if (timestamp < ok[message])
                return false;
            ok[message] = timestamp + 10;
            return true;
        }
    };

---

**Python**

    class Logger(object):
    
        def __init__(self):
            self.ok = {}
    
        def shouldPrintMessage(self, timestamp, message):
            if timestamp < self.ok.get(message, 0):
                return False
            self.ok[message] = timestamp + 10
            return True

---

**Java**

    public class Logger {
    
        private Map<String, Integer> ok = new HashMap<>();
    
        public boolean shouldPrintMessage(int timestamp, String message) {
            if (timestamp < ok.getOrDefault(message, 0))
                return false;
            ok.put(message, timestamp + 10);
            return true;
        }
    }
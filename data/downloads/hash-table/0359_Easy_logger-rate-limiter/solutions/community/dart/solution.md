# Logger Rate Limiting in Dart using Map

**Author:** gerfalcon
**Votes:** 0
**Link:** [https://leetcode.com/problems/logger-rate-limiter/solutions/4889593/](https://leetcode.com/problems/logger-rate-limiter/solutions/4889593/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We need to compare the upcoming messages with their timestamp with the previously logged messages and decide whether we should print it or not.

# Approach
<!-- Describe your approach to solving the problem. -->
Firstly I started with a `List<Messages>` to store the messages, but I recognized that iterating in the list would slow down the solutions, that's why changed the `List<Messages>` to` Map<String, Int>`.

After that we just needed to compare the upcoming new message with the previously logged ones.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
In most common cases, this would likely be O(1) due to map lookups. However, if the any function in Dart iterates over all elements, it could change the complexity.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space used grows linearly with the number of unique messages stored (uniqueMessages). 

We can consider a cleanup mechanism if the logger runs over a long period.
# Code
```
typedef Timestamp =  int;
typedef Message =  String; 

class Logger {
 Map<Message, Timestamp> uniqueMessages;

  Logger() : uniqueMessages = {};
  bool shouldPrintMessage(int currentTimestamp, String currentMessage) {
     // If message is already logged
     if(uniqueMessages.keys.any((savedMessage) =>  savedMessage == currentMessage)) {
        // Check the lastTimestamp
        final lastTimestamp = uniqueMessages[currentMessage]!;

        // The last message was logged more then 10 second
        if(lastTimestamp + 10 <= currentTimestamp) {
            uniqueMessages.update(currentMessage,(value) => currentTimestamp); 
            return true;
        } else {
            return false;
        }
     } else {
        // If message never logged before
        uniqueMessages.addAll({currentMessage: currentTimestamp});
        return true;
     }
  }
}

/**
 * Your Logger object will be instantiated and called as such:
 * Logger obj = Logger();
 * bool param1 = obj.shouldPrintMessage(timestamp,message);
 */
```
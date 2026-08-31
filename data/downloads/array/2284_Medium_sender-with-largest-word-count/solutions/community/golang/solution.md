# Easy with map

**Author:** tuanbieber
**Votes:** 1
**Link:** [https://leetcode.com/problems/sender-with-largest-word-count/solutions/2209262/](https://leetcode.com/problems/sender-with-largest-word-count/solutions/2209262/)

---

```
func largestWordCount(messages []string, senders []string) string {
    m := make(map[string]int)
    
    for i := 0; i < len(senders); i++ {
        m[senders[i]] += len(strings.Split(messages[i], " "))
    }

    maxSender := senders[0]
    maxMessage := m[maxSender]
    
    for key, value := range m {
        if value > maxMessage || (value == maxMessage && key > maxSender) {
            maxSender = key
            maxMessage = value
        }
    }
    
    return maxSender
}
```
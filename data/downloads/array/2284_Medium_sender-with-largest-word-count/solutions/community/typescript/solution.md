# Hash map to find result

**Author:** ekondrashkov
**Votes:** 0
**Link:** [https://leetcode.com/problems/sender-with-largest-word-count/solutions/6091546/](https://leetcode.com/problems/sender-with-largest-word-count/solutions/6091546/)

---

# Approach
1. Create hash map for names with words count
2. Loop through the map and compare values to find result 

# Complexity
- Time complexity:
O(N + Log(N))

# Code
```typescript []
function largestWordCount(messages: string[], senders: string[]): string {
    const messagesMap = new Map<string, number>();

    for(let i = 0; i < senders.length; i++) {
        let words = messagesMap.get(senders[i]) ?? 0;
        words += messages[i].split(" ").length;
        messagesMap.set(senders[i], words);
    }

    let result = "";
    let maxCount = 0;
    for(const [name, count] of messagesMap) {
        if(count > maxCount) {
            maxCount = count;
            result = name;
            
        } else if(count === maxCount && name > result) {
            result = name;
        }
    }

    return result;
};
```
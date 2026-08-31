# 🔥BEATS 💯 % 🎯 | SUPER EASY AND SIMPLE🔥|

**Author:** CodeWithSparsh
**Votes:** 0
**Link:** [https://leetcode.com/problems/report-spam-message/solutions/5818890/](https://leetcode.com/problems/report-spam-message/solutions/5818890/)

---

![image.png](./images/0.png)

---

# Intuition
The problem is to check whether a message contains at least two banned words from a given list. If it does, the message is flagged as spam. We can store the banned words in a set, which allows for efficient lookup, and then iterate through the message to check if it contains any banned words.

# Approach
1. Convert the list of banned words into a **set** to ensure efficient lookup, as checking for membership in a set is generally faster than in a list.
2. Iterate through each word in the message:
   - If the word is found in the set of banned words, increment the count.
   - If the count reaches 2 or more, return `true`, indicating the message is spam.
3. If fewer than two banned words are found after checking the entire message, return `false`, indicating the message is not spam.

# Complexity
- **Time complexity**:  
  The time complexity is **O(m + n)**, where \\(m\\) is the number of words in the message, and \\(n\\) is the number of banned words.  
  - Inserting banned words into a set takes **O(n)**.
  - Checking each word in the message for membership in the set takes **O(1)** on average, so processing the entire message takes **O(m)**.

- **Space complexity**:  
  The space complexity is **O(n)** due to the storage of the banned words in a set.

---

# Code Implementations


```dart []
class Solution {
  bool reportSpam(List<String> message, List<String> bannedWords) {
    Set<String> bannedSet = Set.from(bannedWords);
    int count = 0;

    for (String word in message) {
      if (bannedSet.contains(word)) {
        count += 1;
      }
      if (count >= 2) {
        return true;
      }
    }
    return false;
  }
}
```


```java []
import java.util.*;

class Solution {
    public boolean reportSpam(List<String> message, List<String> bannedWords) {
        Set<String> bannedSet = new HashSet<>(bannedWords);
        int count = 0;

        for (String word : message) {
            if (bannedSet.contains(word)) {
                count++;
            }
            if (count >= 2) {
                return true;
            }
        }
        return false;
    }
}
```


```javascript []
function reportSpam(message, bannedWords) {
    const bannedSet = new Set(bannedWords);
    let count = 0;

    for (const word of message) {
        if (bannedSet.has(word)) {
            count++;
        }
        if (count >= 2) {
            return true;
        }
    }
    return false;
}
```


```python []
class Solution:
    def reportSpam(self, message: list[str], bannedWords: list[str]) -> bool:
        banned_set = set(bannedWords)
        count = 0

        for word in message:
            if word in banned_set:
                count += 1
            if count >= 2:
                return True
        return False
```


```cpp []
#include <vector>
#include <unordered_set>
#include <string>

class Solution {
public:
    bool reportSpam(const std::vector<std::string>& message, const std::vector<std::string>& bannedWords) {
        std::unordered_set<std::string> bannedSet(bannedWords.begin(), bannedWords.end());
        int count = 0;

        for (const std::string& word : message) {
            if (bannedSet.find(word) != bannedSet.end()) {
                count++;
            }
            if (count >= 2) {
                return true;
            }
        }
        return false;
    }
};
```


```go []
func reportSpam(message []string, bannedWords []string) bool {
    bannedSet := make(map[string]struct{})
    for _, word := range bannedWords {
        bannedSet[word] = struct{}{}
    }

    count := 0
    for _, word := range message {
        if _, found := bannedSet[word]; found {
            count++
        }
        if count >= 2 {
            return true
        }
    }
    return false
}
```


```typescript []
function reportSpam(message: string[], bannedWords: string[]): boolean {
    const bannedSet = new Set(bannedWords);
    let count = 0;

    for (const word of message) {
        if (bannedSet.has(word)) {
            count++;
        }
        if (count >= 2) {
            return true;
        }
    }
    return false;
}
```

---
![image.png](./images/1.png) {:style='width:250px'}

These implementations efficiently check for spam by iterating through the message and using a set for quick lookup of banned words. The solution works across various programming languages with consistent logic.
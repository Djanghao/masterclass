# Using HashSet in Java

**Author:** deleted_user
**Votes:** 7
**Link:** [https://leetcode.com/problems/report-spam-message/solutions/5818250/](https://leetcode.com/problems/report-spam-message/solutions/5818250/)

---

# Approach
1. Create a HashSet for the banned words.
2. Loop through the message and count how many banned words are found.
3. Return true if two or more banned words are detected; otherwise, return false.

# Complexity
- Time complexity: $$O(m + b)$$ (where $$m$$ is the length of the message and $$b$$ is the number of banned words)
- Space complexity: $$O(b)$$ (for storing banned words in the HashSet)

# Code
```java
class Solution {
    public boolean reportSpam(String[] message, String[] bannedWords) {
        HashSet<String> bannedSet = new HashSet<>();
        int count = 0;
        
        for (String word : bannedWords) {
            bannedSet.add(word);
        }
        
        for (String word : message) {
            if (bannedSet.contains(word)) {
                count++;
                if (count >= 2) {
                    return true;
                }
            }
        }
        
        return false;
    }
}
```
# Upvote if you found this helpful! \uD83D\uDE0A
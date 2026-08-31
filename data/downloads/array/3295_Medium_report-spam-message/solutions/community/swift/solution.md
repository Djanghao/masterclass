# Report a Spam [Swift Solution]

**Author:** simran_rout_iOS
**Votes:** 0
**Link:** [https://leetcode.com/problems/report-spam-message/solutions/5819326/](https://leetcode.com/problems/report-spam-message/solutions/5819326/)

---

# Intuition
Make the bannedWords as set so that you can get unique values.
Then loop through the messages and then check if the `set of bannedWords` contains the word or not.

Once the counter is 2 return true
else return false after the loop ends.

# Approach


# Complexity
- Time complexity:
O(n2)

- Space complexity:
O(1)

# Code
```swift []
class Solution {
    func reportSpam(_ message: [String], _ bannedWords: [String]) -> Bool {
    var spamCount = 0
    var bannedWord = Set(bannedWords)
    for words in message {
        if bannedWord.contains(words) {
            spamCount += 1
        }
        
        if spamCount == 2  {
            return true
        }
    }
    return false
    }
}
```
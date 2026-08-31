# Swift DP

**Author:** shubham_kamdi
**Votes:** 3
**Link:** [https://leetcode.com/problems/longest-string-chain/solutions/1794947/](https://leetcode.com/problems/longest-string-chain/solutions/1794947/)

---

```
class Solution {
    func longestStrChain(_ words: [String]) -> Int {
        var dp: Dictionary<String, Int> = [:]
        var words = words.sorted(by: {$0.count < $1.count})
        var longest = 1
        for word in words {
            var presentLength = 1
            for i in 0 ..< word.count {
                var newStr = Array(word)
                newStr.remove(at: i)
                let prevL = dp[String(newStr), default: 0]
                presentLength = max(prevL + 1,presentLength)
            }  
            dp[word] = presentLength
            longest = longest < presentLength ? presentLength : longest
        }
        return longest 
    }
}
```
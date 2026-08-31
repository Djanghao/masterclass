# Simple solution

**Author:** venkatasaipulipati_123
**Votes:** 1
**Link:** [https://leetcode.com/problems/uncommon-words-from-two-sentences/solutions/5798035/](https://leetcode.com/problems/uncommon-words-from-two-sentences/solutions/5798035/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```swift []
class Solution {
    func uncommonFromSentences(_ s1: String, _ s2: String) -> [String] {
        var arr1 = s1.split(separator:" ")
        let arr2 = s2.split(separator:" ")
        arr1 += arr2
        var d:[String:Int] = [:]
        for word in arr1{
            d[String(word)] = (d[String(word)] ?? 0) + 1
        }
        var ans:[String] = []
        for (key,value) in d{
            if(value == 1){
                ans.append(key)
            }
        }
        return ans
    }
}
```
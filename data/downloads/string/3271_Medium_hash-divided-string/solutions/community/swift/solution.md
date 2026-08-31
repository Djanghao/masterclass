# Swift simple solution

**Author:** venkatasaipulipati_123
**Votes:** 0
**Link:** [https://leetcode.com/problems/hash-divided-string/solutions/5759768/](https://leetcode.com/problems/hash-divided-string/solutions/5759768/)

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
    let alphabet = Array("abcdefghijklmnopqrstuvwxyz")
    func stringHash(_ s: String, _ k: Int) -> String {
        var ans = ""
        var n = 0
        let strArr = Array(s)
        
        while(n < s.count){
            let subStr = Array(strArr[n..<(n+k)])
            n+=k
            let c = getSubStrCount(subStr)
            let rem = c%26
            ans += String(alphabet[rem])
        }
        return ans
    }
    func getSubStrCount(_ str:[Character])->Int{
        var count = 0
        for char in str{
            count += alphabet.firstIndex(of:char)!
        }
        return count
    }
}
```
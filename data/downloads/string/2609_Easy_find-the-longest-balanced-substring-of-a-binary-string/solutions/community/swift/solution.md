# ✅ Swift: Easy to Understand and Simple Solution

**Author:** sohagkumarbiswas
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-longest-balanced-substring-of-a-binary-string/solutions/3375689/](https://leetcode.com/problems/find-the-longest-balanced-substring-of-a-binary-string/solutions/3375689/)

---



# Code
```
class Solution {
    func findTheLongestBalancedSubstring(_ s: String) -> Int {
        var res = ""
        
        for i in 0..<s.count/2{
            res.insert("0", at: res.startIndex)
            res.insert("1", at: res.endIndex)
            
            if !s.contains(res){
                return res.count - 2
            }
        }
        
        return res.count
    }
}
```
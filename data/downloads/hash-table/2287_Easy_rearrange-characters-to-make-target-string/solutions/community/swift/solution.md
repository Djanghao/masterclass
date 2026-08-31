# Dict, Dict, For, O(n)

**Author:** Victor-SMK
**Votes:** 0
**Link:** [https://leetcode.com/problems/rearrange-characters-to-make-target-string/solutions/5162083/](https://leetcode.com/problems/rearrange-characters-to-make-target-string/solutions/5162083/)

---



# Code
```
class Solution {
    func rearrangeCharacters(_ s: String, _ target: String) -> Int {
        var ans = s.count

        var dict_s : [Character : Int] = [:]
        var dict_t : [Character : Int] = [:]
        
        for c in s{
            dict_s[c] = (dict_s[c] ?? 0) + 1
        }
        
        for c in target{
            dict_t[c] = (dict_t[c] ?? 0) + 1
        }
        
        for (c, count) in dict_t{
            ans = min(ans, Int((dict_s[c] ?? 0) / count))
        }
       
        return ans
    }
}
```
# ✅ Swift: Easy to Understand and Simple Solution

**Author:** sohagkumarbiswas
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/solutions/3306149/](https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/solutions/3306149/)

---



# Code
```
class Solution {
    func vowelStrings(_ words: [String], _ left: Int, _ right: Int) -> Int {
        let vowels = "aeiou"
        var ans = 0
        
        for i in left...right{
            if vowels.contains(words[i].first!) && vowels.contains(words[i].last!){
                ans += 1
            }
        }
        
        return  ans
    }
}

```
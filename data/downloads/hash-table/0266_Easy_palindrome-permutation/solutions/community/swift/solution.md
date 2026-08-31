# ✅  Swift solution using Set

**Author:** lizamuraya
**Votes:** 1
**Link:** [https://leetcode.com/problems/palindrome-permutation/solutions/3572658/](https://leetcode.com/problems/palindrome-permutation/solutions/3572658/)

---

# Code
```
class Solution {
    func canPermutePalindrome(_ s: String) -> Bool {
    var unique: Set<Character> = []
    
    for char in s {
        if !unique.contains(char) {
            unique.insert(char)
        } else {
            unique.remove(char)
        }
    }
    return unique.count == 0 || unique.count == 1
    }
}
```
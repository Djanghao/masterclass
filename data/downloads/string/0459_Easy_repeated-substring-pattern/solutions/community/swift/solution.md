# Don't use String.count

**Author:** au93in
**Votes:** 2
**Link:** [https://leetcode.com/problems/repeated-substring-pattern/solutions/3209647/](https://leetcode.com/problems/repeated-substring-pattern/solutions/3209647/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Every String.count's time complexity is O(n).
So you should avoid using String.count in a for loop.
https://stackoverflow.com/questions/50568726/what-is-the-bigo-of-swifts-string-count

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func repeatedSubstringPattern(_ s: String) -> Bool {
        let charArray = Array(s)
        var substring = ""
        
        for sIndex in 0..<(charArray.count / 2) {   //s.count will cause time limit exceeded
            substring += String(charArray[sIndex])
            
            if charArray.count % (sIndex + 1) != 0 {    //s.count will cause time limit exceeded
                continue
            }

            let factor = charArray.count / (sIndex + 1) //s.count will cause time limit exceeded
            if s == String(repeating: substring, count: factor) {
                return true
            }
        }

        return false
    }
}
```
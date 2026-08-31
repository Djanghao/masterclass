# Kotlin simple O(n) solution

**Author:** hbworld
**Votes:** 1
**Link:** [https://leetcode.com/problems/long-pressed-name/solutions/3556560/](https://leetcode.com/problems/long-pressed-name/solutions/3556560/)

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
```
class Solution {
    fun isLongPressedName(name: String, typed: String): Boolean {

        var index = 0
        var lastChar : Char? = null
        for(ch in typed){
            if(index< name.length && ch == name[index]) {
                lastChar = ch
                index++
            }else if(ch == lastChar){
                continue
            }else{
                return false
            }
        }

        return index == name.length
        
    }
}
```
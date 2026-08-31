# Scala code

**Author:** abhi_84
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-sorted-vowel-strings/solutions/5209329/](https://leetcode.com/problems/count-sorted-vowel-strings/solutions/5209329/)

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
object Solution {
    def countVowelStrings(n: Int): Int = {
        var a=1
        var e=1
        var i=1
        var o=1
        var u=1

        for(j <- 1 until n){
            a=a+e+i+o+u
            e=e+i+o+u
            i=i+o+u
            o=o+u
        }

        a+e+i+o+u
    }
}
```
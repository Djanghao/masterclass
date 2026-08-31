# simple scala solution

**Author:** AASTHA011
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-prefixes-of-a-given-string/solutions/5439071/](https://leetcode.com/problems/count-prefixes-of-a-given-string/solutions/5439071/)

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
    def countPrefixes(words: Array[String], s: String): Int = {
        words.foldLeft(0)((x,y) => if(s.startsWith(y)){
        x+1
        }
        else{
        x
        })
    }
}
```
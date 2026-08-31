# Scala Solution

**Author:** pratap_scala
**Votes:** 0
**Link:** [https://leetcode.com/problems/di-string-match/solutions/3052357/](https://leetcode.com/problems/di-string-match/solutions/3052357/)

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
    def diStringMatch(s: String): Array[Int] = {
        (s+'I').foldLeft((Array.empty[Int],0,s.length)){
            case ((ar,s,b),v) => v match {
            case v1 if(v1 == 'I') => (ar :+ s, s+1, b)
            case v2 if(v2 == 'D') => (ar :+ b, s, b-1)
            }
        }._1
    }
}
```
# Easy Scala Solution using two Approaches .

**Author:** HARSHIDAS_21
**Votes:** 0
**Link:** [https://leetcode.com/problems/existence-of-a-substring-in-a-string-and-its-reverse/solutions/5276477/](https://leetcode.com/problems/existence-of-a-substring-in-a-string-and-its-reverse/solutions/5276477/)

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
    def isSubstringPresent(s: String): Boolean = {
        //APPROACH1 = USING FOR LOOP AND FINDING THE SUBSTRINGS OF LENGTH 2 TC   =   O(   n   ) 
        // val sSub = (for   (i<- 0 until s.length-1)   yield   s.substring(i,i+2)).toSet
        // val rev = s.reverse
        // val sReverse =   (for   (i<- 0 until rev.length-1)   yield   rev.substring(i,i+2)).toSet
        // (sSub intersect sReverse).nonEmpty

        //APPROACH2 = USING THE IN-BUILT FUNCTIONS . 
        s.sliding(2,1).toSet.intersect(s.reverse.sliding(2,1).toSet).nonEmpty   &&   s.size   >=   2
    }
}
```
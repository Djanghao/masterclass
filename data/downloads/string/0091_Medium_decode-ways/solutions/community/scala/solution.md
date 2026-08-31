# using dp

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/decode-ways/solutions/5815996/](https://leetcode.com/problems/decode-ways/solutions/5815996/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```scala []
object Solution {
  def numDecodings(s: String): Int = {
     countDecodings(0, s, Array.fill(s.length)(-1))
  }

  private def countDecodings(idx: Int, s: String, memo: Array[Int]): Int = {
    if (idx == s.length ) 1
    else if(s.charAt(idx)=='0')0
    else if(idx==s.length-1) 1
    else if (memo(idx) != -1) memo(idx)
    else {
     
      val oneCharCount =  countDecodings(idx + 1, s, memo) 
      val twoCharCount = if (Integer.parseInt(s.substring(idx, idx + 2)) <= 26 ) countDecodings(idx + 2, s, memo) else 0
      memo(idx) = oneCharCount + twoCharCount
    //   println(s"at idx $idx , memo is ${memo(idx)} , one char $oneCharCount , two char $twoCharCount")
      memo(idx)
    }
  }
}
```
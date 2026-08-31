# scala hard solution

**Author:** user8349be
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-digit-one/solutions/5836549/](https://leetcode.com/problems/number-of-digit-one/solutions/5836549/)

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
```scala []
object Solution {
    def countDigitOne(n: Int): Int = {
    var count = 0
    var factor = 1
    var num = n
    
    // Traverse through each digit position (units, tens, hundreds...)
    while (factor <= num) {
        val lower = num - (num / factor) * factor
        val current = (num / factor) % 10
        val higher = num / (factor * 10)
        
        // If the current digit is greater than 1, we add (higher + 1) * factor
        // If it's exactly 1, we add higher * factor + lower + 1
        // Otherwise, add higher * factor
        count += (higher * factor) + (
          if (current == 1) lower + 1
          else if (current > 1) factor
          else 0
        )
        
        factor *= 10
    }
    
    count
}

}
```
# Scala Code || Using combinations, map, maxOption

**Author:** abhi_84
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-i/solutions/5218676/](https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-i/solutions/5218676/)

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
    def maximumTripletValue(nums: Array[Int]): Long = {
        val count = nums.indices.combinations(3).map {
            case Seq(i, j, k) => (nums(i) - nums(j)) * nums(k).toLong
        }.maxOption.getOrElse(0L)

        if(count > 0) return count
        else return 0
    }
}
```
# freq_map -> check for each ( 0 case and n case)

**Author:** admiral_bulba
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k/solutions/5863536/](https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k/solutions/5863536/)

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
    def canArrange(arr: Array[Int], k: Int): Boolean = {
        val freq_map = arr.map(x => ((x % k) + k) % k) // (x % k) + k handles both pos/neg ints 
            .groupBy(identity)
            .view
            .mapValues(_.length)
            .toMap
        return freq_map.forall{ 
            case (0, freq) => freq % 2 == 0
            case (key, freq) => freq_map.contains(k - key) && freq == freq_map(k - key)
        }
    }
}
```
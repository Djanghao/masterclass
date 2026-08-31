# Kotlin | Using Streams and HashMap

**Author:** jeffreyntue
**Votes:** 0
**Link:** [https://leetcode.com/problems/mice-and-cheese/solutions/5414639/](https://leetcode.com/problems/mice-and-cheese/solutions/5414639/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To maximize the overall number of cheese, mice1 should take the cheeses with the largest positive difference to mice2.

# Approach
<!-- Describe your approach to solving the problem. -->
Use a stream to zip both arrays together then calculate the difference between the cheeses, while storing the index. Sort them by the value of the difference and then only k are needed. Map the indexes and store them in a hashset.

For every index in the hashset take the sum of reward1 else reward2.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n*log(n))$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

# Code
```
class Solution {
    fun miceAndCheese(reward1: IntArray, reward2: IntArray, k: Int): Int {
        val dp:HashSet<Int> = reward1.zip(reward2)
            .mapIndexed{ index, it -> Pair(index, it.first - it.second) }
            .sortedByDescending{ it.second }
            .take(k)
            .map{ it -> it.first }
            .toHashSet()

        return reward2.mapIndexed{ index, it -> if(dp.contains(index)) reward1[index] else it}.sum()
    }
}
```
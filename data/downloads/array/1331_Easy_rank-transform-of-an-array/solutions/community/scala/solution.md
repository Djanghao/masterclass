# set . sorted . zipWithIndex . toMap; arr.map(hashmap(x) + 1);

**Author:** admiral_bulba
**Votes:** 0
**Link:** [https://leetcode.com/problems/rank-transform-of-an-array/solutions/5861501/](https://leetcode.com/problems/rank-transform-of-an-array/solutions/5861501/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(nlogn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```scala []
object Solution {
    def arrayRankTransform(arr: Array[Int]): Array[Int] = {
        val uniqueArr = arr.distinct
        val hashMap = uniqueArr.sorted.zipWithIndex.toMap
        arr.map(x => hashMap(x)+1)
    }
}
```
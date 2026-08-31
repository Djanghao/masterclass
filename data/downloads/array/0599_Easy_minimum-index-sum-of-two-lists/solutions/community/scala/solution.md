# Scala solution

**Author:** malovig
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-index-sum-of-two-lists/solutions/3442750/](https://leetcode.com/problems/minimum-index-sum-of-two-lists/solutions/3442750/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n+m)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def findRestaurant(list1: Array[String], list2: Array[String]): Array[String] = {
      var map = Map[String, Int]()
      for (i <- list1.indices) map += (list1(i) -> i)
      var minSum = Int.MaxValue
      var res = List[String]()
      for (j <- list2.indices) 
        if (map.contains(list2(j))) {
          val sum = j + map(list2(j))
          if (sum < minSum) {
            minSum = sum
            res = List(list2(j))
          } else if (sum == minSum) res = list2(j) :: res
        }
      res.toArray
    }
}
```
# Pure Functional Programming Scala Solution

**Author:** walter-robson
**Votes:** 0
**Link:** [https://leetcode.com/problems/wiggle-sort-ii/solutions/4258627/](https://leetcode.com/problems/wiggle-sort-ii/solutions/4258627/)

---

# Intuition
Functional Implementation of sorted even/odd approach 

# Approach
Insert biggest numbers on odd indicies, smallest numbers on even indicies.  Smallest numbers start from sortedNums(mid) and go to sortedNums(0).  Largest numbers start from sortedNums(len) and go to sortedNums(mid).

# Complexity
- Time complexity:
$$O(nlog(n))$$ becasue of sort.

- Space complexity:
$$O(n)$$ 

# Code
```
object Solution {
    def wiggleSort(nums: Array[Int]): Unit = {
        val n = nums.length
        val sortedNums = nums.sorted
        val len = sortedNums.length
        val mid = len / 2 
        (0 until (mid)).map(x => nums(x * 2 + 1) = sortedNums(len - 1 - x))
        (mid until sortedNums.length).map(x => nums((x - mid) * 2) = sortedNums(len - 1 - x))
    }
}
```
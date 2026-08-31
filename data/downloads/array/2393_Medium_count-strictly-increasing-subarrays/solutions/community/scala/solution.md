# Scala beats 100% O(n)

**Author:** jbaum517
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-strictly-increasing-subarrays/solutions/4105503/](https://leetcode.com/problems/count-strictly-increasing-subarrays/solutions/4105503/)

---

# Intuition
Basically just use 2 pointers to go through the entire array finding strictly increasing arrays and each time the streak ends use the sum(1 to n) formula aka $$(n * (n+1) / 2)$$ to add to the total count

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
object Solution {
    def countSubarrays(nums: Array[Int]): Long = {
        var count: Long = 0
        var l = 0
        var r = 1
        while (r < nums.length){
            if (nums(r) > nums(r-1)){
                r += 1
            }
            else {
                count += sum(r-l)
                l = r
                r += 1
            }
        }
        count += sum(r-l)
        count
    }

    def sum(n: Long): Long = {
        n * (n+1) / 2
    }
}
```
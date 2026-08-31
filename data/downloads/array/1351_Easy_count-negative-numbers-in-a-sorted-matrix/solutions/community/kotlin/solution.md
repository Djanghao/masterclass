# Easy to understand detailed Binary search solution.

**Author:** bhaskarudit8
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/solutions/5478246/](https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/solutions/5478246/)

---

# Intuition
We can see that it is (m*n) matrix with each row containing decreasing numbers. Hence, it is easy to figure out that it is a case of binary search where our aim is to find first index which is negative. 

# Approach
## **Algorithm Description :**
1. Check for All Positive Elements: First, check if the array contains only positive elements. This can be quickly determined by checking the last element of the array because, in a decreasing array, if the last element is positive, all elements are positive. Don't do anything in this case and traverse to next element.
2. Binary Search for First Negative Element: If the array contains negative elements (i.e., the last element is negative), perform a binary search to find the first negative element. The binary search needs to be adapted for a decreasing array.
# Complexity
- Time complexity:
$$0(logn * m)$$

- Space complexity:
$$0(1)$$

# Code
```
class Solution {
    fun countNegatives(grid: Array<IntArray>): Int {
        var counter = 0
        grid.forEach{ arr->
            var start = 0
            var end = arr.lastIndex
            if(arr[start] > -1 && arr[end] > -1)
            else {
            while(start < end){
                var mid = start + (end-start) / 2
                if(arr[mid] < 0) end = mid
                else start = mid + 1
            }
            counter += (arr.size - start)
            }
        }
        return counter
    }
}
```
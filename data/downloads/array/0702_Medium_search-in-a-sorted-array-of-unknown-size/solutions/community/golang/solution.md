# Simple Boundary definition and Binary Search

**Author:** abhinvsinh
**Votes:** 1
**Link:** [https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/solutions/4651850/](https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/solutions/4651850/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Define the boundary 
Binary Search
# Approach
<!-- Describe your approach to solving the problem. -->
Define the upper limit by multiplying by 2 each time => this is to maintain logarithmic search complexity

No need for Bit manipulation . Left shift by 1 is equivalent to multiplying by 2.

Once a limit is defined, perform binary search
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * type ArrayReader struct {
 * }
 *
 * func (this *ArrayReader) get(index int) int {}
 */

func search(reader ArrayReader, target int) int {
    low:=0
    high:=1

    
    for target > reader.get(high){
        low=high
        high=high*2
    }

    for low<=high{ //target lies between low and high
        mid:= low+(high-low)/2
        midV := reader.get(mid)
        if target == midV {return mid}
        if target<midV{
            high=mid-1
        }else{
            low=mid+1
        }
    }
    return -1
}
```
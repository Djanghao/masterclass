# Binary search

**Author:** bachngocson0812
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-index-of-the-large-integer/solutions/4954693/](https://leetcode.com/problems/find-the-index-of-the-large-integer/solutions/4954693/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(ln(n))$$, where $$n$$ is the length of the array
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * type ArrayReader struct {
 * }
 * // Compares the sum of arr[l..r] with the sum of arr[x..y] 
 * // return 1 if sum(arr[l..r]) > sum(arr[x..y])
 * // return 0 if sum(arr[l..r]) == sum(arr[x..y])
 * // return -1 if sum(arr[l..r]) < sum(arr[x..y])
 * func (this *ArrayReader) compareSub(l, r, x, y int) int {}
 * 
 * // Returns the length of the array
 * func (this *ArrayReader) length() int {}
 */

func getIndex(reader *ArrayReader) int {
    l, r := 0, reader.length()-1
    for l < r {
        m := (l + r)/2
        if (l-r)%2 == 0 {
            switch reader.compareSub(l, m-1, m+1, r) {
                case 0:
                    return m
                case 1:
                    r = m-1
                case -1:
                    l = m+1
            }
        } else {
            switch reader.compareSub(l, m, m+1, r) {
                case 1:
                    r = m
                case -1:
                    l = m+1
            }
        }
    }
    return l
}
```
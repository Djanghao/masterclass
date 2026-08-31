# Swift solution with minimum calls to ArrayReader

**Author:** bernikovich
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-index-of-the-large-integer/solutions/3076839/](https://leetcode.com/problems/find-the-index-of-the-large-integer/solutions/3076839/)

---

# Complexity
- Time complexity: $$O(log(n))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * // This is ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * interface ArrayReader {
 *     // Compares the sum of arr[l..r] with the sum of arr[x..y] 
 *     // return 1 if sum(arr[l..r]) > sum(arr[x..y])
 *     // return 0 if sum(arr[l..r]) == sum(arr[x..y])
 *     // return -1 if sum(arr[l..r]) < sum(arr[x..y])
 *     public func compareSub(_ l: Int, _ r: Int, _ x: Int, _ y: Int) -> Int {}
 *
 *     // Returns the length of the array
 *     public func length() -> Int {}
 * }
 */

class Solution {
    func getIndex(_ reader: ArrayReader) -> Int {
        var lowerBound = 0
        var upperBound = reader.length() - 1
        while upperBound > lowerBound {
            let cut = (upperBound - lowerBound + 2) / 3 - 1
            let comparisonResult = reader.compareSub(lowerBound, lowerBound + cut, upperBound - cut, upperBound)
            if comparisonResult == 1 {
                upperBound = lowerBound + cut
            } else if comparisonResult == 0 {
                lowerBound = lowerBound + cut + 1
                upperBound = upperBound - cut - 1
            } else {
                lowerBound = upperBound - cut
            }
        }
        return lowerBound
    }
}
```
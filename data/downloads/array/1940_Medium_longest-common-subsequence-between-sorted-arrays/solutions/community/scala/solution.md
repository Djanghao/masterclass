# scala

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-common-subsequence-between-sorted-arrays/solutions/5237892/](https://leetcode.com/problems/longest-common-subsequence-between-sorted-arrays/solutions/5237892/)

---

# Intuition
The problem requires finding the longest common subsequence among multiple sorted arrays. Given that the arrays are sorted, we can efficiently find common elements by leveraging set operations. My first thought was to utilize the intersection property of sets to determine common elements progressively as we process each array.

# Approach
1. Initialize the Common Set: Start with the first array converted into a set. This will hold the potential common elements.
2. Iterate Through Arrays: For each subsequent array, update the set of common elements by intersecting it with the set of elements from the current array. This reduces the common elements progressively.
3. Convert to List and Sort: After processing all arrays, convert the final set of common elements to a list and sort it to ensure the output is in ascending order.

# Complexity
- Time complexity:
Initializing the set with the first array: $$O(n)$$ 
Intersecting with each subsequent array: In the worst case, intersecting sets could take $$O(n logn)$$
 overall time complexity is $$O(k* m logm)$$, where \uD835\uDC58 is the number of arrays and m is the average length of the arrays.

- Space complexity:
 $$O(m)$$,where \uD835\uDC5A is the length of the largest array, as sets are used to store elements from the arrays.

# Code
```
object Solution {
    def longestCommonSubsequence(arrays: Array[Array[Int]]): List[Int] = {
        // Convert the first array to a set as the initial common elements
        var commonElements = arrays(0).toSet
        
        // Iterate over the rest of the arrays
        for (i <- 1 until arrays.length) {
            // Update the common elements by intersecting with the current array
            commonElements = commonElements.intersect(arrays(i).toSet)
        }
        
        // Convert the final set of common elements to a sorted list
        commonElements.toList.sorted
    }
}
```
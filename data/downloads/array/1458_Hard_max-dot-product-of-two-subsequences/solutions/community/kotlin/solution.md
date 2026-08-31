# Kotlin simple DP solution

**Author:** bylazy
**Votes:** 1
**Link:** [https://leetcode.com/problems/max-dot-product-of-two-subsequences/solutions/4145169/](https://leetcode.com/problems/max-dot-product-of-two-subsequences/solutions/4145169/)

---

# Intuition
Trivial DP problem

# Approach
Iterative top-down approach, for each i, j check if subsequences [nums1[i]] and [nums2[j]] can be a prefixes of some previously found subsequences starting at k > i and l > j and a new subsequences will have better total dot sum. 
To avoid repeated iterations to find the maximum among the previous values found, we will store the maximum values in table m. For each i and j m[i][j] will contain maximum of submatrix t[i..n-1][j..m-1] where n = nums1.size, m = nums2.size.
Base cases - all subsequences of length 1, starting at last element of an arrays.

# Complexity
- Time complexity:
O(nm) where n = nums1.size, m = nums2.size

- Space complexity:
O(nm)

# Code
```
class Solution {
    fun maxDotProduct(nums1: IntArray, nums2: IntArray): Int {
        val t = Array(nums1.size){IntArray(nums2.size){0}} //t for DP table
        val m = Array(nums1.size){IntArray(nums2.size){0}} //m for max so far table
        var r = nums1[0]*nums2[0] //r for result
        t[nums1.lastIndex][nums2.lastIndex] = nums1.last() * nums2.last() //base case for subsequences containing last elements
        m[nums1.lastIndex][nums2.lastIndex] = nums1.last() * nums2.last()
        for (i in nums1.lastIndex-1 downTo 0) { //last column
            t[i][nums2.lastIndex] = nums1[i]*nums2.last()
            m[i][nums2.lastIndex] = maxOf(nums1[i]*nums2.last(), m[i+1][nums2.lastIndex])
            r = maxOf(r, t[i][nums2.lastIndex])
        }
        for (j in nums2.lastIndex-1 downTo 0) { //last row
            t[nums1.lastIndex][j] = nums1.last()*nums2[j]
            m[nums1.lastIndex][j] = maxOf(nums1.last()*nums2[j], m[nums1.lastIndex][j+1])
            r = maxOf(r, t[nums1.lastIndex][j])
        }
        for (i in nums1.lastIndex-1 downTo 0)
            for (j in nums2.lastIndex-1 downTo 0) { //rest of t
                t[i][j] = nums1[i]*nums2[j] + maxOf(m[i+1][j+1], 0)
                r = maxOf(r, t[i][j])
                m[i][j] = maxOf(t[i][j], m[i+1][j], m[i][j+1])
            }
        return r
    }
}
```
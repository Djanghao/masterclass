# Beats 100% : Longest Increasing Subsequence with Binary Search Solution

**Author:** SureshChandak
**Votes:** 0
**Link:** [https://leetcode.com/problems/russian-doll-envelopes/solutions/5377914/](https://leetcode.com/problems/russian-doll-envelopes/solutions/5377914/)

---

# Complexity
- Time complexity: O(n (log n))
- Space complexity: O(n)

# Code
```
class Solution {
    fun maxEnvelopes(envelopes: Array<IntArray>): Int {
        
        // Sort envelopes by width in ascending order; if widths are equal, sort by height in descending order
        Arrays.sort(envelopes) { a, b ->
            if (a[0] == b[0]) b[1] - a[1] else a[0] - b[0]
        }

        // heights array
        //val heights = IntArray(envelopes.size)
        //for (i in 0 ..< envelopes.size) {
        //    heights[i] = envelopes[i][1]
        //}

        return lisBinarySearch(envelopes)
    }

    private fun lisBinarySearch(nums: Array<IntArray>): Int {
        val n = nums.size

        if (n == 0) return 0

        val ans = ArrayList<Int>()
        ans.add(nums[0][1])

        for (i in 1 ..< n) {
            
            if (nums[i][1] > ans.last()) {
                ans.add(nums[i][1])
            }
            else {
                // find index of just bigger element in ans
                val index = lowerBound(ans, nums[i][1])
                ans[index] = nums[i][1]
            }
        }

        return ans.size
    }

    private fun lowerBound(arr: ArrayList<Int>, element: Int): Int {

        val size = arr.size
        var start = 0
        var end = size - 1
        var mid = start + (end - start) / 2
    
        while (start < end) {

            if (arr[mid] < element) {
                start = mid + 1
            }
            else {
                end = mid
            }

            mid = start + (end - start) / 2
        }
        
        return start        
    }


}
```

# Thank you!
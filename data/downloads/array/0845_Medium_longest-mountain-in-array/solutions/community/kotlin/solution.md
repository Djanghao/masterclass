# Simple understandable solution that gives O(n) time

**Author:** aliasheer
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-mountain-in-array/solutions/5994520/](https://leetcode.com/problems/longest-mountain-in-array/solutions/5994520/)

---

# Intuition
Definition of a Mountain: A valid mountain in an array means:

There is an upward slope (values strictly increase).
Followed by a peak.
Then a downward slope (values strictly decrease).

# Approach
Iterating Through Peaks: We check each potential peak (arr[i-1] < arr[i] > arr[i+1]), and then expand outwards to measure the length of the mountain from that peak.

# Complexity
- Time complexity:
\uD835\uDC42(n)

- Space complexity:
O(1)

# Code
```kotlin []
class Solution {
    fun longestMountain(arr: IntArray): Int {

       var largestM = 0

    if (arr.size < 3) return 0

    for (i in 1 until arr.size - 1) {
        // Check if current element is a peak
        if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) {
            var left = i - 1
            var right = i + 1

            // Move left pointer to the start of the upward slope
            while (left > 0 && arr[left - 1] < arr[left]) {
                left--
            }

            // Move right pointer to the end of the downward slope
            while (right < arr.size - 1 && arr[right] > arr[right + 1]) {
                right++
            }

            // Calculate the length of the mountain
            val mountainLength = right - left + 1
            largestM = maxOf(largestM, mountainLength)
        }
    }

    return largestM
    }
}
```
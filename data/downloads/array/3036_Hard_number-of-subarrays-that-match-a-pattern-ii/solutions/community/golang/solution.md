# 3036. Number of Subarrays That Match a Pattern II using Go | KMP Algorithm | Simple Approach

**Author:** singhsourav73
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-ii/solutions/4711568/](https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-ii/solutions/4711568/)

---

# Intuition
The problem involves finding subarrays in the given array that match a given pattern. To efficiently solve this problem, we can use the Knuth-Morris-Pratt (KMP) algorithm to find occurrences of the pattern in the array. Once we have the longest prefix suffix (LPS) array computed for the pattern, we can traverse the array and pattern simultaneously to check for matches.

# Approach
1. Compute the LPS array for the given pattern using the Knuth-Morris-Pratt algorithm. The LPS array helps to determine the length of the longest proper prefix which is also a proper suffix.
2. Initialize two pointers i and j to traverse the nums array and pattern array respectively.
3. Iterate through the nums array while i is less than N-1, where N is the length of the nums array.
4. Check if the current element in nums satisfies the condition specified by the pattern:
    - If pattern[j] == 1 and nums[i+1] > nums[i], or
    - If pattern[j] == 0 and nums[i+1] == nums[i], or
    - If pattern[j] == -1 and nums[i+1] < nums[i].
5. If the condition is satisfied, increment both i and j.
6. If the condition is not satisfied:
    - If j == 0, increment only i.
    - Otherwise, update j using the LPS array lps[j-1].
7. If j becomes equal to the length of the pattern P, it means we have found a matching subarray. Increment the count variable and update j using lps[j-1].
8. Return the count variable, which represents the count of subarrays that match the pattern.

# Complexity
- Time complexity: O(N+P), where N is the length of the nums array and P is the length of the pattern array. Computing the LPS array takes O(P) time, and traversing through the nums array takes O(N) time.

- Space complexity: O(P) for storing the LPS array.

# Code
```
func countMatchingSubarrays(nums []int, pattern []int) int {
    N, P := len(nums), len(pattern)
    lps := make([]int, P)

    prevLPS, i := 0, 1
    for i < P {
        if pattern[i] == pattern[prevLPS] {
            prevLPS++;
            lps[i] = prevLPS
            i++;
        } else if prevLPS == 0 {
            lps[i] = 0
            i++
        } else {
            prevLPS = lps[prevLPS - 1 ]
        }
    }

    i, j, count:= 0, 0, 0

    for i + 1< N {
        if (pattern[j] == 1 && nums[i+1] > nums[i]) ||
            (pattern[j] == 0 && nums[i+1] == nums[i]) ||
            (pattern[j] == -1 && nums[i+1] < nums[i]) {
                i, j = i+1, j+1
        } else {
            if j == 0 {
                i++
            } else {
                j = lps[j-1]
            }
        }

        if j == P {
            count++
            j = lps[j-1]
        }
    }
    return count
}
```
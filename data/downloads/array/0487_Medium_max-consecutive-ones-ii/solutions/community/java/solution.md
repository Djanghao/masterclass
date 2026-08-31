# Java | TC: O(N) | SC: O(1) | Four solutions with Follow-up handled

**Author:** NarutoBaryonMode
**Votes:** 10
**Link:** [https://leetcode.com/problems/max-consecutive-ones-ii/solutions/1508045/](https://leetcode.com/problems/max-consecutive-ones-ii/solutions/1508045/)

---

**Keep Track of Previous Count and Current Count. This solution *CAN* handle the follow-up where the input is an infinite stream**
```java
/**
 * Keep Track of Previous Count and Current Count
 *
 * This solution CAN handle the follow-up where the input is an infinite stream.
 * We do not need to store the numbers as we are not looking back at the
 * previous values.
 *
 * Time Complexity: O(N)
 *
 * Space Complexity: O(1)
 *
 * N = Length of the input array
 */
class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        if (nums == null) {
            throw new IllegalArgumentException("Input array is null");
        }

        int prevCount = 0;
        int curCount = 0;
        int maxCount = 0;

        for (int n : nums) {
            if (n == 1) {
                curCount++;
            } else {
                // Including the zero number in the count of previous block
                prevCount = curCount + 1;
                curCount = 0;
            }
            maxCount = Math.max(maxCount, prevCount + curCount);
        }

        return maxCount;
    }
}
```

---
**Sliding Window. This solution *CAN* handle the follow-up where the input is an infinite stream**

```java
/**
 * Sliding Window: Keep track of [start, end] window with at most one zero. Also
 * track previous zero index.
 *
 * This solution CAN handle the follow-up where the input is an infinite stream.
 * We do not need to store the numbers as we are not looking back at the
 * previous values.
 *
 * Time Complexity: O(N)
 *
 * Space Complexity: O(1)
 *
 * N = Length of the input array
 */
class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        if (nums == null) {
            throw new IllegalArgumentException("Input array is null");
        }

        int start = 0;
        int prevZeroIdx = -1;
        int maxCount = 0;

        for (int end = 0; end < nums.length; end++) {
            if (nums[end] == 0) {
                start = prevZeroIdx + 1;
                prevZeroIdx = end;
            }
            maxCount = Math.max(maxCount, end - start + 1);
        }

        return maxCount;
    }
}
```

---
**One-Pass Optimized Sliding Window. This solution *CANNOT* handle the follow-up where the input is an infinite stream**

```java
/**
 * One-Pass Optimized Sliding Window
 *
 * This solution can NOT handle the follow-up where the input is an infinite
 * stream.
 *
 * If A[start] ~ A[end] has zeros <= 1, we continue to increment end.
 * (Reason: The window is still valid and window size can be increased.)
 *
 * If A[start] ~ A[end] has zeros > 1, we increment both start & end.
 * (Reason: The window contains extra zeros thus it is not valid any more, and we
 * will increment both start & end to keep the window size same.)
 *
 * Time Complexity: O(N)
 *
 * Space Complexity: O(1)
 *
 * N = Length of the input array
 */
class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        if (nums == null) {
            throw new IllegalArgumentException("Input array is null");
        }

        int start = 0;
        int end = 0;
        int zeros = 0;

        while (end < nums.length) {
            if (nums[end] == 0) {
                zeros++;
            }
            end++;
            if (zeros > 1) {
                if (nums[start] == 0) {
                    zeros--;
                }
                start++;
            }
        }

        return end - start;
    }
}
```

---
**Not optimized Sliding Window. This solution *CANNOT* handle the follow-up where the input is an infinite stream**

```java
/**
 * Sliding Window: Keep track of [start, end] window with at most one zero.
 *
 * This solution can NOT handle the follow-up where the input is an infinite
 * stream.
 *
 * Time Complexity: O(2*N) = O(N)
 *
 * Space Complexity: O(1)
 *
 * N = Length of the input array
 */
class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        if (nums == null) {
            throw new IllegalArgumentException("Input array is null");
        }

        int start = 0;
        int end = 0;
        int zeros = 0;
        int maxCount = 0;

        while (end < nums.length) {
            if (nums[end] == 0) {
                zeros++;
            }
            end++;
            while (zeros > 1) {
                if (nums[start] == 0) {
                    zeros--;
                }
                start++;
            }
            maxCount = Math.max(maxCount, end - start);
        }

        return maxCount;
    }
}
```

---

Solutions to other parts of Max Consecutive Ones question on LeetCode:
- [485. Max Consecutive Ones](https://leetcode.com/problems/max-consecutive-ones/discuss/1507990/Java-or-TC:-O(N)-or-SC:-O(1)-or-Easy-and-Concise-solution)
- [1004. Max Consecutive Ones III](https://leetcode.com/problems/max-consecutive-ones-iii/discuss/1508044/Java-or-TC:-O(N)-or-SC:-O(1)-or-One-Pass-Optimized-Sliding-Window)

---

Solutions to other Sliding Window questions on LeetCode:
- [76. Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/discuss/1496754/Java-or-TC:-O(S+T)-or-SC:-O(T)-or-Space-optimized-Sliding-Window-using-Two-Pointers)
- [340. Longest Substring with At Most K Distinct Characters](https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/discuss/1496838/Java-or-TC:-O(N)-or-SC:-O(K)-or-One-Pass-Sliding-Window-using-LinkedHashMap)
- [159. Longest Substring with At Most Two Distinct Characters](https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/discuss/1496840/Java-or-TC:-O(N)-or-SC:-O(1)-or-One-Pass-Sliding-Window-using-LinkedHashMap)
- [438. Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/discuss/1500039/Java-or-TC:-O(S+P)-or-SC:-O(1)-or-Sliding-window-solution)
- [3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/discuss/1500874/Java-or-TC:-O(N)-or-SC:-O(1)-or-Sliding-Window-using-HashMap-and-Two-Pointers)
- [209. Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/discuss/1500877/Java-or-Both-O(N)-and-O(N-logN)-solutions-with-O(1)-space-or-Sliding-Window-and-Binary-Search-solutions)
- [219. Contains Duplicate II](https://leetcode.com/problems/contains-duplicate-ii/discuss/1500887/Java-or-TC:-O(N)-or-SC:-O(min(N-K))-or-Sliding-Window-using-HashSet)
- [220. Contains Duplicate III](https://leetcode.com/problems/contains-duplicate-iii/discuss/1500895/Java-or-TC:-O(N)-or-SC:-O(min(NK))-or-Sliding-Window-using-Buckets)
- [567. Permutation in String](https://leetcode.com/problems/permutation-in-string/discuss/1500902/Java-or-TC:-O(S2)-or-SC:-O(1)-or-Constant-space-Sliding-Window-solution)
- [239. Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/discuss/1506048/Java-or-TC:-O(N)-or-SC:-O(K)-or-Using-Deque-as-Sliding-Window)
- [480. Sliding Window Median](https://leetcode.com/problems/sliding-window-median/discuss/1507981/Java-or-TC:-O(N*logK)-or-SC:-(K)-or-Optimized-sliding-window-using-TreeSet)
- [1004. Max Consecutive Ones III](https://leetcode.com/problems/max-consecutive-ones-iii/discuss/1508044/Java-or-TC:-O(N)-or-SC:-O(1)-or-One-Pass-Optimized-Sliding-Window)
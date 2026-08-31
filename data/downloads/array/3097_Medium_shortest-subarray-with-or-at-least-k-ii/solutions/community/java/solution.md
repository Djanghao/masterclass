# [C++, Java, Python] 2 Approaches | Sliding Window | Binary Search | Two Pointers

**Author:** shivamaggarwal513
**Votes:** 42
**Link:** [https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-ii/solutions/4948082/](https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-ii/solutions/4948082/)

---

# Intuition

Bitwise OR will never unset an already set bit. It may set some new bits. So, bitwise OR is always non-decreasing.

Let's say we have a fixed length variable `len`. How can we check that there exists a special subarray of length `len`? We can calculate bitwise OR of all subarrays of length `len` but this will result in TLE. We need to use sliding window of subarrays of length `len`.

Suppose we calculate the bitwise OR of first `len` elements:

```
nums[0] | nums[1] | ... | nums[len - 1] = num
```

If this `num >= k`, then we can just return `true` that we have found a special subarray of length `len`. If not, we will check for next window:

```
nums[1] | nums[2] | ... | nums[len] = num'
```

How can we get `num'` from `num` without traversing on `len` elements again? How can we use the already calculated value of `nums[1] | ... | nums[len - 1]`?

We need a strategy to remove the element `nums[0]` which is not in our window anymore. But to remove it, we can not just unset the bits in bitwise OR that are set in `nums[0]`. Because those bits might be set in some elements of `nums[1] ... nums[len - 1]` too. **Hence we need to track, for each of 32 bits, the count of elements in which that particular bit is set.** And then, we can decrement the count by 1 for those bits which are set in `nums[0]`.

Rest part of the problem is classic sliding window/binary search.

# Approach 1: Binary Search on Subarray Length

For a given length `len`, we can find if there exists a special subarray of length `len` in linear time using above mentioned approach.

Recall that bitwise OR is non-decreasing in nature. So, if we have checked and we know that there exists a special subarray of length `len`, then we can say that there will always exist special subarrays of length greater than `len`. So, we can continue our search of smallest length in range `[1, len]`. Whereas, if we have checked and we know that there is no special subarray of length `len`, then we can never find a special subarray of lengths smaller than `len`. So, we can continue our search of smallest length in range `[len + 1, n]`.

This gives the possibility of applying binary search on subarray length. For each iteration of binary search, we will check for subarrays of length `len` in linear time, and this will be done at most $\\log n$ times.

## Code

```C++ []
class Solution {
private:
    void update(vector<int>& bits, int x, int change) {
        // insert or remove element from window, time: O(32)
        for (int i = 0; i < 32; i++) {
            if ((x >> i) & 1) {
                bits[i] += change;
            }
        }
    }
    
    int bitsToNum(vector<int>& bits) {
        // convert 32-size bits array to integer, time: O(32)
        int result = 0;
        for (int i = 0; i < 32; i++) {
            if (bits[i]) {
                result |= 1 << i;
            }
        }
        return result;
    }
    
    bool isSpecial(vector<int>& nums, int k, int len) {
        // checks if special subarray exists for length len, time: O(n)
        int n = nums.size();
        vector<int> bits(32);
        for (int i = 0; i < n; i++) {
            update(bits, nums[i], 1); // insert nums[i] into window
            if (i >= len) {
                update(bits, nums[i - len], -1); // remove nums[i - len] from window
            }
            if (i >= len - 1 && bitsToNum(bits) >= k) {
                // special subarray found
                return true;
            }
        }
        return false;
    }
    
public:
    int minimumSubarrayLength(vector<int>& nums, int k) {
        int n = nums.size(), start = 1, end = n + 1, mid;
        while (start < end) {
            mid = (start + end) / 2;
            if (!isSpecial(nums, k, mid)) {
                start = mid + 1;
            } else {
                end = mid;
            }
        }
        return start != n + 1 ? start : -1;
    }
};
```
```Java []
class Solution {
    private void update(int[] bits, int x, int change) {
        // insert or remove element from window, time: O(32)
        for (int i = 0; i < 32; i++) {
            if (((x >> i) & 1) != 0) {
                bits[i] += change;
            }
        }
    }

    private int bitsToNum(int[] bits) {
        // convert 32-size bits array to integer, time: O(32)
        int result = 0;
        for (int i = 0; i < 32; i++) {
            if (bits[i] != 0) {
                result |= 1 << i;
            }
        }
        return result;
    }

    private boolean isSpecial(int[] nums, int k, int len) {
        // checks if special subarray exists for length len, time: O(n)
        int n = nums.length;
        int[] bits = new int[32];
        for (int i = 0; i < n; i++) {
            update(bits, nums[i], 1); // insert nums[i] into window
            if (i >= len) {
                update(bits, nums[i - len], -1); // remove nums[i - len] from window
            }
            if (i >= len - 1 && bitsToNum(bits) >= k) {
                // special subarray found
                return true;
            }
        }
        return false;
    }

    public int minimumSubarrayLength(int[] nums, int k) {
        int n = nums.length, start = 1, end = n + 1, mid;
        while (start < end) {
            mid = (start + end) / 2;
            if (!isSpecial(nums, k, mid)) {
                start = mid + 1;
            } else {
                end = mid;
            }
        }
        return start != n + 1 ? start : -1;
    }
}
```

## Complexity

- Time complexity: $O(n \\log n)$
  - There are at most $\\log n$ iterations of binary search. In each iteration, we call `isSpecial()` function which takes $O(n)$ time.
- Space complexity: $O(32) \\approx O(1)$

# Approach 2: Sliding Window

Using the same strategy of removing element from window, can we use two pointers to keep track of current window?

Suppose we want to find the minimum length special subarray ending at index `end`. We have our current window `[0, end]` (both inclusive) and it's bitwise OR array (of size 32) and bitwise OR value `num`.

If `num < k` then we expand the window by `[0, end + 1]` by adding `nums[end + 1]` to the window. We keep doing it and once we reach a special subarray for which `num >= k`, then we have found one possible answer for some `[0, end']`. Now, in order to achieve minimum length, we can try to shrink the window from left side until the special condition `num >= k` is satisfied.

Let's say, we shrunk the window as much as we could and reached a position `[start' + 1, end']` where `num < k` (special condition became `false`). We know that the condition was `true` for window `[start', end']` and hence we had found a possible answer `end' - start' + 1` (size of window `[start', end']`).

Therefore, when we will go to find the special subarray ending at index `end' + 1`, we will add `nums[end' + 1]` to the window, **and we can safely start from `start' + 1` itself instead of starting from complete 0.** Because we have already found a possible answer `end' - start' + 1`, we will only check for sizes smaller than it.

This gives the idea of using two pointers for sliding window.

## Code

```C++ []
class Solution {
private:
    void update(vector<int>& bits, int x, int change) {
        // insert or remove element from window, time: O(32)
        for (int i = 0; i < 32; i++) {
            if ((x >> i) & 1) {
                bits[i] += change;
            }
        }
    }
    
    int bitsToNum(vector<int>& bits) {
        // convert 32-size bits array to integer, time: O(32)
        int result = 0;
        for (int i = 0; i < 32; i++) {
            if (bits[i]) {
                result |= 1 << i;
            }
        }
        return result;
    }
    
public:
    int minimumSubarrayLength(vector<int>& nums, int k) {
        int n = nums.size(), result = n + 1;
        vector<int> bits(32);
        for (int start = 0, end = 0; end < n; end++) {
            update(bits, nums[end], 1); // insert nums[end] into window
            while (start <= end && bitsToNum(bits) >= k) {
                result = min(result, end - start + 1);
                update(bits, nums[start++], -1); // remove nums[start] from window
            }
        }
        return result != n + 1 ? result : -1;
    }
};
```
```Java []
class Solution {
    private void update(int[] bits, int x, int change) {
        // insert or remove element from window, time: O(32)
        for (int i = 0; i < 32; i++) {
            if (((x >> i) & 1) != 0) {
                bits[i] += change;
            }
        }
    }

    private int bitsToNum(int[] bits) {
        // convert 32-size bits array to integer, time: O(32)
        int result = 0;
        for (int i = 0; i < 32; i++) {
            if (bits[i] != 0) {
                result |= 1 << i;
            }
        }
        return result;
    }

    public int minimumSubarrayLength(int[] nums, int k) {
        int n = nums.length, result = n + 1;
        int[] bits = new int[32];
        for (int start = 0, end = 0; end < n; end++) {
            update(bits, nums[end], 1); // insert nums[end] into window
            while (start <= end && bitsToNum(bits) >= k) {
                result = Math.min(result, end - start + 1);
                update(bits, nums[start++], -1); // remove nums[start] from window
            }
        }
        return result != n + 1 ? result : -1;
    }
}
```
```Python []
class Solution:
    def update(self, bits: List[int], x: int, change: int):
        # insert or remove element from window, time: O(32)
        for i in range(32):
            if (x >> i) & 1:
                bits[i] += change

    def bitsToNum(self, bits: List[int]) -> int:
        # convert 32-size bits array to integer, time: O(32)
        result = 0
        for i in range(32):
            if bits[i]:
                result |= 1 << i
        return result
    
    def minimumSubarrayLength(self, nums: List[int], k: int) -> int:
        n = len(nums)
        result = n + 1
        bits = [0] * 32
        start = 0
        for end in range(n):
            self.update(bits, nums[end], 1) # insert nums[end] into window
            while start <= end and self.bitsToNum(bits) >= k:
                result = min(result, end - start + 1)
                self.update(bits, nums[start], -1) # remove nums[start] from window
                start += 1
        return result if result != n + 1 else -1
```

## Complexity

- Time complexity: $O(n)$
- Space complexity: $O(32) \\approx O(1)$

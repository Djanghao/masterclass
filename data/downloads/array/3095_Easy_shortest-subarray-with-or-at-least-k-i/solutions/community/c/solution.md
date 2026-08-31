# pure C

**Author:** ekko3add
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-i/solutions/6019975/](https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-i/solutions/6019975/)

---

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```c []
int minimumSubarrayLength(int* nums, int numsSize, int k) {
    if (k == 0) return 1;

    int sum = 0;
    int left = 0, right = 0;
    int min = INT_MAX;

    while (right < numsSize) {
        sum |= nums[right];

        while (sum >= k) {
            int size = right - left + 1;
            min = fmin(min, size);

            // re-calculate the sum
            sum = 0;
            for (int i = left + 1; i <= right; ++i) {
                sum |= nums[i];
            }
            ++left;
        }

        ++right;
    }

    return min == INT_MAX ? -1 : min;
}

```
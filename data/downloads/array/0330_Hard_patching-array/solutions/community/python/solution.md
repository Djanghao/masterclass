# ✅LeetCode Hard in 6 mins 💯Beats 100% - Explained with [ Video ] - C++/Java/Python/JS - Arrays

**Author:** lancertech6
**Votes:** 87
**Link:** [https://leetcode.com/problems/patching-array/solutions/5320226/](https://leetcode.com/problems/patching-array/solutions/5320226/)

---

![Screenshot 2024-06-16 101219.png](./images/0.png)



# YouTube Video Explanation:

<!-- **If you want a video for this question please write in the comments** -->

<!-- https://www.youtube.com/watch?v=ujU-jeO1v-k -->

https://youtu.be/igi901q2uv8

**\uD83D\uDD25 Please like, share, and subscribe to support our channel's mission of making complex concepts easy to understand.**

Subscribe Link: https://www.youtube.com/@leetlogics/?sub_confirmation=1

*Subscribe Goal: 2000 Subscribers*
*Current Subscribers: 1976*

---
# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem requires ensuring that any number in the range `[1, n]` can be formed by the sum of some elements in the given sorted array `nums`. The key is to identify the smallest number that cannot be formed (`missing`). If `missing` is in the array, we include it and check the next `missing`. If `missing` is not in the array, we need to add it (patch it) to cover that gap and update our `missing` value accordingly. The goal is to minimize the number of patches required.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize `missing` to 1, which is the smallest number we want to be able to form.
2. Use a variable `i` to iterate through the array and another variable `patches` to count the number of patches needed.
3. While `missing` is less than or equal to `n`:
   - If the current array element (`nums[i]`) is less than or equal to `missing`, add this element to `missing` and move to the next element (`i++`).
   - If the current array element is greater than `missing`, patch the `missing` value by adding `missing` itself, and increment the `patches` counter.
4. Repeat until `missing` exceeds `n`.
5. Return the number of patches needed.

# Complexity
- Time complexity:  `O(m)`, where `m` is the length of the array `nums`. The while loop iterates through the array at most once, and each patching operation is constant time.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: `O(1)`, as we only use a few extra variables.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->





### Explanation with Tables
Let's illustrate the example with `nums = [1, 3]` and `n = 6`.

| Step | Missing Value (`missing`) | Array Element (`nums[index]`) | Action                | Updated Missing Value (`missing`) | Patches |
|------|----------------------------|-------------------------------|-----------------------|-----------------------------------|---------|
| 1    | 1                          | 1                             | Add array element     | 2                                 | 0       |
| 2    | 2                          | 3                             | Patch (add 2)         | 4                                 | 1       |
| 3    | 4                          | 3                             | Add array element     | 7                                 | 1       |

**Detailed Explanation**:
1. **Step 1**:
   - Initial `missing` is 1.
   - The first element in `nums` is 1, which is less than or equal to `missing`.
   - Add `nums[i]` to `missing`: `missing` becomes 2.
   - Move to the next element in `nums`.

2. **Step 2**:
   - Current `missing` is 2.
   - The next element in `nums` is 3, which is greater than `missing`.
   - Patch the `missing` value by adding `missing` itself: `missing` becomes 4.
   - Increment the `patches` counter to 1.

3. **Step 3**:
   - Current `missing` is 4.
   - The next element in `nums` is 3, which is less than `missing`.
   - Add `nums[i]` to `missing`: `missing` becomes 7.
   - Since `missing` (7) is now greater than `n` (6), we stop.

After these steps, the range `[1, 6]` can be formed using the numbers in `nums` and the patches.

### Summary
- **Initial `missing`**: 1
- **Patch if `missing` is not covered**.
- **Update `missing`** and **count patches** until `missing` exceeds `n`.


After these steps, all numbers in the range `[1, 6]` can be formed.

For `nums = [1, 5, 10]` and `n = 20`:

| Step | Missing Value (`missing`) | Array Element (`nums[index]`) | Action                | Updated Missing Value (`missing`) | Patches |
|------|----------------------------|-------------------------------|-----------------------|-----------------------------------|---------|
| 1    | 1                          | 1                             | Add array element     | 2                                 | 0       |
| 2    | 2                          | 5                             | Patch (add 2)         | 4                                 | 1       |
| 3    | 4                          | 5                             | Patch (add 4)         | 8                                 | 2       |
| 4    | 8                          | 5                             | Add array element     | 13                                | 2       |
| 5    | 13                         | 10                            | Add array element     | 23                                | 2       |


Thus, 2 patches are needed to cover the range `[1, 20]`.


# Code
```java []
class Solution {
    public int minPatches(int[] nums, int n) {
        long missing = 1;
        int patches = 0;
        int index = 0;

        while (missing <= n) {
            if (index < nums.length && nums[index] <= missing) {
                missing += nums[index];
                index++;
            } else {
                missing += missing;
                patches++;
            }
        }

        return patches;
    }
}

```
```C++ []
class Solution {
public:
    int minPatches(vector<int>& nums, int n) {
        long missing = 1;
        int patches = 0;
        int index = 0;

        while (missing <= n) {
            if (index < nums.size() && nums[index] <= missing) {
                missing += nums[index];
                index++;
            } else {
                missing += missing;
                patches++;
            }
        }

        return patches;
    }
};
```
```Python []
class Solution(object):
    def minPatches(self, nums, n):
        missing = 1
        patches = 0
        index = 0

        while missing <= n:
            if index < len(nums) and nums[index] <= missing:
                missing += nums[index]
                index += 1
            else:
                missing += missing
                patches += 1

        return patches

        
```
```JavaScript []
var minPatches = function(nums, n) {
    let missing = 1;
    let patches = 0;
    let index = 0;

    while (missing <= n) {
        if (index < nums.length && nums[index] <= missing) {
            missing += nums[index];
            index++;
        } else {
            missing += missing;
            patches++;
        }
    }

    return patches;
};
```

![upvote.png](./images/1.png)

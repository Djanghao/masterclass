# [Python3/C++/Java] Prefix Sum - Detailed Explanation

**Author:** dolong2110
**Votes:** 13
**Link:** [https://leetcode.com/problems/make-array-elements-equal-to-zero/solutions/6054636/](https://leetcode.com/problems/make-array-elements-equal-to-zero/solutions/6054636/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- Obsever that a `0` is valid if the total left sum is close to total right sum. There will be 3 cases for any `0` at index `i`:
    - `left_sum[i] == right_sum[i]`: in this case either start move to left or right first will always return a valid move. Thus, we have `2` choices.
    - `left_sum[i] == right_sum[i] + 1`: this time left is `1` more than right, so we can only move from left first to get a valid move. Thus, we have `1` choice.
    - `left_sum[i] == right_sum[i] - 1`: this time left is `1` less than right, so we can only move from right first to get a valid move. Thus, we have `1` choice.
- How to efficiency get the sum from the left and right of an element -> Sense of Prefix Sum comes into play.

# Approach
<!-- Describe your approach to solving the problem. -->
**1. Function Definition**:

``` python []
def countValidSelections(self, nums: List[int]) -> int:
```

- `def countValidSelections(self, nums: List[int]) -> int:`: This line defines the function named `countValidSelections`.
    - `self`: This suggests the function is likely part of a class `Solution`.
    - `nums: List[int]`: This indicates that the function expects an argument called nums, which should be a list of integers.
    - `-> int`: This specifies that the function will return an integer value.

**2. Initialization**:

``` Python []
    n, res = len(nums), 0 
    left, right = [0 for _ in range(n)], [0 for _ in range(n)]
```

- `n, res = len(nums), 0`: Two variables are initialized:
    - `n`: Stores the length of the input list `nums`.
    - `res`: Initialized to `0`, to be used for counting number of valid moves.
    - `left, right = [0 for _ in range(n)], [0 for _ in range(n)]`: Two lists, `left` and `right`, are created. Both are initialized with zeros and have the same length as the input list nums. These lists intended for storing cumulative sums - Prefix Sum from the left and right sides of the list, respectively.
    - `left[i]`, `right[i]` counts the total number from the left and right side of current index `i`.
    
**```3. Cumulative Sum Calculation```**:

``` Python []
    for i in range(1, n):
        left[i] = left[i - 1] + nums[i - 1]
        right[-i - 1] = right[-i] + nums[-i]
```

- `for i in range(1, n):`: This loop iterates over the indices of the `nums` list, starting from the second element (index 1) up to the last element. We iterate from `1` because the first element - index `0` doesn't have any left element. The same case for the last element while it does not have any neighbor from the right.
- `left[i] = left[i - 1] + nums[i - 1]`: This line calculates the cumulative sum of elements from the left side of the list. For each index `i`, the value in the left list is the sum of the previous values in left and the previous value in `nums`.
- `right[-i - 1] = right[-i] + nums[-i]`: This line does the same cumulative sum calculation but from the right side of the list. It uses negative indexing to access elements from the end of the list.

**4. Counting Valid Selections**:

```Python []
    for i, num in enumerate(nums):
        if num != 0: continue
        if left[i] == right[i]: res += 2
        if abs(left[i] - right[i]) == 1: res += 1
```

- `for i, num in enumerate(nums):`: This loop iterates through the `nums` list, providing both the index `i` and the value `num` of each element.
    - `if num != 0: continue`: If the current number `num` is not `0`, the loop skips to the next iteration `continue`. We are only interested in positions where `num` is `0`.
    - `if left[i] == right[i]: res += 2`: If the cumulative sum from the left, `left[i]` is equal to the cumulative sum from the right, `right[i]` at the current index, the res counter is incremented by `2`. In this case chosing moving from left or right first return the same valid move.
    - `if abs(left[i] - right[i]) == 1: res += 1`: If the absolute difference between the left and right cumulative sums is `1`, the `res` counter is incremented by `1`. The reason because in this case, we can only choose to move to the bigger side first to make valid move.

**5. Return Result**:

```Python []
    return res
```

- The function returns the final value of `res`, which represents the count of "valid selections" based on the criteria defined in the code.

**Overall Logic**:

While the exact problem the code solves isn't explicitly stated, it seems to involve finding positions in a list where the cumulative sums from the left and right sides either match or have an absolute difference of 1. The code likely relates to some form of balanced selection or partitioning of the list around the positions with 0. The specific meaning of "valid selections" would depend on the context of the problem this code is intended to solve.

# Complexity
- Time complexity: $$O(N)$$ - `N` is length of the `nums`
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(N)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```python3 []
class Solution:
    def countValidSelections(self, nums: List[int]) -> int:
        n, res = len(nums), 0
        left, right = [0 for _ in range(n)], [0 for _ in range(n)]
        for i in range(1, n):
            left[i] = left[i - 1] + nums[i - 1]
            right[-i - 1] = right[-i] + nums[-i]
        for i, num in enumerate(nums):
            if num != 0: continue
            if left[i] == right[i]: res += 2
            if abs(left[i] - right[i]) == 1: res += 1
        return res
```
``` python3 []
class Solution {
public:
    int countValidSelections(vector<int>& nums) {
        int n = nums.size();
        int res = 0;
        vector<int> left(n, 0);
        vector<int> right(n, 0);

        for (int i = 1; i < n; ++i) {
            left[i] = left[i - 1] + nums[i - 1];
            right[n - i - 1] = right[n - i] + nums[n - i];
        }

        for (int i = 0; i < n; ++i) {
            if (nums[i] != 0) {
                continue;
            }
            if (left[i] == right[i]) {
                res += 2;
            }
            if (abs(left[i] - right[i]) == 1) {
                res += 1;
            }
        }
        return res;
    }
};
```
``` java []
class Solution {
    public int countValidSelections(int[] nums) {
        int n = nums.length;
        int res = 0;
        int[] left = new int[n];
        int[] right = new int[n];

        for (int i = 1; i < n; ++i) {
            left[i] = left[i - 1] + nums[i - 1];
            right[n - i - 1] = right[n - i] + nums[n - i];
        }

        for (int i = 0; i < n; ++i) {
            if (nums[i] != 0) {
                continue;
            }
            if (left[i] == right[i]) {
                res += 2;
            }
            if (Math.abs(left[i] - right[i]) == 1) {
                res += 1;
            }
        }
        return res;
    }
}
```
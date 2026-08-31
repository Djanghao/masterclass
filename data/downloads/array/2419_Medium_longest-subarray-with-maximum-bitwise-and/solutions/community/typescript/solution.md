# [Python3/Java/C++/Go/TypeScript] Bit + Greedy + Sliding Window - Simple Solution

**Author:** dolong2110
**Votes:** 6
**Link:** [https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/solutions/5783318/](https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/solutions/5783318/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- the maximum value of bitwise and of an subarray should always be the value of the element with highest value in `nums` - `max_number`
- the bitwise and of the `max_number` with any different number is always smaller than current `max_number`. For instance, the bitwise and of 9 and any number smaller than 9 will be less than 9.
    - 9 & 8 = 8
    - 9 & 7 = 1
    - 9 & 6 = 0
    ...
    - 9 & 1 = 1
    - 9 & 0 = 0
- Thus, to maintain this maximum, the whole subarray should contain all similar element to this `max_number`
- Thus we just find the `max_number` in `nums` and then find the longest continous subarray that contain all the same number `max_number`.
- In other word, the problem actually asks for the longest subarray with all values equal to `max(nums)`
- For example, `nums = [`1, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3]` the answer will be 5.

# Approach
<!-- Describe your approach to solving the problem. -->
**1. Initialization:**

- `j, max_val, res = -1, max(nums), 0`:
        - `j`: Stores the index of the last element that is not the maximum value.
        - `max_val`: Stores the maximum value in the list.
        - `res`: Stores the length of the longest subarray containing only the maximum value.

**2. Iteration:**

- `for i, num in enumerate(nums):`: Iterates through each element `num` in the list `nums` with its index `i`.
- `if num != max_val: j = i`: If the current element `num` is not the maximum value, update the index `j` to the current index `i`.
- `res = max(res, i - j)`: Calculates the length of the current subarray containing only the maximum value (from index `j` to index `i`) and updates the `res` variable if it's larger than the previous maximum.

**3. Return Value:**

- return res: Returns the final value of `res`, which represents the length of the longest subarray containing only the maximum value.

**4. Explanation:**

- The code maintains two variables: `j` and `res`.
- `j` keeps track of the last index where a non-maximum value was encountered.
- `res` stores the length of the longest subarray found so far.
- As the code iterates through the list, it updates `j` whenever a non-maximum value is found.
- The length of the current subarray containing only the maximum value is calculated as `i - j`.
- The maximum length found is stored in `res` and returned as the final result.
- In essence, the code efficiently finds the longest subarray of maximum values by keeping track of the last non-maximum index and updating the maximum length accordingly.

# Complexity
- Time complexity: $$O(N)$$ with `N` is length of `nums`
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```python3 []
class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
        j, max_val, res = - 1, max(nums), 0
        for i, num in enumerate(nums):
            if num != max_val: j = i
            res = max(res, i - j)
        return res
```
```java []
class Solution {
    public int longestSubarray(int[] nums) {
        int j = -1;
        int maxVal = Arrays.stream(nums).max().getAsInt();
        int res = 0;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != maxVal) {
                j = i;
            }
            res = Math.max(res, i - j);
        }

        return res;
    }
}
```
```C++ []
class Solution {
public:
    int longestSubarray(vector<int>& nums) {
        int j = -1;
        int maxVal = *max_element(nums.begin(), nums.end());
        int res = 0;

        for (int i = 0; i < nums.size(); i++) {
            if (nums[i] != maxVal) {
                j = i;
            }
            res = max(res, i - j);
        }

        return res;
    }
};
```
``` Go []
func longestSubarray(nums []int) int {
    j := -1
    maxVal := math.MinInt32
    for _, num := range nums {
            if num > maxVal {
                    maxVal = num
            }
    }
    res := 0
    for i, num := range nums {
            if num != maxVal {
                    j = i
            }
            res = int(math.Max(float64(res), float64(i-j)))
    }
    return res
}
```
```TypeScript []
function longestSubarray(nums: number[]): number {
    let j = -1;
    let maxVal = Math.max(...nums);
    let res = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== maxVal) {
        j = i;
        }
        res = Math.max(res, i - j);
    }

    return res;
};
```
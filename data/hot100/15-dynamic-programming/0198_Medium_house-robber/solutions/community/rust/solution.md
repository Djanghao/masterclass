# ✅🏘| How to rob houses in all languages | 100% beaten | 🏘

**Author:** makarkananov
**Votes:** 11
**Link:** [https://leetcode.com/problems/house-robber/solutions/4603599/](https://leetcode.com/problems/house-robber/solutions/4603599/)

---

## Intuition
To maximize the amount of money you can rob, consider the two options for each house: either rob the current house and add its value to the total, or skip the current house and keep the total unchanged. To determine the optimal choice, compare the total amount of money that can be obtained by robbing the current house with the total amount obtained from the previous house.

---
## Approach
The approach is to use **dynamic programming** to calculate the maximum amount of money that can be robbed without alerting the police. We use an array `dp` to store the maximum amount of money that can be robbed up to the current house. 

1. For the **first house** (`i = 0`): `dp[0] = nums[0]`

2. For the **second house** (`i = 1`): `dp[1] = max(nums[0], nums[1])`

3. **Recurrence Relation**:
For any house `i >= 2`: `dp[i] = max(dp[i-2] + nums[i], dp[i-1])`

This recurrence relation states that for the current house (`i`), we have two choices:
- **Rob** the current house, in which case we add the current house's value (`nums[i]`) to the money obtained from skipping the previous house (`dp[i-2]`)

- **Skip** the current house and continue with the total obtained from the previous house (`dp[i-1]`) 

The maximum of these two choices is stored in `dp[i]`.

> Analyzing the above reasoning, we can notice that to calculate `dp[i]` we only need to know the two previous values (`dp[i-1]` and `dp[i-2]`), so we will only store them to optimize space complexity.

---
## Complexity
- Time complexity: `O(n)` - We iterate through the array once.

- Space complexity: `O(1)`.

---
## "Talk is cheap. Show me the code." - Linus Torvalds
``` C++ []
#include <vector>
#include <algorithm>

class Solution {
public:
    int rob(std::vector<int>& nums) {
        if (nums.size() == 1) {
            return nums[0];
        }

        int prevPrev = nums[0];
        int prev = std::max(nums[0], nums[1]);

        for (int i = 2; i < nums.size(); ++i) {
            int current = std::max(prevPrev + nums[i], prev);
            prevPrev = prev;
            prev = current;
        }

        return prev;
    }
};
```
``` Go []
func rob(nums []int) int {
    dp := make([]int, len(nums))
    if len(nums) == 1 {
        return nums[0]
    }
    
    dp[0] = nums[0]
    dp[1] = maxInt(nums[0], nums[1])
    for i := 2; i < len(nums); i++ {
        dp[i] = maxInt(dp[i - 2] + nums[i], dp[i - 1])
    }

    return dp[len(nums) - 1]
}

func maxInt(a int, b int) int {
    if a >= b {
        return a
    }
    return b
}
```
``` Python []
class Solution:
    def rob(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return nums[0]

        prevPrev, prev = nums[0], max(nums[0], nums[1])

        for i in range(2, len(nums)):
            current = max(prevPrev + nums[i], prev)
            prevPrev, prev = prev, current

        return prev

```
``` Javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (!nums || nums.length === 0) {
        return 0;
    }
    if (nums.length === 1) {
        return nums[0];
    }

    let prevPrev = nums[0];
    let prev = Math.max(nums[0], nums[1]);

    for (let i = 2; i < nums.length; ++i) {
        let current = Math.max(prevPrev + nums[i], prev);
        prevPrev = prev;
        prev = current;
    }

    return prev;
};

```
``` C# []
public class Solution {
    public int Rob(int[] nums) {
        if (nums == null || nums.Length == 0) {
            return 0;
        }
        if (nums.Length == 1) {
            return nums[0];
        }

        int prevPrev = nums[0];
        int prev = Math.Max(nums[0], nums[1]);

        for (int i = 2; i < nums.Length; ++i) {
            int current = Math.Max(prevPrev + nums[i], prev);
            prevPrev = prev;
            prev = current;
        }

        return prev;
    }
}
```
``` Rust []
impl Solution {
    pub fn rob(nums: Vec<i32>) -> i32 {
        if nums.is_empty() {
            return 0;
        }
        if nums.len() == 1 {
            return nums[0];
        }

        let mut prev_prev = nums[0];
        let mut prev = nums[0].max(nums[1]);

        for i in 2..nums.len() {
            let current = prev_prev + nums[i];
            prev_prev = prev;
            prev = current.max(prev);
        }

        prev
    }
}
```
``` Java []
class Solution {
    public int rob(int[] nums) {
        if (nums == null || nums.length == 0) {
            return 0;
        }
        if (nums.length == 1) {
            return nums[0];
        }

        int prevPrev = nums[0];
        int prev = Math.max(nums[0], nums[1]);

        for (int i = 2; i < nums.length; ++i) {
            int current = Math.max(prevPrev + nums[i], prev);
            prevPrev = prev;
            prev = current;
        }

        return prev;
    }
}

```
``` Ruby []
# @param {Integer[]} nums
# @return {Integer}
def rob(nums)
    return 0 if nums.nil? || nums.empty?
    return nums[0] if nums.length == 1

    prev_prev = nums[0]
    prev = [nums[0], nums[1]].max

    (2...nums.length).each do |i|
        current = [prev_prev + nums[i], prev].max
        prev_prev = prev
        prev = current
    end

    prev
end
```
---
## Results
![image.png](./images/0.png)

---
![image.png](./images/1.png)



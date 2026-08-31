# Optimized  100 % fast solution

**Author:** vicky_yadav
**Votes:** 1
**Link:** [https://leetcode.com/problems/target-sum/solutions/3798324/](https://leetcode.com/problems/target-sum/solutions/3798324/)

---

# Intuition

The optimized solution applies a 0/1 Knapsack approach to count the number of ways to achieve a specific target sum using elements from the nums array

# Approach
0/1 Knapsack Approach

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

O(n * target)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    int findTargetSumWays(std::vector<int>& nums, int target) {
        int totalSum = 0;
        for (int num : nums) {
            totalSum += num;
        }

        if (abs(target) > totalSum || (totalSum + target) % 2 != 0) {
            return 0;
        }

        int subsetSum = (totalSum + target) / 2;

        std::vector<int> dp(subsetSum + 1, 0);
        dp[0] = 1;

        for (int num : nums) {
            for (int i = subsetSum; i >= num; --i) {
                dp[i] += dp[i - num];
            }
        }

        return dp[subsetSum];
    }
};
```
```

```java []
class Solution {
    public int findTargetSumWays(int[] nums, int target) {
        int totalSum = 0;
        for (int num : nums) {
            totalSum += num;
        }

        if (Math.abs(target) > totalSum || (totalSum + target) % 2 != 0) {
            return 0;
        }

        int subsetSum = (totalSum + target) / 2;

        int[] dp = new int[subsetSum + 1];
        dp[0] = 1;

        for (int num : nums) {
            for (int i = subsetSum; i >= num; --i) {
                dp[i] += dp[i - num];
            }
        }

        return dp[subsetSum];
    }
}
```
```ruby []
class Solution
  def find_target_sum_ways(nums, target)
    total_sum = nums.sum

    return 0 if target.abs > total_sum || (total_sum + target) % 2 != 0

    subset_sum = (total_sum + target) / 2

    dp = Array.new(subset_sum + 1, 0)
    dp[0] = 1

    nums.each do |num|
      subset_sum.downto(num) do |i|
        dp[i] += dp[i - num]
      end
    end

    dp[subset_sum]
  end
end
```
```javascript []
function findTargetSumWays(nums, target) {
  let totalSum = nums.reduce((acc, num) => acc + num, 0);

  if (Math.abs(target) > totalSum || (totalSum + target) % 2 !== 0) {
    return 0;
  }

  let subsetSum = (totalSum + target) / 2;
  let dp = new Array(subsetSum + 1).fill(0);
  dp[0] = 1;

  for (let num of nums) {
    for (let i = subsetSum; i >= num; i--) {
      dp[i] += dp[i - num];
    }
  }

  return dp[subsetSum];
}
```




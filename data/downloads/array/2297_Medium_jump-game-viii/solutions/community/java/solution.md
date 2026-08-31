# Java | Monostack + DP | Concise & Short | Explained

**Author:** Student2091
**Votes:** 41
**Link:** [https://leetcode.com/problems/jump-game-viii/solutions/2140361/](https://leetcode.com/problems/jump-game-viii/solutions/2140361/)

---

I think this medium question is on the harder end of medium. That being said, we can break down what the conditions are:

1. `nums[i] <= nums[j]` and `nums[k] < nums[i]` for all indexes `k` in the range `i < k < j`:

	 - For each index `i`, there exists exactly 0 or 1 position where you can jump to - the rational behind this is if `i` can jump to `j` and `j+m`, then it must be a contridiction because it would mean `nums[i] <= nums[j]`, `nums[i] <= nums[j+m]`, `nums[i] > nums[j]`. The first & the third is a contridiction.

2. `nums[i] > nums[j]` and `nums[k] >= nums[i]` for all indexes `k` in the range `i < k < j`
     - Likewise, here `i` can only jump to 0 or 1 position. The rational behind this is identical to the above.

Once we get that out of the way, the question reduces to find the next greater than or equal to element and the next lesser element, and we can use a DP to keep track of the current best.
```Java
class Solution {
    public long minCost(int[] nums, int[] costs) {
        Deque<Integer> one = new ArrayDeque<>();
        Deque<Integer> two = new ArrayDeque<>();
        long[] dp = new long[nums.length];
        Arrays.fill(dp, Long.MAX_VALUE);
        dp[0] = 0;

        for (int i = 0; i < nums.length; i++){
            while(!one.isEmpty() && nums[i] >= nums[one.peek()]){
                dp[i] = Math.min(dp[i], dp[one.pop()] + costs[i]); // condition 1.
            }
            while(!two.isEmpty() && nums[i] < nums[two.peek()]){
                dp[i] = Math.min(dp[i], dp[two.pop()] + costs[i]); // condition 2.
            }
            one.push(i);
            two.push(i);
        }

        return dp[nums.length-1];
    }
}
```
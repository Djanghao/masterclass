# simple php solution

**Author:** geniusjulia
**Votes:** 1
**Link:** [https://leetcode.com/problems/house-robber/solutions/1186445/](https://leetcode.com/problems/house-robber/solutions/1186445/)

---

class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function rob($nums) {
	    // convert the big problem into a simple small piece
        // dp[n] = nums[n] + max(dp[n - 2], dp[n - 3])
        if ($nums == null) return 0;
        
		// initialize the dp array
        $dp = [];
        $dp[0] = $nums[0];
        $dp[1] = max($nums[0], $nums[1]);
        $dp[2] = $nums[2] + $nums[0];
        for ($i = 3; $i < count($nums); $i++) {
            $dp[$i] = $nums[$i] + max($dp[$i - 2], $dp[$i - 3]);
        }
        
        return max($dp);
    }
}
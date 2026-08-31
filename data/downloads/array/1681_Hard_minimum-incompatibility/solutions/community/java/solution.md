# backTracking(make subset), dp(merge subset)

**Author:** mot882000
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-incompatibility/solutions/4500401/](https://leetcode.com/problems/minimum-incompatibility/solutions/4500401/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    public int minimumIncompatibility(int[] nums, int k) {

        // 1. backTracking\uC744 \uC774\uC6A9\uD574 nums \uC5D0\uC11C nums.length/k \uAC1C\uB97C \uC120\uD0DD\uD558\uB294 \uBAA8\uB4E0 case\uB97C \uCC3E\uC544\uC11C 
        //    int[]{bitmask, max-min} \uD615\uD0DC\uB85C List<int[]> memo \uC5D0 \uC800\uC7A5\uD574\uC900\uB2E4.
        //    \u203B \uADF8\uB8F9\uC744 \uB9CC\uB4E4 \uB54C \uC911\uBCF5 \uC22B\uC790\uAC00 \uBC1C\uC0DD\uD558\uC9C0 \uC54A\uAC8C \uCC98\uB9AC
        //    \u203B \uCD5C\uC545\uC758 case\uB54C 16\uAC1C\uAC00 \uBAA8\uB450 \uB2E4\uB978\uC22B\uC790\uC774\uACE0 k\uB294 2 \uC77C \uB54C 12870\uAC1C\uAC00 \uBC1C\uC0DD\uD55C\uB2E4. 

        // 2. dp[k][1<<nums.legnth(bitmask \uC774\uC694)] \uC744 \uC120\uC5B8\uD574 \uC900\uB2E4.
        //    dp[i][j] \uB294 i+1 \uAC1C\uC758 \uADF8\uB8F9\uC744 \uD569\uCE58\uACE0 \uD569\uCE5C \uADF8\uB8F9\uC758 \uACB0\uACFC\uAC00 bitmask(j) \uC774\uBA70 i+1 \uAC1C \uADF8\uB8F9\uC758 max-min \uC758 \uD569\uC758 \uCD5C\uC18C \uAC12
        //   1) \uCD08\uAE30\uAC12 dp[0][] \uC5D0 1. \uC5D0\uC11C \uAD6C\uD55C List<int[]> memo \uAC12\uB4E4\uC744 bitmask \uC5D0 \uB9DE\uB294 \uD615\uD0DC\uB85C \uB123\uC5B4\uC900\uB2E4.  dp[0][memo.get(i)[0]] = memo.get(i)[1];
        //   2) dp[i-1][] \uC744 \uC21C\uD68C\uD558\uBA74\uC11C dp[i-1][j]\uAC00 0 \uC774\uC544\uB2C8\uBA74 
        //     List<int[]> memo \uC758 \uBAA8\uB4E0 bitmask \uAC12\uB4E4\uACFC &\uC5F0\uC0B0\uC744 \uD574\uC11C \uACB0\uACFC\uAC00 0\uC77C \uB54C\uB9CC 
        //     dp[i-1][memo.get(a)[0]|j] \uAC12\uC744 dp[i-1][j] + memo.get(a)[1] (\uD55C \uADF8\uB8F9\uC758 max-min \uAC12) \uACFC \uBE44\uAD50\uD574\uC11C \uC791\uC740 \uAC12\uC73C\uB85C \uAC31\uC2E0\uD574\uC900\uB2E4.
        //    \u203B \uCD5C\uB300 12870 * 12870 \uC758 loop \uBC1C\uC0DD

        // 3. dp[dp.length-1][] \uAC12 \uC911 0 \uC744 \uC81C\uC678\uD55C \uAC00\uC7A5 \uC791\uC740 \uAC12\uC744 \uBC18\uD658


        if ( nums.length/k == 1) return 0;
        
        Arrays.sort(nums);
        
        List<int[]> memo = new ArrayList<int[]>();
        backTracking(nums, 0, new ArrayList<Integer>(), nums.length/k, memo, 0);

        int dp[][] = new int[k][1 << nums.length ];
        for(int i = 0; i < memo.size(); i++) dp[0][memo.get(i)[0]] = memo.get(i)[1];

        for(int i = 1; i < dp.length; i++) {

            for(int j = 0; j < dp[i].length; j++) {
                if ( dp[i-1][j] != 0 ) {
                    
                    for(int a = 0; a < memo.size(); a++) {
                        
                        if ( (memo.get(a)[0] & j) == 0) {
                            if ( dp[i][memo.get(a)[0]|j] == 0 ) dp[i][memo.get(a)[0]|j] = memo.get(a)[1] + dp[i-1][j];
                            else  dp[i][memo.get(a)[0]|j] = Math.min(dp[i][memo.get(a)[0]|j], memo.get(a)[1] + dp[i-1][j]);
                        }
                    }
                }
            }
        }

        // for(int i = 0; i < dp.length; i++) {
        //     for(int j = 0; j < dp[i].length; j++) {
        //         System.out.print(dp[i][j]+ " ");
        //     }
        //     System.out.println();
        // }

        int min = Integer.MAX_VALUE;
        for(int i = 0; i < dp[dp.length-1].length; i++) {
            if ( dp[dp.length-1][i] == 0)  continue;
            System.out.println(dp[dp.length-1][i]);
            min = Math.min(min, dp[dp.length-1][i]);
        }
    
        return min==Integer.MAX_VALUE?-1:min;
    }

    private void backTracking(int[] nums, int idx, List<Integer> path, int k, List<int[]> memo, int bitmask) {
        
        if ( idx == nums.length ) {
            if ( path.size() == k ) {
                memo.add(new int[] {bitmask, nums[path.get(path.size()-1)] - nums[path.get(0)]});
            }
            return;
        }

        
        boolean isPossible = true;
        for(int i = 0; i < path.size(); i++) {
            if ( nums[path.get(i)] == nums[idx])  {
                isPossible = false;
                break;
            }
        }
        if ( isPossible ) {
            path.add(idx);
            backTracking(nums, idx+1, path, k, memo, bitmask + (1 << idx));
            path.remove(path.size()-1);
        }
        backTracking(nums, idx+1, path, k, memo, bitmask);
        
    }
}
```
# DP Recursion Java with explanation of subproblems

**Author:** kdaahri
**Votes:** 11
**Link:** [https://leetcode.com/problems/largest-sum-of-averages/solutions/1354479/](https://leetcode.com/problems/largest-sum-of-averages/solutions/1354479/)

---

This problem is about is tricky because of at most `k` splits, and getting `averages` for each split. The way I think about these array problems that ask to split the array or partition the array is to actually split the array in as many ways as possible. I will enumerate through all possible partitions and save the result in a DP. This might not be the most performant solution, but it has been reliable for me to solve the problem myself without looking at the solution first.

Examining the below code, we start the recursion off with the two ranges of `start=0` `end=nums.length`. Our very first recursive call will attempt to split the `nums` array at every index. This is why we have a loop in the recursive function. Each recursive step is actually trying to build the BEST partition starting at `index=start`. Our recursive call within the loop gives us the BEST partition total sum of the partitions AFTER `index=start`.

In essence, we are trying to build the best partition at the curent index and asking the recursion to give us the best partition sums later on. This is the optimal substructure of this problem. 

The state transfer equation decrements `k-1` and increments `start+1`. We decrement `k` because each call to `divide` means we are making a split. That means we are using a unit of `k`. The later subproblems that will find us the best partition sum after our current index will have `k-1` partitions to work with. We increment `i` because that is how we are saying we are making the next split.

```
class Solution {
  public double largestSumOfAverages(int[] nums, int k) {
    int n = nums.length;
    Double[][] dp = new Double[n][k];
    return divide(nums, 0, n, k-1, dp);
  }
  
  public double divide(int[] nums, int start, int end, int k, Double[][] dp) {
    if(start >= end) return 0;
    if(dp[start][k] != null) return dp[start][k];
    if(k == 0) {
      double lastPartitionSum = 0;
      for(int j = start; j < end; j++) {
        lastPartitionSum += nums[j];
      }
      return lastPartitionSum / (end - start);
    }
    
    double max = 0;
    for(int i = start+1; i < end; i++) { // try to split at every single index > start
      double res = divide(nums, i, end, k-1, dp);
      
      double currPartitionSum = 0;
      for(int j = start; j < i; j++) { // get the average of the partition we just tried to make
        currPartitionSum += nums[j];
      }
      double avg = currPartitionSum / (i - start); 
      max = Math.max(res + avg, max); // optimal substructure, find the best partition at each index
    }
    dp[start][k] = max;
    return max;    
  }
}
```

Upvote if this helped you \uD83D\uDC4D
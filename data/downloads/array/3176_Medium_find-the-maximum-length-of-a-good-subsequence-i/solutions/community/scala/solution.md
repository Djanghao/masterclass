# Best code beat 1000% and easy + simple just read line by line

**Author:** MySelfSanyam08
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-maximum-length-of-a-good-subsequence-i/solutions/5280652/](https://leetcode.com/problems/find-the-maximum-length-of-a-good-subsequence-i/solutions/5280652/)

---

# Intuition
Just see the code

# Approach
normal recursion + memo

# Complexity
- Time complexity:Dont know can be O(2^n)

- Space complexity:O((l+1)*(l+1)*(k+2))
# Code
```
class Solution {
    Integer[][][] dp;
    public int maximumLength(int[] nums, int k,int i,int last) {
        if(i==nums.length)return 0;
        if(dp[i][last+1][k]!=null)return dp[i][last+1][k];
        int len=0;
        if(last!=-1 && k!=0 && nums[i]!=nums[last] ){
                len=1+Math.max(len, maximumLength(nums,k-1,i+1,i));
        }
        if(last!=-1 && nums[i]==nums[last]){
            len=1+Math.max(len, maximumLength(nums,k,i+1,i));
        }
        if(last==-1)len=1+Math.max(len, maximumLength(nums,k,i+1,i));
        len=Math.max(len, maximumLength(nums,k,i+1,last));
        dp[i][last+1][k]=len;
        return len;
        
    }
    public int maximumLength(int[] nums, int k) {
        dp=new Integer[nums.length+1][nums.length+2][k+1];
        return maximumLength(nums,k,0,-1);
    }
}
```
# Easy

**Author:** jovamilenkovic
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-sum-obtained-of-any-permutation/solutions/5421869/](https://leetcode.com/problems/maximum-sum-obtained-of-any-permutation/solutions/5421869/)

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
public class Solution {
    public int MaxSumRangeQuery(int[] nums, int[][] r) {
        int n=nums.Length;
        int []h= new int[n+1];
        for (int i=0; i< r.Length; i++){
            h[r[i][0]]++;
            h[r[i][1]+1]--;
        }
        for (int i=1; i<n; i++){
            h[i]+=h[i-1];
        }
        h[n]=0;
        Array.Sort(h);
        Array.Sort(nums);
long ans=0;
        for (int i=n-1; i>=0; i--){
            ans+=(long)(nums[i])*(long)(h[i+1]);
            ans%=1000000007;
        }
        return (int) ans;
    }
}
```
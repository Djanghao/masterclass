# DP || MEMOIZATION

**Author:** nitleet12
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-the-sum-of-subsequence-powers/solutions/4947583/](https://leetcode.com/problems/find-the-sum-of-subsequence-powers/solutions/4947583/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->Sort the Array.
Easy to calculate difference in sorted array.

# Approach
<!-- Describe your approach to solving the problem. -->
By sorting, the subsequences created would be same, since the order is not necessary in subsequence.
Since the power is the minimum difference in the subsequence, so sorting the array is a better choice.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    int mod = (int)1e9+7;
    HashMap<String,Integer> memo;
    public int sumOfPowers(int[] nums, int k) {
        Arrays.sort(nums);
        memo=new HashMap<>();
        return dp(nums,k,0,Integer.MAX_VALUE,nums.length-1,nums.length);
    }
    
    int dp(int[] nums,int k, int len, int diff, int index, int prev){
        if(len==k){
            return diff;
        }
        if(index<0) return Integer.MAX_VALUE;
        String str=""+diff+"_"+len+"_"+index+"_"+prev;
        if(memo.containsKey(str)) return memo.get(str);
        int temp = dp(nums,k,len,diff,index-1,prev);
        int total=0;
        if(temp!=Integer.MAX_VALUE) total+=temp;
        if(prev!=nums.length) diff=Math.min(diff,nums[prev]-nums[index]);
        temp=dp(nums,k,len+1,diff,index-1,index);
        if(temp!=Integer.MAX_VALUE) total = total + temp;
        total%=mod;
        memo.put(str,total);
        return total;
    }
}
```
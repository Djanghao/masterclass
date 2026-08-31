# JAVA DFS solution, only traversing possible value, 12ms

**Author:** KnightY
**Votes:** 1
**Link:** [https://leetcode.com/problems/split-array-with-equal-sum/solutions/101494/](https://leetcode.com/problems/split-array-with-equal-sum/solutions/101494/)

---

It will save lots of time by narrowing down the target value range. Happy coding!
```
public class Solution {
    private boolean dfs(int[] sum,int start,int target,int level){
        if(level==3){
            if(start<sum.length&&sum[sum.length-1]-sum[start-1]==target) return true;
            return false;
        }
        for(int i=start;i<sum.length;i++){
            if(sum[i]-sum[start-1]==target&&dfs(sum,i+2,target,level+1)) return true;
        }
        return false;
    }
    public boolean splitArray(int[] nums) {
        if(nums.length<6) return false;
        int[] sum=new int[nums.length];
        int max=Integer.MIN_VALUE;
        int min=Integer.MAX_VALUE;
        for(int i=0;i<nums.length;i++){
            max=Math.max(max,nums[i]);
            min=Math.min(min,nums[i]);
            sum[i]=(i==0)?nums[i]:sum[i-1]+nums[i];
        }
        int tempmin=(sum[sum.length-1]-3*max)/4;
        int tempmax=(sum[sum.length-1]-3*min)/4;
        min=tempmin;
        max=tempmax;
        for(int i=0;i<nums.length;i++){
            if(sum[i]>=min&&sum[i]<=max){
                int target=sum[i];
                if(dfs(sum,i+2,target,1)) return true;
            }
        }
        return false;
    }
}
```
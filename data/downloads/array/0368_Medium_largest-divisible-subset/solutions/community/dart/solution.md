# BEATS 100% DART solution

**Author:** Mohamed_Sadeck
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-divisible-subset/solutions/4702344/](https://leetcode.com/problems/largest-divisible-subset/solutions/4702344/)

---


# Code
```
class Solution {
  List<int> largestDivisibleSubset(List<int> nums) {
    if(nums.length==1) return [nums.first];
    List<int> ans=[];
    nums.sort();
    List<int> temp;
    List<List<int>> dp=List.generate(nums.length,(index)=>[nums[index]]);
    for(int i=nums.length-2;i>=0;i--){
        temp=dp[i];
        for(int j=i+1;j<nums.length;j++){
            if(dp[j].first % dp[i].first == 0 && dp[j].length+1 > temp.length){
                temp=[...dp[i],...dp[j]];
            }
        }
        dp[i]=temp;
    }
    ans=dp.reduce((a,b)=>a.length>b.length?a:b);
    return ans;
  }
}
```
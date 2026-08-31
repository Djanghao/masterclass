# Easy JAVA solution || beats 100% 🔥🔥🔥

**Author:** rini03
**Votes:** 6
**Link:** [https://leetcode.com/problems/minimum-average-of-smallest-and-largest-elements/solutions/5355486/](https://leetcode.com/problems/minimum-average-of-smallest-and-largest-elements/solutions/5355486/)

---

# Complexity
- Time complexity:
O(nlogn) for sort and O(n/2) for main logic

- Space complexity:
Constant O(1) 

# Code
```
class Solution {
    public double minimumAverage(int[] nums) {
        Arrays.sort(nums);
        int s=0,e=nums.length-1;
        double ans=(nums[s]+nums[e])/2.0;
        
        while(s<=e){
            System.out.println(ans);
            ans=Math.min(ans,((nums[s]+nums[e])/2.0));
            s++;
            e--;
        }
        return ans;
    }
}
```
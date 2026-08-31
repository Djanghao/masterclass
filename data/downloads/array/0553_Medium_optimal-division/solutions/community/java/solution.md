# Simple java solution

**Author:** HIMANSHUCHHIKARA
**Votes:** 3
**Link:** [https://leetcode.com/problems/optimal-division/solutions/1109725/](https://leetcode.com/problems/optimal-division/solutions/1109725/)

---

we just need to put parenthesis at index 1  and last  index (0 baised index) everytime. 
except 1st index every value will be at numerator if we put parenthesis at index 1 and last index

**Time:O(n)**
```
class Solution {
    public String optimalDivision(int[] nums) {
    
         if(nums.length==1){
            return nums[0] + "";
        }else if(nums.length==2){
            StringBuilder sb=new StringBuilder();
            sb.append(nums[0] + "/" + nums[1]);
            return sb.toString();
        }
        
        StringBuilder sb=new StringBuilder();
         sb.append(nums[0]);
         sb.append("/(");
       for(int i=1;i<nums.length-1;i++){           
            sb.append(nums[i] + "/");
        }
        sb.append(nums[nums.length-1] + ")");
      
        return sb.toString();
    }
}
```
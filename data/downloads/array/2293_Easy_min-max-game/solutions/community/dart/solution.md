# Beats 100%

**Author:** Vaishnavravi
**Votes:** 0
**Link:** [https://leetcode.com/problems/min-max-game/solutions/5339824/](https://leetcode.com/problems/min-max-game/solutions/5339824/)

---



# Code
```
class Solution {
  int minMaxGame(List<int> nums) {
    int n = nums.length;
    if(n==1){
        return nums[0];
    }
        List<int> newnums= List.filled((n/2).toInt(),0);
        for(int i=0;i<n/2;i++){
            if(i%2==0){
                newnums[i]= min(nums[2 * i], nums[2 * i + 1]);
            }else{
                newnums[i]= max(nums[2 * i], nums[2 * i + 1]);
            } 
        }
        nums=newnums;
        if(nums.length !=1){
            return minMaxGame(nums);
        }
        return nums[0];
  }
}
```
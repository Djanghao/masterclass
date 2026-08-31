# 🔥Dart simple solution🚀

**Author:** Mahmoud_Zakaria
**Votes:** 3
**Link:** [https://leetcode.com/problems/jump-game/solutions/2953014/](https://leetcode.com/problems/jump-game/solutions/2953014/)

---


If you Learned something new please give it upvote;
otherwise thank you for having a look \uD83D\uDE4F\uD83C\uDFFB



# Code
Solution 1
```
class Solution {
  bool canJump(List<int> nums) {
      if(nums[0] >= nums.length-1)return true;
        int n = nums[0] , j=0, cr=0 ;
            for(int i=1; i<=n; i++){
                if(nums[i]>=nums[cr]-j){
                    j=-1 ;
                    n=nums[i]+i;
                    cr=i ;
                    if(n >= nums.length-1)return true;
                }
                j++ ;
            }
            return false ;

  }
}
```
solution 2
```
class Solution {
  bool canJump(List<int> nums) {    
        int i = 0 , n = nums.length ;
        for (int reach = 0; i < n && i <= reach; ++i)
        reach = max(i + nums[i], reach);
        return i == n;

  }
}
```

Pls upvote the solution if you found helpful, it means a lot.
Also comment down your doubts.
Happy Coding :)

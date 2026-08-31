# Dart simple solution

**Author:** Mahmoud_Zakaria
**Votes:** 4
**Link:** [https://leetcode.com/problems/remove-element/solutions/2841428/](https://leetcode.com/problems/remove-element/solutions/2841428/)

---



If you Learned something new please give it upvote;
otherwise thank you for having a look \uD83D\uDE4F\uD83C\uDFFB



# Code
```
class Solution {
  int removeElement(List<int> nums, int val) {

      int cnt = 0 ;
        for (int i = 0 ; i < nums.length ; i++){
            if(nums[i] != val){
                nums[cnt] = nums[i] ;
                cnt++ ;
            }
        }
        return cnt ;

  }
}
```
Pls upvote the solution if you found helpful, it means a lot.
Also comment down your doubts.
Happy Coding :)
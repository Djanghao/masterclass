# PHP Solution

**Author:** nacoia
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-product-of-three-numbers/solutions/1308557/](https://leetcode.com/problems/maximum-product-of-three-numbers/solutions/1308557/)

---

class Solution {

               
			   function maximumProduct($nums) {
        
              rsort($nums);
        
             if($nums[count($nums)-1]*$nums[count($nums)-2]>$nums[1]*$nums[2] && $nums[0]> 0 )
                {
              return $nums[count($nums)-1]*$nums[count($nums)-2]*$nums[0];
                  }
             else
                   return $nums[0]*$nums[1]*$nums[2];
              }
}
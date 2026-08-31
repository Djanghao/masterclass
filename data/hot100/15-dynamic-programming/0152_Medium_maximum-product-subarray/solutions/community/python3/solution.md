# Solution

**Author:** deleted_user
**Votes:** 224
**Link:** [https://leetcode.com/problems/maximum-product-subarray/solutions/3176155/](https://leetcode.com/problems/maximum-product-subarray/solutions/3176155/)

---

```C++ []
class Solution {
public:
    int maxProduct(vector<int>& nums) {
         int maxi = nums[0];
        int mini = nums[0];
        int ans = nums[0];
        for(int i = 1;i < nums.size();i++){
            if(nums[i] < 0){
                swap(maxi,mini);
            }
            maxi = max(nums[i],maxi*nums[i]);
            mini = min(nums[i],mini*nums[i]);
            ans = max(ans,maxi);
        }
        return ans;
    }
};
```

```Python3 []
from math import inf

class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        
        p = 0
        
        first_neg = 0
        first_neg_excluded = False
        
        p_max = -inf
        
        for x in nums:
            
            if x == 0:
                p = 0
                first_neg = 0
                first_neg_excluded = False
            
            elif x > 0:
                
                if p == 0:
                    p = x
                    
                else:
                    p *= x
                
                    if p < 0:
                        p //= first_neg
                        first_neg_excluded = True
            
            else:
                p = p * x if p != 0 else x
                
                if p < 0:
                
                    if first_neg == 0:
                        first_neg = p
                    
                    elif first_neg_excluded:
                        p *= first_neg
                        first_neg_excluded = False
                    
                    else:
                        p //= first_neg
                        first_neg_excluded = True
            
            if p > p_max:
                p_max = p
        
        return p_max
```

```Java []
class Solution {
  public int maxProduct(int[] nums) {
    int ans = nums[0];
    int dpMin = nums[0];
    int dpMax = nums[0];

    for (int i = 1; i < nums.length; ++i) {
      final int num = nums[i];
      final int prevMin = dpMin;
      final int prevMax = dpMax;
      if (num < 0) {
        dpMin = Math.min(prevMax * num, num);
        dpMax = Math.max(prevMin * num, num);
      } else {
        dpMin = Math.min(prevMin * num, num);
        dpMax = Math.max(prevMax * num, num);
      }
      ans = Math.max(ans, dpMax);
    }
    return ans;
  }
}
```

# Easy understanding Python ~meow

**Author:** amberljc
**Votes:** 2
**Link:** [https://leetcode.com/problems/subsequence-of-size-k-with-the-largest-even-sum/solutions/1759070/](https://leetcode.com/problems/subsequence-of-size-k-with-the-largest-even-sum/solutions/1759070/)

---

```
class Solution:
    def largestEvenSum(self, nums: List[int], k: int) -> int:
        # even = odd * even + even
        nums = sorted(nums)[::-1] 
        if sum(nums[:k]) %2 ==0 :
            return sum(nums[:k])
        
        remove_odd = None
        remove_even = None
        for n in  nums[:k]:
            if n%2==1:
                remove_odd = n
            else:
                remove_even = n
        add_even = None
        add_odd = None
        for n in reversed(nums[k:]):
            if n%2 == 0:
                add_even = n
            else:
                add_odd = n
            
             
        if  (  add_odd is None or   remove_even is None) and  (  remove_odd is None or   add_even is None):
            return -1
        
         
        if  add_even is None or  remove_odd is None:
            return sum(nums[:k]) +  add_odd-remove_even
        if   add_odd is None or   remove_even is None:
            return sum(nums[:k]) + add_even-remove_odd
        return sum(nums[:k]) + max( add_even-remove_odd, add_odd-remove_even)
        
        
```
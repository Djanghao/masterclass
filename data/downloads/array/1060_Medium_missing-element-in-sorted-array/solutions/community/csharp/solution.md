# Binary search

**Author:** jovamilenkovic
**Votes:** 0
**Link:** [https://leetcode.com/problems/missing-element-in-sorted-array/solutions/5555540/](https://leetcode.com/problems/missing-element-in-sorted-array/solutions/5555540/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int MissingElement(int[] nums, int k) {
        int n= nums.Length;
        int mis= nums[n-1]-nums[0]+1- n;
        if(mis<k) return nums[n-1]+k-mis;
        int l=0, r=n-1;
    while(l<=r){
        int m=(r+l)/2;
        
        if(nums[m]-nums[0]+1-(m+1)<k && nums[m+1]-nums[0]+1-(m+2)>=k) 
        return nums[m]+k-(nums[m]-nums[0]+1-(m+1));
        else if(nums[m]-nums[0]-m>=k) r=m-1;
        else l=m+1;
    }
    return 5;

        return 5;
    }
}
```
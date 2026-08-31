# Solution in Dart

**Author:** user7097xf
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/solutions/5408084/](https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/solutions/5408084/)

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
class Solution {
  int minDifference(List<int> nums) {
    nums.sort();
    int len = nums.length;
    int j=0;
    len =len-1;
    if(len>=4){
        int k =3;
        while(k>0){   
            int right = nums[len]-nums[len-k];
            int left = nums[k]-nums[0];
            if(left>=right){
                 nums[0]=nums[k];
            }else{
                nums[len]=nums[len-k];
            }   
             nums.sort();
             k--;
        }
    return nums[len]-nums[0];
    }
    else{
        return 0;
    }
  }
}
```
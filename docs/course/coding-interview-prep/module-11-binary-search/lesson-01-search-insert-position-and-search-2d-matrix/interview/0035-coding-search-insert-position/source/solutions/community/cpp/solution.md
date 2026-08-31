# Easy and Simple C++ approach | Binary search :)

**Author:** Scaar
**Votes:** 625
**Link:** [https://leetcode.com/problems/search-insert-position/solutions/3409777/](https://leetcode.com/problems/search-insert-position/solutions/3409777/)

---


# Approach
- `binary seaerch` approach is damn easy for this question and also easy to think of it.
- the array is sorted so we just have to fugure out where should it be placed.
- so we just have to figure out the position at which the `prevoius value` is less that our element and `next` value is more than our element.
- Thats how its figured out that it's a binary seach problem.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(log(n))
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

## `Upvote! It only takes 1 click :)`

# Code
```
class Solution {
public:
    int searchInsert(vector<int>& nums, int target) {
        int low=0;
        int high=nums.size();
        int mid;
        if(target>nums[high-1]){
            return high;
        }
        while(low<=high){
              mid=(low+high)/2;
            if(nums[mid]==target){  
                return mid;
            }
          
            if(target<nums[mid]){     
            high=mid-1;    
            }else{
            low=mid+1;        
            }
          
        }
         return  low;   
    }
};
```
![Upvote.jpeg](./images/0.jpeg)

# Simple C++ solution with explanation

**Author:** khusmodi
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-adjacent-swaps-to-make-a-valid-array/solutions/2648207/](https://leetcode.com/problems/minimum-adjacent-swaps-to-make-a-valid-array/solutions/2648207/)

---

For details, follow the comments in the code.

```
class Solution {
private:    
    int get_min_swaps(vector<int> nums) {
		//4 variables (minimum element, minimum element index), (maximum element, maximum element index)
        int min_ele = nums[0];
        int max_ele = nums[0];
        int min_ele_ind = 0;
        int max_ele_ind = 0;
		//size of the input
        int n = nums.size();
        
		/* iterate over the nums array and find the first occurence of minimum element
			and the last occurence of the maximum element.
			The idea here is that we are going to do minimum number of swaps. And to get the minimum swaps,
			we would want the minimum element closer to the left end and maximum element closer to the right end.
			Hence, we try to see if we can get first occurence of the minimum element and last occurence of the 
			maximum element starting from the left.
		*/
        for ( int i = 0; i < n; i++ ) {
            if ( nums[i] < min_ele ) {
                min_ele = nums[i];
                min_ele_ind = i;
            }
            if ( nums[i] >= max_ele ) {
                max_ele = nums[i];
                max_ele_ind = i;
            }
        }
        
		/* This case signifies that minimum element lies on left side of maximum element.
			Hence we would try to move the min element to left and max to right
		*/
        if ( min_ele_ind <= max_ele_ind ) {
            return (n - 1 - max_ele_ind) + (min_ele_ind);
        }
		/* This case signifies that minimum element occurs after maximum element. Hence when moving the 
			maximum element to the right end, we would have already moved the minimum element by 1 step 
			(hence the min_ele_ind - 1)
		*/
        else {
            return (n - 1 - max_ele_ind) + (min_ele_ind - 1);
        }
    }
    
public:
    int minimumSwaps(vector<int>& nums) {
        return get_min_swaps(nums);
    }
};
```
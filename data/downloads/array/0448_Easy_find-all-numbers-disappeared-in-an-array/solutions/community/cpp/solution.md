# Easy C++ with explanation. O(N) running time, O(1) space.

**Author:** MalJ
**Votes:** 45
**Link:** [https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/solutions/419876/](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/solutions/419876/)

---

**Algorithm**

We know that all the values are between 1 and the size of the array, so the idea is to use the indices of the original array to represent the values that are found in the array.
We know that all the values in the array are positive, so we can signal the presence of a value by changing its index (or better still, like in my implementation, the index minus 1, to avoid the 'special case' of values that equal n, which has no vector element) to be negative.
We then loop over the vector, and any positive index indicates that the value (index + 1) does not appear in the vector, so we add it to the list to return.


**Complexity**

We loop over the array twice, so the running time is O(2N), which is O(N).
We use the original vector for keeping count of which values appear in the array, so we use O(1) space.


**The Code**

```
class Solution {
public:
    vector<int> findDisappearedNumbers(vector<int>& nums) {
        vector<int> results;
        
        // Set contents of all indices (minus 1) that appear in the array to be negative
        for (int i = 0; i < nums.size(); ++i)
        {
			// Note that we have to use the absolute value in the next 2 lines, to avoid trying to access a negative index in some cases
            if (nums[abs(nums[i]) - 1] > 0)
                nums[abs(nums[i]) - 1] *= -1;
        }
        
        // A positive element means that the element (index + 1) does not appear in the array, so save it
        for (int i = 0; i < nums.size(); ++i)
            if (nums[i] > 0)
                results.push_back(i + 1);
        
        return results;
    }
};
```
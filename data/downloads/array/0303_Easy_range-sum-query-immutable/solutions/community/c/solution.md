# [C++] Easy, Clean Solution using Prefix Sums

**Author:** rsgt24
**Votes:** 16
**Link:** [https://leetcode.com/problems/range-sum-query-immutable/solutions/1406518/](https://leetcode.com/problems/range-sum-query-immutable/solutions/1406518/)

---

**Solution:**

Approach
1. First calculate prefix sums array for the given array `nums`.
2. Now, your task is to find sum of elements from `left to right`.
3. If `left == 0`, means we need to directly return sum at the index `pref[right]`.
4. Otherwise, just return the difference of sums at `pref[right] - pref[left - 1]`.

Example:
`ar = [-2, 0, 3, -5, 2, -1]`
`range = [0, 2], [2, 5]`

`Prefix Sums Array = [-2,-2,1,-4,-2,-3]`

`Output:`
For query 1, `left == 0`, return prefix sum at index right. `Print pref[2] = 1`
For query 2, `left != 0`, return pref[right] - pref[left - 1]. `Print pref[5] - pref[1] = -1`

```
class NumArray {
public:
    vector<int> pref;
    NumArray(vector<int>& nums) {
        int n = nums.size();
		pref.clear();
        for(int i = 0; i < n; i++){
            if(i == 0)
                pref.push_back(nums[i]);
            else
                pref.push_back(nums[i] + pref[i - 1]);
        }
    }  
    int sumRange(int left, int right) {
        if(left == 0)
            return pref[right];
        return pref[right] - pref[left - 1]; 
    }
};
```

**Feel free to share your ideas or any improvements as well.**
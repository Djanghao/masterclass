# Easy C++ Approach || reverse traverse || short C++ code

**Author:** VedantSharma11
**Votes:** 13
**Link:** [https://leetcode.com/problems/largest-element-in-an-array-after-merge-operations/solutions/3803784/](https://leetcode.com/problems/largest-element-in-an-array-after-merge-operations/solutions/3803784/)

---

### Approach
* simply start traversing from the back of the array checking the condition mentioned in the problem statement and keep updating the indices.
* At the last you can either return the max element of the array or directly return nums2[0], since the largets will be present at 0th index.

### Complexity
* TC: O(N)
* SC: O(N)
```
class Solution {
public:
    long long maxArrayValue(vector<int>& nums) {
      vector<long long>nums2;
      for(auto &x:nums) nums2.push_back(x);
        
        for(int i=nums2.size()-1;i>0;i--){
            if(nums2[i-1]<=nums2[i]){
                nums2[i-1]=nums2[i-1]+nums2[i];
            }
        }
        return nums2[0];
    }
};
```
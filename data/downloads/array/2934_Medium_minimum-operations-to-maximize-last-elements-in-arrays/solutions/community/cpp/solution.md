# Simple Array Question || Self - Explainatory Code

**Author:** deepak_4572
**Votes:** 49
**Link:** [https://leetcode.com/problems/minimum-operations-to-maximize-last-elements-in-arrays/solutions/4278166/](https://leetcode.com/problems/minimum-operations-to-maximize-last-elements-in-arrays/solutions/4278166/)

---

<!-- # Intuition -->
<!-- Describe your first thoughts on how to solve this problem. -->
<!-- We have to make the last elements of both array greater than or equal to all elements of the both array. We can only swap nums1[i] and nums2[i]. -->

# Approach
<!-- Describe your approach to solving the problem. -->
There are only two options :-
Option1 is to don't swap the last two elements and run a loop, if the elements are greater than their last elements check if we can swap it or not. If swapping is possible increment swap1 else break.
Option1 is to swap the last two elements(here swap2 starts from 1) and run a loop, if the elements are greater than their last elements check if we can swap it or not. If swapping is possible increment count2 else break.
Finally return the minimum of swap1 and swap2;
# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    int minOperations(vector<int>& nums1, vector<int>& nums2) {
        int n = nums1.size();
        int a = nums1[n-1];
        int b = nums2[n-1];

        int swap1 = 0;
        int flag1 = 1;
        // option1 : if we don't swap the last elements of both array
        for(int i=0;i<n-1;i++){
            if(nums1[i]<=a && nums2[i]<=b)
                continue;
            else if(nums2[i]<=a && nums1[i]<=b)
                swap1++;
            else{
                flag1 = 0;
                break;
            }
        }
        // option2 : if we swap the last elements of both array, i.e. count2 = 1
        int swap2 = 1;
        int flag2 = 1;
        for(int i=0;i<n-1;i++){
            if(nums1[i]<=b && nums2[i]<=a)
                continue;
            else if(nums2[i]<=b && nums1[i]<=a)
                swap2++;
            else{
                flag2 = 0;
                break;
            }
        }
        if(flag1==0 && flag2==0)
            return -1;
        return min(swap1,swap2);
    }
};
```
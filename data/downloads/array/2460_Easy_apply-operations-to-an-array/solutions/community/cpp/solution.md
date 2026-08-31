# ✅✅✅ C++ Solution || O(n) time & O(1) space  ||  Very Simple and Easy to Understand

**Author:** kreakEmp
**Votes:** 50
**Link:** [https://leetcode.com/problems/apply-operations-to-an-array/solutions/2783059/](https://leetcode.com/problems/apply-operations-to-an-array/solutions/2783059/)

---

<b>Up Vote if you like the solution
```
/*
Simply change the value of nums[i] to 2 times & set nums[i+1] to zero when nums[i] == nums[i+1].
Then take a pointer and keep on accumulating non zero value at the front.
Set all remaining values to zero, utill pointer is less then size of the array.
*/
class Solution {
public:
    vector<int> applyOperations(vector<int>& nums) {
        for(int i = 0; i+1 < nums.size(); ++i){
            if(nums[i] == nums[i+1]){  //update values of ith and (i+1)th value
                nums[i] = 2*nums[i]; 
                nums[i+1] = 0;
            }
        }
        int i = 0;
        for(auto n: nums){  // collect all noon zero values at front
            if(n != 0) nums[i++] = n;
        }
        while(i < nums.size()) nums[i++] = 0;         //set values to zero for remainintg ith element
        
        return nums;
    }
};

```
---

<b>Here is an article of my interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted
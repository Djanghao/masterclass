# 🔰 C++ | With & Without sorting | 3 solutions

**Author:** shaunak04
**Votes:** 7
**Link:** [https://leetcode.com/problems/array-with-elements-not-equal-to-average-of-neighbors/solutions/1446674/](https://leetcode.com/problems/array-with-elements-not-equal-to-average-of-neighbors/solutions/1446674/)

---

### **Logic: Right element < Middle element > left element**
Start with the raw unoptimised logic and optimise it 
**Method 1: Sorting**
 *Time: O(NlogN)
Space: O(1)*

By making sure the middle element will be greater than the elements on the sides, the average will always be less than the middle element.
`nums[i-1] < nums[i] && nums[i] > nums[i+1]`

Sort the array, swap alternate elements.

```
class Solution {
public:
    vector<int> rearrangeArray(vector<int>& nums) 
    {
        sort(nums.begin(),nums.end());
        for(int i=0;i<nums.size()-1;i+=2)
        {
            swap(nums[i],nums[i+1]);
        }
        return nums;
    }
};
```
**Method 2: Two pass**
 *Time: O(N+N) = O(N)
Space: O(1)*
Iterate the array from right to left, swap if average is equal to middle element. Do the same for left to right iteration.
```
class Solution {
public:
    vector<int> rearrangeArray(vector<int>& nums) 
    {
        for(int i=1;i<nums.size()-1;i++)
        {
            if(nums[i]*2==nums[i+1]+nums[i-1])
            {
                swap(nums[i],nums[i+1]);
            }
        }
        
        for(int i=nums.size()-2;i>0;i--)
        {
            if(nums[i]*2==nums[i+1]+nums[i-1])
            {
                swap(nums[i],nums[i-1]);
            }
        }
        return nums;
    }
};
```

 **Method 3: Single pass**
  *Time: O(N)
Space: O(1)*
If we find an increasing pattern or a decreasing pattern => swap
i.e, swap `nums[i],nums[i+1] if nums[i-1] < nums[i] < nums[i+1] OR nums[i-1] > nums[i] > nums[i+1] `
 ```
 class Solution {
public:
    vector<int> rearrangeArray(vector<int>& nums) 
    {
        for(int i=1;i<nums.size()-1;i++)
        {
            if((nums[i+1]>nums[i] && nums[i-1]<nums[i]) || (nums[i+1]<nums[i] && nums[i]<nums[i-1]))
            {
                swap(nums[i],nums[i+1]);
            }
        }
        return nums;
    }
};
 ```
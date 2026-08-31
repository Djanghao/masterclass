# [c++] O(n) | Easy to understand

**Author:** bhargavbhatiya
**Votes:** 93
**Link:** [https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/solutions/1053537/](https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/solutions/1053537/)

---

**Approach:**
if array is sorted and rotated then, there is only 1  break point where (nums[x] > nums[x+1]),
if array is only sorted then, there is 0 break point.

**Time complexity:** O(N)
**Space complexity:** O(1)
```
bool check(vector<int>& nums) {
        
        int size = nums.size();
        int count = 0;

        for(int x=0; x<size; x++)
        {   
            if(nums[x] > nums[(x+1)%size])
                count ++;
        }
        return (count <= 1);
    }
```
-->**why am I doing %size??**

**Concider this case:**  nums = [2,1,3,4]

This case will give you result true **without %size** but it is not sorted and rotated. So we have to check **last** and **first** element also.
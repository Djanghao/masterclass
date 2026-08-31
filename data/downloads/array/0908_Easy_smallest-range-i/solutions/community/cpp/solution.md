# Easiest explanation 💯 :Time 1ms(99.52%)✅ || Beginner Friendly🔥🔥🔥

**Author:** shanmukh_vasupalli
**Votes:** 7
**Link:** [https://leetcode.com/problems/smallest-range-i/solutions/4365468/](https://leetcode.com/problems/smallest-range-i/solutions/4365468/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
**Step 1:**
Find the maximum and minimum in the array `nums`

**Step 2:**
We need to return the smallest range (minimum sum) when we add maximum and minimum values 
Given `k` we can add or subtract to the elements in the array `nums`

to get the minimum sum we need to subtract the `k` from the maximum
and minimum such that the there is no negative value in the sum

so we are subtracting `2*k` from the sum of maximum and minimum, if the values goes to negative then we need to return the 0



# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
 $$O(n)$$

# Code
```java []
class Solution {
    public int smallestRangeI(int[] nums, int k) {
        int min=nums[0] , max= nums[0];
        for(int i=0 ; i<nums.length ; i++){
            if(nums[i]<min)
            min = nums[i];
            if(nums[i]>max)
            max = nums[i];
        }//finding the minimum and maximum 
        if((max-min)-(2*k)<=0 || max-min==0)
        return 0;
        else
        return (max-min)-(2*k);
    }
}
```
```python []
class Solution(object):
    def smallestRangeI(self, nums, k):
        min_val = min(nums)
        max_val = max(nums)

        if (max_val - min_val) - (2 * k) <= 0 or max_val - min_val == 0:
            return 0
        else:
            return (max_val - min_val) - (2 * k)


```
```c++ []
class Solution {
public:
    int smallestRangeI(vector<int>& nums, int k) {
        int min_num = *min_element(nums.begin(), nums.end());
        int max_num = *max_element(nums.begin(), nums.end());

        if ((max_num - min_num) - (2 * k) <= 0 || max_num - min_num == 0)
            return 0;
        else
            return (max_num - min_num) - (2 * k);
    }
};
```

**If you found my solution helpful, I would greatly appreciate your upvote \uD83D\uDC4D, as it would motivate me to continue sharing more solutions \uD83D\uDC97.**

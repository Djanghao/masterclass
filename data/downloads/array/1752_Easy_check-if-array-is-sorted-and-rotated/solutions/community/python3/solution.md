# 😎 Find no. of break Points || O(n) FAANG 🥳 Optimized Code💥

**Author:** AdityaBhate
**Votes:** 43
**Link:** [https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/solutions/2872684/](https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/solutions/2872684/)

---

# \uD83D\uDDEF\uFE0FIntuition :-
<!-- Describe your first thoughts on how to solve this problem. -->
if array is sorted and rotated then, there is only 1 break point where (nums[x] > nums[x+1]),
if array is only sorted then, there is 0 break point.

# ***Please do Upvote \u270C\uFE0F***

# \uD83D\uDDEF\uFE0FComplexity :-
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# \uD83D\uDDEF\uFE0FCode :-
```
class Solution {
public:
    bool check(vector<int>& nums) {
        int count=0;
        for(int i=0;i<nums.size();i++){
            if(nums[i]>nums[(i+1)%nums.size()])
                count++;
        }
        return (count<=1);
    }
};
```

# **-->why am I doing %size??**

Concider this case: nums = [2,1,3,4]

This case will give you result true without %size but it is not sorted and rotated. So we have to check last and first element also.
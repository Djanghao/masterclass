# Why 🤯 and How 😲of the Solution.

**Author:** Codensity_30
**Votes:** 253
**Link:** [https://leetcode.com/problems/maximum-beauty-of-an-array-after-applying-operation/solutions/3772327/](https://leetcode.com/problems/maximum-beauty-of-an-array-after-applying-operation/solutions/3772327/)

---

# Intuition

```
Example:- 
[4,6,1,2], k = 2

Question says that we can "Replace nums[i] with any integer from the range [nums[i] - k, nums[i] + k]".

This means we can replace the element of the array with any value within the shown range below.

                [ 4   6   1   2 ]
min of range =    2   4  -1   0     i.e. nums[i] - k 
max of range =    6   8   3   4     i.e. nums[i] + k 

Now, to be a "Beautiful Subsequence" all elements of the subsequence should be equal.

All elements can be equal if the "max of range of minimum element is greater than equal to min of range of maxium element".
Didn't get it \uD83E\uDD2F no problem lets visulaize:- 

for the above example ~
Minimum Element = 1 and max of range of 1 = 3
Maixium Element = 6 and min of range of 6 = 4

this means if we replace 1 with max of it's range i.e. 3 and we replace 6 with min of it's range i.e. 4,
still we can't make 1 and 6 equal.

So what can we do is either increment minimum i.e. ignore 1 or decrement maximum i.e. ignore 6 both will work. I'll ignore the minimum i.e. 1.

I think now this condition "max of range of minimum element is greater than equal to min of range of maxium element" makes sense \uD83D\uDE09.

Okay, now the next minimum is 2 as we have igonred 1. Lets check the condition.

for the above example ~
Minimum Element = 2 and max of range of 2 = 4
Maixium Element = 6 and min of range of 6 = 4

this means if we replace 2 with max of it's range i.e. 4 and we replace 6 with min of it's range i.e. 4,
we can make 2 and 6 equal.

So the number of elements in the "Beautiful Subsequence" is 3 as we have ignored element '1'.

```
 

# Approach
From the above Intuition it's clear that at every stage we need minimum and maximum of the remaining element. To tackle this let's sort the entire array.

And keep track of two pointers one for minimum and one for maximum. We can implement this using **sliding window**.

But in **Sliding Window** we always have a condition for which the **window is valid**.
Recall the Intuition there we were checking for this ```
max of range of minimum element is greater than equal to min of range of maxium element``` condition to be true.

```
Let minimum element = mini and maximum element = maxi, then
Max of range of minimum element = (mini + k)
Min of range of maximum element = (maxi - k)

According to condition (maxi - k) <= (mini + k)
we can rewrite this as ~ maxi - mini <= (k+k) or (maxi - mini) <= 2*k

This is the condition for valid window ~ (maxi - mini) <= 2*k
```

# Complexity
- Time complexity:
**O(n logn)** for sorting the array.

- Space complexity:
**O(1)** as no extra space is required.

# Code
```
class Solution {
public:
    int maximumBeauty(vector<int>& nums, int k) {
        sort(nums.begin(),nums.end());
        int start = 0, ans = 0;
        for(int i=0; i<nums.size(); i++){
            // here nums[i] = maxi and nums[start] = mini
            // while window is not vaild increase the current minimum 
            while(nums[i]-nums[start] > 2*k)
                start++;
            // the current window i.e. [start ... i] is valid so consider it
            ans = max(ans,i-start+1);
        }
        return ans;
    }
};
```

**Please upvote if you find post helpul. It's easy to depreciate anyone but appreciation requires generosity. \uD83D\uDC4D**

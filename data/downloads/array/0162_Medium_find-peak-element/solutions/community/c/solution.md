# C++ Simple and Easy Solutions, From Binary Search to a Cool One Liner, Explained

**Author:** YehudisK
**Votes:** 92
**Link:** [https://leetcode.com/problems/find-peak-element/solutions/1334425/](https://leetcode.com/problems/find-peak-element/solutions/1334425/)

---

**O(log(n)) Binary Search:**
How does binary search work for this problem?
Let's look at mid.
If nums[mid] < nums[mid+1], then there has to be a peak element in the right side of mid.
Either the numbers increase until we reach the end and then the last element will be a peak, or at some point a number gets smaller and right there we will have a peak.
Same for the left side of mid.
```
class Solution {
public:
    int findPeakElement(vector<int>& nums) {
        int lo = 0, hi = nums.size()-1, mid;
        
        while (lo < hi) {
            mid = lo + (hi - lo) / 2;
            if (nums[mid] < nums[mid + 1]) 
                lo = mid + 1;
            else hi = mid;
        }
        
        return lo;
    }
};
```
****
**O(n) Sequential Search:**
Just scan the array and find a number that is greater than its neighbors.
```
class Solution {
public:
    int findPeakElement(vector<int>& nums) {
        // edge case - only one element
        if (nums.size() == 1) return 0;
        
        // peak is first element
        if (nums[0] > nums[1]) return 0;
        
        // peak is last element
        if (nums.back() > nums[nums.size()-2]) return nums.size()-1;
        
        // iterate to find peak
        for (int i = 0; i < nums.size(); i++) 
            if ((nums[i] > nums[max(0, i-1)]) && (nums[i] > nums[i+1])) return i;
        
        return -1;
    }
};
```
**A little cheating - one liner solution:**
The maximum element of the array will always be a peak, since there is a constraint nums[i] != nums[i + 1] for all valid i.
```
class Solution {
public:
    int findPeakElement(vector<int>& nums) {
        return max_element(nums.begin(), nums.end()) - nums.begin();
    }
};
```
**Like it? please upvote!**
# [C++] Two PriorityQueue | beats 98%

**Author:** Wukkkinz-0725
**Votes:** 8
**Link:** [https://leetcode.com/problems/count-the-number-of-k-big-indices/solutions/3598821/](https://leetcode.com/problems/count-the-number-of-k-big-indices/solutions/3598821/)

---

# Intuition
This problem remind me K-th Largest, which can be solved by priority queue. This one is similar, we can maintain two priority queue with size k to check every number.

# Approach
Priority Queue

# Complexity
- Time complexity:
O(nlogn)

- Space complexity:
O(n)

# Code
```
class Solution {
public:
    int kBigIndices(vector<int>& nums, int k) {
        int n = nums.size();
        int retval = 0;
        priority_queue<int> left, right;
        vector<bool> left_good(n, false);
        for(int i=0;i<k;i++) {
            left.push(nums[i]);
            right.push(nums[n-1-i]);
        }
        for (int i=k;i<n-k;i++) {
            if (nums[i]>left.top()) {
                left_good[i] = true;
            } else {
                left.pop();
                left.push(nums[i]);
            }
        }
        for (int i=n-k-1;i>=k;i--) {
            if (nums[i]>right.top() && left_good[i]) {
                retval += 1;
            } else {
                right.pop();
                right.push(nums[i]);
            }
        }
        return retval;
    }
};
```
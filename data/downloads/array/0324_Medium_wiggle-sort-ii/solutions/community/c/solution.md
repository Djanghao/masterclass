# C++ solution using priority queue.

**Author:** Hariom510
**Votes:** 50
**Link:** [https://leetcode.com/problems/wiggle-sort-ii/solutions/1840002/](https://leetcode.com/problems/wiggle-sort-ii/solutions/1840002/)

---

```
class Solution {
public:
    void wiggleSort(vector<int>& nums) {
        int n= nums.size();
        priority_queue<int> q(nums.begin(), nums.end());
        for(int i=1; i<n; i += 2){
            nums[i] = q.top();
            q.pop();
        }
        for(int i=0; i<n; i += 2){
            nums[i] = q.top();
            q.pop();
        }
    }
};
//Please upvote me if you like the solution.
```
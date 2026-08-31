# 2 priority_queue to record the end of queries,  O(nlogn)

**Author:** jerry5841314
**Votes:** 36
**Link:** [https://leetcode.com/problems/zero-array-transformation-iii/solutions/6075668/](https://leetcode.com/problems/zero-array-transformation-iii/solutions/6075668/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The thing is that you traver the nums by index, when you meet a nums that is nonzero, you want to choose the segment that cover this point. Whats more, the most important, you want this segment to be as far as possible. (not as long as possible, because nums before this index has already became 0).

# Approach
<!-- Describe your approach to solving the problem. -->
You sort the queries by their index, so that when you visit nums[i]. You know the previous part of quries cover nums[i]. Then you put all those queries cover this nums[i] into first PQ as candidate. After this, the start point of queries become no use. You only care about the end. So you only need to put the end into PQ. When you find the nums[i] is nonzero, you choose from the candidats, first PQ. And put it into second PQ, which are those queries you choose.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(nlogn)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```cpp []
class Solution {
public:
    int maxRemoval(vector<int>& nums, vector<vector<int>>& queries) {
        sort(queries.begin(), queries.end());
        priority_queue<int> candidate;
        priority_queue<int, vector<int>, greater<>> chosen;
        int ans = 0;
        int n = nums.size();
        int j = 0;
        for (int i = 0; i < n; i++){
            while (j < queries.size() && queries[j][0] == i){
                candidate.push(queries[j][1]);
                j++;
            }
            nums[i] -= chosen.size();
            while (nums[i] > 0 && !candidate.empty() && candidate.top() >= i){
                ans++;
                chosen.push(candidate.top());
                candidate.pop();
                nums[i]--;
            } 
            if (nums[i] > 0)
                return -1;
            while (!chosen.empty() && chosen.top() == i)
                chosen.pop();
            
        }
        return queries.size() - ans;
        
    }
};
```
# C++ priority_queue

**Author:** mfatihuslu
**Votes:** 3
**Link:** [https://leetcode.com/problems/make-the-prefix-sum-non-negative/solutions/3343583/](https://leetcode.com/problems/make-the-prefix-sum-non-negative/solutions/3343583/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Every element `i` we met while traversing through the array `nums`, we first push it to a priority queue `pq`, then add it to sum of the seen elements `sum`. If `sum` is negative, so we pop the smallest elemen we met from the top of the priority queue `pq` and update the `sum`. 

In the end, the answer is how many element we pop from the queue, which is difference of `nums` and `pq`.

# Code
```
class Solution {
public:
    int makePrefSumNonNegative(vector<int>& nums, long sum = 0) {
        priority_queue <int,vector<int>,greater<int>> pq;
        for(int i:nums){
            pq.push(i);
            if((sum+=i) < 0)
                sum-=pq.top(), pq.pop();
        }
        return nums.size()-pq.size();
    }
};
```

# Complexity
- Time complexity: `O(nlogn)`
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: `O(n)`
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

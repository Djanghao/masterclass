# Priority queue || Very simple and easy to understand solution

**Author:** kreakEmp
**Votes:** 13
**Link:** [https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-ii/solutions/4811496/](https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-ii/solutions/4811496/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
- Push all items to min heap ( priority queue with smallest at the top).
- Then iterate over the priority queue untill the top/smallest element is greater than equal to k.
- In each iteration get the top two items ( smallest two items ) and then as per the operation give push the new number to the priority queue.
- Increament the ans to count number of operation we performed

# Complexity
- Time complexity: O(N/logN)

- Space complexity: O(N)

# Code
```
    int minOperations(vector<int>& nums, int k) {
        priority_queue<long long, vector<long long>, greater<long long>> pq;
        for(auto n:nums) pq.push(n); 
        int ans = 0;
        while(pq.size() && pq.top() < k){
            long minNum = pq.top(); pq.pop();
            long nextMinNum = pq.top(); pq.pop();
            pq.push(2*minNum + nextMinNum);
            ans++;
        }
        return ans;
    }
```

---

<b> Here is an article of my last interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted

---
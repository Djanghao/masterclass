# 🔥 [LeetCode The Hard Way] 🔥 Explained Line By Line

**Author:** tr1nity
**Votes:** 121
**Link:** [https://leetcode.com/problems/maximum-performance-of-a-team/solutions/2559828/](https://leetcode.com/problems/maximum-performance-of-a-team/solutions/2559828/)

---

Please check out [LeetCode The Hard Way](https://wingkwong.github.io/leetcode-the-hard-way/) for more solution explanations and tutorials. 
I'll explain my solution line by line daily and you can find the full list in my [Discord](https://discord.gg/Nqm4jJcyBf).
If you like it, please give a star, watch my [Github Repository](https://github.com/wingkwong/leetcode-the-hard-way) and upvote this post.

**C++**

```cpp
// Time Complexity: O(N * (logN + logK)) 
// Space Complexity: O(N + K)
// where N is the total number of candidates and K is the size of team
class Solution {
public:
    int maxPerformance(int n, vector<int>& speed, vector<int>& efficiency, int k) {
        int MOD = 1e9 + 7;
        vector<pair<int, int>> candidates(n);
        // we build the pair { efficiency, speed } so that we can sort it later
        for (int i = 0; i < n; i++) candidates[i] = { efficiency[i], speed[i] };
        // sort candidates in descending order
        sort(candidates.rbegin(), candidates.rend());
        // Using Example 1: 
        // speed: [2, 10, 3, 1 ,5, 8] and efficiency: [5, 4, 3, 9, 7, 2]
        // after sort, it becomes
        // candidates: [{9, 1}, {7 ,5}, {5, 2}, {4, 10}, {3, 3}, {2, 8}]
        long speedSum = 0, ans = 0;
        // we use priority queue here with greater<int> to store the sum
        // i.e min heap (the smallest element goes on the top)
        priority_queue <int, vector<int>, greater<int>> pq;
        // iterate each pair
        for (auto& [e, s] : candidates) {
            // put the speed to priority queue
            pq.push(s);
            // add to speedSum
            speedSum += s;
            // we only need to choose at most k engineers
            // hence if the queue size is greater than k
            // we need to remove a candidate
            if (pq.size() > k) {
                // who to remove? of course the one with smallest speed
                speedSum -= pq.top();
                pq.pop();
            }
            // calculate the performance
            ans = max(ans, speedSum * e);
        }
        return ans % MOD;
    }
};
```

**Python**

```py
# Time Complexity: O(N * (logN + logK)) 
# Space Complexity: O(N + K)
# where N is the total number of candidates and K is the size of team
class Solution:
    def maxPerformance(self, n: int, speed: List[int], efficiency: List[int], k: int) -> int:
        MOD = 10 ** 9 + 7
        # build tuples ( efficiency, speed ) so that we can sort it later
        candidates = zip(efficiency, speed)
        # default sort mode is ascending. use `reverse = True` to sort in descending
        candidates = sorted(candidates, key=lambda x: x[0], reverse=True)
        # Using Example 1: 
        # speed: [2, 10, 3, 1 ,5, 8] and efficiency: [5, 4, 3, 9, 7, 2]
        # after sort, it becomes
        # candidates: [(9, 1), (7 ,5), (5, 2), (4, 10), (3, 3), (2, 8)]
        speedSum, ans = 0, 0
        # in python, it usually refers to heap 
        heap = []
        # iterate each tuple
        for e, s in candidates:
            # put the speed to heap
            heapq.heappush(heap, s)
            # add to speedSum
            speedSum += s
            # we only need to choose at most k engineers
            # hence if the queue size is greater than k
            # we need to remove a candidate
            if len(heap) > k:
                # who to remove? of course the one with smallest speed
                speedSum -= heapq.heappop(heap)
            # calculate the performance
            ans = max(ans, speedSum * e)
        return ans % MOD
```
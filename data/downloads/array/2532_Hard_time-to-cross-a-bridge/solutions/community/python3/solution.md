# [C++|Java|Python3] simulation

**Author:** ye15
**Votes:** 23
**Link:** [https://leetcode.com/problems/time-to-cross-a-bridge/solutions/3016947/](https://leetcode.com/problems/time-to-cross-a-bridge/solutions/3016947/)

---

Please pull this [commit](https://github.com/gaosanyong/leetcode/commit/cd738c7122f758231c4f575936d09271343de490) for solutions of weekly 327. 

**Intuition**
Here, we maintain 4 prioirty queues. 
1) `l` ready to join the queue `ll` once the time allows
2) `ll` ready to cross the bridge from left to right 
3) `r` ready to join the queue `rr` once the time allows 
4) `rr` ready to cross the bridge from right to left 

**Implementation**
**C++**
```
class Solution {
public:
    int findCrossingTime(int n, int k, vector<vector<int>>& time) {
        int ans = 0, free = 0; 
        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<>> l, r; 
        priority_queue<pair<int, int>> ll, rr; 
        for (int i = 0; i < time.size(); ++i) 
            ll.emplace(time[i][0]+time[i][2], i); 
        while (n || r.size() || rr.size()) {
            if (rr.empty() && (r.empty() || r.top().first>free) && (!n || ll.empty() && (l.empty() || l.top().first>free))) {
                int cand = INT_MAX; 
                if (n && l.size()) cand = min(cand, l.top().first); 
                if (r.size()) cand = min(cand, r.top().first); 
                free = cand; 
            }
            while (l.size() && l.top().first <= free) {
                auto [_, i] = l.top(); l.pop(); 
                ll.emplace(time[i][0]+time[i][2], i); 
            }
            while (r.size() && r.top().first <= free) {
                auto [_, i] = r.top(); r.pop(); 
                rr.emplace(time[i][0]+time[i][2], i); 
            }
            if (rr.size()) {
                auto [_, i] = rr.top(); rr.pop(); 
                free += time[i][2]; 
                if (n) l.emplace(free+time[i][3], i); 
                else ans = max(ans, free); 
            } else {
                auto [_, i] = ll.top(); ll.pop();
                free += time[i][0]; 
                r.emplace(free+time[i][1], i); 
                --n; 
            }
        }
        return ans; 
    }
};
```
**Java**
```
class Solution {
    public int findCrossingTime(int n, int k, int[][] time) {
        int ans = 0, free = 0; 
        PriorityQueue<int[]> l = new PriorityQueue<>((a, b)->(a[0]-b[0])); 
        PriorityQueue<int[]> r = new PriorityQueue<>((a, b)->(a[0]-b[0])); 
        PriorityQueue<int[]> ll = new PriorityQueue<>((a, b)->(a[0] != b[0] ? b[0]-a[0] : b[1]-a[1]));
        PriorityQueue<int[]> rr = new PriorityQueue<>((a, b)->(a[0] != b[0] ? b[0]-a[0] : b[1]-a[1])); 
        for (int i = 0; i < time.length; ++i) 
            ll.add(new int[]{time[i][0]+time[i][2], i}); 
        while (n > 0 || r.size() > 0 || rr.size() > 0) {
            if (rr.isEmpty() && (r.isEmpty() || r.peek()[0] > free) && (n == 0 || ll.isEmpty() && (l.isEmpty() || l.peek()[0] > free))) {
                int cand = Integer.MAX_VALUE; 
                if (n > 0 && l.size() > 0) cand = Math.min(cand, l.peek()[0]); 
                if (r.size() > 0) cand = Math.min(cand, r.peek()[0]); 
                free = cand; 
            }
            while (l.size() > 0 && l.peek()[0] <= free) {
                int i = l.poll()[1]; 
                ll.add(new int[] {time[i][0] + time[i][2], i}); 
            }
            while (r.size() > 0 && r.peek()[0] <= free) {
                int i = r.poll()[1]; 
                rr.add(new int[] {time[i][0] + time[i][2], i}); 
            }
            if (rr.size() > 0) {
                int i = rr.poll()[1]; 
                free += time[i][2]; 
                if (n > 0) l.add(new int[] {free+time[i][3], i}); 
                else ans = Math.max(ans, free); 
            } else {
                int i = ll.poll()[1]; 
                free += time[i][0]; 
                r.add(new int[] {free+time[i][1], i}); 
                --n; 
            }
        }
        return ans; 
    }
}
```
**Python3**
```
class Solution:
    def findCrossingTime(self, n: int, k: int, time: List[List[int]]) -> int:
        ans = free = 0 
        l, ll = [], []
        r, rr = [], []
        for i, (x, _, y, _) in enumerate(time): heappush(ll, (-x-y, -i))
        while n or r or rr: 
            if not rr and (not r or r[0][0] > free) and (not n or not ll and (not l or l[0][0] > free)): 
                cand = inf 
                if n and l: cand = min(cand, l[0][0])
                if r: cand = min(cand, r[0][0])
                free = cand
                
            while r and r[0][0] <= free: 
                _, i = heappop(r)
                heappush(rr, (-time[i][0] - time[i][2], -i))

            while l and l[0][0] <= free: 
                _, i = heappop(l)
                heappush(ll, (-time[i][0] - time[i][2], -i))
                
            if rr: 
                _, i = heappop(rr)
                free += time[-i][2]
                if n: heappush(l, (free + time[-i][3], -i))
                else: ans = max(ans, free)
            else: 
                _, i = heappop(ll)
                free += time[-i][0]
                heappush(r, (free + time[-i][1], -i))
                n -= 1
        return ans 
```
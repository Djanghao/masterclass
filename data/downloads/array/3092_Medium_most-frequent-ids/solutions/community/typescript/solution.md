# [C++|Java|Python3|Javascipt|Typescript] priority queue

**Author:** ye15
**Votes:** 3
**Link:** [https://leetcode.com/problems/most-frequent-ids/solutions/4916795/](https://leetcode.com/problems/most-frequent-ids/solutions/4916795/)

---

Please pull this [commit](https://github.com/gaosanyong/leetcode/commit/cdc5e101ce1f1fae525345dec774217fbbdba2c4) for my solutions of [weekly 390](https://leetcode.com/contest/weekly-contest-390/). 

**C++**
```
class Solution {
public:
    vector<long long> mostFrequentIDs(vector<int>& nums, vector<int>& freq) {
        priority_queue<pair<long long, int>> pq; 
        unordered_map<int, long long> cnt; 
        vector<long long> ans; 
        for (int i = 0, n = nums.size(); i < n; ++i) {
            int x = nums[i], f = freq[i]; 
            cnt[x] += f; 
            while (pq.size() && cnt[pq.top().second] != pq.top().first) pq.pop(); 
            pq.emplace(cnt[x], x); 
            ans.push_back(pq.top().first); 
        }
        return ans; 
    }
};
```
**Java**
```
class Solution {
    public long[] mostFrequentIDs(int[] nums, int[] freq) {
        int n = nums.length; 
        Map<Long, Long> cnt = new HashMap(); 
        Queue<long[]> pq = new PriorityQueue<>((x, y) -> Long.compare(y[0], x[0])); 
        long[] ans = new long[n]; 
        for (int i = 0; i < n; ++i) {
            long x = nums[i], f = freq[i]; 
            cnt.merge(x, f, Long::sum); 
            while (!pq.isEmpty() && cnt.get(pq.peek()[1]) != pq.peek()[0]) pq.poll(); 
            pq.add(new long[]{cnt.get(x), x}); 
            ans[i] = pq.peek()[0]; 
        }
        return ans; 
    }
}
```
**Python3**
```
class Solution:
    def mostFrequentIDs(self, nums: List[int], freq: List[int]) -> List[int]:
        pq = []
        cnt = Counter()
        ans = []
        for x, f in zip(nums, freq): 
            cnt[x] += f
            while pq and cnt[pq[0][1]] + pq[0][0] != 0: heappop(pq)
            heappush(pq, (-cnt[x], x))
            ans.append(-pq[0][0])
        return ans 
```
**Javascript**
```
var mostFrequentIDs = function(nums, freq) {
    const cnt = new Map(); 
    const pq = new PriorityQueue({ compare : (x, y) => y[0]-x[0] }); 
    const ans = []; 
    for (const [i, x] of nums.entries()) {
        const f = freq[i]; 
        cnt.set(x, f + (cnt.get(x) ?? 0)); 
        while (pq.size() && cnt.get(pq.front()[1]) != pq.front()[0]) pq.dequeue(); 
        pq.enqueue([cnt.get(x), x]); 
        ans.push(pq.front()[0]); 
    }
    return ans; 
};
```
**Typescript**
```
function mostFrequentIDs(nums: number[], freq: number[]): number[] {
    const cnt = new Map(); 
    const pq = new PriorityQueue({ compare : (x, y) => y[0]-x[0] }); 
    const ans = []; 
    for (const [i, x] of nums.entries()) {
        const f = freq[i]; 
        cnt.set(x, f + (cnt.get(x) ?? 0)); 
        while (pq.size() && cnt.get(pq.front()[1]) != pq.front()[0]) pq.dequeue(); 
        pq.enqueue([cnt.get(x), x]); 
        ans.push(pq.front()[0]); 
    }
    return ans; 
};
```
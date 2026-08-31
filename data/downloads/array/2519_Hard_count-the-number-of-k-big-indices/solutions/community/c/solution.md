# [C++|Java|Python3] priority queue

**Author:** ye15
**Votes:** 50
**Link:** [https://leetcode.com/problems/count-the-number-of-k-big-indices/solutions/2964950/](https://leetcode.com/problems/count-the-number-of-k-big-indices/solutions/2964950/)

---

**Intuition**
I use a max priority queue of size `k` to decide if there exists `k` numbers in the forward and backward directions. 
**C++**
```
class Solution {
public:
    int kBigIndices(vector<int>& nums, int k) {
        int n = nums.size(); 
        vector<bool> prefix(n); 
        priority_queue<int> pq; 
        for (int i = 0; i < n; ++i) {
            if (pq.size() == k && pq.top() < nums[i]) prefix[i] = true; 
            pq.push(nums[i]); 
            if (pq.size() > k) pq.pop(); 
        }
        int ans = 0; 
        pq = priority_queue<int>(); 
        for (int i = n-1; i >= 0; --i) {
            if (pq.size() == k && pq.top() < nums[i] && prefix[i]) ++ans; 
            pq.push(nums[i]); 
            if (pq.size() > k) pq.pop(); 
        }
        return ans; 
    }
};
```
**Java**
```
class Solution {
    public int kBigIndices(int[] nums, int k) {
        int n = nums.length; 
        boolean[] prefix = new boolean[n]; 
        Queue<Integer> pq = new PriorityQueue(Collections.reverseOrder()); 
        for (int i = 0; i < n; ++i) {
            if (pq.size() == k && pq.peek() < nums[i]) prefix[i] = true; 
            pq.add(nums[i]); 
            if (pq.size() > k) pq.poll(); 
        }
        int ans = 0; 
        pq.clear(); 
        for (int i = n-1; i >= 0; --i) {
            if (pq.size() == k && pq.peek() < nums[i] && prefix[i]) ++ans; 
            pq.add(nums[i]); 
            if (pq.size() > k) pq.poll(); 
        }
        return ans; 
    }
}
```

**Python3**
```
class Solution:
    def kBigIndices(self, nums: List[int], k: int) -> int:
        prefix = [False] * len(nums)
        pq = []
        for i, x in enumerate(nums): 
            if len(pq) == k and -pq[0] < x: prefix[i] = True
            heappush(pq, -x)
            if len(pq) > k: heappop(pq)
        ans = 0 
        pq = []
        for i, x in reversed(list(enumerate(nums))): 
            if len(pq) == k and -pq[0] < x and prefix[i]: ans += 1
            heappush(pq, -x)
            if len(pq) > k: heappop(pq)
        return ans 
```
**Complexity**
Time `O(NlogN)`
Space `O(N)`

A special solution tailored for Python3 is to use SortedList. 
```
from sortedcontainers import SortedList

class Solution:
    def kBigIndices(self, nums: List[int], k: int) -> int:
        lo = SortedList()
        hi = SortedList(nums)
        ans = 0 
        for x in nums: 
            if lo.bisect_left(x) >= k and hi.bisect_left(x) >= k: ans += 1
            lo.add(x)
            hi.remove(x)
        return ans 
```
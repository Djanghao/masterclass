# Easy Video Solution 🔥 || How to 🤔 in Interview || Heap || Brute Force -> Optimized 🔥

**Author:** ayushnemmaniwar12
**Votes:** 5
**Link:** [https://leetcode.com/problems/k-th-nearest-obstacle-queries/solutions/5720014/](https://leetcode.com/problems/k-th-nearest-obstacle-queries/solutions/5720014/)

---

***If you like the solution Please Upvote and subscribe to my youtube channel***

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Dry Run few examples and observe how you can choose kth minima at every step



***Easy Video Explanation with Proofs***

https://youtu.be/WdvJYn0sDVs


    

# Code


```C++ []
class Solution {
public:
    vector<int> resultsArray(vector<vector<int>>& v, int k) {
        priority_queue<int>q;
        vector<int>ans;
        int n = v.size();
        for(int i=0;i<n;i++) {
            q.push(abs(v[i][0])+abs(v[i][1]));
            if(q.size()>k)
                q.pop();
            if(q.size()==k) {
                ans.push_back(q.top());
            } else
                ans.push_back(-1);
        }
        return ans;
    }
};
```
```python []
import heapq

class Solution:
    def resultsArray(self, v: List[List[int]], k: int) -> List[int]:
        max_heap = []
        ans = []
        n = len(v)
        
        for i in range(n):
            dist = abs(v[i][0]) + abs(v[i][1])
            heapq.heappush(max_heap, -dist)
            if len(max_heap) > k:
                heapq.heappop(max_heap)
            if len(max_heap) == k:
                ans.append(-max_heap[0])
            else:
                ans.append(-1)
        
        return ans


```
```Java []
import java.util.PriorityQueue;
import java.util.Vector;

class Solution {
    public Vector<Integer> resultsArray(Vector<Vector<Integer>> v, int k) {
        PriorityQueue<Integer> q = new PriorityQueue<>((a, b) -> b - a);
        Vector<Integer> ans = new Vector<>();
        int n = v.size();
        
        for (int i = 0; i < n; i++) {
            int dist = Math.abs(v.get(i).get(0)) + Math.abs(v.get(i).get(1));
            q.offer(dist);
            if (q.size() > k)
                q.poll();
            if (q.size() == k) {
                ans.add(q.peek());
            } else {
                ans.add(-1);
            }
        }
        return ans;
    }
}


```

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(N*log(K))
    

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(K)

# ***If you like the solution Please Upvote and subscribe to my youtube channel***
***It Motivates me to record more videos***

*Thank you* \uD83D\uDE00
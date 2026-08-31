# Easy Video Solution 🔥 || why Priority_queue 🤷‍♂️ || Count Map

**Author:** ayushnemmaniwar12
**Votes:** 12
**Link:** [https://leetcode.com/problems/most-frequent-ids/solutions/4916815/](https://leetcode.com/problems/most-frequent-ids/solutions/4916815/)

---

# ***Easy Video Explanation***

https://youtu.be/EdkKqJGCoYw





# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(N*log(N))
    

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(N)
    

# Code


```C++ []
class Solution {
public:
    vector<long long> mostFrequentIDs(vector<int>& v, vector<int>& f) {
        priority_queue<pair<long long,int>>q;
        int n=v.size();
        map<int,long long>m;
        vector<long long>ans;
        for(int i=0;i<n;i++) {
            m[v[i]]+=f[i];
            q.push({m[v[i]],v[i]});
            while(true) {
                pair<long long,int>p=q.top();
                if(p.first==m[p.second]) {
                    ans.push_back(p.first);
                    break;
                }
                else
                    q.pop();
            }
        }
        return ans;
    }
};
```
```python []
import heapq
from collections import defaultdict

class Solution:
    def mostFrequentIDs(self, v: List[int], f: List[int]) -> List[int]:
        pq = []
        n = len(v)
        m = defaultdict(int)
        ans = []
        
        for i in range(n):
            m[v[i]] += f[i]
            heapq.heappush(pq, (-m[v[i]], v[i]))
            while pq:
                freq, id = pq[0]
                if m[id] == -freq:
                    ans.append(-freq)
                    break
                else:
                    heapq.heappop(pq)
        
        return ans

```
```Java []
import java.util.*;

public class Solution {
    public List<Long> mostFrequentIDs(int[] v, int[] f) {
        PriorityQueue<Map.Entry<Long, Integer>> pq = new PriorityQueue<>((a, b) -> Long.compare(b.getKey(), a.getKey()));
        int n = v.length;
        Map<Integer, Long> m = new HashMap<>();
        List<Long> ans = new ArrayList<>();
        
        for (int i = 0; i < n; i++) {
            m.put(v[i], m.getOrDefault(v[i], 0L) + f[i]);
            pq.offer(new AbstractMap.SimpleEntry<>(m.get(v[i]), (int) v[i]));
            while (true) {
                Map.Entry<Long, Integer> entry = pq.peek();
                if (entry.getKey().equals(m.get(entry.getValue()))) {
                    ans.add(entry.getKey());
                    break;
                } else {
                    pq.poll();
                }
            }
        }
        return ans;
    }
}


```

# ***If you like the solution Please Upvote and subscribe to my youtube channel***
***It Motivates me to record more videos***

*Thank you* \uD83D\uDE00
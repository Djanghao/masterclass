# O(N*N)->O(K*log(N)) Video Solution 🔥 || How to 🤔 in Interview || Priority_queue

**Author:** ayushnemmaniwar12
**Votes:** 18
**Link:** [https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-i/solutions/5687544/](https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-i/solutions/5687544/)

---

***If you like the solution Please Upvote and subscribe to my youtube channel***

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Dry Run few examples and observe how you can optimize further



***Easy Video Explanation***

https://youtu.be/YxRD34k_Oog

# Brute Force


```C++ []
class Solution {
public:
    vector<int> getFinalState(vector<int>& v, int k, int m) {
        int n = v.size();
        while(k--) {
            int idx=0,ans=v[0];
            for(int i=1;i<n;i++) {
                if(v[i]<ans) {
                    ans=v[i];
                    idx=i;
                }
            }
            v[idx]=v[idx]*m;
            //cout<<idx<<" "<<v[idx]<<endl;
        }
        return v;
    }
};
```
```python []
def get_final_state(self, v, k, m):
        n = len(v)
        for _ in range(k):
            idx = 0
            ans = v[0]
            for i in range(1, n):
                if v[i] < ans:
                    ans = v[i]
                    idx = i
            v[idx] *= m
        return v
```
```Java []
public List<Integer> getFinalState(List<Integer> v, int k, int m) {
        int n = v.size();
        while (k-- > 0) {
            int idx = 0;
            int ans = v.get(0);
            for (int i = 1; i < n; i++) {
                if (v.get(i) < ans) {
                    ans = v.get(i);
                    idx = i;
                }
            }
            v.set(idx, v.get(idx) * m);
        }
        return v;
    }

```

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(N*K)
    

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(1)

# Using Priority Queue


```C++ []
class Solution {
public:
    vector<int> getFinalState(vector<int>& v, int k, int m) {
        int n = v.size();
        priority_queue<pair<int,int>,vector<pair<int,int>>,greater<pair<int,int>>>q;
        for(int i=0;i<n;i++) {
            q.push({v[i],i});
        }
        while(k--) {
            pair<int,int>p=q.top();
            q.pop();
            int val=p.first;
            int idx = p.second;
            v[idx]=val*m;
            q.push({val*m,idx});
        }
        return v;
    }
};
```
```python []
import heapq

class Solution:
    def get_final_state(self, v, k, m):
        n = len(v)
        q = [(v[i], i) for i in range(n)]
        heapq.heapify(q)
        
        while k > 0:
            val, idx = heapq.heappop(q)
            v[idx] = val * m
            heapq.heappush(q, (val * m, idx))
            k -= 1
        
        return v

```
```Java []
import java.util.*;

class Solution {
    public List<Integer> getFinalState(List<Integer> v, int k, int m) {
        int n = v.size();
        PriorityQueue<int[]> q = new PriorityQueue<>(Comparator.comparingInt(a -> a[0]));
        
        for (int i = 0; i < n; i++) {
            q.offer(new int[]{v.get(i), i});
        }
        
        while (k-- > 0) {
            int[] p = q.poll();
            int val = p[0];
            int idx = p[1];
            v.set(idx, val * m);
            q.offer(new int[]{val * m, idx});
        }
        
        return v;
    }
}


```

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(K*log(N))
    

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(N)

# ***If you like the solution Please Upvote and subscribe to my youtube channel***
***It Motivates me to record more videos***

*Thank you* \uD83D\uDE00
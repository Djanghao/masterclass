# (Visualization👀) Easy Video Explanation || Set + Sorting Difference 🔥

**Author:** ayushnemmaniwar12
**Votes:** 16
**Link:** [https://leetcode.com/problems/maximum-square-area-by-removing-fences-from-a-field/solutions/4450826/](https://leetcode.com/problems/maximum-square-area-by-removing-fences-from-a-field/solutions/4450826/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Try to visulaize the input and remove the fences for better understanding


# ***Easy Video Explanation***

https://youtu.be/6o50axk5sG0



# Approach
<!-- Describe your approach to solving the problem. -->
The code finds the maximum square area formed by horizontal and vertical cuts. It uses sets to store the differences between consecutive cuts in both directions. By iterating through these sets, it identifies common differences, calculates the square area, and keeps track of the maximum. The final result is the maximum square area modulo 10^9 + 7. If no valid square is found, it returns -1. The algorithm ensures that both horizontal and vertical cuts are considered, and it handles input arrays in Java and Python accordingly.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O((m + n) log (m + n)).

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(m^2 + n^2)

# Code


```C++ []
class Solution {
public:
    int maximizeSquareArea(int m, int n, vector<int>& h, vector<int>& v) {
        int mod=1e9+7;
        unordered_set<int>s1,s2;
        h.push_back(1);
        h.push_back(m);
        v.push_back(1);
        v.push_back(n);
        sort(h.begin(),h.end());
        sort(v.begin(),v.end());
        for(int i=0;i<h.size();i++) {
            for(int j=i+1;j<h.size();j++) {
                s1.insert(h[j]-h[i]);
            }
        }
        for(int i=0;i<v.size();i++) {
            for(int j=i+1;j<v.size();j++) {
                s2.insert(v[j]-v[i]);
            }
        }
        long long ans=0;
        for(auto i:s1) {
            if(s2.find(i)!=s2.end()) {
                long long k=(long long)i*i;
                if(k>ans)
                    ans=k;
            } 
        }
        if(ans==0)
            return -1;
        ans=ans%mod;
        return ans;
    }
};
```
```python []
class Solution:
    def maximizeSquareArea(self, m, n, h, v):
        mod = 10**9 + 7
        s1, s2 = set(), set()
        h.extend([1, m])
        v.extend([1, n])
        h.sort()
        v.sort()

        for i in range(len(h)):
            for j in range(i + 1, len(h)):
                s1.add(h[j] - h[i])

        for i in range(len(v)):
            for j in range(i + 1, len(v)):
                s2.add(v[j] - v[i])

        ans = 0
        for i in s1:
            if i in s2:
                k = i * i
                ans = max(ans, k)

        if ans == 0:
            return -1
        return ans % mod

```
```Java []
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

class Solution {
    public int maximizeSquareArea(int m, int n, int[] h, int[] v) {
        int mod = 1_000_000_007;
        Set<Integer> s1 = new HashSet<>();
        Set<Integer> s2 = new HashSet<>();
        Arrays.sort(h);
        Arrays.sort(v);

        for (int i = 0; i < h.length; i++) {
            for (int j = i + 1; j < h.length; j++) {
                s1.add(h[j] - h[i]);
            }
        }

        for (int i = 0; i < v.length; i++) {
            for (int j = i + 1; j < v.length; j++) {
                s2.add(v[j] - v[i]);
            }
        }

        long ans = 0;
        for (int i : s1) {
            if (s2.contains(i)) {
                long k = (long) i * i;
                ans = Math.max(ans, k);
            }
        }

        if (ans == 0) return -1;
        return (int) (ans % mod);
    }
}


```

# ***If you like the solution Please Upvote and subscribe to my youtube channel***
***It Motivates me to record more videos***

*Thank you* \uD83D\uDE00
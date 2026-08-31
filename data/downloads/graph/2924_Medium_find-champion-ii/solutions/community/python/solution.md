# Easy Video Solution(Question Explained Clearly) || In-Degree 🔥

**Author:** ayushnemmaniwar12
**Votes:** 9
**Link:** [https://leetcode.com/problems/find-champion-ii/solutions/4251312/](https://leetcode.com/problems/find-champion-ii/solutions/4251312/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Spend time on the question and understand it clearly. Try with few inputs. Think in terms of In-Degree

# ***Detailed and easy Video Solution***

https://youtu.be/OeXcZ3N__qs

# Approach
<!-- Describe your approach to solving the problem. -->
The code takes an integer 'n' and a 2D vector 'v' as input. It counts the occurrences of each element in the second column of 'v' and stores the results in 'in_count.' Then, it identifies the elements with a count of 0, stores them in 'ans,' and returns the first element in 'ans' as a potential champion, ensuring there's only one candidate.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(N)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(N)


```C++ []
class Solution {
public:
    int findChampion(int n, vector<vector<int>>& v) {
        int m=v.size();
        vector<int>in(n,0);
        for(int i=0;i<m;i++)
        {
            in[v[i][1]]++;
        }
        vector<int>ans;
        for(int i=0;i<n;i++)
        {
            if(in[i]==0)
                ans.push_back(i);
        }
        if(ans.size()>1)
            return -1;
        return ans[0];
    }
};
```
```python []
class Solution:
    def findChampion(self, n, v):
        m = len(v)
        in_count = [0] * n
        for i in range(m):
            in_count[v[i][1]] += 1
        ans = []
        for i in range(n):
            if in_count[i] == 0:
                ans.append(i)
        if len(ans) > 1:
            return -1
        return ans[0]

```
```Java []
import java.util.List;
import java.util.ArrayList;

class Solution {
    public int findChampion(int n, List<List<Integer>> v) {
        int m = v.size();
        int[] in = new int[n];
        for (int i = 0; i < m; i++) {
            in[v.get(i).get(1)]++;
        }
        List<Integer> ans = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            if (in[i] == 0) {
                ans.add(i);
            }
        }
        if (ans.size() > 1) {
            return -1;
        }
        return ans.get(0);
    }
}

```
# ***If you like the solution Please Upvote and subscribe to my youtube channel***
***It Motivates me to record more videos***

*Thank you* \uD83D\uDE00
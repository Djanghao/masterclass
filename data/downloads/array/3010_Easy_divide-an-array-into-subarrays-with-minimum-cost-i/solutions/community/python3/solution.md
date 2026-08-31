# Easy Video Explanation 🔥|| Finding 2 minimums ✅

**Author:** ayushnemmaniwar12
**Votes:** 20
**Link:** [https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-i/solutions/4598879/](https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-i/solutions/4598879/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
3 elements only


***Easy Video Explanation***


https://youtu.be/HDAr0CnYqME




# Approach
<!-- Describe your approach to solving the problem. -->
The code finds the minimum cost by sorting the input array, selecting the first element, and adding the next two smallest elements. It ensures the correct functionality in both Java and Python, maintaining the same logic without modifying the code.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(N*(log(N)))

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(1)
    

# Code


```C++ []
class Solution {
public:
    int minimumCost(vector<int>& v) {
        int n=v.size();
        int s=v[0];
        sort(v.begin()+1,v.end());
        s=s+v[1]+v[2];
        return s;
    }
};
```
```python []
class Solution:
    def minimumCost(self, v):
        n = len(v)
        s = v[0]
        v[1:n] = sorted(v[1:n])
        s = s + v[1] + v[2]
        return s

```
```Java []
import java.util.Arrays;

public class Solution {
    public int minimumCost(int[] v) {
        int n = v.length;
        int s = v[0];
        Arrays.sort(v, 1, n);
        s = s + v[1] + v[2];
        return s;
    }
}


```

# ***If you like the solution Please Upvote and subscribe to my youtube channel***
***It Motivates me to record more videos***

*Thank you* \uD83D\uDE00
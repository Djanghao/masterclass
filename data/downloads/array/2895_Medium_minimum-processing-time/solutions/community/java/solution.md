# Easy step-step Video Explanation 🔥 || Greedy + Sorting 🔥 || (C++,JAVA,Python)🔥

**Author:** ayushnemmaniwar12
**Votes:** 13
**Link:** [https://leetcode.com/problems/minimum-processing-time/solutions/4144770/](https://leetcode.com/problems/minimum-processing-time/solutions/4144770/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Sort both the arrays and observe them carefully

# ***Detailed and easy Video Solution***

https://youtu.be/MaOJFZQoQDI


# Approach
<!-- Describe your approach to solving the problem. -->
we will sort both arrays, iterates through t, and pairs each element with the largest available element from v, maximizing the processing time. The result is the maximum processing time achievable through such pairings.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(N*log(N))

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(N)

```C++ []
class Solution {
public:
    int minProcessingTime(vector<int>& t, vector<int>& v) {
        int n=v.size();
        sort(t.begin(),t.end());
        sort(v.begin(),v.end());
        int j=n-1;
        int m=t.size();
        int ans=0;
        for(int i=0;i<m;i++)
        {
            int c=0;
            while(c<4)
            {
                ans=max(ans,t[i]+v[j]);
                c++;
                j--;
            }
        }
        return ans;
    }
};
```
```python []
class Solution:
    def minProcessingTime(self, t, v):
        n = len(v)
        t.sort()
        v.sort()
        j = n - 1
        m = len(t)
        ans = 0
        for i in range(m):
            c = 0
            while c < 4:
                ans = max(ans, t[i] + v[j])
                c += 1
                j -= 1
        return ans
```
```java []
import java.util.Arrays;

public class Solution {
    public int minProcessingTime(int[] t, int[] v) {
        int n = v.length;
        Arrays.sort(t);
        Arrays.sort(v);
        int j = n - 1;
        int m = t.length;
        int ans = 0;
        for (int i = 0; i < m; i++) {
            int c = 0;
            while (c < 4) {
                ans = Math.max(ans, t[i] + v[j]);
                c++;
                j--;
            }
        }
        return ans;
    }
}
```

# ***If you like the solution Please Upvote and subscribe to my youtube channel***

***It Motivates me to record more videos***

*Thank you* \uD83D\uDE00
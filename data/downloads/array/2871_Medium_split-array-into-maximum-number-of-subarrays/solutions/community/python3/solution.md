# Easy Video Solution(C++,JAVA,Python)🔥 || Bit Manipulation 🔥

**Author:** ayushnemmaniwar12
**Votes:** 10
**Link:** [https://leetcode.com/problems/split-array-into-maximum-number-of-subarrays/solutions/4110294/](https://leetcode.com/problems/split-array-into-maximum-number-of-subarrays/solutions/4110294/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Think in terms of bitwise AND Operator

# ***Detailed and easy Video Solution***

https://youtu.be/iN7jRGQtVAE

# Approach
<!-- Describe your approach to solving the problem. -->
Our code aims to find the maximum number of contiguous subarrays in an array that have the same bitwise AND value. It first calculates the common bitwise AND value for the entire array and then iterates through the array to count the number of subarrays with the same AND value, returning this count as the result.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(N)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(1)

```C++ []
class Solution {
public:
    int maxSubarrays(vector<int>& v) {
        int m=33554431;
        int n=v.size();
        for(int i=0;i<n;i++)
            m=m&v[i];
        int s=33554431;
        int c=0;
        if(m==0)
        {
            for(int i=0;i<n;i++)
            {
                s=s&v[i];
                if(i==n-1 && s!=m)
                    return c;
                if(s==m)
                {
                    s=33554431;
                    c++;
                } 
            }
            return c;
        }
        return 1;
    }
};
```
```python []
class Solution:
    def maxSubarrays(self, v):
        m = 33554431
        n = len(v)
        
        for i in range(n):
            m = m & v[i]
        
        s = 33554431
        c = 0
        
        if m == 0:
            for i in range(n):
                s = s & v[i]
                if i == n - 1 and s != m:
                    return c
                if s == m:
                    s = 33554431
                    c += 1
            return c
        
        return 1

```
```java []
class Solution {
    public int maxSubarrays(int[] v) {
        int m = 33554431;
        int n = v.length;
        
        for (int i = 0; i < n; i++) {
            m = m & v[i];
        }
        
        int s = 33554431;
        int c = 0;
        
        if (m == 0) {
            for (int i = 0; i < n; i++) {
                s = s & v[i];
                if (i == n - 1 && s != m)
                    return c;
                if (s == m) {
                    s = 33554431;
                    c++;
                } 
            }
            return c;
        }
        
        return 1;
    }
}
```
# ***If you like the solution Please Upvote and subscribe to my youtube channel***
***It Motivates me to record more videos***

***Thank you*** \uD83D\uDE00

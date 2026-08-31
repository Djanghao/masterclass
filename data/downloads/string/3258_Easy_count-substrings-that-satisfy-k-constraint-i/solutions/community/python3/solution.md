# Easy Video Solution 🔥 || How to 🤔 in Interview || O(N^3 to N^2) || Substrings

**Author:** ayushnemmaniwar12
**Votes:** 13
**Link:** [https://leetcode.com/problems/count-substrings-that-satisfy-k-constraint-i/solutions/5653203/](https://leetcode.com/problems/count-substrings-that-satisfy-k-constraint-i/solutions/5653203/)

---

***If you like the solution Please Upvote and subscribe to my youtube channel***

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Dry Run few examples and observe how you can build the substrings


***Easy Video Explanation***

https://youtu.be/36YUrJiQbFo
    

# Code


```C++ []
class Solution {
public:
    int countKConstraintSubstrings(string s, int t) {
        int n=s.size();
        int ans=0;
        for(int i=0;i<n;i++) {
            int a=0,b=0;
            for(int j=i;j<n;j++) {
                if(s[j]=='0')
                    a++;
                else
                    b++;
                if(a<=t || b<=t)
                    ans++;
            }
        }
        return ans;
    }
};
```
```python []
class Solution:
    def countKConstraintSubstrings(self, s: str, t: int) -> int:
        n = len(s)
        ans = 0

        for i in range(n):
            zero_count, one_count = 0, 0
            for j in range(i, n):
                if s[j] == '0':
                    zero_count += 1
                else:
                    one_count += 1
                
                if zero_count <= t or one_count <= t:
                    ans += 1

        return ans

```
```Java []
class Solution {
    public int countKConstraintSubstrings(String s, int t) {
        int n = s.length();
        int ans = 0;

        for (int i = 0; i < n; i++) {
            int zeroCount = 0, oneCount = 0;
            for (int j = i; j < n; j++) {
                if (s.charAt(j) == '0') {
                    zeroCount++;
                } else {
                    oneCount++;
                }
                
                if (zeroCount <= t || oneCount <= t) {
                    ans++;
                }
            }
        }

        return ans;
    }
}


```

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(N*N)
    

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(1)

# Follow up

Can you come up with O(N) Solution.

Hint: Think about Sliding window

# ***If you like the solution Please Upvote and subscribe to my youtube channel***
***It Motivates me to record more videos***

*Thank you* \uD83D\uDE00
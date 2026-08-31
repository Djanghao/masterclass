# Easy Video Solution 🔥 || How to 🤔 in Interview || String

**Author:** ayushnemmaniwar12
**Votes:** 17
**Link:** [https://leetcode.com/problems/lexicographically-smallest-string-after-a-swap/solutions/5473408/](https://leetcode.com/problems/lexicographically-smallest-string-after-a-swap/solutions/5473408/)

---

***If you like the solution Please Upvote and subscribe to my youtube channel***

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Dry Run few examples and observe how you can swap the values



***Easy Video Explanation***

https://youtu.be/Y_bVQfAe8vI
    

# Code


```C++ []
class Solution {
public:
    string getSmallestString(string s) {
        int n=s.size();
        for(int i=0;i<n-1;i++) {
            int a=s[i]-'0';
            int b=s[i+1]-'0';
            if(a%2==b%2 && a>b) {
                swap(s[i],s[i+1]);
                break;
            } 
        }
        return s;
    }
};
```
```python []
class Solution:
    def getSmallestString(self, s: str) -> str:
        n = len(s)
        for i in range(n - 1):
            a = int(s[i])
            b = int(s[i + 1])
            if a % 2 == b % 2 and a > b:
                s = s[:i] + s[i + 1] + s[i] + s[i + 2:]
                break
        return s

```
```Java []
class Solution {
    public String getSmallestString(String s) {
        int n = s.length();
        char[] charArray = s.toCharArray();
        
        for (int i = 0; i < n - 1; i++) {
            int a = charArray[i] - '0';
            int b = charArray[i + 1] - '0';
            if (a % 2 == b % 2 && a > b) {
                char temp = charArray[i];
                charArray[i] = charArray[i + 1];
                charArray[i + 1] = temp;
                break;
            }
        }
        
        return new String(charArray);
    }
}


```

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(N)
    

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(1)

# ***If you like the solution Please Upvote and subscribe to my youtube channel***
***It Motivates me to record more videos***

*Thank you* \uD83D\uDE00
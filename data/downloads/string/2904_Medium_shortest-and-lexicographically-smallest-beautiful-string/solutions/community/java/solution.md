# Video Solution(Brute->Optimal) 🔥 || Sliding Window 🔥 || C++,JAVA,PYTHON 🔥

**Author:** ayushnemmaniwar12
**Votes:** 21
**Link:** [https://leetcode.com/problems/shortest-and-lexicographically-smallest-beautiful-string/solutions/4170162/](https://leetcode.com/problems/shortest-and-lexicographically-smallest-beautiful-string/solutions/4170162/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Try to code brute force and observe whether we can optimize it or not.
Whenever we find 'k' or some condition to satify 'k'. Try to think about sliding window or priority_queue. You will get some leads

# ***Detailed and easy Video Solution***

https://youtu.be/q7bEQMv9TFQ

# Approach
<!-- Describe your approach to solving the problem. -->
The code iterates through a string, counting '1's until reaching the desired count, 'k'. It then slides a window to find the shortest substring with 'k' '1's, updating the result string accordingly. It compares substrings by length and lexicographic order in the process.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(N+N)->O(N)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(N)

# Brute Force
```C++ []
class Solution {
public:
    string shortestBeautifulSubstring(string s, int k) {
        int n=s.size();
        string ans;
        int i=0,j=0;
        int c=0;
        while(j<n)
        {
            if(s[j]=='1')
                c++;
            if(c==k)
            {   
                while(i<n && c==k)
                {
                    string s1=s.substr(i,j-i+1);
                    if(ans.size()==0 || s1.size()<ans.size())
                        ans=s1;
                    else if(s1.size()==ans.size())
                        ans=min(ans,s1);
                    if(s[i]=='1')
                        c--;
                    i++;
                }
            }
            j++;
        }
        return ans;
    }
};
```
```python []
class Solution:
    def shortestBeautifulSubstring(self, s, k):
        n = len(s)
        ans = ""
        i = 0
        j = 0
        c = 0

        while j < n:
            if s[j] == '1':
                c += 1
            if c == k:
                while i < n and c == k:
                    s1 = s[i:j + 1]
                    if not ans or len(s1) < len(ans):
                        ans = s1
                    elif len(s1) == len(ans):
                        ans = min(ans, s1)
                    if s[i] == '1':
                        c -= 1
                    i += 1
            j += 1
        return ans

```
```Java []
public class Solution {
    public String shortestBeautifulSubstring(String s, int k) {
        int n = s.length();
        String ans = "";
        int i = 0, j = 0;
        int c = 0;
        
        while (j < n) {
            if (s.charAt(j) == '1') {
                c++;
            }
            if (c == k) {
                while (i < n && c == k) {
                    String s1 = s.substring(i, j + 1);
                    if (ans.isEmpty() || s1.length() < ans.length()) {
                        ans = s1;
                    } else if (s1.length() == ans.length()) {
                        ans = (ans.compareTo(s1) < 0) ? ans : s1;
                    }
                    if (s.charAt(i) == '1') {
                        c--;
                    }
                    i++;
                }
            }
            j++;
        }
        return ans;
    }
}

```

# Optimal Code
```C++ []
class Solution {
public:
    string shortestBeautifulSubstring(string s, int k) {
        int n=s.size();
        string ans;
        int i=0,j=0;
        int c=0;
        while(j<n)
        {
            if(s[j]=='1')
                c++;
            if(c==k)
            {   
                while(i<n && c==k)
                {
                    string s1=s.substr(i,j-i+1);
                    if(ans.size()==0 || s1.size()<ans.size())
                        ans=s1;
                    else if(s1.size()==ans.size())
                        ans=min(ans,s1);
                    if(s[i]=='1')
                        c--;
                    i++;
                }
            }
            j++;
        }
        return ans;
    }
};
```
```python []
class Solution:
    def shortestBeautifulSubstring(self, s, k):
        n = len(s)
        ans = ""
        i = 0
        j = 0
        c = 0

        while j < n:
            if s[j] == '1':
                c += 1
            if c == k:
                while i < n and c == k:
                    s1 = s[i:j + 1]
                    if not ans or len(s1) < len(ans):
                        ans = s1
                    elif len(s1) == len(ans):
                        ans = min(ans, s1)
                    if s[i] == '1':
                        c -= 1
                    i += 1
                j += 1
        return ans
```
```Java []
public class Solution {
    public String shortestBeautifulSubstring(String s, int k) {
        int n = s.length();
        String ans = "";
        int i = 0, j = 0;
        int c = 0;
        
        while (j < n) {
            if (s.charAt(j) == '1') {
                c++;
            }
            if (c == k) {
                while (i < n && c == k) {
                    String s1 = s.substring(i, j + 1);
                    if (ans.isEmpty() || s1.length() < ans.length()) {
                        ans = s1;
                    } else if (s1.length() == ans.length()) {
                        ans = (ans.compareTo(s1) < 0) ? ans : s1;
                    }
                    if (s.charAt(i) == '1') {
                        c--;
                    }
                    i++;
                }
            }
            j++;
        }
        return ans;
    }
}
```

# ***If you like the solution Please Upvote and subscribe to my youtube channel***
***It Motivates me to record more videos***

*Thank you* \uD83D\uDE00
# 2 pointers ||4ms Beats 100%

**Author:** anwendeng
**Votes:** 35
**Link:** [https://leetcode.com/problems/adding-spaces-to-a-string/solutions/6106375/](https://leetcode.com/problems/adding-spaces-to-a-string/solutions/6106375/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Use 2 pointers to solve the string question. 1st approach uses a single loop.

2nd approach uses nested loop which is also fast. That code has 4ms & beats 100%.
# Approach
<!-- Describe your approach to solving the problem. -->
1. Compute the lengths for `spaces` & `s` as` m, n`
2. Declare a array `t` of size `n+m`
3. Use single loop with 2 pointers `j` for space `i` for `s` to transverse both strings
4. if `j < m and  i == spaces[j]` set `t[i+j]=' '`, increase `j++`
5. Set `t[i+j]=s[i]`
6. `t` is the answer
7. Thanks to suggestion by @Arthur-Chang, less operations less elapsed time, 2nd C++ is revised from the 1st code.
8. 2nd approach uses nested loop.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
Extra: $O(1)$ not count the space for `t`
# Code||C++ v1  6ms Beats 99.40%|| C++ v2 5ms beats 99.70%
```cpp []
class Solution {
public:
    string addSpaces(string& s, vector<int>& spaces) {
        const int m = spaces.size(), n = s.size();
        string t(n + m, ' ');
        
        int j = 0; // Pointer for spaces
        for (int i = 0; i < n; i++) {
            if (j < m && i == spaces[j]) {
                t[i+j] = ' '; 
                j++;      // Move to the next space index
            }
            t[i+j]=s[i]; // Add the character from the original string
        }
        return t;
    }
};

```
```cpp [C++ v2]
class Solution {
public:
    string addSpaces(string& s, vector<int>& spaces) {
        const int m = spaces.size(), n = s.size();
        string t(n + m, ' ');
        
        int j = 0; // Pointer for spaces
        for (int i = 0; i < n; i++) {
            if (j < m && i == spaces[j]) 
                j++;      // Move to the next space index
            
            t[i+j]=s[i]; // Add the character from the original string
        }
        return t;
    }
};
```
```Python []
class Solution:
    def addSpaces(self, s: str, spaces: List[int]) -> str:
        m, n=len(spaces), len(s)
        t=[' ']*(m+n)
        j=0
        for i, c in enumerate(s):
            if j<m and i==spaces[j]:
                j+=1
            t[i+j]=s[i]
        return "".join(t)       
```
# C++ 2 pointers using nested loop||4ms beats 100%
```C++ []
class Solution {
public:
    string addSpaces(string& s, vector<int>& spaces) {
        const int m = spaces.size(), n = s.size();
        string t(n + m, ' ');
        spaces.push_back(n);// reduce number of branches

        int j = 0, i=0; // Pointer for spaces
        for (i = 0; i < n; i++) {
            while (i < n && i != spaces[j]) {
                t[i + j] = s[i];
                i++;
            }
            if (j < m) {
                t[i + j + 1] = s[i];
                j++;
            }
        }
        return t;
    }
};
```
```Python []
class Solution:
    def addSpaces(self, s: str, spaces: List[int]) -> str:
        m, n=len(spaces), len(s)
        spaces.append(n)
        t=[' ']*(m+n)
        i, j=0, 0
        while i<n:
            while i<n and i!=spaces[j]:
                t[i+j]=s[i]
                i+=1
            if j<m:
                t[i+j+1]=s[i]
                j+=1
            i+=1
        return "".join(t)
        
```
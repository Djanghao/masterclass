# 💢☠💫Easiest👾Faster✅💯 Lesser🧠 🎯 C++✅Python3🐍✅Java✅C✅Python🐍✅C#✅💥🔥💫Explained☠💥🔥 Beats 💯

**Author:** Edwards310
**Votes:** 3
**Link:** [https://leetcode.com/problems/lexicographically-smallest-string-after-a-swap/solutions/5483538/](https://leetcode.com/problems/lexicographically-smallest-string-after-a-swap/solutions/5483538/)

---

# Intuition
![0ehh83fsnh811.jpg](./images/0.jpeg)
```Java []
class Solution {
    public String getSmallestString(String s) {
        char[] ch = s.toCharArray();
        int n = ch.length;
        for(int i = 0; i < n - 1; i++){
            if((ch[i] - '0') % 2 == (ch[i + 1] - '0') % 2){
                if(ch[i + 1 ] < ch[i]){
                    char temp = ch[i];
                    ch[i] = ch[i + 1];
                    ch[i + 1] = temp;
                    return new String(ch);
                }
            }
        }
        return s;
    }
}
```
```C++ []
// Start Of Anuj Bhati aka Edward Scott310's Template...
#pragma GCC optimize("O2")
#include <bits/stdc++.h>
#define FOR(a, b, c) for (int a = b; a < c; a++)
#define FOR1(a, b, c) for (int a = b; a <= c; ++a)
#define Rep(i, n) FOR (i, 0, n)
#define Rep1(i, n) FOR1(i, 1, n)

// end of Anuj Bhati's aka Edward Scott310's Template
class Solution {
public:
    string getSmallestString(string s) {
        int n = s.length();
        string smallest = s;
    
        Rep(i, n - 1){
            if ((s[i] - '0') % 2 == (s[i + 1] - '0') % 2) {
                swap(s[i], s[i + 1]);
                // Compare lexicographically
                if (s < smallest) {
                    smallest = s;
                }
                // Swap back to revert the change
                swap(s[i], s[i + 1]);
            }
        }
    
        return smallest;
    }
};
```
```python3 []
class Solution:
    def getSmallestString(self, s: str) -> str:
        s = list(s)
        n = len(s)
        smallest = s[:]
    
        for i in range(n - 1):
        # Check if adjacent characters have the same parity
            if (int(s[i]) % 2) == (int(s[i + 1]) % 2):
                # Swap and check if it forms a smaller string
                s[i], s[i + 1] = s[i + 1], s[i]
                # Join the list into a string
                candidate = ''.join(s)
                # Compare lexicographically
                if candidate < ''.join(smallest):
                    smallest = s[:]
                # Swap back to revert the change
                s[i], s[i + 1] = s[i + 1], s[i]
    
        return ''.join(smallest)
```
```C# []
public class Solution {
    public string GetSmallestString(string s) {
        int i = 1;
        for (; i < s.Length; ++i) {
            if (s[i] % 2 == s[i - 1] % 2 && s[i] < s[i - 1]) 
                break;
        }
        
        if (i == s.Length) return s;
        return String.Concat(s.Take(i - 1).Append(s[i]).Append(s[i - 1]).Concat(s.Skip(i + 1)));
    }
}
```
```javascript []
/**
 * @param {string} s
 * @return {string}
 */
var getSmallestString = function(s) {
    let arr = s.split('')
    let n = s.length;
    for(let i = 0; i < n - 1; ++i){
        if(arr[i] % 2 === arr[i + 1] % 2){
            if(arr[i + 1] < arr[i]){
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                break;
            }
        }
    }
    return arr.join('')
};
```
```python []
class Solution(object):
    def getSmallestString(self, s):
        """
        :type s: str
        :rtype: str
        """
        s = list(s)
        n = len(s)
        smallest = s[:]
    
        for i in range(n - 1):
            if (int(s[i]) % 2) == (int(s[i + 1]) % 2):
                s[i], s[i + 1] = s[i + 1], s[i]
                candidate = ''.join(s)
                if candidate < ''.join(smallest):
                    smallest = s[:]
                s[i], s[i + 1] = s[i + 1], s[i]
    
        return ''.join(smallest)
```
```C []
char* getSmallestString(char* s) {
    int n = strlen(s);
    for(int i  = 0; i < n - 1; i++){
        if((s[i] - '0') % 2 == (s[i + 1] - '0') % 2){
            if(s[i + 1] < s[i]){
                char t = s[i];
                s[i] = s[i + 1];
                s[i + 1] = t;
                break;
            }
        }
    }
    return s;
}
```
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
      O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
      O(n)
# Code
```
public class Solution {
    public string GetSmallestString(string s) {
        int i = 1;
        for (; i < s.Length; ++i) {
            if (s[i] % 2 == s[i - 1] % 2 && s[i] < s[i - 1]) 
                break;
        }
        
        if (i == s.Length) return s;
        return String.Concat(s.Take(i - 1).Append(s[i]).Append(s[i - 1]).Concat(s.Skip(i + 1)));
    }
}
```
![th.jpeg](./images/1.jpeg)

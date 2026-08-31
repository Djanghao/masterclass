# Easy 🔥🔥 Python 🐍 // Java // Python3 // C++ 🔥🔥 Explained 💀☠️ Beats 💯

**Author:** Edwards310
**Votes:** 6
**Link:** [https://leetcode.com/problems/lexicographically-smallest-string-after-operations-with-constraint/solutions/4985495/](https://leetcode.com/problems/lexicographically-smallest-string-after-operations-with-constraint/solutions/4985495/)

---

# Intuition
![0ehh83fsnh811.jpg](./images/0.jpeg)

![Screenshot 2024-04-07 093152.png](./images/1.png)
![Screenshot 2024-04-07 101424.png](./images/2.png)
![Screenshot 2024-04-07 101730.png](./images/3.png)
![Screenshot 2024-04-07 113544.png](./images/4.png)

<!-- Describe your first thoughts on how to solve this problem. -->
```C++ []
class Solution {
public:
    string getSmallestString(string s, int k) {
        int n = s.size();
        string t = s;
        for(int i = 0; i < n; i++){
            int c = s.at(i)- 'a';
            for(int j = 0; j < 26; j++){
                int d = min(abs(c - j), 26 - abs(c - j));
                if(d <= k){
                    t.at(i) = char(j + 'a');
                    k -= d;
                    break;
                }
            }
        }
        return t;
    }
};
```
```python3 []
class Solution:
    def getSmallestString(self, s: str, k: int) -> str:
        n = len(s)
        result = list(s)
        for i in range(n):
            for j in range(26):
                new_char = chr(ord('a') + j)
                diff = min((ord(new_char) - ord(s[i])) % 26 , (ord(s[i]) - ord(new_char)) % 26)
                if diff <= k:
                    result[i] = new_char
                    k -= diff
                    break
        return "".join(result)
```
```Java []
class Solution {
    public String getSmallestString(String s, int k) {
        StringBuilder sb = new StringBuilder("");
        int n = s.length();
        for(int i = 0; i < n; i++){
            char c = s.charAt(i);
            if(c == 'a')
                sb.append('a');
            else{
                int min = Math.min(c - 'a', ('z' - c) + 1);
                if(min <= k){
                    k -= min;
                    sb.append('a');
                }
                else{
                    int y = ((c - 'a') - k);
                    sb.append((char)(y + 'a'));
                    k = 0;
                }
            }
        }
        return sb.toString();
    }
}
```
```Python []
class Solution(object):
    def getSmallestString(self, s, k):
        """
        :type s: str
        :type k: int
        :rtype: str
        """
        ts = [ord(x) - ord('a') for x in s]
        pre = 0
        ans = ''
        for i, x in enumerate(ts):
            down = x
            up = 26 - x
            cost = min(up, down)
            if cost <= k:
                ans += 'a'
                k -= cost
            else:
                ans += chr(x - k + ord('a'))
                return ans + s[i + 1 : ]
        return ans
```
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
class Solution:
    def getSmallestString(self, s: str, k: int) -> str:
        n = len(s)
        result = list(s)
        for i in range(n):
            for j in range(26):
                new_char = chr(ord('a') + j)
                diff = min((ord(new_char) - ord(s[i])) % 26 , (ord(s[i]) - ord(new_char)) % 26)
                if diff <= k:
                    result[i] = new_char
                    k -= diff
                    break
        return "".join(result)
```
# Please upvote if it's useful ...
![th.jpeg](./images/5.jpeg)

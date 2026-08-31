# Java || C++ || Python || JavaScript || Easy and Concise Solution || Two-pointers

**Author:** nishant7372
**Votes:** 14
**Link:** [https://leetcode.com/problems/partition-string-into-substrings-with-values-at-most-k/solutions/2977442/](https://leetcode.com/problems/partition-string-into-substrings-with-values-at-most-k/solutions/2977442/)

---

```java []
class Solution {
    public int minimumPartition(String s, int k) {
        int i=0,c=0,j=0;
        // i - left pointer
        // j - right pointer
        while(j<s.length())
        {
            while(j<s.length() && Long.parseLong(s.substring(i,j+1))<=k)
                j++;
            c++;
            if(i==j)
                return -1;
            i=j;
        }
        return c;
    }
}
```
```C++ []
class Solution {
public:
    int minimumPartition(string s, int k) {
        int i = 0, c = 0, j = 0;
        // i - left pointer
        // j - right pointer
        while (j < s.length()) {
            while (j < s.length() && stol(s.substr(i, j-i+1)) <= k) {
                j++;
            }
            c++;
            if (i == j) {
                return -1;
            }
            i = j;
        }
        return c;
    }
};

```
```python []
class Solution(object):
    def minimumPartition(self, s, k):
        i = 0
        c = 0
        j = 0
        # i - left pointer
        # j - right pointer
        while j < len(s):
            while j < len(s) and int(s[i:j + 1]) <= k:
                j += 1
            c += 1
            if i == j:
                return -1
            i = j
        return c
```
``` javascript []
    var minimumPartition = function(s, k) {
        let i = 0;
        let c = 0;
        let j = 0;
        // i - left pointer
        // j - right pointer
        while (j < s.length) {
            while (j < s.length && parseInt(s.substring(i, j + 1)) <= k) {
                j++;
            }
            c++;
            if (i === j) {
                return -1;
            }
            i = j;
        }
        return c;
    };
```
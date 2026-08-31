# Easy solutions IN ALL LANGUAGE

**Author:** deepakumar-developer
**Votes:** 7
**Link:** [https://leetcode.com/problems/largest-substring-between-two-equal-characters/solutions/4483102/](https://leetcode.com/problems/largest-substring-between-two-equal-characters/solutions/4483102/)

---

```Dart []
class Solution {
  int maxLengthBetweenEqualCharacters(String s) {
    for (int i=s.length-1; i>0;i--){
        for (int j=0; j+i<s.length; j++){
            if (s[j] == s[j+i]) return i-1;
        }
    }
    return -1;
  }
}

```
```Java []
class Solution {
    public int maxLengthBetweenEqualCharacters(String s) {
    String[] s1=s.split("");
    for (int i=s1.length-1; i>0;i--){
        for (int j=0; j+i<s1.length; j++){
            if (s1[j].equals(s1[j+i])) return i-1;
        }
    }
    return -1;
    }
}
```
```Python []
class Solution(object):
    def maxLengthBetweenEqualCharacters(self, s):
        """
        :type s: str
        :rtype: int
        """
        for i in range(len(s) - 1, 0, -1):
            for j in range(len(s) - i):
                if s[j] == s[j + i]:
                    return i - 1
        return -1
```
```Python3 []
class Solution:
    def maxLengthBetweenEqualCharacters(self, s: str) -> int:
        for i in range(len(s) - 1, 0, -1):
            for j in range(len(s) - i):
                if s[j] == s[j + i]:
                    return i - 1
        return -1
```
```c++ []
class Solution {
public:
    int maxLengthBetweenEqualCharacters(const std::string& s) {
        std::vector<std::string> s1;
        for (char c : s) {
            s1.push_back(std::string(1, c));
        }

        for (int i = s1.size() - 1; i > 0; --i) {
            for (int j = 0; j + i < s1.size(); ++j) {
                if (s1[j] == s1[j + i]) {
                    return i - 1;
                }
            }
        }

        return -1;
    }
};
```


# Python || Java || C++ || Implemetation

**Author:** khud_gye_guru
**Votes:** 104
**Link:** [https://leetcode.com/problems/find-the-longest-balanced-substring-of-a-binary-string/solutions/3368279/](https://leetcode.com/problems/find-the-longest-balanced-substring-of-a-binary-string/solutions/3368279/)

---

**Just check or ```01```, ```0011```, ```000111```....**
```C++ []
class Solution {
public:
    int findTheLongestBalancedSubstring(string s) {
        int res = 0;
        string temp = "01";
        while(temp.size() <= s.size()){
            if(s.find(temp) != string::npos) 
                res = temp.size();
            temp = '0' + temp + '1';
        }
        return res;
    }
};
```
```python []
class Solution:
    def findTheLongestBalancedSubstring(self, s: str) -> int:
        res, temp = 0, "01"
        while len(temp) <= len(s):
            if temp in s: 
                res = len(temp)
            temp = '0' + temp + '1'
        return res
```
```Java []
class Solution {
    public int findTheLongestBalancedSubstring(String s) {
        int res = 0;
        String temp = "01";
        while(temp.length() <= s.length()){
            if(s.contains(temp))
                res = temp.length();
            temp = "0" + temp + "1";
        }
        return res;
    }
}
```

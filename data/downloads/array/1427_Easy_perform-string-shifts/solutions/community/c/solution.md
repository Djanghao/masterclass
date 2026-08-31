# C++ five lines: compute total shift + move start index of the string.

**Author:** IgorB
**Votes:** 2
**Link:** [https://leetcode.com/problems/perform-string-shifts/solutions/579823/](https://leetcode.com/problems/perform-string-shifts/solutions/579823/)

---

```
class Solution {
    public:
        string stringShift(string s, vector<vector<int>>& shift) 
        {
            int left = 0, right = 0;
            for(auto& v : shift) v.front() ? right+=v.back() : left+=v.back();
            int total_shift = abs(right-left) % s.length();
            int start = right < left ? total_shift : s.length()-total_shift;
            return s.substr(start) + s.substr(0, start);
        }
};
```
Or, one can do it this way:
```
class Solution {
    public:
        string stringShift(string s, vector<vector<int>>& shift) 
        {
            int total_shift = 0;
            for(auto& v : shift) v.front() ? total_shift -= v.back() : total_shift += v.back();
            total_shift %= (int)s.length();
            int start = total_shift < 0 ? s.length()+total_shift : total_shift;
            return s.substr(start) + s.substr(0, start);
        }
};
```


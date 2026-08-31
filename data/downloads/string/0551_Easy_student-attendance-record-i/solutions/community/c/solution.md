# [C++/Python] One line

**Author:** zxspring21
**Votes:** 9
**Link:** [https://leetcode.com/problems/student-attendance-record-i/solutions/887302/](https://leetcode.com/problems/student-attendance-record-i/solutions/887302/)

---

**C++:**
```
bool checkRecord(string s) {
	return s.find("LLL")==string::npos && count(s.begin(),s.end(),'A')<=1;
}
```
Python:
```
class Solution:
    def checkRecord(self, s: str) -> bool:
        return s.count('A')<2 and s.count('LLL')==0
```
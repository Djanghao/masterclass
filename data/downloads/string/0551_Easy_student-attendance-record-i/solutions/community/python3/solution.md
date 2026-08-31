# Solution in Python 3 (one line)

**Author:** junaidmansuri
**Votes:** 24
**Link:** [https://leetcode.com/problems/student-attendance-record-i/solutions/356636/](https://leetcode.com/problems/student-attendance-record-i/solutions/356636/)

---

```
class Solution:
    def checkRecord(self, s: str) -> bool:
    	return (s.count('A') < 2) and ('LLL' not in s)
		
		
- Junaid Mansuri
(LeetCode ID)@hotmail.com
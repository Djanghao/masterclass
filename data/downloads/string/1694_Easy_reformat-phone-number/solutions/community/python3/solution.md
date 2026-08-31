# [Python3] string processing

**Author:** ye15
**Votes:** 20
**Link:** [https://leetcode.com/problems/reformat-phone-number/solutions/978512/](https://leetcode.com/problems/reformat-phone-number/solutions/978512/)

---

**Algo**
Check the special case of 4 letters remaining. 

**Implementation**
```
class Solution:
    def reformatNumber(self, number: str) -> str:
        number = number.replace("-", "").replace(" ", "") # removing - and space 
        ans = []
        for i in range(0, len(number), 3): 
            if len(number) - i != 4: ans.append(number[i:i+3])
            else: 
                ans.extend([number[i:i+2], number[i+2:]])
                break 
        return "-".join(ans)
```

**Analysis**
Time complexity `O(N)`
Space complexity `O(N)`
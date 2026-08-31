# Left-to-right and right-to-left

**Author:** votrubac
**Votes:** 237
**Link:** [https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/solutions/1646594/](https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/solutions/1646594/)

---

A useful trick (when doing any parentheses validation) is to greedily check balance left-to-right, and then right-to-left.
- Left-to-right check ensures that we do not have orphan ')' parentheses.
- Right-to-left checks for orphan '(' parentheses.

We go left-to-right:
- Count `wild` (not locked) characters. 
- Track the balance `bal` for locked parentheses. 
	- If the balance goes negative, we check if we have enough `wild` characters to compensate.
- In the end, check that we have enough `wild` characters to cover positive balance (open parentheses). 

This approach alone, however, will fail for `["))((", "0011"]` test case. That is why we also need to do the same going right-to-left.

**Python 3**
```python
class Solution:
    def canBeValid(self, s: str, locked: str) -> bool:
        def validate(s: str, locked: str, op: str) -> bool:
            bal, wild = 0, 0
            for i in range(len(s)):
                if locked[i] == "1":
                    bal += 1 if s[i] == op else -1
                else:
                    wild += 1
                if wild + bal < 0:
                    return False
            return bal <= wild
        return len(s) % 2 == 0 and validate(s, locked, '(') and validate(s[::-1], locked[::-1], ')')
```

**Java**
```java
boolean validate(String s, String locked, char op) {
    int bal = 0, wild = 0, sz = s.length();
    int start = op == '(' ? 0 : sz - 1, dir = op == '(' ? 1 : - 1;
    for (int i = start; i >= 0 && i < sz && wild + bal >= 0; i += dir)
        if (locked.charAt(i) == '1')
            bal += s.charAt(i) == op ? 1 : -1;
        else
            ++wild;
    return Math.abs(bal) <= wild;
}
public boolean canBeValid(String s, String locked) {
    return s.length() % 2 == 0 && validate(s, locked, '(') && validate(s, locked, ')');
}
```
**C++**
```cpp
bool canBeValid(string s, string locked) {
    auto validate = [&](char op) {
        int bal = 0, wild = 0, sz = s.size();
        int start = op == '(' ? 0 : sz - 1, dir = op == '(' ? 1 : - 1;
        for (int i = start; i >= 0 && i < sz && wild + bal >= 0; i += dir)
            if (locked[i] == '1')
                bal += s[i] == op ? 1 : -1;
            else
                ++wild;
        return abs(bal) <= wild;
    };
    return s.size() % 2 == 0 && validate('(') && validate(')');
}
```
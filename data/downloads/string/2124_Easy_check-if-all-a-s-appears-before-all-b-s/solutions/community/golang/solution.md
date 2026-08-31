# Python/JS/Go/C++ O(n) violation checking [w/ Example]

**Author:** brianchiang_tw
**Votes:** 5
**Link:** [https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/solutions/1661920/](https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/solutions/1661920/)

---

**Hint**:

Since description says that **'a' must come before 'b'** in whole string, 
then **violation pattern 'ba' should not appear** in input string.

**Example**:

<img src="https://assets.leetcode.com/users/images/c293783c-e2fb-442d-84aa-6740e0aae3e8_1641125355.7053854.png" width=400 height=300>

---
**Implementation**:
in **Python**

```
class Solution:
    def checkString(self, s: str) -> bool:
        
        # 'a' cannot come after 'b'
        violation = "ba"
        
        return violation not in s
```

---

in **Javascript**:

```
var checkString = function(s) {
    
    // a cannot come after b
    let violation = "ba";
    
    return s.indexOf(violation, 0) == -1;
};
```

---

in **Go**:

```
func checkString(s string) bool {
    
    // 'a' cannot come after 'b'
    violation := "ba"
    
    return strings.Count(s, violation) == 0
}
```

---

in **C++**

```
class Solution {
public:
    bool checkString(string s) {
        
        // 'a' cannot come after 'b'
        return s.find( violation ) == -1;
    }
    
private:
    string violation = "ba";
};
```

---

Reference:

[1] [Python official docs about in, not in  membership operation](https://docs.python.org/3/reference/expressions.html#membership-test-operations)

[2] [MDN Javascript docs about substring indexOf() method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)

[3] [Golang official docs about string.Count( ... ) function](https://pkg.go.dev/strings#Count)

[4] [CPP reference about string.find( ... ) method](https://www.cplusplus.com/reference/string/string/find/)
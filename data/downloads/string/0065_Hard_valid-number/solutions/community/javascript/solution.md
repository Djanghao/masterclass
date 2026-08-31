# JS, Python, Java, C++ | Easy Character Conditional Solution w/ Explanation

**Author:** sgallivan
**Votes:** 79
**Link:** [https://leetcode.com/problems/valid-number/solutions/1209315/](https://leetcode.com/problems/valid-number/solutions/1209315/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

### ***Idea:***

To solve this problem, we should should just make a list of the possible error conditions and then check for each one.

The error conditions are:
 - More than one exponent character (**'e'/'E'**), or seeing an **'e'/'E'** when a number has not yet been seen.
 - More than one sign, or a sign appearing after a decimal or number have been seen. This gets reset when passing an **'e'/'E'**.
 - More than one decimal, or a decimal appearing after an **'e'/'E'** has been seen.
 - Any other non-number character appearing.
 - Reaching the end of **S** without an active number.

To help with this process, we can set up some boolean flags for the different things of which we're keeping track (**num, exp, sign, dec**). We'll also need to remember to reset all flags except **exp** when we find an **'e'/'E'**, as we're starting a new integer expression.

 - _**Time Complexity: O(N)** where **N** is the number of characters in **S**_
 - _**Space Complexity: O(1)**_

---

### ***Javascript Code:***
```javascript
var isNumber = function(S) {
    let exp = false, sign = false, num = false, dec = false
    for (let c of S)
        if (c >= '0' && c <= '9') num = true     
        else if (c === 'e' || c === 'E')
            if (exp || !num) return false
            else exp = true, sign = false, num = false, dec = false
        else if (c === '+' || c === '-')
            if (sign || num || dec) return false
            else sign = true
        else if (c === '.')
            if (dec || exp) return false
            else dec = true
        else return false
    return num
};
```

---

### ***Python Code:***
```python
class Solution:
    def isNumber(self, S: str) -> bool:    
        num, exp, sign, dec = False, False, False, False
        for c in S:
            if c >= '0' and c <= '9': num = True     
            elif c == 'e' or c == 'E':
                if exp or not num: return False
                else: exp, num, sign, dec = True, False, False, False
            elif c == '+' or c == '-':
                if sign or num or dec: return False
                else: sign = True
            elif c == '.':
                if dec or exp: return False
                else: dec = True
            else: return False
        return num
```

---

#### ***Java Code:***
```java
class Solution {
    public boolean isNumber(String S) {
        boolean num = false, exp = false, sign = false, dec = false;
        for (int i = 0; i < S.length(); i++) {
            char c = S.charAt(i);
            if (c >= '0' && c <= '9') num = true ;    
            else if (c == 'e' || c == 'E')
                if (exp || !num) return false;
                else {
                    exp = true;
                    sign = false;
                    num = false;
                    dec = false;
                }
            else if (c == '+' || c == '-')
                if (sign || num || dec) return false;
                else sign = true;
            else if (c == '.')
                if (dec || exp) return false;
                else dec = true;
            else return false;
        }
        return num;
    }
}
```

---

#### ***C++ Code:***
```c++
class Solution {
public:
    bool isNumber(string S) {
        bool num = false, exp = false, sign = false, dec = false;
        for (auto c : S)
            if (c >= '0' && c <= '9') num = true ;    
            else if (c == 'e' || c == 'E')
                if (exp || !num) return false;
                else exp = true, sign = false, num = false, dec = false;
            else if (c == '+' || c == '-')
                if (sign || num || dec) return false;
                else sign = true;
            else if (c == '.')
                if (dec || exp) return false;
                else dec = true;
            else return false;
        return num;
    }
};
```
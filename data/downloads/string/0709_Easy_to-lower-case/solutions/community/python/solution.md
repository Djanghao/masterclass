# JS, Python, Java, C++ | Easy ASCII Solution w/ Explanation

**Author:** sgallivan
**Votes:** 29
**Link:** [https://leetcode.com/problems/to-lower-case/solutions/1227317/](https://leetcode.com/problems/to-lower-case/solutions/1227317/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

The uppercase letters from **'A'** to **'Z'** have **ASCCII codes** between **65** and **90**. We can iterate through our input string (**s**) and as we build up our answer string (**ans**), if the value (**n**) of any character lies in that range, we can replace it with the character of value **n + 32**, which corresponds to the lowercase version of the uppercase letter.

 - _**Time Complexity: O(N)** where **N** is the length of **s**_
 - _**Space Complexity: O(1)** excluding the space of the output_

---

#### ***Javascript Code:***
```javascript
var toLowerCase = function(s) {
    let ans = ""
    for (let c of s) {
        let n = c.charCodeAt()
        ans += n > 64 && n < 91 ? String.fromCharCode(n + 32) : c 
    }
    return ans
};
```

---

#### ***Python Code:***
```python
class Solution:
    def toLowerCase(self, s: str) -> str:
        ans = ""
        for c in s:
            n = ord(c)
            ans += chr(n+32) if n > 64 and n < 91 else c
        return ans
```

---

#### ***Java Code:***
```java
class Solution {
    public String toLowerCase(String s) {
        StringBuilder ans = new StringBuilder();
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            ans.append(c > 64 && c < 91 ? (char)(c + 32) : c);
        }
        return new String(ans);
    }
}
```

---

#### ***C++ Code:***
```c++
class Solution {
public:
    string toLowerCase(string s) {
        string ans = "";
        for (auto& c : s)
            ans += c > 64 && c < 91 ? c + 32 : c;
        return ans;
    }
};
```
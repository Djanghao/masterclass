# JavaScript split/join using charCodeAt

**Author:** ele1221
**Votes:** 8
**Link:** [https://leetcode.com/problems/encode-and-decode-strings/solutions/2003157/](https://leetcode.com/problems/encode-and-decode-strings/solutions/2003157/)

---

Same as approach 1 Non-ASCII Delimiter, was the most intuitive for me. 

```
var encode = function(strs) {
    return strs.join(String.fromCharCode(257));
};

var decode = function(s) {
    return s.split(String.fromCharCode(257));
};
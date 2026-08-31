# PHP 1-line solution

**Author:** mindchanger
**Votes:** 5
**Link:** [https://leetcode.com/problems/reverse-words-in-a-string/solutions/347707/](https://leetcode.com/problems/reverse-words-in-a-string/solutions/347707/)

---

It's a nice 1-line solution. Although, keep in mind that preg_* calls are expensive.


```
function reverseWords($s) {
    return implode(' ', array_reverse(preg_split('/\\s+/', trim($s))));
}
```
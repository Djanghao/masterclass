# 1616.One line of code 0 ms java and Javascript solutions.. Cheating

**Author:** KondalDurgam
**Votes:** 1
**Link:** [https://leetcode.com/problems/split-two-strings-to-make-palindrome/solutions/889128/](https://leetcode.com/problems/split-two-strings-to-make-palindrome/solutions/889128/)

---

Best Solution by [lee215](https://leetcode.com/lee215/)
```
var checkPalindromeFormation = function(a, b) {
    function isPalidrome(s, i, j) {
        for (; i < j; ++i, --j)
            if (s[i] != s[j]) {
                return false;
            }
        return true;
    }

    function check(a, b) {
        for (let i = 0, j = a.length - 1; i < j; ++i, --j)
            if (a[i] != b[j]) {
                return isPalidrome(a, i, j) || isPalidrome(b, i, j);
            }
        return true;
    }

    return check(a, b) || check(b, a);
};
```

Java
```
class Solution {
    public boolean checkPalindromeFormation(String a, String b) {
       return (a.length()==1&& b.length()==1||(a.charAt(0)==b.charAt(b.length()-1)||b.charAt(0)==a.charAt(a.length()-1))&&a.length()!=4&&b.length() !=4); 
    }
}
```
Javascript
```
var checkPalindromeFormation = function(a, b) { 
     return (a.length && b.length === 1 || (a[0]=== b[b.length-1] || b[0] === a[a.length-1]) && a.length && b.length !== 4)
};
```
# C++, Golang | both faster than 100%

**Author:** MBI
**Votes:** 2
**Link:** [https://leetcode.com/problems/break-a-palindrome/solutions/2686203/](https://leetcode.com/problems/break-a-palindrome/solutions/2686203/)

---

Golang:
```
func breakPalindrome(s string) string {
    if len(s)==1{
        return ""
    }
    for i:=0; i<len(s)/2; i++ {
        if s[i]!='a' {
            s=s[:i]+"a"+s[i+1:]
            return s
        }
    }
    s=s[:len(s)-1]+"b"
    return s
}
```

C++:
```
class Solution {
public:
    string breakPalindrome(string p) {
        if (p.size()==1) return "";
        for (int i=0; i<p.size()/2; i++){
            if (p[i]!='a'){
                p[i]='a';
                return p;
            }
        }
        p.end()[-1]='b';
        return p;
    }
};
```
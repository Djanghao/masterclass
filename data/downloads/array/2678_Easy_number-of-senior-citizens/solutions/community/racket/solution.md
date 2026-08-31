# ✅ simple solution in java | python | javascript | racket

**Author:** codeninja8
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-senior-citizens/solutions/5571052/](https://leetcode.com/problems/number-of-senior-citizens/solutions/5571052/)

---

Enjoy!

# Code
``` java []
class Solution {
    public int countSeniors(String[] details) {
        int res = 0;
        for (String str : details) {
            if (str.charAt(11) > '6' || (str.charAt(11) == '6' && str.charAt(12) > '0')) res++;
        }
        return res;
    }
}
```
``` javascript []
var countSeniors = function(details) {
    return details
        .filter((s) => s[11] > '6' || (s[11] == '6' && s[12] > '0'))
        .length;
};
```
``` python []
class Solution(object):
    def countSeniors(self, details):
        return len([s for s in details if s[11] > '6' or (s[11] == '6' and s[12] > '0')])
```
``` racket []
(define (count-seniors details)
    (length 
        (filter (lambda (s) (or 
                    (and (char=? (string-ref s 11) #\\6) (char>? (string-ref s 12) #\\0))
                    (char>? (string-ref s 11) #\\6))) details)))
```
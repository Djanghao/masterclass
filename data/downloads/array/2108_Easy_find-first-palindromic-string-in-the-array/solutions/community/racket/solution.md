# ✅ Java || JavaScript || Python || Go || PHP || Racket 👍

**Author:** codeninja8
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-first-palindromic-string-in-the-array/solutions/4721019/](https://leetcode.com/problems/find-first-palindromic-string-in-the-array/solutions/4721019/)

---

```java []
class Solution {
    private boolean isPolindorm(String str) {
        for (int j = 0; j < str.length() / 2; j++) {
            if (str.charAt(j) != str.charAt(str.length() - j - 1)) {
                return false;
            }
        }
        return true;
    }

    public String firstPalindrome(String[] words) {
        for (int i = 0; i < words.length; i++) {
            if (isPolindorm(words[i])) {
                return words[i];
            }
        }

        return "";
    }
}
```
```javascript []
var firstPalindrome = function(words) {
    function isPolindrome(str) {
        for (var i = 0; i < Math.floor(str.length / 2); i++) {
            if (str[i] != str[str.length - i - 1]) {
                return false;
            }
        }
        return true;
    }

    for (var i = 0; i < words.length; i++) {
        if (isPolindrome(words[i])) {
            return words[i];
        }
    }

    return "";
};
```
```python []
class Solution(object):
    def firstPalindrome(self, words):
        for str in words:
            if str == str[::-1]:
                return str
                
        return ""
```
```golang []
func isPol(str string) bool {
    for i := 0; i < int(len(str) / 2); i++ {
        if str[i] != str[len(str) - i - 1] {
            return false;
        }
    }

    return true;
}

func firstPalindrome(words []string) string {
    for _, str := range(words) {
        if isPol(str) {
            return str;
        }
    }

    return "";
}
```
```php []
class Solution {
    function firstPalindrome($words) {
        foreach($words as $str) {
            if ($str == strrev($str)) {
                return $str;
            }
        }

        return '';
    }
}
```
```Racket []
(define (first-palindrome words)
  (cond [(null? words) ""]
        [else (let ([str (car words)])
                (if (equal? (reverse (string->list str)) (string->list str))
                    str
                    (first-palindrome (cdr words))))]))
```


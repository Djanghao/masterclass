# ✅the best simple solution in 7 languages👍

**Author:** codeninja8
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-prefix-and-suffix-pairs-i/solutions/4758647/](https://leetcode.com/problems/count-prefix-and-suffix-pairs-i/solutions/4758647/)

---

the solution is pretty straightforward

``` java []
class Solution {
    private boolean isPrefixAndSuffix(String str1, String str2) {
        int n1 = str1.length();
        int n2 = str2.length();
        return n2 >= n1   
            && str2.startsWith(str1)
            && str2.endsWith(str1);  
    }
    public int countPrefixSuffixPairs(String[] words) {
        int count = 0;
        for (int i = 0; i < words.length; i++) {
            for (int j = i + 1; j < words.length; j++) {
                if (isPrefixAndSuffix(words[i], words[j])) {
                    count++;
                }
            }
        }

        return count;
    }
}
```
``` c []
bool startsWith(char* str, char* prefix) {
    while(*prefix)
    {
        if(*prefix++ != *str++) {
            return 0;
        }
    }

    return 1;
}

// taken from https://stackoverflow.com/questions/744766/how-to-compare-ends-of-strings-in-c
bool endsWith(const char *s,const char *suff)
{
    int slen = strlen(s);
    int sufflen = strlen(suff);

    return slen >= sufflen && !memcmp(s + slen - sufflen, suff, sufflen);
}

int countPrefixSuffixPairs(char** words, int wordsSize) {
    int count = 0;
    for (int i = 0; i < wordsSize; i++) {
        char* str1 = words[i];
        for (int j = i + 1; j < wordsSize; j++) {
            char* str2 = words[j];
            if (startsWith(str2, str1) && endsWith(str2, str1)) {
                count++;
            }
        }
    }

    return count;
}
```
```javascript []
var countPrefixSuffixPairs = function(words) {
    var count = 0;
    for (var i = 0; i < words.length; i++) {
        for (var j = i + 1; j < words.length; j++) {
            if (words[j].startsWith(words[i]) && words[j].endsWith(words[i])) {
                count++;
            }
        }
    }

    return count;
};
```
```python []
class Solution:
    def countPrefixSuffixPairs(self, words: List[str]) -> int:
        count = 0
        n = len(words)
        for i in range(n):
            str1 = words[i]
            for j in range(i + 1, n):
                str2 = words[j]
                if str2.startswith(str1) and str2.endswith(str1):
                    count += 1
        return count        
```
``` php []
class Solution {
    function countPrefixSuffixPairs($words) {
        $count = 0;
        for ($i = 0; $i < count($words); $i++) {
            for ($j = $i + 1; $j < count($words); $j++) {
                if (str_starts_with($words[$j], $words[$i]) && str_ends_with($words[$j], $words[$i])) {
                    $count++;
                }
            }
        }

        return $count;
    }
}
```
``` golang []
func countPrefixSuffixPairs(words []string) int {
    count := 0
    for i := 0; i < len(words); i++ {
        for j := i + 1; j < len(words); j++ {
            if strings.HasPrefix(words[j], words[i]) && strings.HasSuffix(words[j], words[i]) {
                count++;
            }
        }
    }

    return count
}
```
```racket []
(define (is-prefix-and-suffix? str1 str2)
  (and (string-prefix? str2 str1) (string-suffix? str2 str1)))

(define (count-prefix-suffix-pairs words)
  (cond [(eq? words '()) 0]
        [(= (length words) 1) 0]
        [else
         (+ (apply + (map (lambda (str2) (if (is-prefix-and-suffix? (car words) str2) 1 0)) (cdr words)))
            (count-prefix-suffix-pairs (cdr words)))]))
```
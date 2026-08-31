# [C++/Java/Python/JS/TS/C#/PHP/Ruby] Regex

**Author:** i-i
**Votes:** 2
**Link:** [https://leetcode.com/problems/valid-word/solutions/5116615/](https://leetcode.com/problems/valid-word/solutions/5116615/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This is a rare example that regex is actually useful. 

# Approach
<!-- Describe your approach to solving the problem. -->
```
r"(?i)(?=.*[b-df-hj-np-tv-z])(?=.*[aieou])^[a-z0-9]{3,}$"
```

- `(?i)` is an insensitive flag which simply ignores the case sensitivity. In simple words, `[A-Za-z]` and `(?i)[a-z]` and `(?i)[A-Z]` are the same thing. 

- "-" creates a range. For example, `b-d` means "from b to d" or `[bcd]`
- Therefore, `[b-df-hj-np-tv-z]` means all 26 chars except `[aieou]` or we can write it as `[^aieou]`. 
- `(?=.*[b-df-hj-np-tv-z])` means it must have at least one constant char which is equal to `(?=.*[b-df-hj-np-tv-z]{1})`. 
- `(?=.*[aieou])` means it must have at least one vowel which is equal to `(?=.*[aieou]{1})`. 
- `[a-z0-9]{3,}` means any insensitive char from `a-z` and `0-9`, three or more times. 
- `^` is the start of a string anchor.
- `$` is the end of a string anchor.

```

### More Details


- (?i) match the remainder of the pattern with the following effective flags: insensitive. Case insensitive match (ignores case of [a-zA-Z])
- Positive Lookahead (?=.*[b-df-hj-np-tv-z])
    Assert that the Regex below matches
    ^ asserts position at start of a line
    . matches any character (except for line terminators)
    * matches the previous token between zero and unlimited times, as many times as possible, giving back as needed (greedy)

- Match a single character present in the list below [b-df-hj-np-tv-z]
    b-d matches a single character in the range between b (index 98) and d (index 100) (case insensitive)
    f-h matches a single character in the range between f (index 102) and h (index 104) (case insensitive)
    j-n matches a single character in the range between j (index 106) and n (index 110) (case insensitive)
    p-t matches a single character in the range between p (index 112) and t (index 116) (case insensitive)
    v-z matches a single character in the range between v (index 118) and z (index 122) (case insensitive)

- Positive Lookahead (?=.*[aieou])
    Assert that the Regex below matches
    . matches any character (except for line terminators)
    * matches the previous token between zero and unlimited times, as many times as possible, giving back as needed (greedy)
    Match a single character present in the list below [aieou]
    aieou matches a single character in the list aieou (case insensitive)
    
- ^ asserts position at start of a line
- Match a single character present in the list below [a-z0-9]{3,} matches the previous token between 3 and unlimited times, as many times as possible, giving back as needed (greedy)
- a-z matches a single character in the range between a (index 97) and z (index 122) (case insensitive)
- 0-9 matches a single character in the range between 0 (index 48) and 9 (index 57) (case insensitive)
- $ asserts position at the end of a line

```

# C++

```
class Solution {
public:
    bool isValid(string word) {
        regex pattern("(?=.*[b-df-hj-np-tv-z])(?=.*[aieou])[a-z0-9]{3,}", regex_constants::icase);
        return regex_match(word, pattern);
    }
};
```

# Java

```
class Solution {
    public boolean isValid(String word) {
		return word.matches("(?i)(?=^.*[b-df-hj-np-tv-z])(?=.*[aieou])^[a-z0-9]{3,}$");
    }
}
```


# Python
```
class Solution:
    def isValid(self, word: str) -> bool:
        regex = r"(?i)(?=^.*[b-df-hj-np-tv-z])(?=.*[aieou])^[a-z0-9]{3,}$"
        return re.search(regex, word) is not None
```

# C#

```
using System;
using System.Text.RegularExpressions;

public class Solution {
    public bool IsValid(string word) {
        Regex re = new Regex(@"(?i)^(?=.*[b-df-hj-np-tv-z])(?=.*[aieou])[a-z0-9]{3,}$");
        return re.IsMatch(word);
    }
}
```

# TS

```
function isValid(word: string): boolean {
    return /^(?=.*[b-df-hj-np-tv-z])(?=.*[aieou])[a-z0-9]{3,}$/i.test(word);
};
```

# JS

```
var isValid = function(word) {
    return /^(?=.*[b-df-hj-np-tv-z])(?=.*[aieou])[a-z0-9]{3,}$/i.test(word);
};
```


# Ruby

```
def is_valid(word)
    word.match?(/^(?=.*[b-df-hj-np-tv-z])(?=.*[aieou])[a-z0-9]{3,}$/i)
end

```

# PHP


```
class Solution {
    function isValid($word) {
        return preg_match('/^(?=.*[b-df-hj-np-tv-z])(?=.*[aieou])[a-z0-9]{3,}$/i', $word);
    }
}

```

# Swift 

```
import Foundation

class Solution {
    func isValid(_ word: String) -> Bool {
        let re = try! NSRegularExpression(pattern: "(?i)^(?=.*[b-df-hj-np-tv-z])(?=.*[aieou])[a-z0-9]{3,}$")
        let range = NSRange(location: 0, length: word.utf16.count)
        return re.firstMatch(in: word, options: [], range: range) != nil
    }
}

```

# Kotlin

```
import java.util.regex.Pattern

class Solution {
    fun isValid(word: String): Boolean {
        val pattern = "(?i)^(?=.*[b-df-hj-np-tv-z])(?=.*[aieou])[a-z0-9]{3,}$"
        val regex = Pattern.compile(pattern)
        val matcher = regex.matcher(word)
        return matcher.find()
    }
}

```

# Scala

```
object Solution {
  def isValid(word: String): Boolean = {
    val pattern = "(?i)^(?=.*[b-df-hj-np-tv-z])(?=.*[aieou])[a-z0-9]{3,}$".r
    pattern.findFirstIn(word).isDefined
  }
}
```


---------

If you wish to simplify/update/explore the expression, it's been explained on the top right panel of [regex101.com](https://regex101.com/r/76Wdxp/2). You can watch the matching steps or modify them in [this debugger link](https://regex101.com/r/76Wdxp/2/debugger), if you'd be interested. The debugger demonstrates that how [a RegEx engine](https://en.wikipedia.org/wiki/Comparison_of_regular_expression_engines) might step by step consume some sample input strings and would perform the matching process.

---------

### See @joric comment

[b-df-hj-np-tv-z] can be also replaced by [^0-9aeiou]. 


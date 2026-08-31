# [Ruby/PHP] One line solutions

**Author:** deleted_user
**Votes:** 2
**Link:** [https://leetcode.com/problems/tag-validator/solutions/290226/](https://leetcode.com/problems/tag-validator/solutions/290226/)

---

The one line solutions take advantage of using regular expression subroutines, where we try to match the entire regular expression again. Not all languages support this feature. I use `\\g<x>` in Ruby to call the named group, which is the entire regular expression. I use `(?1)` in PHP to call the numbered group, which is, again, the entire regular expression.

**Ruby**
```
def is_valid(code)
    code.match?(/^(?<x><(?<y>[A-Z]{1,9})>(\\g<x>|<!\\[CDATA\\[((?!]]>).)*]]>|[^<]?)+<\\/\\k<y+0>>)$/)
end
```

**PHP**
```
class Solution {
    function isValid($code) {
        return preg_match('/^(<([A-Z]{1,9})>((?1)|<!\\[CDATA\\[((?!]]>).)*]]>|[^<]?)+<\\/\\2>)$/', $code);
    }
}
```
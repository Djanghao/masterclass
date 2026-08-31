# C++ || JavaScript || TypeScript  || 1 Liner || EasySimple

**Author:** Jim-Tony
**Votes:** 6
**Link:** [https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/solutions/1404563/](https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/solutions/1404563/)

---

# C++
```
class Solution {
public:
    int numOfStrings(vector<string>& patterns, string word) {
        return count_if(begin(patterns),end(patterns),
			[&word](string &a){return word.find(a)!=string::npos;});
    }
};
```

# JavaScript
```
/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
    return [...patterns].filter(x=>word.includes(x)).length;
};
```
# TypeScript
```
function numOfStrings(patterns: string[], word: string): number {
    return [...patterns].filter(x=>word.includes(x)).length;
};
```

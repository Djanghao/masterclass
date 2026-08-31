# Detailed intuitive solution no sort (Py, JS, Go)

**Author:** usr25
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-and-replace-in-string/solutions/976680/](https://leetcode.com/problems/find-and-replace-in-string/solutions/976680/)

---

The tricky part here is to keep the indices of the input string S intact so we can check the next source string at a specific index. If you modify (insert or replace) the string S or use a string builder to build a string Out, you\u2019ll lose the integrity of the indices in S anytime the replacement (target) has a different length than the source substring. 
=> Split S into an array so we can always get the correct index of the first letter of each source string in the sources. Convert the next characters of the source substring to empty strings. Join the array and return.

Logic:
- Split input string S into an array of characters.
- Iterate from left to right of indexes and sources, check if sources[i] is at index indexes[i] in input string S. If yes, replace char_arr[i] with targets[i] and change all char from i+1 to len(sources[i]) in char_arr to empty strings.
- Join the character array.

Time: O(n + m) where n = len(S) and m = len(indexes) = len(sources) = len(targets) because:
- Split S: O(n)
- Iterate through sources and target O(m). Replace: O(1)
- Join O(n + m) because output = n + m
- Total: O(n + m + n + m) = O(2(n + m)) remove constant = O(n + m)

Space: O(n) because:
- Char array needs O(n) space.

Python
```
class Solution:
    
    def findReplaceString(self, S: str, indexes: List[int], sources: List[str], targets: List[str]) -> str:
        char_arr = list(S)
        for i in range(len(indexes)):
            idx = indexes[i]
            source_str = sources[i]
            replacement_str = targets[i]
            if self._is_substring_at(idx, source_str, S):
                self._replace_at(idx, source_str, replacement_str, char_arr)
        return "".join(char_arr)
    
    def _is_substring_at(self, idx, str1, str2):
        i = 0
        j = idx
        while i < len(str1) and j < len(str2):
            if str1[i] != str2[j]:
                return False
            i += 1
            j += 1
        return True
        
    def _replace_at(self, idx, source, replacement, arr):
        arr[idx] = replacement
        for i in range(idx + 1, idx + len(source)):
            arr[i] = ""

  ```

JavaScript
```
var findReplaceString = function(S, indexes, sources, targets) {
    const charArr = S.split("");
    for (let i = 0; i < indexes.length; i++) {
        const idx = indexes[i];
        const sourceStr = sources[i];
        const replacementStr = targets[i];
        if (isSubstringAt(idx, sourceStr, S)) {
            replaceAt(idx, sourceStr, replacementStr, charArr);
        }
    }
    return charArr.join("");
};

function isSubstringAt(idx, str1, str2) {
    let i = 0;
    let j = idx;
    while (i < str1.length && j < str2.length) {
        if (str1[i] !== str2[j]) {
            return false;
        }
        i++;
        j++;
    }
    return true;
}

function replaceAt(idx, sourceStr, replacementStr, charArr) {
    charArr[idx] = replacementStr;
    for (let i = idx + 1; i < idx + sourceStr.length; i++) {
        charArr[i] = "";
    }
}

```

GoLang
```
func findReplaceString(S string, indexes []int, sources []string, targets []string) string {
    charSlice := strings.Split(S, "")
    for i := 0; i < len(sources); i++ {
        idx := indexes[i]
        sourceStr := sources[i]
        replacementStr := targets[i]
        if isSubstringAt(idx, sourceStr, S) {
            replaceAt(idx, sourceStr, replacementStr, charSlice)
        }
    }
    return strings.Join(charSlice, "")
}

func isSubstringAt(idx int, str1, str2 string) bool {
    i := 0
    j := idx
    for i < len(str1) && j < len(str2) {
        if str1[i] != str2[j] {
            return false
        }
        i++
        j++
    }
    return true
}

func replaceAt(idx int, sourceStr, replacementStr string, charSlice []string) {
    charSlice[idx] = replacementStr
    for i := idx + 1; i < idx + len(sourceStr); i++ {
        charSlice[i] = ""
    }
}

```



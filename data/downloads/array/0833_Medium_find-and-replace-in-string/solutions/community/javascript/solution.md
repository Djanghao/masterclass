# JavaScript solution

**Author:** ascherj
**Votes:** 18
**Link:** [https://leetcode.com/problems/find-and-replace-in-string/solutions/268644/](https://leetcode.com/problems/find-and-replace-in-string/solutions/268644/)

---

```
/**
 * @param {string} S
 * @param {number[]} indexes
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function(S, indexes, sources, targets) {
  var result = S.split('');
  indexes.forEach((indexInS, i) => {
    var sourceChars = sources[i];
    var targetChars = targets[i];
    
    if (S.slice(indexInS, indexInS + sourceChars.length) === sourceChars) {
      result[indexInS] = [targetChars];
      var elementsToReplace = sourceChars.length - 1;
      while (elementsToReplace > 0) {
        indexInS += 1;
        result[indexInS] = '';
        elementsToReplace -= 1;
      }
    }
  });
  return result.join('');
};
```
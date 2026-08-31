# Dart solution beats 100%

**Author:** Meitantei
**Votes:** 2
**Link:** [https://leetcode.com/problems/delete-columns-to-make-sorted/solutions/2992264/](https://leetcode.com/problems/delete-columns-to-make-sorted/solutions/2992264/)

---

# Complexity
### Time complexity:
- $$O(n*m)$$ -> worst case 
    - Where (n) is the number of **strs** , and (m) is the length of strings.

- **Space complexity**:
Solution is : $$O(1)$$

# Code
```
class Solution {
int minDeletionSize(List<String> strs) {
  var deletedColumnsCount = 0;
  for (var i = 0; i < strs[0].length; i++) {
    for (var j = 0; j < strs.length - 1; j++) {
      if (strs[j][i].codeUnits[0] > strs[j + 1][i].codeUnits[0]) {
        deletedColumnsCount++;
        break;
      }
    }
  }
  return deletedColumnsCount;
}
}
```
# 100%, 100% O(n) JS Solution

**Author:** hbjORbj
**Votes:** 5
**Link:** [https://leetcode.com/problems/rearrange-spaces-between-words/solutions/856498/](https://leetcode.com/problems/rearrange-spaces-between-words/solutions/856498/)

---

```
var reorderSpaces = function(text) {
    let arr = text.split(" ");
    let totalSpace = arr.length-1;
    arr = arr.filter(w => w !== '');
    let spaceBetween = arr.length > 1 ? 
                    Math.floor(totalSpace / (arr.length-1)) : 0;
    let spaceLeftOver = arr.length > 1 ?
                    totalSpace % (arr.length-1) : totalSpace;
    return (arr.join(" ".repeat(spaceBetween)) + " ".repeat(spaceLeftOver));
    // Time Complexity: O(n)
    // Space Complexity: O(n)
};
```
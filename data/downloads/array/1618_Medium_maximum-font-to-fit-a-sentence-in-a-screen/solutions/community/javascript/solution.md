# Javascript, binary search, straight-forward.

**Author:** andyoung
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-font-to-fit-a-sentence-in-a-screen/solutions/1108147/](https://leetcode.com/problems/maximum-font-to-fit-a-sentence-in-a-screen/solutions/1108147/)

---

```
var maxFont = function(text, w, h, fonts, fontInfo) {
  const isAvailable = fontSize => {
    if (fontInfo.getHeight(fontSize) > h) return false;
    let widthSum = 0;
    for (const c of text) {
      widthSum += fontInfo.getWidth(fontSize, c);
      if (widthSum > w) return false;
    }
    return true;
  }
  
  let ans = -1, l = 0, r = fonts.length - 1;
  while (l <= r) {
    const mid = (l + r) >> 1;
    if (isAvailable(fonts[mid])) {
      ans = fonts[mid];
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
    
  return ans;
};
```
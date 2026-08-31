# scala solution.

**Author:** lyk4411
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/solutions/2109882/](https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/solutions/2109882/)

---

```

  def minSwaps(s: String): Int = {
    (s.foldLeft(0)((acc, cur)=>{
      if(cur == ']' && acc > 0) acc - 1
      else if(cur == '[') acc + 1
      else acc
    }) + 1) / 2
  }
```
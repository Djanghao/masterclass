# scala solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-unique-good-subsequences/solutions/2659878/](https://leetcode.com/problems/number-of-unique-good-subsequences/solutions/2659878/)

---

```
  def numberOfUniqueGoodSubsequences(binary: String): Int = {
    val mod = 1000000007
    val res = binary.foldLeft((0, 0, 0))((ans, cur)=>{
      if(cur == '1') (ans._1, (ans._2 + ans._1 + 1) % mod, ans._3)
      else ((ans._1 + ans._2) % mod, ans._2, 1)
    })
    (res._2 + res._1 + res._3) % mod
  }
```
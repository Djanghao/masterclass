# Scala Functional Solution. 100% faster

**Author:** densungkim
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-student-that-will-replace-the-chalk/solutions/5725300/](https://leetcode.com/problems/find-the-student-that-will-replace-the-chalk/solutions/5725300/)

---

```
object Solution {
  def chalkReplacer(chalk: Array[Int], k: Int): Int = {
    @annotation.tailrec
    def loop(index: Int, n: Int): Int =
      if (chalk(index) > n) index
      else loop((index + 1) % chalk.length, n - chalk(index))

    loop(0, (k % chalk.map(_.toLong).sum).toInt)
  }
}
```
![image](./images/0.png)
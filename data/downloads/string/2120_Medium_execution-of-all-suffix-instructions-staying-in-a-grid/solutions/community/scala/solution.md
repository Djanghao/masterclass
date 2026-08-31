# scala solution

**Author:** lyk4411
**Votes:** 3
**Link:** [https://leetcode.com/problems/execution-of-all-suffix-instructions-staying-in-a-grid/solutions/2131223/](https://leetcode.com/problems/execution-of-all-suffix-instructions-staying-in-a-grid/solutions/2131223/)

---

```

def executeInstructions(n: Int, startPos: Array[Int], s: String): Array[Int] = {
    def help(i: Int):Int ={
      s.substring(i).foldLeft((startPos(0), startPos(1), 0))((acc, cur)=>{
        cur match {
          case 'L' if acc._2 - 1 >= 0 => (acc._1, acc._2 - 1, acc._3 + 1)
          case 'R' if acc._2 + 1 < n  => (acc._1, acc._2 + 1, acc._3 + 1)
          case 'U' if acc._1 - 1 >= 0 => (acc._1 - 1, acc._2, acc._3 + 1)
          case 'D' if acc._1 + 1 < n  => (acc._1 + 1, acc._2, acc._3 + 1)
          case _ => return acc._3
        }
      })._3
    }
    (0 until s.length).map(help(_)).toArray
  }
```
# scala solution

**Author:** lyk4411
**Votes:** 1
**Link:** [https://leetcode.com/problems/clumsy-factorial/solutions/2229347/](https://leetcode.com/problems/clumsy-factorial/solutions/2229347/)

---

```


  def helper(n: Int):Int =  n match {
    case 0 => return 0
    case 1 => return 1
    case 2 => return 1
    case 3 => return 1
    case _ => return n - (n - 1) * (n - 2) / (n - 3) + helper(n - 4)
  }

  def clumsy(n: Int): Int = n match {
    case 0 => return 0
    case 1 => return 1
    case 2 => return 2
    case 3 => return 6
    case _ => return n * (n - 1) / (n - 2) + helper(n - 3)
  }
```
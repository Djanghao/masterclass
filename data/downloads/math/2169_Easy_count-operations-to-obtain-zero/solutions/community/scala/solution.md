# scala solution.

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-operations-to-obtain-zero/solutions/2063186/](https://leetcode.com/problems/count-operations-to-obtain-zero/solutions/2063186/)

---

```

   def countOperations(num1: Int, num2: Int): Int = num1 * num2 == 0 match {
    case true => 0
    case _ => num1/num2 + countOperations(num2, num1 % num2)
  }
```
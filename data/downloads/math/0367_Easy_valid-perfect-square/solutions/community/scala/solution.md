# Scala Functional Solution | Binary Search + Newton Method

**Author:** imran-sarwar
**Votes:** 1
**Link:** [https://leetcode.com/problems/valid-perfect-square/solutions/1668428/](https://leetcode.com/problems/valid-perfect-square/solutions/1668428/)

---

Self readable

```scala
def isPerfectSquare(num: Int): Boolean = {
    /*
    //Binary Search
    def bs(left: Long, right: Long): Boolean =
      if(left > right) false
      else {
        val x = left + (right - left) / 2
        (x * x) match {
          case n if n == num => true
          case n if n > num  => bs(left, x-1)
          case _             => bs(x+1, right)
        }
      }

    if(num < 2) true
    else bs(2, num/2)
    */
    
    def newtonMethod(x: Long): Long =
      if((x * x) <= num) x
      else {
        val slopeVal = (x + num / x) / 2
        newtonMethod(slopeVal)
      }

    if(num < 2) true
    else {
      val sqrRoot = newtonMethod(num/2)
      sqrRoot * sqrRoot == num
    }
  }
  ```
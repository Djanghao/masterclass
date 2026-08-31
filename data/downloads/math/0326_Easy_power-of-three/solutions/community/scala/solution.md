# Scala - very simple logic to determine power of 3

**Author:** rajeshsantha
**Votes:** 2
**Link:** [https://leetcode.com/problems/power-of-three/solutions/677418/](https://leetcode.com/problems/power-of-three/solutions/677418/)

---

```
object PowerOfThree {
  def main(args: Array[String]): Unit = {
    println(isPowerOfThree(9))
    println(isPowerOfThree(6))
    println(isPowerOfThree(27))
    println(isPowerOfThree(-3))
	/*
	
	true
	false
	true
	false
	*/
  }

  /** *
    *
    * Runtime: 664 ms, faster than 11.11% of Scala online submissions for Power of Three.
    * Memory Usage: 49.5 MB, less than 13.33% of Scala online submissions for Power of Three.
    *
    *
    * 21038 / 21038 test cases passed.
    * Status: Accepted
    * Runtime: 664 ms
    * Memory Usage: 49.5 MB
    *
    */
  def isPowerOfThree(n: Int): Boolean = if (n <= 0) false else 1162261467 % n == 0


  // 1162261467 is the max 3 ^ x value that is possibly assgin for an integer value
  //so , if an input number can divide  1162261467 , then it can divide any power of 3 . 
  // If a number is able to divide all the powers of 3 , then it is a power of 3
}
```
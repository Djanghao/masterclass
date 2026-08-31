# Scala solution, tricky, not quite functional

**Author:** jungara
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-digits-of-string-after-convert/solutions/5733041/](https://leetcode.com/problems/sum-of-digits-of-string-after-convert/solutions/5733041/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```scala []
object Solution {
  def getLucky(s: String, k: Int): Int = {
    var num = s.map {
      case 'a' => 1
      case 'b' => 2
      case 'c' => 3
      case 'd' => 4
      case 'e' => 5
      case 'f' => 6
      case 'g' => 7
      case 'h' => 8
      case 'i' => 9
      case 'j' => 1
      case 'k' => 2
      case 'l' => 3
      case 'm' => 4
      case 'n' => 5
      case 'o' => 6
      case 'p' => 7
      case 'q' => 8
      case 'r' => 9
      case 's' => 10
      case 't' => 2
      case 'u' => 3
      case 'v' => 4
      case 'w' => 5
      case 'x' => 6
      case 'y' => 7
      case 'z' => 8
    }
    
    for(i <- 1 until k){
      num = num.sum.toString.toIndexedSeq.map(_.toInt - '0')
      println(num.mkString(" "))
    }
    num.sum
  }
}
```
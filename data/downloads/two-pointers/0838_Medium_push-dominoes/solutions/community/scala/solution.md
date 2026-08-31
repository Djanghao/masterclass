# Scala recursive and functional approach

**Author:** Nexon4444
**Votes:** 0
**Link:** [https://leetcode.com/problems/push-dominoes/solutions/5372530/](https://leetcode.com/problems/push-dominoes/solutions/5372530/)

---

# Intuition
Scala functional approach

# Approach
split to smaller strings like (R...L),(L...R),(R...R),(L...L), and then process each and concatenate

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
object Solution {
  def pushDominoes(dominoes: String): String = {
    val split = getSameFacing(dominoes).map(l => writeState(l))
    split.foldLeft(new StringBuilder(split.head.substring(0, 1)))((acc, str) =>acc.append(str.tail)).toString()
  }

  def writeState(dominoes: String): String = {
    val size = dominoes.length
    (dominoes.head, dominoes.last) match {
      case ('.', 'L') | ('L', 'L') => "L" * size
      case ('R', 'R') | ('R', '.') => "R" * size
      case ('L', 'R') | ('L', '.') | ('.', 'R') | ('.', '.') => dominoes
      case ('R', 'L') if size % 2 == 1 => "R" * (size / 2) + "." + "L" * (size / 2)
      case ('R', 'L') if size % 2 == 0 => "R" * (size / 2) + "L" * (size / 2)
    }
  }

  def getSameFacing(dominoes: String): Seq[String] = {
    @scala.annotation.tailrec
    def scan(all: Vector[Char], last: Char, acc: Vector[Char], ans: Vector[String]): Vector[String] = {
      all match {
        case head +: tail if head == 'L' || head == 'R' =>
          scan(tail, head, Vector(head), ans :+ (acc :+ head).mkString)
        case head +: tail =>
          scan(tail, last, acc :+ head, ans)
        case _ => ans :+ acc.mkString
      }
    }
    scan(dominoes.tail.toVector, dominoes.head, Vector(dominoes.head), Vector.empty[String])
  }
}

```
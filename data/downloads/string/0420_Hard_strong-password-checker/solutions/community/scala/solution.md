# Scala solution

**Author:** maxmtmn
**Votes:** 0
**Link:** [https://leetcode.com/problems/strong-password-checker/solutions/2944230/](https://leetcode.com/problems/strong-password-checker/solutions/2944230/)

---

# Intuition
We can start with isStrongPassword function and use greedy approach to pick most efficient changes on each iteration

# Approach
At any point in time we can have 3 possible cases:
1) password is too short
2) password is too long
3) password length is ok, but other conditions are not met

For each subproblem, we need to pick the most efficient resolution. For example, for all above operations we need to attempt to break repeating sequences during insert/update/delete operations. Otherwise, it won't be the best answer.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
object Solution {
  def strongPasswordChecker(password: String): Int = {
    var p = Password(Vector.from(password))
    var counter = 0
    while(!isStrongPassword(p)) {
      // returns an index of first repeating char sequence with size >= 3 plus 2
      val firstRepetitionOpt = p.longRepeating.headOption.map(_._1 + 2)
      if(p.length < 6) {
        // insert into repetition or beginning of the string
        val insertionPoint = firstRepetitionOpt.getOrElse(0)
        p = p.insertAt(insertionPoint,
          p.bestToInsertChar(insertionPoint))
      } else if(p.length > 20) {
        // remove repetition or another safe index
        p = p.deleteAt(firstRepetitionOpt.getOrElse(p.bestToChangeIndex))
      } else {
        // update repetition
        val updatePoint = firstRepetitionOpt.getOrElse(p.bestToChangeIndex)
        p = p.updateAt(updatePoint, p.bestToInsertChar(updatePoint))
      }
      counter += 1
    }
    counter
  }

  private def isStrongPassword(password: Password): Boolean = {
    if(password.length < 6) {
      return false
    }
    if(password.length > 20) {
      return false
    }
    if(!password.hasLower || !password.hasUpper || !password.hasDigit) {
      return false
    }
    if(password.longRepeating.nonEmpty) {
      return false
    }
    true
  }

  case class Password(password: Vector[Char]) {
    val length: Int = password.length
    val lowerChars: Int = password.count(c => c >= 'a' && c <= 'z')
    val upperChars: Int = password.count(c => c >= 'A' && c <= 'Z')
    val digitChars: Int = password.count(c => c >= '0' && c <= '9')
    val hasLower: Boolean = lowerChars > 0
    val hasUpper: Boolean = upperChars > 0
    val hasDigit: Boolean = digitChars > 0
    // group sequence of repeating chars together
    // in the result, we want to have a List of (startIndex, lengthOfSequence) 
    // for all repeating sequences greater or equal 3 chars
    val longRepeating: List[(Int,Int)] = password
      .appended('_')
      .zipWithIndex
      .foldLeft(('_', 0, Option.empty[Int], List.empty[(Int,Int)])) {
      // new repetition
      case ((lastChar, _, None, results), (char, index)) if char == lastChar =>
        (char, 2, Some(index - 1), results)
      // existing repetition
      case ((lastChar, repLen, Some(repStart), results), (char, _)) if char == lastChar =>
        (char, repLen + 1, Some(repStart), results)
      // save found repetition
      case ((_, repLen, Some(repStart), results), (char, _)) if repLen >= 3 => (char, 0, None, (repStart, repLen) :: results)
      // skip found repetition
      case ((_, _, _, results), (char, _)) => (char, 0, None, results)
    }._4.sortWith {
      // prioritize with lower length % 3
      case ((_,len1), (_,len2)) =>
        if(len1 % 3 < len2 % 3) {
          true
        } else {
          false
        }
    }
    // returns an index where it is safe to insert (without affecting password properties)
    def bestToInsertChar(index: Int): Char = {
      val replacement = if(!hasLower) 'z'
      else if(!hasUpper) 'Z'
      else if(!hasDigit) '9'
      else 'Z'
      // to avoid accumulating repetitions don't reuse existing char
      if(password(index) == replacement) {
        (replacement - 1).toChar
      } else {
        replacement
      }
    }
    // returns an index of first char which is safe to update (without affecting password properties)
    def bestToChangeIndex: Int = {
      if(lowerChars > 1) {
        return password.indexWhere(c => c >= 'a' && c <= 'z')
      }
      if(upperChars > 1) {
        return password.indexWhere(c => c >= 'A' && c <= 'Z')
      }
      if(digitChars > 1) {
        return password.indexWhere(c => c >= '0' && c <= '9')
      }
      0
    }
    def insertAt(pos: Int, char: Char): Password = {
      copy(password
        .slice(0,pos)
        .appended(char)
        ++ password.slice(pos, password.length))
    }
    def updateAt(pos: Int, char: Char): Password = {
      copy(password.updated(pos, char))
    }
    def deleteAt(pos: Int): Password = {
      copy(password
        .slice(0,pos)
        ++ password.slice(pos + 1, password.length))
    }
    override def toString = s"${password},length=${length},hasLower=${hasLower},hasUpper=${hasUpper},hasDigit=${hasDigit},longRepeating=${longRepeating}"
  }
}

```
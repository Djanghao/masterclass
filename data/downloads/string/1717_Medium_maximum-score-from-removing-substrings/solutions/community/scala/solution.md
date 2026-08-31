# Scala Solution Using Two Approaches Stack and  2 . Sliding Window Using Three Pointers .

**Author:** HARSHIDAS_21
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-score-from-removing-substrings/solutions/5465997/](https://leetcode.com/problems/maximum-score-from-removing-substrings/solutions/5465997/)

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
```
object Solution {
  def maximumGain(s: String, x: Int, y: Int): Int = {
    //APPROACH 1 = USING STACK
    if (x > y) {
      removeAndScore(s, "ab", x, "ba", y)
    } else {
      removeAndScore(s, "ba", y, "ab", x)
    }
  }

  private def removeAndScore(s: String, first: String, firstScore: Int, second: String, secondScore: Int): Int = {
    val firstStack = scala.collection.mutable.Stack[Char]()
    var score = 0
    for (c <- s) {
      if (firstStack.nonEmpty && firstStack.top == first.head && c == first.last) {
        firstStack.pop()
        score += firstScore
      } else {
        firstStack.push(c)
      }
    }
    val firstPassResult = firstStack.reverse.mkString
    val secondStack = scala.collection.mutable.Stack[Char]()
    for (c <- firstPassResult) {
      if (secondStack.nonEmpty && secondStack.top == second.head && c == second.last) {
        secondStack.pop()
        score += secondScore
      } else {
        secondStack.push(c)
      }
    }
    score

//     //APPROACH 2 = USING SLIDING WINDOW OF WINDOW SIZE THREE 
//     if (x > y) {
//       slidingWindow(s, "ab", x, "ba", y)
//     } else {
//       slidingWindow(s, "ba", y, "ab", x)
//     }
//   }

//   private def slidingWindow(s: String, first: String, firstScore: Int, second: String, secondScore: Int): Int = {
//     val sb = new StringBuilder(s)
//     var score = 0
//     var i = 0
//     def removeFirst(i: Int): Int = {
//       sb.delete(i, i + 2)
//       score += firstScore
//       math.max(0, i - 1)
//     }
//     def removeSecond(i: Int): Int = {
//       sb.delete(i, i + 2)
//       score += secondScore
//       math.max(0, i - 1)
//     }
//     while (i < sb.length - 1) {
//       if (i < sb.length - 1 && sb.charAt(i) == first.charAt(0) && sb.charAt(i + 1) == first.charAt(1)) {
//         i = removeFirst(i)
//       } else if (i < sb.length - 1 && sb.charAt(i) == second.charAt(0) && sb.charAt(i + 1) == second.charAt(1)) {
//         i = removeSecond(i)
//       } else {
//         i += 1
//       }
//     }

//     score
  }
}

```
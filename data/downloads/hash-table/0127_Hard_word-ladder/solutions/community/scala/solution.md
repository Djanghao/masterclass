# Strait-forward simple Scala beats 100%

**Author:** squadgazzz
**Votes:** 1
**Link:** [https://leetcode.com/problems/word-ladder/solutions/1411570/](https://leetcode.com/problems/word-ladder/solutions/1411570/)

---

Bi-directional
```
def ladderLength(beginWord: String, endWord: String, wordList: List[String]): Int = {
  val set = scala.collection.mutable.HashSet(wordList: _*)
  if (!set.contains(endWord)) {
    0
  } else {
    var beginSet = scala.collection.mutable.HashSet(beginWord)
    var endSet   = scala.collection.mutable.HashSet(endWord)
    var level    = 1
    while (beginSet.nonEmpty && endSet.nonEmpty) {
      if (beginSet.size > endSet.size) {
        val tmp = beginSet
        beginSet = endSet
        endSet = tmp
      }
      val newBeginSet = scala.collection.mutable.HashSet.empty[String]
      beginSet.foreach { word =>
        word.indices.foreach { i =>
          val currChar = word.charAt(i)
          ('a' to 'z').filterNot(_ == currChar).foreach { char =>
            val arr = word.toCharArray
            arr(i) = char
            val newWord = new String(arr)
            if (endSet.contains(newWord)) {
              return level + 1
            } else if (set.remove(newWord)) {
              newBeginSet.add(newWord)
            }
          }
        }
      }
      beginSet = newBeginSet
      level += 1
    }
    0
  }
}
```
One-directional
```
def ladderLength(beginWord: String, endWord: String, wordList: List[String]): Int = {
  val set = scala.collection.mutable.HashSet(wordList: _*)
  if (!set.contains(endWord)) {
    0
  } else {
    val queue = scala.collection.mutable.Queue(beginWord)
    var level = 1
    while (queue.nonEmpty) {
      queue.indices.foreach { _ =>
        val word = queue.dequeue()
        word.indices.foreach { i =>
          val currChar = word.charAt(i)
          ('a' to 'z').filterNot(_ == currChar).foreach { char =>
            val arr = word.toCharArray
            arr(i) = char
            val newWord = new String(arr)
            if (newWord == endWord) {
              return level + 1
            } else if (set.remove(newWord)) {
              queue.enqueue(newWord)
            }
          }
        }
      }
      level += 1
    }
    0
  }
}
```
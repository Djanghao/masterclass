# Scala, Trie with DFS

**Author:** qiuqiushasha
**Votes:** 0
**Link:** [https://leetcode.com/problems/encrypt-and-decrypt-strings/solutions/1930872/](https://leetcode.com/problems/encrypt-and-decrypt-strings/solutions/1930872/)

---

```scala

class Encrypter(_keys: Array[Char], _values: Array[String], _dictionary: Array[String]) {

  type int = Int
  import scala.collection.mutable.{HashMap, ArrayBuffer}
  val keys = new HashMap[Char, Int]
  _keys.zipWithIndex.foreach { case (v, i) =>
    keys += (v -> i)
  }
  type ab = ArrayBuffer[int]
  val values = new HashMap[String, ab]
  _values.zipWithIndex.foreach {
    case (x, i) => {
      if (!values.contains(x)) values += (x -> new ab)
      values(x) += i
    }
  }

  case class Node(
      val c: Char,
      val chs: HashMap[Char, Node] = new HashMap[Char, Node],
      var isEnd: Boolean = false
  )

  def f(_node: Node, str: String): Unit = {
    var node = _node
    str.toCharArray
      .foreach(c => {
        if (!node.chs.contains(c)) node.chs += (c -> (new Node(c)))
        node = node.chs(c)
      })
    node.isEnd = true
  }

  val root = new Node(' ')
  _dictionary.foreach(str => f(root, str))

  // println(values )
  def encrypt(word1: String): String =
    word1.toCharArray
      .map(c => _values(keys(c)))
      .mkString

  def decrypt(word2: String): Int = {

    var count    = 0
    var continue = true
    def f(idx: int, node: Node): Unit = {
      if (!continue) return
      if (idx == word2.length()) {
        if (node.isEnd)
          count += 1
        return
      }
      val s = word2.charAt(idx) + "" + word2.charAt(idx + 1)
      if (!values.contains(s)) {
        continue = false
        return
      }
      values(s).foreach(id => if (node.chs.contains(_keys(id))) f(idx + 2, node.chs(_keys(id))))

    }

    f(0, root)
    count

  }

}
```
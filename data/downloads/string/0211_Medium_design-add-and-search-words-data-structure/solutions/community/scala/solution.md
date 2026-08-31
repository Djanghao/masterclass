# Scala Trie 30 lines

**Author:** jkalmeij
**Votes:** 2
**Link:** [https://leetcode.com/problems/design-add-and-search-words-data-structure/solutions/1726012/](https://leetcode.com/problems/design-add-and-search-words-data-structure/solutions/1726012/)

---

```scala
class WordDictionary() {
  import scala.collection.mutable

  case class Node(
      var hasValue: Boolean,
      val children: mutable.Map[Char, Node] = mutable.Map.empty[Char, Node]
  )

  val root = Node(false)

  def addWord(word: String): Unit = {
    val current = word.foldLeft(root) { case (current, c) =>
      current.children.getOrElseUpdate(c, Node(false))
    }
    current.hasValue = true
  }

  def search(word: String): Boolean = searchDfs(word, 0, root)

  def searchDfs(word: String, i: Int, current: Node): Boolean =
    if (i == word.size) current.hasValue
    // exists is lazy and we are using iterables,
    // meaning that we always have at most a single path in memory (O(word.size))
    // and that we terminate as soon as a path is found.
    else childrenFor(current)(word(i)).exists(x => searchDfs(word, i + 1, x))

  def childrenFor(node: Node)(charOrWildCard: Char): Iterable[Node] = 
    if (charOrWildCard == '.') node.children.values
    else node.children.get(charOrWildCard).toIterable
}
```
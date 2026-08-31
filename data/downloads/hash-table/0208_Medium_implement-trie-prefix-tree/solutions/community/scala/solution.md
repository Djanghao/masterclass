# Scala Trie - simple, clean, based on recursion

**Author:** Anamorphism
**Votes:** 2
**Link:** [https://leetcode.com/problems/implement-trie-prefix-tree/solutions/632379/](https://leetcode.com/problems/implement-trie-prefix-tree/solutions/632379/)

---

```
class Trie() {

    /** Initialize your data structure here. */
    case class STrie(term: Boolean, m: Map[Char, STrie])
    
    var tree = STrie(false, Map())

    private def insert(word: List[Char], t: STrie): STrie = word match {
        case Nil => STrie(true, t.m)
        case x :: xs => t.m.get(x) match {
            case None => STrie(t.term, t.m + (x -> insert(xs, STrie(false, Map()))))
            case Some(sub) => STrie(t.term, t.m + (x -> insert(xs, sub)))
        }
    }
    
    @scala.annotation.tailrec
    private def search(word: List[Char], t: STrie): Boolean = word match {
        case Nil => t.term
        case x :: xs => t.m.get(x) match {
            case None => false
            case Some(sub) => search(xs, sub)
        }
    }
    
    @scala.annotation.tailrec
    private def startWith(word: List[Char], t: STrie): Boolean = word match {
        case Nil => true
        case x :: xs => t.m.get(x) match {
            case None => false
            case Some(sub) => startWith(xs, sub)
        }
    }
    
    /** Inserts a word into the trie. */
    def insert(word: String) {
        val newTree = insert(word.toList, tree)
        tree = newTree
    }

    /** Returns if the word is in the trie. */
    def search(word: String): Boolean = {
        search(word.toList, tree)
    }

    /** Returns if there is any word in the trie that starts with the given prefix. */
    def startsWith(prefix: String): Boolean = {
        startWith(prefix.toList, tree)
    }

}
```
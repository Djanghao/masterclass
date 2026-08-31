# scala trie solution

**Author:** Anamorphism
**Votes:** 1
**Link:** [https://leetcode.com/problems/map-sum-pairs/solutions/1371782/](https://leetcode.com/problems/map-sum-pairs/solutions/1371782/)

---

```scala
class MapSum() {

    /** Initialize your data structure here. */
    case class Trie(value: Option[Int], children: Map[Char, Trie])
    
    private def emptyTrie: Trie = Trie(None, Map.empty)
    
    private def insert(trie: Trie, string: List[Char], value: Int): Trie = {
        string match {
            case Nil => Trie(Some(value), trie.children)
            case c :: cs => Trie(trie.value, 
                                 trie.children + (c -> insert(trie.children.getOrElse(c, emptyTrie), cs, value)))
        }
    }
    
    private def query(trie: Trie, prefix: List[Char]): List[Int] = {
        prefix match {
            case c :: cs => trie.children.get(c).map(sub => query(sub, cs)).getOrElse(List(0))
            case Nil => traverse(trie)
        }
    }
    
    private def traverse(trie: Trie): List[Int] = {
        val childrens = trie.children.values.toList.flatMap(sub => traverse(sub))
        if(trie.value.isDefined) {
            trie.value.get :: childrens
        } else {
            childrens
        }
    }
    
    var root = emptyTrie
    

    def insert(key: String, `val`: Int) {
        root = insert(root, key.toList, `val`)
    }

    def sum(prefix: String): Int = {
        query(root, prefix.toList).sum
    }

}
```
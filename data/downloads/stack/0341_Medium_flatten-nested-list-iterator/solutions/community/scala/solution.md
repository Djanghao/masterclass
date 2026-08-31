# Scala iterator unfold

**Author:** d-d-dozer
**Votes:** 2
**Link:** [https://leetcode.com/problems/flatten-nested-list-iterator/solutions/2023347/](https://leetcode.com/problems/flatten-nested-list-iterator/solutions/2023347/)

---

```
class NestedIterator(_nestedList: List[NestedInteger]) {
    import scala.annotation.tailrec
    
    @tailrec
    private def advance(list: List[NestedInteger]): Option[(Int, List[NestedInteger])] =
        list match {
            case Nil => None
            case xs :: tail if xs.isInteger => Some(xs.getInteger -> tail)
            case xs :: tail => advance(xs.getList.toList ++ tail) 
        } 

    private[this] val iterator = Iterator.unfold(_nestedList)(advance)

    def next(): Int = iterator.next()

    def hasNext(): Boolean = iterator.hasNext
}
```
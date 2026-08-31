# Scala FP: looks short & simple but slow (immutable)

**Author:** SerhiyShaman
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/solutions/5392990/](https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/solutions/5392990/)

---

# Code
```
object Solution {
  def maxNumEdgesToRemove(n: Int, edges: Array[Array[Int]]): Int = {
    val edgesByType = edges.groupBy(_(0)).withDefaultValue(Array.empty[Array[Int]])
    
    case class DJSet(val sets: Set[Set[Int]] = Set.empty) {
      def links: Int = sets.foldLeft(0)(_ + _.size - 1)
      def solidSizeIs(n: Int): Boolean = sets.size == 1 && sets.head.size == n
      def findSubset(a: Int): Option[Set[Int]] = sets.find(_(a))
      def addLink(a: Int, b: Int): DJSet = (findSubset(a), findSubset(b)) match {
        case (None, None) => DJSet(sets + Set(a, b))
        case (Some(aSet), None) => DJSet(sets - aSet + (aSet + b))
        case (None, Some(bSet)) => DJSet(sets - bSet + (bSet + a))
        case (Some(aSet), Some(bSet)) => if (aSet == bSet) this else DJSet(sets - aSet - bSet + (aSet ++ bSet))
      }
    }
    
    def addLinks(typ: Int, djSet: DJSet = DJSet()) : DJSet =
      edgesByType(typ).foldLeft(djSet)((djs, edge) => djs.addLink(edge(1), edge(2)))
    
    val commonDJSet = addLinks(3)
    if (addLinks(1, commonDJSet).solidSizeIs(n) && addLinks(2, commonDJSet).solidSizeIs(n))
      edges.length - (2 * (n - 1) - commonDJSet.links)
    else 
      -1
  }
}
```
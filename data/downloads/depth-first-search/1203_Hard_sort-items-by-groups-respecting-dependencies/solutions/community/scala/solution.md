# Scala, iterative, commented

**Author:** Sandro_
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/solutions/1967013/](https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/solutions/1967013/)

---

The runtime is pretty slow but it's accepted, let me know in the comments if there's something obvious to improve.

Steps:
1. Place each item into its corresponding group; ungrouped (-1) items are placed into their own 1-element group
2. Topo sort the items within each group
3. Topo sort the groups themselves
4. Check if the solution is valid

> Runtime: 5536 ms
> Memory Usage: 83.3 MB

```scala
object Solution {
  import scala.collection.mutable

  /** all groups, unsorted, with topologically sorted items within each group */
  private def prepareGroups(m: Int, itemToGroup: Array[Int], before: Array[Set[Int]]): IndexedSeq[(Int, IndexedSeq[Int])] = {
    val map = mutable.Map.empty[Int, mutable.ArrayBuffer[Int]]

    // current sequential "ungrouped" group index, starting with m
    var ungroupedGroupI = m - 1
    
    // create all the existing groups first
    for (g <- 0 until m) {
      map += g -> mutable.ArrayBuffer.empty
    }
    
    for ((g, i) <- itemToGroup.zipWithIndex) {
      val groupIndex = if (g > -1) g else {
        ungroupedGroupI += 1
        ungroupedGroupI
      } 
      
      // get the existing group for a "grouped" element, or create a new one for each "ungrouped" element
      val group = map.getOrElse(groupIndex, mutable.ArrayBuffer.empty)
      
      map += groupIndex -> (group :+ i)
    }
    
    map.map { case (g, items) => 
      case (g, items) if items.length > 1 => g -> topoSortItems(items, before)
      case (g, items)                     => g -> items.toIndexedSeq      
    }.toIndexedSeq
  }

  /** @return map of item -> group */
  private def toItemToGroupMap(groups: collection.Seq[(Int, IndexedSeq[Int])]): collection.Map[Int, Int] = {
    val map = mutable.Map.empty[Int, Int]
    
    for {
      (group, items) <- groups
      item <- items
    } {
      map += item -> group
    }
    
    map
  }
  
  /** @return topologically sorted items within a single group */
  private def topoSortItems(items: collection.Seq[Int], before: Array[Set[Int]]): IndexedSeq[Int] = {
    val sortedItems = IndexedSeq.newBuilder[Int]
    val seen = mutable.BitSet.empty
    
    def dfs(item: Int): Unit = {
      if (!seen(item)) {
        seen += item
      
        val beforeItems = before(item)
        
        for (beforeItem <- items if beforeItems.contains(beforeItem)) {
          dfs(beforeItem)
        }
        
        sortedItems += item
      }
    }
    
    for (item <- items) {
      dfs(item)
    }
    
    sortedItems.result()
  } 
  
  /** @return topologically sorted groups */
  private def topoSortGroups(groups: collection.Seq[(Int, IndexedSeq[Int])], before: Array[Set[Int]]): IndexedSeq[Int] = {
    val sortedGroups = IndexedSeq.newBuilder[Int]
    val seen = mutable.BitSet.empty
    
    val itemToGroup = toItemToGroupMap(groups)
    
    def dfs(group: Int): Unit = {
      if (!seen(group)) {
        seen += group
      
        val items = groups(group)._2
        val beforeItems = items.flatMap(before(_))
        
        for (beforeGroup <- beforeItems.map(itemToGroup)) {
          dfs(beforeGroup)
        }
        
        sortedGroups += group
      }
    }
    
    for ((group, _) <- groups) {
      dfs(group)
    }
    
    sortedGroups.result()
  }
  
  def sortItems(n: Int, m: Int, group: Array[Int], beforeItems: List[List[Int]]): Array[Int] = {
    // item -> all items that must be before this item
    val before = Array.tabulate(n)(i => beforeItems(i).toSet)
    
    // all groups, unsorted, with topologically sorted items within each group
    val groups = prepareGroups(m, group, before)
    
    // all group indexes, topologically sorted
    val resultGroups = topoSortGroups(groups, before)
    val resultItems = resultGroups.flatMap { group => groups(group)._2 }
    val resultMap = resultItems.zipWithIndex.toMap

    for ((item, i) <- resultMap) {
      // for this item, check if any of its beforeItems is actually after this item index
      if (before(item).exists(b => resultMap(b) > i)) {
        // no solution
        return Array.empty
      }
    }    
    
    resultItems.toArray
  }
}
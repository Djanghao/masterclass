# Scala solution

**Author:** misava
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-common-region/solutions/3066276/](https://leetcode.com/problems/smallest-common-region/solutions/3066276/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import scala.annotation.tailrec
import scala.collection.mutable

object Solution {

  def findSmallestRegion(
    regions: List[List[String]],
    region1: String,
    region2: String
  ): String = {
    val ancestryGraph = buildAncestryGraph(regions)
    val region1Hierarchy = getRegionHierarchy(region1, ancestryGraph)
    val region2Hierarchy = getRegionHierarchy(region2, ancestryGraph)

    (region1Hierarchy intersect region2Hierarchy).last
  }

  private def buildAncestryGraph(
    regions: List[List[String]]
  ): Map[String, String] =
    regions
      .flatMap(region => {
        val parentRegion = region.head
        region
          .drop(1)
          .map(subRegion => {
            subRegion -> parentRegion
          })
      })
      .toMap

  @tailrec
  private def getRegionHierarchy(
    region: String,
    ancestryGraph: Map[String, String],
    hierarchy: List[String] = List.empty
  ): List[String] = {
    if (!ancestryGraph.contains(region))
      region :: hierarchy
    else
      getRegionHierarchy(
        region = ancestryGraph(region),
        ancestryGraph = ancestryGraph,
        hierarchy = region :: hierarchy
      )
  }

}
```
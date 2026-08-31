# [scala] fp + recursion + dfs + bfs + hash_table

**Author:** leetcode08
**Votes:** 0
**Link:** [https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/solutions/4543355/](https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/solutions/4543355/)

---

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$

# Code
```scala
object Solution {
  def amountOfTime(root: TreeNode, start: Int): Int = {
    val links = getLinks(stack = (-1, root) :: Nil, links = Map.empty)
    if (links.isEmpty)
      0
    else 
      infect(
        links,
        nodes = start :: Nil,
        infected = Set.empty,
        minutes = -1
      )
  }

  @annotation.tailrec
  def getLinks(
    stack: List[(Int, TreeNode)], // parent's value -> child
    links: Map[Int, Set[Int]]
  ): Map[Int, Set[Int]] =
    stack match {
      case Nil =>
        links
      case (parentValue, node) :: tail =>
        val children = List(node.left, node.right).filter(_ != null)
        val childrenInfo = children.map(node.value -> _)
        val nodeLinks = 
          if (parentValue == -1) children.map(_.value).toSet
          else (parentValue :: children.map(_.value)).toSet
        getLinks(
          stack = childrenInfo ::: tail, 
          links + (node.value -> nodeLinks)
        )
    }

  @annotation.tailrec
  def infect(
    links: Map[Int, Set[Int]],
    nodes: List[Int], 
    infected: Set[Int], 
    minutes: Int
  ): Int =
    if (nodes.isEmpty)
      minutes
    else {
      val nextNodes = nodes
        .flatMap(links.apply)
        .filterNot(infected.contains)
      infect(links, nextNodes, infected ++ nodes, minutes + 1)
    }
}
```
# Scala solution with Dijkstra

**Author:** rom2
**Votes:** 0
**Link:** [https://leetcode.com/problems/cut-off-trees-for-golf-event/solutions/2636133/](https://leetcode.com/problems/cut-off-trees-for-golf-event/solutions/2636133/)

---

My scala solution :

```
  import scala.collection.SortedSet

  case class Cell(x: Int, y: Int)

  case class Tree(cell: Cell, height: Int)

  case class State(cell: Cell, steps: Int)

  implicit val TreeOrdering: Ordering[Tree] = (x: Tree, y: Tree) => x.height.compare(y.height)

  def cutOffTree(forest: List[List[Int]]): Int = {

    val trees: SortedSet[Tree] =
      forest.indices.foldLeft(SortedSet.empty[Tree]) { case (accX, x) =>
        forest(x).indices.foldLeft(accX) { case (accY, y) =>
          val height = forest(x)(y)
          if (height > 1) accY + Tree(Cell(x, y), height)
          else accY
        }
      }

    rec(forest, trees, State(Cell(0, 0), 0))
  }

  @scala.annotation.tailrec
  def rec(forest: List[List[Int]], trees: SortedSet[Tree], state: State): Int = {
    // cut next tree or finish
    trees.headOption match {
      case Some(next) =>
        val steps = shortestPath(forest, state.cell, next)

        if (steps == -1) -1
        else {
          val updatedState = State(next.cell, state.steps + steps)
          rec(forest, trees.tail, updatedState)
        }
        
      case None => state.steps
    }
  }

  def shortestPath(forest: List[List[Int]], from: Cell, to: Tree): Int = {

    val queue = scala.collection.mutable.Queue(from)

    val visited = scala.collection.mutable.Map(from -> 0)

    while (queue.nonEmpty) {
      val current = queue.dequeue()

      val neighbors =
        List(
          Cell(current.x - 1, current.y),
          Cell(current.x + 1, current.y),
          Cell(current.x, current.y - 1),
          Cell(current.x, current.y + 1)
        ).filterNot(visited.contains)
          .filterNot(cell => cell.x < 0)
          .filterNot(cell => cell.y < 0)
          .filterNot(cell => cell.x >= forest.length)
          .filterNot(cell => cell.y >= forest(0).length)
          .filter(cell => forest(cell.x)(cell.y) != 0)

      val path = visited(current) + 1

      neighbors.foreach { neighbor =>
        visited.get(neighbor) match {
          case Some(found) => visited + (neighbor -> (found min path))
          case None => visited.update(neighbor, path)
        }
        queue.enqueue(neighbor)
      }
      if (visited.contains(to.cell)) return visited(to.cell)
    }

    visited.getOrElse(to.cell, -1)
  }
```
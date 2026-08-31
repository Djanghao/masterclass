# Disjoint set union O(m x n)

**Author:** giulio-dambrosio
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-sub-islands/solutions/5706033/](https://leetcode.com/problems/count-sub-islands/solutions/5706033/)

---

# Intuition
DSU can be used to identify islands on grid1 and grid2.
Having both sets of islands, it can be counted how many islands on grid2 are subsets of one island from grid1.

# Approach
1. create one DSU instance per grid
2. iterate through the whole matrix
3. for each cell check if it's land and if the adjacent cells at right and bottom are also one: if they are operate a dsu union operation
4. extract the islands from grid2
5. count how many islands have all the cells overlapping the same island on grid1

# Complexity
- Time complexity:
$$O(m x n)$$

- Space complexity:
$$O(m x n)$$

# Code
```scala []
object Solution {
  def countSubIslands(grid1: Array[Array[Int]], grid2: Array[Array[Int]]): Int = {
    val m = grid1.length
    val n = grid1.head.length
    val dsu1 = DSU(m, n)
    val dsu2 = DSU(m, n)
    def checkAndMerge(grid: Array[Array[Int]], dsu: DSU, cell: (Int, Int)): Unit = {
      val (i, j) = cell
      if (grid(i)(j) == 1) {
        if (grid(i)(j + 1) == 1) dsu.union(cell, i -> (j + 1))
        if (grid(i + 1)(j) == 1) dsu.union(cell, (i + 1) -> j)
      } else {
        dsu.cancelCell(cell)
      }
    }
    
    (0 until m - 1).foreach { i =>
      (0 until n - 1).foreach { j =>
        checkAndMerge(grid1, dsu1, i -> j)
        checkAndMerge(grid2, dsu2, i -> j)
      }
    }
    
    dsu2.islands.count { 
      case (id2, cells2) =>
        val id1 = dsu1.find(cells2.head)
        val isSub = id1 != (-1, -1) && cells2.forall { cellId2 =>
          val cellId1 = dsu1.find(cellId2)
          cellId1 == id1
        }
        isSub
    }
  }

  private case class DSU(m: Int, n: Int) {
    val water = (-1, -1)
    val ids = (0 until m).toArray.map { i =>
      (0 until n).toArray.map { j => i -> j }
    }
    val rank = Array.fill(m)(Array.fill(n)(1))
    def islands: Array[((Int, Int), Array[(Int, Int)])] = {
      (0 until m).flatMap { i =>
        (0 until n).collect { 
          case j if find(i -> j) != water => ids(i)(j) -> (i, j)
        }
      }
      .groupMapReduce(_._1)(t => Array(t._2))(_ ++ _)
      .toArray
    }
    def cancelCell(id: (Int, Int)): Unit = {
      ids(id._1)(id._2) = water
    }
    def find(id: (Int, Int)): (Int, Int) = {
      if (id == water) id
      else {
        var parent = ids(id._1)(id._2)
        if (parent == id || parent == water) parent
        else {
          parent = find(parent)
          ids(id._1)(id._2) = parent
          parent
        }
      }
    }
    def union(id1: (Int, Int), id2: (Int, Int)): Unit = {
      val parent1 = find(id1)
      val parent2 = find(id2)
      if (parent1 != parent2) {
        val rank1 = rank(parent1._1)(parent1._2)
        val rank2 = rank(parent2._1)(parent2._2)
        if (rank1 >= rank2) {
          ids(parent2._1)(parent2._2) = parent1
          rank(parent1._1)(parent1._2) += rank2
        } else {
          ids(parent1._1)(parent1._2) = parent2
          rank(parent2._1)(parent2._2) += rank1
        }
      }
    }
  }
}
```
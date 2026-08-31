# 100% memory and runtime

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/swim-in-rising-water/solutions/5958380/](https://leetcode.com/problems/swim-in-rising-water/solutions/5958380/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```scala []
import scala.collection.mutable
object Solution {
  val DIRECTIONS=List((-1,0),(0,-1),(0,1),(1,0))    
  def swimInWater(grid: Array[Array[Int]]): Int = {
    val queue=new mutable.PriorityQueue[Cell]()(Ordering.by[Cell,Int](-_.time))
    val n=grid.length
    val visited= new mutable.HashSet[(Int,Int)]()
    visited.add((0,0))
    queue.addOne(Cell(0,0,grid(0)(0),grid(0)(0)))
    while(queue.nonEmpty && !(queue.head.x == n-1 && queue.head.y == n-1)){
      val cell=queue.dequeue()      
      val result=DIRECTIONS.flatMap {direction=>
        val row=direction._1+cell.x
        val col=direction._2+cell.y
        if(grid.isDefinedAt(row) && grid(row).isDefinedAt(col)
         && !visited.contains((row,col))) {
            visited.add((row,col))
            Some(row,col,grid(row)(col))
         }
        else None
      }
      result.foreach{a=>
        val newCell=Cell(a._1,a._2,a._3,Math.max(a._3,cell.maximum))
        queue.addOne(newCell)
      }
    }
    // println(s"x ${queue.head.x} , y ${queue.head.y} ")
    queue.head.maximum
  }
case class Cell(x:Int,y:Int,time:Int,maximum:Int)
}
```
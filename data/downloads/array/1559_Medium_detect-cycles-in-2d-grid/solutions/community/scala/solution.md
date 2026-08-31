# scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/detect-cycles-in-2d-grid/solutions/3087063/](https://leetcode.com/problems/detect-cycles-in-2d-grid/solutions/3087063/)

---

# Code
```
object Solution {
  def containsCycle(grid: Array[Array[Char]]): Boolean = {
    def validXY(a:Int)(b:Int): Boolean = !(a<0 || a>=grid.size || b<0 || b>=grid(0).size)
    val visited = (0 until (grid.size)).map{i =>  (0 until (grid(0).size)).map{ j => false}.toArray}.toArray
    def impl(i:Int, j:Int, i0:Int, j0:Int, ch:Char): Boolean =
      if(!validXY(i)(j) || grid(i)(j) != ch) false else {
        visited(i)(j)=true
        List((-1, 0), (1, 0), (0, -1), (0, +1)).map{case (x:Int,y:Int) => (i+x) -> (j+y)}
        .filterNot{case (a,b) => (a==i0 && b==j0) || !validXY(a)(b) || grid(a)(b) != ch}
        .exists{case (a,b) => (visited(a)(b) || impl(a,b,i,j,ch))}
      }
    (0 until (grid.size)).exists{i => (0 until (grid(0).size)).exists{j =>
      !visited(i)(j) && (impl(i,j,-1,-1,grid(i)(j)))
    }}
  }
}
```
# Scala DP Solution Functional Approach

**Author:** vinjai100
**Votes:** 2
**Link:** [https://leetcode.com/problems/unique-paths/solutions/1582008/](https://leetcode.com/problems/unique-paths/solutions/1582008/)

---

First we compute the rows.
Then the prev rows values are used to compute the next row along with the prev column.

```scala
object Solution {
    def uniquePaths(m: Int, n: Int): Int = {
        {(0 until m).foldLeft(List.fill(n+1)(0)){
            (row,i) =>{
                (0 until n).scanLeft(0){
                    (prev,j) => 
                        (i,j) match{
                            case (0,0) => 1
                            case _ => row(j+1) + prev
                        }
                }.toList
            }
        }}.last
    }
}
```
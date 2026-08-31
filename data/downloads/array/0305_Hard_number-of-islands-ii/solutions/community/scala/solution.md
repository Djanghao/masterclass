# Scala solution

**Author:** swathi146
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-islands-ii/solutions/4695435/](https://leetcode.com/problems/number-of-islands-ii/solutions/4695435/)

---

# Intuition
<!-- Union Rank at each operation in position -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import scala.collection.mutable._

object Solution {
    def numIslands2(m: Int, n: Int, positions: Array[Array[Int]]): List[Int] = {

        val grid  = Array.ofDim[Int](m,n)
        val parent = new Array[Int](m*n)
        val rank = new Array[Int](m*n)

        val directions = Array((0,1),(1,0),(0,-1),(-1,0))

        for(i <- 0 until m*n){
            parent(i) = i
            rank(i) = 0
        }

        def find(i: Int): Int = {
            if(parent(i) == i) return i
            val ancestor = find(parent(i))
            parent(i) = ancestor //path compression
            ancestor 
        }

        def union(i: Int, j: Int): Int = {
            val iRep = find(i)
            val jRep = find(j)

            if(iRep == jRep) return 0

            val iRank = rank(iRep)
            val jRank = rank(jRep)

            if(iRank < jRank){
                parent(iRep) = jRep
                rank(jRep) = rank(jRep) + 1
            }
            else{
                parent(jRep) = iRep
                rank(iRep) = rank(iRep) + 1
            }
            1
        }

        // r*n + c

        var islands = 0
        var resArr = new Array[Int](positions.length)

        for(i <- 0 until positions.length){

            val r = positions(i)(0)
            val c = positions(i)(1)

            val arrIndex = r * n + c

            if(grid(r)(c) != 1){

                //make it a 1 
            grid(r)(c) = 1
            
            //inc islands
            islands = islands + 1

            //check neighbors and run union
            for(i <- 0 until 4){
                val r1 = r + directions(i)._1
                val c1 = c + directions(i)._2

                if(r1 > -1 && c1 > -1 && r1 < m && c1 < n && grid(r1)(c1) == 1){
                    val arrIndex1 = r1 * n + c1
                    if(arrIndex < m*n && arrIndex1 < m*n){
                        islands = islands - union(arrIndex, arrIndex1)
                    }
                }
            }

            }
            
            resArr(i) = islands
        }
        resArr.toList
    }
}
```
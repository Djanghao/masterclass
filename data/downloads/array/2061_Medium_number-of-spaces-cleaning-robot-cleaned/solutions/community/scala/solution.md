# Scala simple solution O(m * n)

**Author:** giulio-dambrosio
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-spaces-cleaning-robot-cleaned/solutions/5160852/](https://leetcode.com/problems/number-of-spaces-cleaning-robot-cleaned/solutions/5160852/)

---

# Intuition
The robot action can be simulated keeping track of how many times the robot is transiting on each cell and only accumulating a cleaned unit the first time it goes through a cell.

# Approach
1. Initialise a seen matrix that will contain the number of times each cell has been visited
2. initialise a direction array, an initial position in the top left corner and an initial direction pointer in the directions array
3. as long as the next cell has been visited less than twice already:
4. increase the result if it's the first time the current position is visited
5. keep rotating until the next cell is not a wall and it's inside the room. If the robot has rotated 4 times, there's nowhere else to go, so return the result
6. keep iterating from point #3
7. return the result 

# Complexity
Let m be the number of rows and n the number of columns:

- Time complexity:
$$O(m * n)$$
The robot will go through the possible path in the room at most twice

- Space complexity:
$$O(m * n)$$

# Code
```
object Solution {
  private val dirs = Array((0,1),(1,0),(0,-1),(-1,0))
  def numberOfCleanRooms(room: Array[Array[Int]]): Int = {
    val m = room.length
    val n = room.head.length
    var result = 0
    val seen = Array.fill(m)(Array.ofDim[Int](n))
    var pos = (0,0)
    var dir = 0
    while (seen(pos._1)(pos._2) < 2) {
      val (i, j) = pos
      if (seen(i)(j) == 0) result += 1
      seen(i)(j) += 1
      var (ni, nj) = (dirs(dir)._1 + i, dirs(dir)._2 + j)
      var dirCount = 0
      while ((ni < 0 || nj < 0 || ni == m || nj == n || room(ni)(nj) == 1) && dirCount < 4) {
        dirCount += 1
        dir = (dir + 1) % dirs.length
        ni = dirs(dir)._1 + i
        nj = dirs(dir)._2 + j
      }
      if (dirCount == dirs.length) return result
      pos = ni -> nj
    }
    result
  }
}
```
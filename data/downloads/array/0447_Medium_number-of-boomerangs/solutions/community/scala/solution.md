# Scala Pure FP (100% Time & Space)

**Author:** dallinhuff
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-boomerangs/solutions/4090905/](https://leetcode.com/problems/number-of-boomerangs/solutions/4090905/)

---

# Approach
* Iterate over the entire list of points:
* For each point p,
    * create a hash map with keys being distances from p and values being the number of points that are that distance from p
    * Iterate over the values of the hash map sum together the result of mapping each value to its product with itself minus 1
    * return the number of boomerangs that exist with p as i
* sum together all of the results of the iteration to get the total boomerangs

# Complexity
- Time complexity: $$O(n^2)$$

- Space complexity: $$O(n)$$

# Code
```
object Solution {
  def numberOfBoomerangs(points: Array[Array[Int]]): Int = {

    def dist(a: Array[Int])(b: Array[Int]): Int = {
      val dx = a(0) - b(0)
      val dy = a(1) - b(1)
      dx * dx + dy * dy
    }

    def countBoomerangs(p: Array[Int], others: Array[Array[Int]]): Int = {
      others.groupMapReduce(dist(p))(_ => 1)(_ + _)
        .values
        .foldLeft(0) { (acc, curr) =>
          acc + (curr * (curr - 1))
        }
    }

    points.foldLeft(0) { (sum, p) =>
      sum + countBoomerangs(p, points.filter(_ != p))
    }
  }
}
```
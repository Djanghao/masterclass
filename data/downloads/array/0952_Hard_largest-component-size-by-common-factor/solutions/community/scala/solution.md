# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-component-size-by-common-factor/solutions/3646459/](https://leetcode.com/problems/largest-component-size-by-common-factor/solutions/3646459/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Union find 

# Complexity 
- Time complexity: O(n * sqrt(m)), where m = max(nums)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(m)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def largestComponentSize(nums: Array[Int]): Int = {

      val uf = UnionFind(100001)
      for (n <- nums) {
        var i = 2
        while (i * i <= n) {
          if (n % i == 0) {
            uf.union(n, i)
            uf.union(n, n / i)
          }
          i += 1
        }
      }
      val map = collection.mutable.Map[Int, Int]()
      var max = 1
      for (n <- nums) {
        val root = uf.find(n)
        val count = map.getOrElse(root, 0) + 1
        map(root) = count
        max = math.max(max, count)
      }
      max
    }
  }

  case class UnionFind(n: Int) {
    private val parent = Array.tabulate(n)(identity)
    private val size = Array.fill(n)(1)

    def find(x: Int): Int = {
      if (parent(x) != x) parent(x) = find(parent(x))
      parent(x)
    }

    def union(x: Int, y: Int): Unit = {
      val (rootX, rootY) = (find(x), find(y))
      if (rootX != rootY) {
        if (size(rootX) < size(rootY)) {
          parent(rootX) = rootY
          size(rootY) += size(rootX)
        } else {
          parent(rootY) = rootX
          size(rootX) += size(rootY)
        }
      }
    }
}
```
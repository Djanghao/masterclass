# scala union find

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-for-contradictions-in-equations/solutions/4810872/](https://leetcode.com/problems/check-for-contradictions-in-equations/solutions/4810872/)

---

# Approach
1. Initialize: Create maps for parents and ratios. parents map each variable to its parent variable, and ratios map each variable to its ratio to the parent.

2. Find: Implement a find function that not only finds the root parent of a variable but also calculates its ratio to the root parent.

3. Union: Implement a union function to merge two sets. When merging, adjust the ratios to ensure consistency across all equations.

4. Process Equations: For each equation, use union to merge the sets of the two variables with the ratio given by the equation.

5. Check for Contradictions: While processing, if we find that two variables are already in the same set but the ratio does not match the expected value (considering a tolerance for floating-point comparison), we have found a contradiction.
# Complexity
- Time complexity:
$$O(na(n)$$

- Space complexity:
$$O(n)$$ 

# Code
```
import scala.util.control.Breaks._

object Solution {
  // Helper class to return the result of the find operation
  case class FindResult(parent: String, ratio: Double)

  def checkContradictions(equations: List[List[String]], values: Array[Double]): Boolean = {
    val parents = scala.collection.mutable.Map[String, String]()
    val ratios = scala.collection.mutable.Map[String, Double]()

    // Initializes the parent and ratio if not already present
    def initialize(variable: String): Unit = {
      if (!parents.contains(variable)) {
        parents(variable) = variable
        ratios(variable) = 1.0
      }
    }

    // Finds the root parent and the ratio to the root parent
    def find(variable: String): FindResult = {
      initialize(variable)
      var ratio = 1.0
      var parent = variable
      while (parent != parents(parent)) {
        ratio *= ratios(parent)
        parent = parents(parent)
      }
      FindResult(parent, ratio)
    }

    // Merges two sets and updates ratios
    def union(var1: String, var2: String, value: Double): Boolean = {
      val root1 = find(var1)
      val root2 = find(var2)

      // If already in the same set, check for contradiction
      if (root1.parent == root2.parent) {
        if (Math.abs(root1.ratio / root2.ratio - value) > 1e-5) return true
      } else {
        // Merge sets and update ratios
        parents(root1.parent) = root2.parent
        ratios(root1.parent) = value * (root2.ratio / root1.ratio)
      }
      false
    }

    var contradictionFound = false
    breakable {
      for (i <- equations.indices) {
        val equation = equations(i)
        val value = values(i)
        if (union(equation.head, equation(1), value)) {
          contradictionFound = true
          break
        }
      }
    }

    contradictionFound
  }
}

```
# Intuitive Approach for Minimum Cost of Cake Cutting

**Author:** Shubham_Bist
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-cost-for-cutting-cake-i/solutions/5473346/](https://leetcode.com/problems/minimum-cost-for-cutting-cake-i/solutions/5473346/)

---

## Minimum Cost of Cake Cutting

### Approach: Greedy Strategy with Sorting

- **Problem Statement:** Given a cake of dimensions `m x n` and arrays of horizontal and vertical cuts, calculate the minimum cost to create pieces of the cake after making all the cuts.

- **Solution Overview:**
  - Use a greedy approach to prioritize larger cuts first, as they contribute more significantly to the total cost.
  - Maintain counts of horizontal and vertical pieces to calculate the cost of each cut effectively.

- **Implementation Steps:**

#### 1. Prepare Cuts
   - **Inputs:** Dimensions `m` and `n`, arrays `horizontalCut` and `verticalCut`.
   - **Process:**
     - Create a list of cuts, pairing each cut with its type (`H` for horizontal, `V` for vertical).
     - Sort the cuts in descending order based on their length to maximize cost efficiency during calculation.

#### 2. Calculate Total Cost
   - **Process:**
     - Initialize counters for horizontal and vertical pieces, starting both at 1 (the whole cake).
     - Iterate through each cut:
       - If it's a horizontal cut, add to the total cost by multiplying the cut length by the current number of vertical pieces.
       - If it's a vertical cut, add to the total cost by multiplying the cut length by the current number of horizontal pieces.
       - Update the respective piece counter after processing the cut.

#### 3. Return the Result
   - **Output:** Return the total calculated cost after all cuts.

- **Code:**

```kotlin
class Solution {
    fun minimumCost(m: Int, n: Int, horizontalCut: IntArray, verticalCut: IntArray): Int {
        val cuts = mutableListOf<Pair<Int, Char>>()

        for (cut in horizontalCut) {
            cuts.add(Pair(cut, 'H'))
        }
        for (cut in verticalCut) {
            cuts.add(Pair(cut, 'V'))
        }

        cuts.sortWith(compareByDescending { it.first })

        var horizontalPieces = 1
        var verticalPieces = 1
        var totalCost = 0

        for (cut in cuts) {
            if (cut.second == 'H') {
                totalCost += cut.first * verticalPieces
                horizontalPieces++
            } else {
                totalCost += cut.first * horizontalPieces
                verticalPieces++
            }
        }

        return totalCost
    }
}
```

- **Complexity Analysis:**
  - **Time Complexity:** O((m + n) log(m + n)) - Due to sorting the cuts.
  - **Space Complexity:** O(m + n) - For storing the cuts.
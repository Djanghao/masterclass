# 100% Minimizing Rook Moves by Sorting Rows and Columns in 13 programming languages

**Author:** d_sushkov
**Votes:** 6
**Link:** [https://leetcode.com/problems/minimum-moves-to-get-a-peaceful-board/solutions/5339126/](https://leetcode.com/problems/minimum-moves-to-get-a-peaceful-board/solutions/5339126/)

---

# Intuition
The goal is to rearrange the rooks on an \uD835\uDC5B \xD7 \uD835\uDC5B chessboard such that each row and each column contains exactly one rook. To minimize the number of moves, we can take advantage of sorting the rooks by their row and column positions, and then aligning them to the target positions (indices 0 to \uD835\uDC5B \u2212 1). This approach leverages the inherent order in sorted lists to efficiently compute the minimal moves required.

# Approach
1. Sort by Rows:

First, we sort the rooks based on their row positions.
After sorting, the target row positions are simply the indices from 0 to \uD835\uDC5B \u2212 1.
We then calculate the moves required to place each rook in its corresponding target row.
2. Sort by Columns:

Next, we sort the rooks based on their column positions.
Similarly, the target column positions are the indices from 0 to \uD835\uDC5B \u2212 1.
We calculate the moves required to place each rook in its corresponding target column.
3. Calculate Total Moves:

The total moves required are the sum of the moves calculated for the row adjustments and the column adjustments.

# Complexity
- Time complexity: O(nlogn)
Sorting the rooks by rows takes O(nlogn).
Sorting the rooks by columns takes O(nlogn).
Calculating the moves for rows and columns takes O(n).

- Space complexity: O(n)
due to the additional arrays used for storing the target positions for the rows and columns.

# Code
**C++**
```
class Solution {
public:
    int minMoves(vector<vector<int>>& rooks) {
        int n = rooks.size();
        
        // Sort rooks by their row positions
        std::sort(rooks.begin(), rooks.end(), [](const std::vector<int>& a, const std::vector<int>& b) {
            return a[0] < b[0];
        });
        
        // Target positions after sorting by rows
        std::vector<int> targetRows(n);
        for (int i = 0; i < n; ++i) {
            targetRows[i] = i;
        }
        
        // Calculate moves needed to place each rook in its target row
        int rowMoves = 0;
        for (int i = 0; i < n; ++i) {
            rowMoves += std::abs(rooks[i][0] - targetRows[i]);
        }
        
        // Sort rooks by their column positions
        std::sort(rooks.begin(), rooks.end(), [](const std::vector<int>& a, const std::vector<int>& b) {
            return a[1] < b[1];
        });
        
        // Target positions after sorting by columns
        std::vector<int> targetCols(n);
        for (int i = 0; i < n; ++i) {
            targetCols[i] = i;
        }
        
        // Calculate moves needed to place each rook in its target column
        int colMoves = 0;
        for (int i = 0; i < n; ++i) {
            colMoves += std::abs(rooks[i][1] - targetCols[i]);
        }
        
        // Total moves is the sum of row moves and column moves
        return rowMoves + colMoves;
    }
};
```
**Java**
```
class Solution {
    public int minMoves(int[][] rooks) {
        int n = rooks.length;
        
        // Sort rooks by their row positions
        Arrays.sort(rooks, (a, b) -> Integer.compare(a[0], b[0]));
        
        // Target positions after sorting by rows
        int[] targetRows = new int[n];
        for (int i = 0; i < n; i++) {
            targetRows[i] = i;
        }
        
        // Calculate moves needed to place each rook in its target row
        int rowMoves = 0;
        for (int i = 0; i < n; i++) {
            rowMoves += Math.abs(rooks[i][0] - targetRows[i]);
        }
        
        // Sort rooks by their column positions
        Arrays.sort(rooks, (a, b) -> Integer.compare(a[1], b[1]));
        
        // Target positions after sorting by columns
        int[] targetCols = new int[n];
        for (int i = 0; i < n; i++) {
            targetCols[i] = i;
        }
        
        // Calculate moves needed to place each rook in its target column
        int colMoves = 0;
        for (int i = 0; i < n; i++) {
            colMoves += Math.abs(rooks[i][1] - targetCols[i]);
        }
        
        // Total moves is the sum of row moves and column moves
        return rowMoves + colMoves;
    }
}
```
**Python3/Python**
```
class Solution:
    def minMoves(self, rooks: List[List[int]]) -> int:
        n = len(rooks)
        
        # Sort rooks by their row positions
        rooks.sort(key=lambda x: x[0])
        
        # Target positions after sorting by rows
        targetRows = list(range(n))
        
        # Calculate moves needed to place each rook in its target row
        rowMoves = sum(abs(rooks[i][0] - targetRows[i]) for i in range(n))
        
        # Sort rooks by their column positions
        rooks.sort(key=lambda x: x[1])
        
        # Target positions after sorting by columns
        targetCols = list(range(n))
        
        # Calculate moves needed to place each rook in its target column
        colMoves = sum(abs(rooks[i][1] - targetCols[i]) for i in range(n))
        
        # Total moves is the sum of row moves and column moves
        return rowMoves + colMoves        
```
**C#**
```
public class Solution {
    public int MinMoves(int[][] rooks) {

        Array.Sort(rooks, (a, b) => a[0].CompareTo(b[0]));

        int rowMoves = rooks.Select((rook, i) => Math.Abs(rook[0] - i)).Sum();

        Array.Sort(rooks, (a, b) => a[1].CompareTo(b[1]));

        int colMoves = rooks.Select((rook, i) => Math.Abs(rook[1] - i)).Sum();

        return rowMoves + colMoves;
    }
} 
```
**JavaScript**
```
/**
 * @param {number[][]} rooks
 * @return {number}
 */
var minMoves = function(rooks) {
    const n = rooks.length;

    // Sort rooks by their row positions
    rooks.sort((a, b) => a[0] - b[0]);

    // Target positions after sorting by rows
    const targetRows = Array.from({ length: n }, (_, i) => i);

    // Calculate moves needed to place each rook in its target row
    let rowMoves = 0;
    for (let i = 0; i < n; i++) {
        rowMoves += Math.abs(rooks[i][0] - targetRows[i]);
    }

    // Sort rooks by their column positions
    rooks.sort((a, b) => a[1] - b[1]);

    // Target positions after sorting by columns
    const targetCols = Array.from({ length: n }, (_, i) => i);

    // Calculate moves needed to place each rook in its target column
    let colMoves = 0;
    for (let i = 0; i < n; i++) {
        colMoves += Math.abs(rooks[i][1] - targetCols[i]);
    }

    // Total moves is the sum of row moves and column moves
    return rowMoves + colMoves;
};
```
**TypeScript**
```
function minMoves(rooks: number[][]): number {

    rooks.sort((a, b) => a[0] - b[0]);

    const rowMoves = rooks.reduce((sum, rook, i) => sum + Math.abs(rook[0] - i), 0);

    rooks.sort((a, b) => a[1] - b[1]);

    const colMoves = rooks.reduce((sum, rook, i) => sum + Math.abs(rook[1] - i), 0);

    return rowMoves + colMoves;
}   
```
**PHP**
```
class Solution {

    /**
     * @param Integer[][] $rooks
     * @return Integer
     */
    function minMoves($rooks) {
        $n = count($rooks);
        
        usort($rooks, function($a, $b) {
            return $a[0] - $b[0];
        });
        
        $rowMoves = 0;
        for ($i = 0; $i < $n; $i++) {
            $rowMoves += abs($rooks[$i][0] - $i);
        }
        
        usort($rooks, function($a, $b) {
            return $a[1] - $b[1];
        });
        
        $colMoves = 0;
        for ($i = 0; $i < $n; $i++) {
            $colMoves += abs($rooks[$i][1] - $i);
        }
        
        return $rowMoves + $colMoves;
    }
}  
```
**Swift**
```
class Solution {
    func minMoves(_ rooks: [[Int]]) -> Int {
        
        let sortedByRow = rooks.sorted { $0[0] < $1[0] }
        let rowMoves = sortedByRow.enumerated().map { (i, rook) in abs(rook[0] - i) }.reduce(0, +)
        
        let sortedByCol = rooks.sorted { $0[1] < $1[1] }
        let colMoves = sortedByCol.enumerated().map { (i, rook) in abs(rook[1] - i) }.reduce(0, +)
        
        return rowMoves + colMoves
    }
} 
```
**Kotlin**
```
class Solution {
    fun minMoves(rooks: Array<IntArray>): Int {

        rooks.sortBy { it[0] }
        val rowMoves = rooks.mapIndexed { index, rook -> Math.abs(rook[0] - index) }.sum()

        rooks.sortBy { it[1] }
        val colMoves = rooks.mapIndexed { index, rook -> Math.abs(rook[1] - index) }.sum()

        return rowMoves + colMoves
    }
}
```
**Dart**
```
class Solution {
  int minMoves(List<List<int>> rooks) {

    rooks.sort((a, b) => a[0].compareTo(b[0]));
    int rowMoves = rooks.asMap().entries.map((entry) => (entry.value[0] - entry.key).abs()).reduce((a, b) => a + b);

    rooks.sort((a, b) => a[1].compareTo(b[1]));
    int colMoves = rooks.asMap().entries.map((entry) => (entry.value[1] - entry.key).abs()).reduce((a, b) => a + b);

    return rowMoves + colMoves;
  }
}   
```
**Go**
```
func minMoves(rooks [][]int) int {
	n := len(rooks)
	
	sort.Slice(rooks, func(i, j int) bool {
		return rooks[i][0] < rooks[j][0]
	})
	
	rowMoves := 0
	for i := 0; i < n; i++ {
		rowMoves += int(math.Abs(float64(rooks[i][0] - i)))
	}
	
	sort.Slice(rooks, func(i, j int) bool {
		return rooks[i][1] < rooks[j][1]
	})
	
	colMoves := 0
	for i := 0; i < n; i++ {
		colMoves += int(math.Abs(float64(rooks[i][1] - i)))
	}
	
	return rowMoves + colMoves
}   
```
**Ruby**
```
# @param {Integer[][]} rooks
# @return {Integer}
def min_moves(rooks)
    
    rooks.sort_by! { |rook| rook[0] }
    row_moves = rooks.each_with_index.sum { |rook, i| (rook[0] - i).abs }
    
    rooks.sort_by! { |rook| rook[1] }
    col_moves = rooks.each_with_index.sum { |rook, i| (rook[1] - i).abs }
    
    row_moves + col_moves
end  
```
**Scala**
```
object Solution {
    def minMoves(rooks: Array[Array[Int]]): Int = {
    
     val sortedByRow = rooks.sortBy(_(0))
     val rowMoves = sortedByRow.zipWithIndex.map { case (rook, i) => (rook(0) - i).abs }.sum
    
     val sortedByCol = rooks.sortBy(_(1))
     val colMoves = sortedByCol.zipWithIndex.map { case (rook, i) => (rook(1) - i).abs }.sum
    
     rowMoves + colMoves
   }
} 
```
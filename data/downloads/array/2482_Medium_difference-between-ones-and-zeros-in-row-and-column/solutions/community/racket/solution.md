# easy solution in racket and cpp

**Author:** vinamra-123
**Votes:** 0
**Link:** [https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/solutions/5110446/](https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/solutions/5110446/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->



# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(N2)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code

```racket []
(define (ones-minus-zeros grid)
  (define row (make-vector (vector-length grid) 0))
  (define col (make-vector (vector-length (vector-ref grid 0)) 0))

  ; Calculate the sum of ones and zeros for each row
  (for ([i (in-range (vector-length grid))])
    (for ([j (in-range (vector-length (vector-ref grid 0)))])
      (if (= (vector-ref (vector-ref grid i) j) 0)
          (vector-set! row i (+ (vector-ref row i) 1))
          (vector-set! row i (- (vector-ref row i) 1)))))

  ; Calculate the sum of ones and zeros for each column
  (for ([j (in-range (vector-length (vector-ref grid 0)))])
    (for ([i (in-range (vector-length grid))])
      (if (= (vector-ref (vector-ref grid i) j) 0)
          (vector-set! col j (+ (vector-ref col j) 1))
          (vector-set! col j (- (vector-ref col j) 1)))))

  ; Calculate the result based on the sums of ones and zeros
  (define ans (make-vector (vector-length grid) (make-vector (vector-length (vector-ref grid 0)) 0)))
  (for ([i (in-range (vector-length grid))])
    (for ([j (in-range (vector-length (vector-ref grid 0)))])
      (vector-set! (vector-ref ans i) j (+ (vector-ref row i) (vector-ref col j)))))

  ans)
```
```cpp []
class Solution {
public:
    vector<vector<int>> onesMinusZeros(vector<vector<int>>& grid) {
        vector<int> row(grid.size(), 0);
        vector<int> col(grid[0].size(), 0);

        // Calculate the sum of ones and zeros for each row
        for (int i = 0; i < grid.size(); ++i) {
            for (int j = 0; j < grid[i].size(); ++j) {
                if (grid[i][j] == 0) {
                    row[i]--;
                } else {
                    row[i]++;
                }
            }
        }

        // Calculate the sum of ones and zeros for each column
        for (int j = 0; j < grid[0].size(); ++j) {
            for (int i = 0; i < grid.size(); ++i) {
                if (grid[i][j] == 0) {
                    col[j]--;
                } else {
                    col[j]++;
                }
            }
        }
        vector<vector<int>> ans(grid.size(), vector<int>(grid[0].size(), 0));
        for (int i = 0; i < grid.size(); ++i) {
            for (int j = 0; j < grid[i].size(); ++j) {
                ans[i][j] = row[i] + col[j];
            }
        }

        return ans;
    }
};

```
DON'T FORGET TO UPVOTE

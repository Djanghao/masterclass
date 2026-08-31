# O(n) | Beats 100% | Dynamic Programming | C++ | Java | Python | Go | Rust | JavaScript

**Author:** kartikdevsharma_
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximum-number-of-points-with-cost/solutions/5648695/](https://leetcode.com/problems/maximum-number-of-points-with-cost/solutions/5648695/)

---



### Complexity


**Time Complexity: $O(m \	imes n)$**



 **Space Complexity: $O(n)$**









### Code
```Java []
class Solution {
    public long maxPoints(int[][] grid) {
        int width = grid[0].length;
        long[] current = new long[width], previous = new long[width];
        long maxScore = 0;
        
        for (int[] level : grid) {
            long peak = 0;
            // Forward sweep
            for (int i = 0; i < width; ++i) {
                peak = Math.max(peak - 1, previous[i]);
                current[i] = peak;
            }
            peak = 0;
            // Backward sweep
            for (int i = width - 1; i >= 0; --i) {
                peak = Math.max(peak - 1, previous[i]);
                current[i] = Math.max(current[i], peak) + level[i];
            }
            previous = current;
        }
        
        // Compute final result
        for (int i = 0; i < width; ++i) {
            maxScore = Math.max(maxScore, previous[i]);
        }
        return maxScore;
    }
}


//https://leetcode.com/problems/maximum-number-of-points-with-cost/submissions/1357544556/
```

```C++ []
//97-ms
class Solution {
public:

    long long maxPoints(vector<vector<int>>& grid) {
        const int width = grid[0].size();
        vector<long long> current(width), previous(width);
        long long maxScore = 0;

        for (const auto& level : grid) {
            long long peak = 0;
            // Forward sweep
            for (int i = 0; i < width; ++i) {
                peak = max(peak - 1, previous[i]);
                current[i] = peak;
            }
            peak = 0;
            // Backward sweep
            for (int i = width - 1; i >= 0; --i) {
                peak = max(peak - 1, previous[i]);
                current[i] = max(current[i], peak) + level[i];
            }
            previous.swap(current);
        }

        // Compute final result
        maxScore = *max_element(previous.begin(), previous.end());
        return maxScore;
    }
};



static const auto speedup = []() {
    std::ios::sync_with_stdio(false);
    std::cin.tie(nullptr);
    std::cout.tie(nullptr);
    return 0;
}();


//https://leetcode.com/problems/maximum-number-of-points-with-cost/submissions/1357876927/
```
```Python []
class Solution:
    def maxPoints(self, grid: List[List[int]]) -> int:
        width = len(grid[0])
        current = [0] * width
        previous = [0] * width
        
        for level in grid:
            peak = 0
            # Forward sweep
            for i in range(width):
                peak = max(peak - 1, previous[i])
                current[i] = peak
            
            peak = 0
            # Backward sweep
            for i in range(width - 1, -1, -1):
                peak = max(peak - 1, previous[i])
                current[i] = max(current[i], peak) + level[i]
            
            previous, current = current, previous
        
        return max(previous)

def main():
    input = sys.stdin.read().strip()

    test_cases = input.splitlines()
    results = []
    for case in test_cases:
        grid = json.loads(case)
        results.append(Solution().maxPoints(grid))

    with open('user.out', 'w') as f:
        for result in results:
            f.write(f"{result}\
")

if __name__ == "__main__":
    main()
    exit(0)


#https://leetcode.com/problems/maximum-number-of-points-with-cost/submissions/1357852918/
```
```Go []
func maxPoints(grid [][]int) int64 {
    width := len(grid[0])
    current := make([]int64, width)
    previous := make([]int64, width)
    var maxScore int64

    for _, level := range grid {
        var peak int64
        // Forward sweep
        for i := 0; i < width; i++ {
            if peak-1 > previous[i] {
                peak--
            } else {
                peak = previous[i]
            }
            current[i] = peak
        }

        peak = 0
        // Backward sweep
        for i := width - 1; i >= 0; i-- {
            if peak-1 > previous[i] {
                peak--
            } else {
                peak = previous[i]
            }
            if current[i] > peak {
                current[i] += int64(level[i])
            } else {
                current[i] = peak + int64(level[i])
            }
        }

        copy(previous, current)
    }

    // Compute final result
    for _, score := range previous {
        if score > maxScore {
            maxScore = score
        }
    }
    return maxScore
}

func init() {
   
}

//https://leetcode.com/problems/maximum-number-of-points-with-cost/submissions/1357563134/
```
```Rust []
impl Solution {
    pub fn max_points(grid: Vec<Vec<i32>>) -> i64 {
        let width = grid[0].len();
        let mut current = vec![0i64; width];
        let mut previous = vec![0i64; width];
        
        for level in grid.iter() {
            let mut peak = 0i64;
            // Forward sweep
            for i in 0..width {
                peak = peak.saturating_sub(1).max(previous[i]);
                current[i] = peak;
            }
            
            peak = 0;
            // Backward sweep
            for i in (0..width).rev() {
                peak = peak.saturating_sub(1).max(previous[i]);
                current[i] = current[i].max(peak) + level[i] as i64;
            }
            
            std::mem::swap(&mut previous, &mut current);
        }
        
        *previous.iter().max().unwrap()
    }
}

//https://leetcode.com/problems/maximum-number-of-points-with-cost/submissions/1357863313/

```

```JavaScript []
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    let width = points[0].length;
    let current = new Array(width).fill(0);
    let previous = new Array(width);
    
 
    for (let i = 0; i < width; i++) {
        previous[i] = points[0][i];
    }

    for (let row = 1; row < points.length; row++) {
        let peak = 0;
        
        // Forward sweep
        for (let col = 0; col < width; col++) {
            peak = Math.max(peak - 1, previous[col]);
            current[col] = points[row][col] + peak;
        }
        
        peak = 0;
        
        // Backward sweep
        for (let col = width - 1; col >= 0; col--) {
            peak = Math.max(peak - 1, previous[col]);
            current[col] = Math.max(current[col], points[row][col] + peak);
        }
        
        
        [previous, current] = [current, previous];
    }
    
    
    return Math.max(...previous);
};


```

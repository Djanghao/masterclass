# Matrix Cells in Distance Order | All languages

**Author:** deleted_user
**Votes:** 0
**Link:** [https://leetcode.com/problems/matrix-cells-in-distance-order/solutions/5403060/](https://leetcode.com/problems/matrix-cells-in-distance-order/solutions/5403060/)

---

# Intuition
To solve this problem, the main idea is to calculate the Manhattan distance from each cell in the matrix to the center cell $$(rCenter, cCenter)$$. *The Manhattan distance* between two cells $$(r1, c1)$$ and $$(r2, c2)$$ is given by $$|r1 - r2| + |c1 - c2|$$. By calculating this distance for each cell and sorting the cells based on these distances, we can obtain the desired order.
# Approach
1. **Initialize Result Array:** Create an empty array to store the coordinates of all cells in the matrix.
2. **Populate the Array:** Use nested loops to iterate through all possible cell coordinates $$(i, j)$$ in the matrix, and add each coordinate to the result array.
3. **Sort the Array:** Sort the array of coordinates based on the calculated Manhattan distance from each cell to the center cell $$(rCenter, cCenter)$$.
4. **Return the Result:** Return the sorted array of coordinates.

# Complexity
#### Time complexity:
- **Population of the Array:** We iterate through each cell in the matrix once, which takes $$O(rows\xD7cols)$$.
- **Sorting the Array:** Sorting the array of all cell coordinates takes $$O((rows\xD7cols)*log(rows\xD7cols))$$.
**Overall Complexity:** The overall time complexity is $$O(rows\xD7cols*log(rows\xD7cols))$$
#### Space complexity:
- **Space for the Array:** We use an array to store all cell coordinates, which takes $$O(rows\xD7cols)$$ space.
**Overall Complexity:** The overall space complexity $$O(rows\xD7cols)$$
# Code
```TypeScript []
function allCellsDistOrder(rows: number, cols: number, rCenter: number, cCenter: number): number[][] {
    const res = new Array<[number, number]>();
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            res.push([i, j]);
        }
    };

    res.sort((a, b) => (Math.abs(a[0] - rCenter) + Math.abs(a[1] - cCenter) - (Math.abs(b[0] - rCenter) + Math.abs(b[1] - cCenter))));
    return res;
};
```
```JavaScript []
function allCellsDistOrder(rows, cols, rCenter, cCenter) {
    const res = [];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            res.push([i, j]);
        }
    }

    res.sort((a, b) => (Math.abs(a[0] - rCenter) + Math.abs(a[1] - cCenter)) - (Math.abs(b[0] - rCenter) + Math.abs(b[1] - cCenter)));
    return res;
}
```
```Python []
def all_cells_dist_order(rows, cols, r_center, c_center):
    res = [[i, j] for i in range(rows) for j in range(cols)]
    res.sort(key=lambda x: abs(x[0] - r_center) + abs(x[1] - c_center))
    return res
```
```Java []
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class Main {
    public static List<int[]> allCellsDistOrder(int rows, int cols, int rCenter, int cCenter) {
        List<int[]> res = new ArrayList<>();
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                res.add(new int[]{i, j});
            }
        }

        Collections.sort(res, new Comparator<int[]>() {
            @Override
            public int compare(int[] a, int[] b) {
                return (Math.abs(a[0] - rCenter) + Math.abs(a[1] - cCenter)) - 
                       (Math.abs(b[0] - rCenter) + Math.abs(b[1] - cCenter));
            }
        });

        return res;
    }
}
``` 
```C++ []
#include <vector>
#include <algorithm>
#include <cmath>

using namespace std;

vector<vector<int>> allCellsDistOrder(int rows, int cols, int rCenter, int cCenter) {
    vector<vector<int>> res;
    for (int i = 0; i < rows; ++i) {
        for (int j = 0; j < cols; ++j) {
            res.push_back({i, j});
        }
    }

    sort(res.begin(), res.end(), [rCenter, cCenter](const vector<int>& a, const vector<int>& b) {
        return abs(a[0] - rCenter) + abs(a[1] - cCenter) < abs(b[0] - rCenter) + abs(b[1] - cCenter);
    });

    return res;
}
```
```C# []
using System;
using System.Collections.Generic;

public class Solution {
    public IList<int[]> AllCellsDistOrder(int rows, int cols, int rCenter, int cCenter) {
        List<int[]> res = new List<int[]>();
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                res.Add(new int[] {i, j});
            }
        }

        res.Sort((a, b) => (Math.Abs(a[0] - rCenter) + Math.Abs(a[1] - cCenter)) - 
                           (Math.Abs(b[0] - rCenter) + Math.Abs(b[1] - cCenter)));
        return res;
    }
}
```
```Ruby []
def all_cells_dist_order(rows, cols, r_center, c_center)
  res = []
  (0...rows).each do |i|
    (0...cols).each do |j|
      res << [i, j]
    end
  end

  res.sort_by! { |a| (a[0] - r_center).abs + (a[1] - c_center).abs }
  res
end
```
```Go []
package main

import (
	"math"
	"sort"
)

func allCellsDistOrder(rows int, cols int, rCenter int, cCenter int) [][]int {
	res := [][]int{}
	for i := 0; i < rows; i++ {
		for j := 0; j < cols; j++ {
			res = append(res, []int{i, j})
		}
	}

	sort.Slice(res, func(a, b int) bool {
		return (math.Abs(float64(res[a][0]-rCenter)) + math.Abs(float64(res[a][1]-cCenter))) < 
		       (math.Abs(float64(res[b][0]-rCenter)) + math.Abs(float64(res[b][1]-cCenter)))
	})

	return res
}
```


```PHP []
<?php
function allCellsDistOrder($rows, $cols, $rCenter, $cCenter) {
    $res = [];
    for ($i = 0; $i < $rows; $i++) {
        for ($j = 0; $j < $cols; $j++) {
            $res[] = [$i, $j];
        }
    }

    usort($res, function($a, $b) use ($rCenter, $cCenter) {
        return (abs($a[0] - $rCenter) + abs($a[1] - $cCenter)) - 
               (abs($b[0] - $rCenter) + abs($b[1] - $cCenter));
    });

    return $res;
}
?>
```
```Swift []
func allCellsDistOrder(_ rows: Int, _ cols: Int, _ rCenter: Int, _ cCenter: Int) -> [[Int]] {
    var res = [[Int]]()
    for i in 0..<rows {
        for j in 0..<cols {
            res.append([i, j])
        }
    }

    res.sort { (a, b) -> Bool in
        (abs(a[0] - rCenter) + abs(a[1] - cCenter)) < (abs(b[0] - rCenter) + abs(b[1] - cCenter))
    }

    return res
}
```
```Kotlin []
fun allCellsDistOrder(rows: Int, cols: Int, rCenter: Int, cCenter: Int): List<IntArray> {
    val res = mutableListOf<IntArray>()
    for (i in 0 until rows) {
        for (j in 0 until cols) {
            res.add(intArrayOf(i, j))
        }
    }
    
    res.sortWith(compareBy { Math.abs(it[0] - rCenter) + Math.abs(it[1] - cCenter) })
    return res
}
```
```Rust []
fn all_cells_dist_order(rows: i32, cols: i32, r_center: i32, c_center: i32) -> Vec<Vec<i32>> {
    let mut res = Vec::new();
    for i in 0..rows {
        for j in 0..cols {
            res.push(vec![i, j]);
        }
    }

    res.sort_by_key(|k| (k[0] - r_center).abs() + (k[1] - c_center).abs());
    res
}
```
```Scala []
fn all_cells_dist_order(rows: i32, cols: i32, r_center: i32, c_center: i32) -> Vec<Vec<i32>> {
    let mut res = Vec::new();
    for i in 0..rows {
        for j in 0..cols {
            res.push(vec![i, j]);
        }
    }

    res.sort_by_key(|k| (k[0] - r_center).abs() + (k[1] - c_center).abs());
    res
}
```
```Haskel []
import Data.List (sortBy)
import Data.Ord (comparing)

allCellsDistOrder :: Int -> Int -> Int -> Int -> [[Int]]
allCellsDistOrder rows cols rCenter cCenter = sortBy (comparing distance) allCells
  where
    allCells = [[i, j] | i <- [0..rows-1], j <- [0..cols-1]]
    distance [x, y] = abs (x - rCenter) + abs (y - cCenter)
```
```Lua []
function allCellsDistOrder(rows, cols, rCenter, cCenter)
    local res = {}
    for i = 0, rows - 1 do
        for j = 0, cols - 1 do
            table.insert(res, {i, j})
        end
    end

    table.sort(res, function(a, b)
        return (math.abs(a[1] - rCenter) + math.abs(a[2] - cCenter)) < (math.abs(b[1] - rCenter) + math.abs(b[2] - cCenter))
    end)
    
    return res
end
```
```Perl []
function allCellsDistOrder(rows, cols, rCenter, cCenter)
    local res = {}
    for i = 0, rows - 1 do
        for j = 0, cols - 1 do
            table.insert(res, {i, j})
        end
    end

    table.sort(res, function(a, b)
        return (math.abs(a[1] - rCenter) + math.abs(a[2] - cCenter)) < (math.abs(b[1] - rCenter) + math.abs(b[2] - cCenter))
    end)
    
    return res
end
```
```R []
all_cells_dist_order <- function(rows, cols, r_center, c_center) {
    res <- list()
    k <- 1
    for (i in 0:(rows-1)) {
        for (j in 0:(cols-1)) {
            res[[k]] <- c(i, j)
            k <- k + 1
        }
    }
    
    dist_order <- function(a, b) {
        return((abs(a[1] - r_center) + abs(a[2] - c_center)) - (abs(b[1] - r_center) + abs(b[2] - c_center)))
    }
    
    res <- res[order(sapply(res, function(x) dist_order(x, c(r_center, c_center))))]
    return(res)
}
```
```Julia []
function all_cells_dist_order(rows::Int, cols::Int, r_center::Int, c_center::Int)
    res = [[i, j] for i in 0:(rows-1), j in 0:(cols-1)]
    sort!(res, by = x -> abs(x[1] - r_center) + abs(x[2] - c_center))
    return res
end
```
``` SQL (Using PostgreSQL) []
WITH matrix AS (
    SELECT generate_series(0, rows-1) AS row, generate_series(0, cols-1) AS col
    FROM generate_series(1, rows * cols)
)
SELECT row, col
FROM matrix
ORDER BY abs(row - rCenter) + abs(col - cCenter);
```


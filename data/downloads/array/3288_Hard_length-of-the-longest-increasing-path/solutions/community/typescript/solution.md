# 🔥BEATS 💯 % 🎯 | SUPER EASY AND SIMPLE🔥|

**Author:** CodeWithSparsh
**Votes:** 0
**Link:** [https://leetcode.com/problems/length-of-the-longest-increasing-path/solutions/5789346/](https://leetcode.com/problems/length-of-the-longest-increasing-path/solutions/5789346/)

---



### Intuition
To find the longest path length in a grid where you can move vertically or horizontally, we need to use dynamic programming with efficient querying. The problem can be approached by using coordinate compression and a Fenwick Tree (Binary Indexed Tree) to handle updates and queries efficiently.

### Approach
1. **Coordinate Compression**:
   - To manage the range of coordinates efficiently, compress the y-coordinates to a smaller range.

2. **Fenwick Tree (Binary Indexed Tree)**:
   - Use Fenwick Trees to maintain and query the maximum length of increasing paths efficiently for both directions (up and down).

3. **Dynamic Programming**:
   - Compute the longest increasing subsequence (LIS) ending at each point in two directions:
     - **Upwards**: Traverse from left to right.
     - **Downwards**: Traverse from right to left.

4. **Merge Results**:
   - Combine the results from the upward and downward LIS calculations to get the maximum path length including each point.

### Complexity
- **Time Complexity**: \\(O(n \\log n)\\)
  - Sorting and coordinate compression take \\(O(n \\log n)\\).
  - Updates and queries on the Fenwick Tree are \\(O(\\log n)\\), leading to \\(O(n \\log n)\\) for the entire process.

- **Space Complexity**: \\(O(n)\\)
  - Space is required for storing the Fenwick Tree, LIS arrays, and coordinate mappings.

### Code


```dart []
import 'dart:collection';

class FenwickTree {
  final List<int> _tree;
  final int _size;

  FenwickTree(int size)
      : _size = size,
        _tree = List.filled(size + 1, 0);

  void update(int i, int val) {
    while (i <= _size) {
      if (val > _tree[i]) {
        _tree[i] = val;
      } else {
        break;
      }
      i += i & -i;
    }
  }

  int query(int i) {
    int res = 0;
    while (i > 0) {
      if (_tree[i] > res) {
        res = _tree[i];
      }
      i -= i & -i;
    }
    return res;
  }
}

class Solution {
  int maxPathLength(List<List<int>> coordinates, int k) {
    int n = coordinates.length;
    List<Point> points = List.generate(n, (i) => Point(coordinates[i][0], coordinates[i][1], i));

    points.sort((a, b) => a.x != b.x ? a.x.compareTo(b.x) : a.y.compareTo(b.y));

    Map<int, int> yCompressed = {};
    List<int> sortedYs = points.map((p) => p.y).toSet().toList()..sort();
    for (int i = 0; i < sortedYs.length; i++) {
      yCompressed[sortedYs[i]] = i + 1;
    }

    List<List<int>> groups = List.generate(sortedYs.length, (_) => []);
    for (Point p in points) {
      groups[yCompressed[p.y]! - 1].add(p);
    }

    FenwickTree fenwickUp = FenwickTree(sortedYs.length);
    List<int> lisUp = List.filled(n, 0);
    for (List<Point> group in groups) {
      List<Tuple> temp = [];
      for (Point p in group) {
        int compressedY = yCompressed[p.y]!;
        int maxLis = fenwickUp.query(compressedY - 1);
        temp.add(Tuple(p.index, maxLis + 1));
      }
      for (Tuple t in temp) {
        lisUp[t.index] = t.value;
      }
      for (Tuple t in temp) {
        fenwickUp.update(yCompressed[points[t.index].y]!, t.value);
      }
    }

    points.sort((a, b) => b.x != a.x ? b.x.compareTo(a.x) : b.y.compareTo(a.y));

    Map<int, int> yCompressedRev = {};
    List<int> sortedYsRev = points.map((p) => p.y).toSet().toList()..sort((a, b) => b.compareTo(a));
    for (int i = 0; i < sortedYsRev.length; i++) {
      yCompressedRev[sortedYsRev[i]] = i + 1;
    }

    List<List<Point>> groupsRev = List.generate(sortedYsRev.length, (_) => []);
    for (Point p in points) {
      groupsRev[yCompressedRev[p.y]! - 1].add(p);
    }

    FenwickTree fenwickFrom = FenwickTree(sortedYsRev.length);
    List<int> lisFrom = List.filled(n, 0);
    for (List<Point> group in groupsRev) {
      List<Tuple> temp = [];
      for (Point p in group) {
        int compressedY = yCompressedRev[p.y]!;
        int maxLis = fenwickFrom.query(compressedY - 1);
        temp.add(Tuple(p.index, maxLis + 1));
      }
      for (Tuple t in temp) {
        lisFrom[t.index] = t.value;
      }
      for (Tuple t in temp) {
        fenwickFrom.update(yCompressedRev[points[t.index].y]!, t.value);
      }
    }

    return lisUp[k] + lisFrom[k] - 1;
  }
}

class Point {
  final int x, y, index;
  Point(this.x, this.y, this.index);
}

class Tuple {
  final int index, value;
  Tuple(this.index, this.value);
}
```


```java []
import java.util.*;

class FenwickTree {
    private final int[] tree;
    private final int size;

    public FenwickTree(int size) {
        this.size = size;
        this.tree = new int[size + 1];
    }

    public void update(int i, int val) {
        while (i <= size) {
            if (val > tree[i]) {
                tree[i] = val;
            } else {
                break;
            }
            i += i & -i;
        }
    }

    public int query(int i) {
        int res = 0;
        while (i > 0) {
            if (tree[i] > res) {
                res = tree[i];
            }
            i -= i & -i;
        }
        return res;
    }
}

class Solution {
    public int maxPathLength(int[][] coordinates, int k) {
        int n = coordinates.length;
        Point[] points = new Point[n];
        for (int i = 0; i < n; i++) {
            points[i] = new Point(coordinates[i][0], coordinates[i][1], i);
        }

        Arrays.sort(points, Comparator.comparingInt((Point p) -> p.x).thenComparingInt(p -> p.y));

        Map<Integer, Integer> yCompressed = new HashMap<>();
        Set<Integer> ys = new TreeSet<>();
        for (Point p : points) ys.add(p.y);
        int idx = 1;
        for (int y : ys) yCompressed.put(y, idx++);

        List<List<Point>> groups = new ArrayList<>(Collections.nCopies(yCompressed.size(), new ArrayList<>()));
        for (Point p : points) {
            groups.get(yCompressed.get(p.y) - 1).add(p);
        }

        FenwickTree fenwickUp = new FenwickTree(yCompressed.size());
        int[] lisUp = new int[n];
        for (List<Point> group : groups) {
            List<Tuple> temp = new ArrayList<>();
            for (Point p : group) {
                int compressedY = yCompressed.get(p.y);
                int maxLis = fenwickUp.query(compressedY - 1);
                temp.add(new Tuple(p.index, maxLis + 1));
            }
            for (Tuple t : temp) {
                lisUp[t.index] = t.value;
            }
            for (Tuple t : temp) {
                fenwickUp.update(yCompressed.get(points[t.index].y), t.value);
            }
        }

        Arrays.sort(points, Comparator.comparingInt((Point p) -> -p.x).thenComparingInt(p -> -p.y));

        Map<Integer, Integer> yCompressedRev = new HashMap<>();
        Set<Integer> ysRev = new TreeSet<>(Comparator.reverseOrder());
        for (Point p : points) ysRev.add(p.y);
        idx = 1;
        for (int y : ysRev) yCompressedRev.put(y, idx++);

        List<List<Point>> groupsRev = new ArrayList<>(Collections.nCopies(yCompressedRev.size(), new ArrayList<>()));
        for (Point p : points) {
            groupsRev.get(yCompressedRev.get(p.y) - 1).add(p);
        }

        FenwickTree fenwickFrom = new FenwickTree(yCompressedRev.size());
        int[] lisFrom = new int[n];
        for (List<Point> group : groupsRev) {
            List<Tuple> temp = new ArrayList<>();
            for (Point p : group) {
                int compressedY = yCompressedRev.get(p.y);
                int maxLis = fenwickFrom.query(compressedY - 1);
                temp.add(new Tuple(p.index, maxLis + 1));
            }
            for (Tuple t : temp) {
                lisFrom[t.index] = t.value;
            }
            for (Tuple t : temp) {
                fenwickFrom.update(yCompressedRev.get(points[t.index].y), t.value);
           

 }
        }

        return lisUp[k] + lisFrom[k] - 1;
    }

    class Point {
        int x, y, index;

        Point(int x, int y, int index) {
            this.x = x;
            this.y = y;
            this.index = index;
        }
    }

    class Tuple {
        int index, value;

        Tuple(int index, int value) {
            this.index = index;
            this.value = value;
        }
    }
}
```


```javascript []
class FenwickTree {
    constructor(size) {
        this.size = size;
        this.tree = Array(size + 1).fill(0);
    }

    update(i, val) {
        while (i <= this.size) {
            if (val > this.tree[i]) {
                this.tree[i] = val;
            } else {
                break;
            }
            i += i & -i;
        }
    }

    query(i) {
        let res = 0;
        while (i > 0) {
            if (this.tree[i] > res) {
                res = this.tree[i];
            }
            i -= i & -i;
        }
        return res;
    }
}

class Solution {
    maxPathLength(coordinates, k) {
        const n = coordinates.length;
        const points = coordinates.map((coord, i) => ({ x: coord[0], y: coord[1], index: i }));
        
        points.sort((a, b) => a.x - b.x || a.y - b.y);
        
        const yValues = Array.from(new Set(points.map(p => p.y))).sort((a, b) => a - b);
        const yCompressed = new Map(yValues.map((y, i) => [y, i + 1]));
        
        const groups = Array.from({ length: yValues.length }, () => []);
        points.forEach(p => groups[yCompressed.get(p.y) - 1].push(p));
        
        const fenwickUp = new FenwickTree(yValues.length);
        const lisUp = Array(n).fill(0);
        groups.forEach(group => {
            const temp = [];
            group.forEach(p => {
                const compressedY = yCompressed.get(p.y);
                const maxLis = fenwickUp.query(compressedY - 1);
                temp.push({ index: p.index, value: maxLis + 1 });
            });
            temp.forEach(t => lisUp[t.index] = t.value);
            temp.forEach(t => fenwickUp.update(yCompressed.get(points[t.index].y), t.value));
        });
        
        points.sort((a, b) => b.x - a.x || b.y - a.y);
        
        const yValuesRev = Array.from(new Set(points.map(p => p.y))).sort((a, b) => b - a);
        const yCompressedRev = new Map(yValuesRev.map((y, i) => [y, i + 1]));
        
        const groupsRev = Array.from({ length: yValuesRev.length }, () => []);
        points.forEach(p => groupsRev[yCompressedRev.get(p.y) - 1].push(p));
        
        const fenwickFrom = new FenwickTree(yValuesRev.length);
        const lisFrom = Array(n).fill(0);
        groupsRev.forEach(group => {
            const temp = [];
            group.forEach(p => {
                const compressedY = yCompressedRev.get(p.y);
                const maxLis = fenwickFrom.query(compressedY - 1);
                temp.push({ index: p.index, value: maxLis + 1 });
            });
            temp.forEach(t => lisFrom[t.index] = t.value);
            temp.forEach(t => fenwickFrom.update(yCompressedRev.get(points[t.index].y), t.value));
        });
        
        return lisUp[k] + lisFrom[k] - 1;
    }
}
```


```python []
from typing import List
from bisect import bisect_left
from collections import defaultdict, namedtuple

Point = namedtuple('Point', ['x', 'y', 'index'])

class FenwickTree:
    def __init__(self, size):
        self.size = size
        self.tree = [0] * (size + 2)  # 1-based indexing

    def update(self, i, val):
        while i <= self.size:
            if val > self.tree[i]:
                self.tree[i] = val
            else:
                break
            i += i & -i

    def query(self, i):
        res = 0
        while i > 0:
            if self.tree[i] > res:
                res = self.tree[i]
            i -= i & -i
        return res

class Solution:
    def maxPathLength(self, coordinates: List[List[int]], k: int) -> int:
        n = len(coordinates)
        points = [Point(x=coord[0], y=coord[1], index=i) for i, coord in enumerate(coordinates)]
        
        points_sorted = sorted(points, key=lambda p: (p.x, p.y))
        
        sorted_ys = sorted(set(p.y for p in points))
        y_compressed = {y: i+1 for i, y in enumerate(sorted_ys)}
        M = len(sorted_ys)
        
        groups = defaultdict(list)
        for p in points_sorted:
            groups[p.x].append(p)
        sorted_x = sorted(groups.keys())
        
        fenwick_up = FenwickTree(M)
        lis_up = [0] * n
        for x in sorted_x:
            current_group = groups[x]
            temp = []
            for p in current_group:
                compressed_y = y_compressed[p.y]
                max_lis = fenwick_up.query(compressed_y -1)
                temp.append((p.index, max_lis +1))
            for idx, val in temp:
                lis_up[idx] = val
            for idx, val in temp:
                compressed_y = y_compressed[points[idx].y]
                fenwick_up.update(compressed_y, val)
        
        points_sorted_rev = sorted(points, key=lambda p: (-p.x, -p.y))
        
        sorted_ys_rev = sorted(set(p.y for p in points), reverse=True)
        y_compressed_rev = {y: i+1 for i, y in enumerate(sorted_ys_rev)}
        M_rev = len(sorted_ys_rev)
        
        groups_rev = defaultdict(list)
        for p in points_sorted_rev:
            groups_rev[p.x].append(p)
        sorted_x_rev = sorted(groups_rev.keys(), reverse=True)
        
        fenwick_from = FenwickTree(M_rev)
        lis_from = [0] * n
        for x in sorted_x_rev:
            current_group = groups_rev[x]
            temp = []
            for p in current_group:
                compressed_y = y_compressed_rev[p.y]
                max_lis = fenwick_from.query(compressed_y -1)
                temp.append((p.index, max_lis +1))
            for idx, val in temp:
                lis_from[idx] = val
            for idx, val in temp:
                compressed_y = y_compressed_rev[points[idx].y]
                fenwick_from.update(compressed_y, val)
        
        return lis_up[k] + lis_from[k] -1
```


```cpp []
#include <vector>
#include <algorithm>
#include <unordered_map>
#include <set>

using namespace std;

class FenwickTree {
    vector<int> tree;
    int size;

public:
    FenwickTree(int size) : size(size) {
        tree.assign(size + 1, 0);
    }

    void update(int i, int val) {
        while (i <= size) {
            if (val > tree[i]) {
                tree[i] = val;
            } else {
                break;
            }
            i += i & -i;
        }
    }

    int query(int i) {
        int res = 0;
        while (i > 0) {
            if (tree[i] > res) {
                res = tree[i];
            }
            i -= i & -i;
        }
        return res;
    }
};

class Solution {
public:
    int maxPathLength(vector<vector<int>>& coordinates, int k) {
        int n = coordinates.size();
        vector<tuple<int, int, int>> points;
        for (int i = 0; i < n; ++i) {
            points.emplace_back(coordinates[i][0], coordinates[i][1], i);
        }
        
        sort(points.begin(), points.end(), [](const auto& a, const auto& b) {
            return get<0>(a) != get<0>(b) ? get<0>(a) < get<0>(b) : get<1>(a) < get<1>(b);
        });
        
        vector<int> ys;
        for (const auto& p : points) {
            ys.push_back(get<1>(p));
        }
        sort(ys.begin(), ys.end());
        ys.erase(unique(ys.begin(), ys.end()), ys.end());
        
        unordered_map<int, int> yCompressed;
        for (int i = 0; i < ys.size(); ++i) {
            yCompressed[ys[i]] = i + 1;
        }
        
        vector<vector<tuple<int, int>>> groups(ys.size());
        for (const auto& p : points) {
            groups[yCompressed[get<1>(p)] - 1].push_back(p);
        }
        
        FenwickTree fenwickUp(ys.size());
        vector<int> lisUp(n, 0);
        for (const auto& group : groups) {


            vector<pair<int, int>> temp;
            for (const auto& p : group) {
                int compressedY = yCompressed[get<1>(p)];
                int maxLis = fenwickUp.query(compressedY - 1);
                temp.emplace_back(get<2>(p), maxLis + 1);
            }
            for (const auto& t : temp) {
                lisUp[t.first] = t.second;
            }
            for (const auto& t : temp) {
                int compressedY = yCompressed[coordinates[t.first][1]];
                fenwickUp.update(compressedY, t.second);
            }
        }
        
        sort(points.begin(), points.end(), [](const auto& a, const auto& b) {
            return get<0>(a) != get<0>(b) ? get<0>(a) > get<0>(b) : get<1>(a) > get<1>(b);
        });
        
        vector<int> ysRev;
        for (const auto& p : points) {
            ysRev.push_back(get<1>(p));
        }
        sort(ysRev.rbegin(), ysRev.rend());
        ysRev.erase(unique(ysRev.begin(), ysRev.end()), ysRev.end());
        
        unordered_map<int, int> yCompressedRev;
        for (int i = 0; i < ysRev.size(); ++i) {
            yCompressedRev[ysRev[i]] = i + 1;
        }
        
        vector<vector<tuple<int, int>>> groupsRev(ysRev.size());
        for (const auto& p : points) {
            groupsRev[yCompressedRev[get<1>(p)] - 1].push_back(p);
        }
        
        FenwickTree fenwickFrom(ysRev.size());
        vector<int> lisFrom(n, 0);
        for (const auto& group : groupsRev) {
            vector<pair<int, int>> temp;
            for (const auto& p : group) {
                int compressedY = yCompressedRev[get<1>(p)];
                int maxLis = fenwickFrom.query(compressedY - 1);
                temp.emplace_back(get<2>(p), maxLis + 1);
            }
            for (const auto& t : temp) {
                lisFrom[t.first] = t.second;
            }
            for (const auto& t : temp) {
                int compressedY = yCompressedRev[coordinates[t.first][1]];
                fenwickFrom.update(compressedY, t.second);
            }
        }
        
        return lisUp[k] + lisFrom[k] - 1;
    }
};
```


```typescript []
class FenwickTree {
    private tree: number[];

    constructor(size: number) {
        this.tree = Array(size + 1).fill(0);
    }

    update(i: number, val: number) {
        while (i < this.tree.length) {
            if (val > this.tree[i]) {
                this.tree[i] = val;
            } else {
                break;
            }
            i += i & -i;
        }
    }

    query(i: number): number {
        let res = 0;
        while (i > 0) {
            if (this.tree[i] > res) {
                res = this.tree[i];
            }
            i -= i & -i;
        }
        return res;
    }
}

class Solution {
    maxPathLength(coordinates: number[][], k: number): number {
        const n = coordinates.length;
        const points = coordinates.map((coord, i) => ({ x: coord[0], y: coord[1], index: i }));
        
        points.sort((a, b) => a.x - b.x || a.y - b.y);
        
        const yValues = Array.from(new Set(points.map(p => p.y))).sort((a, b) => a - b);
        const yCompressed = new Map(yValues.map((y, i) => [y, i + 1]));
        
        const groups: { x: number, y: number, index: number }[][] = Array.from({ length: yValues.length }, () => []);
        points.forEach(p => groups[yCompressed.get(p.y)! - 1].push(p));
        
        const fenwickUp = new FenwickTree(yValues.length);
        const lisUp = Array(n).fill(0);
        groups.forEach(group => {
            const temp: { index: number, value: number }[] = [];
            group.forEach(p => {
                const compressedY = yCompressed.get(p.y)!;
                const maxLis = fenwickUp.query(compressedY - 1);
                temp.push({ index: p.index, value: maxLis + 1 });
            });
            temp.forEach(t => lisUp[t.index] = t.value);
            temp.forEach(t => fenwickUp.update(yCompressed.get(points[t.index].y)!, t.value));
        });
        
        points.sort((a, b) => b.x - a.x || b.y - a.y);
        
        const yValuesRev = Array.from(new Set(points.map(p => p.y))).sort((a, b) => b - a);
        const yCompressedRev = new Map(yValuesRev.map((y, i) => [y, i + 1]));
        
        const groupsRev: { x: number, y: number, index: number }[][] = Array.from({ length: yValuesRev.length }, () => []);
        points.forEach(p => groupsRev[yCompressedRev.get(p.y)! - 1].push(p));
        
        const fenwickFrom = new FenwickTree(yValuesRev.length);
        const lisFrom = Array(n).fill(0);
        groupsRev.forEach(group => {
            const temp: { index: number, value: number }[] = [];
            group.forEach(p => {
                const compressedY = yCompressedRev.get(p.y)!;
                const maxLis = fenwickFrom.query(compressedY - 1);
                temp.push({ index: p.index, value: maxLis + 1 });
            });
            temp.forEach(t => lisFrom[t.index] = t.value);
            temp.forEach(t => fenwickFrom.update(yCompressedRev.get(points[t.index].y)!, t.value));
        });
        
        return lisUp[k] + lisFrom[k] - 1;
    }
}
```


```go []
package main

import (
    "sort"
)

type FenwickTree struct {
    tree []int
    size int
}

func NewFenwickTree(size int) *FenwickTree {
    return &FenwickTree{tree: make([]int, size+1), size: size}
}

func (ft *FenwickTree) Update(i, val int) {
    for i <= ft.size {
        if val > ft.tree[i] {
            ft.tree[i] = val
        } else {
            break
        }
        i += i & -i
    }
}

func (ft *FenwickTree) Query(i int) int {
    res := 0
    for i > 0 {
        if ft.tree[i] > res {
            res = ft.tree[i]
        }
        i -= i & -i
    }
    return res
}

type Point struct {
    x, y, index int
}

func maxPathLength(coordinates [][]int, k int) int {
    n := len(coordinates)
    points := make([]Point, n)
    for i := 0; i < n; i++ {
        points[i] = Point{x: coordinates[i][0], y: coordinates[i][1], index: i}
    }

    sort.Slice(points, func(i, j int) bool {
        if points[i].x != points[j].x {
            return points[i].x < points[j].x
        }
        return points[i].y < points[j].y
    })

    yValues := make([]int, 0, n)
    for _, p := range points {
        yValues = append(yValues, p.y)
    }
    sort.Ints(yValues)
    yCompressed := make(map[int]int)
    for i, y := range yValues {
        yCompressed[y] = i + 1
    }

    groups := make(map[int][]Point)
    for _, p := range points {
        groups[p.x] = append(groups[p.x], p)
    }

    fenwickUp := NewFenwickTree(len(yValues))
    lisUp := make([]int, n)
    for _, group := range groups {
        temp := make([][2]int, 0, len(group))
        for _, p := range group {
            compressedY := yCompressed[p.y]
            maxLis := fenwickUp.Query(compressedY - 1)
            temp = append(temp, [2]int{p.index, maxLis + 1})
        }
        for _, t := range temp {
            lisUp[t[0]] = t[1]
        }
        for _, t := range temp {
            compressedY := yCompressed[points[t[0]].y]
            fenwickUp.Update(compressedY, t[1])
        }
    }

    sort.Slice(points, func(i, j int) bool {
        if points[i].x != points[j].x {
            return points[i].x > points[j].x
        }
        return points[i].y > points[j].y
    })

    yValuesRev := make([]int, 0, n)
    for _, p := range points {
        yValuesRev = append(yValuesRev, p.y)
    }
    sort.Sort(sort.Reverse(sort.IntSlice(yValuesRev)))
    yCompressedRev := make(map[int]int)
    for i, y := range yValues

Rev {
        yCompressedRev[y] = i + 1
    }

    groupsRev := make(map[int][]Point)
    for _, p := range points {
        groupsRev[p.x] = append(groupsRev[p.x], p)
    }

    fenwickFrom := NewFenwickTree(len(yValuesRev))
    lisFrom := make([]int, n)
    for _, group := range groupsRev {
        temp := make([][2]int, 0, len(group))
        for _, p := range group {
            compressedY := yCompressedRev[p.y]
            maxLis := fenwickFrom.Query(compressedY - 1)
            temp = append(temp, [2]int{p.index, maxLis + 1})
        }
        for _, t := range temp {
            lisFrom[t[0]] = t[1]
        }
        for _, t := range temp {
            compressedY := yCompressedRev[points[t[0]].y]
            fenwickFrom.Update(compressedY, t[1])
        }
    }

    return lisUp[k] + lisFrom[k] - 1
}
```


```c []
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    int *tree;
    int size;
} FenwickTree;

FenwickTree* createFenwickTree(int size) {
    FenwickTree *ft = (FenwickTree*)malloc(sizeof(FenwickTree));
    ft->tree = (int*)calloc(size + 1, sizeof(int));
    ft->size = size;
    return ft;
}

void updateFenwickTree(FenwickTree *ft, int i, int val) {
    while (i <= ft->size) {
        if (val > ft->tree[i]) {
            ft->tree[i] = val;
        } else {
            break;
        }
        i += i & -i;
    }
}

int queryFenwickTree(FenwickTree *ft, int i) {
    int res = 0;
    while (i > 0) {
        if (ft->tree[i] > res) {
            res = ft->tree[i];
        }
        i -= i & -i;
    }
    return res;
}

int cmp(const void *a, const void *b) {
    return ((int*)a)[0] - ((int*)b)[0];
}

int maxPathLength(int coordinates[][2], int n, int k) {
    int *xValues = (int*)malloc(n * sizeof(int));
    int *yValues = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; ++i) {
        xValues[i] = coordinates[i][0];
        yValues[i] = coordinates[i][1];
    }

    qsort(coordinates, n, sizeof(coordinates[0]), cmp);

    // Compress y-values
    int *sortedY = (int*)malloc(n * sizeof(int));
    memcpy(sortedY, yValues, n * sizeof(int));
    qsort(sortedY, n, sizeof(int), cmp);
    int *yCompressed = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; ++i) {
        yCompressed[i] = i + 1;
    }

    FenwickTree *fenwickUp = createFenwickTree(n);
    int *lisUp = (int*)calloc(n, sizeof(int));
    for (int i = 0; i < n; ++i) {
        int compressedY = yCompressed[i];
        int maxLis = queryFenwickTree(fenwickUp, compressedY - 1);
        lisUp[i] = maxLis + 1;
        updateFenwickTree(fenwickUp, compressedY, lisUp[i]);
    }

    // Reverse sort
    for (int i = 0; i < n; ++i) {
        xValues[i] = -coordinates[i][0];
    }
    qsort(coordinates, n, sizeof(coordinates[0]), cmp);

    int *yValuesRev = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; ++i) {
        yValuesRev[i] = coordinates[i][1];
    }
    qsort(yValuesRev, n, sizeof(int), cmp);

    // Compress y-values for reverse pass
    int *yCompressedRev = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; ++i) {
        yCompressedRev[i] = i + 1;
    }

    FenwickTree *fenwickFrom = createFenwickTree(n);
    int *lisFrom = (int*)calloc(n, sizeof(int));
    for (int i = 0; i < n; ++i) {
        int compressedY = yCompressedRev[i];
        int maxLis = queryFenwickTree(fenwickFrom, compressedY - 1);
        lisFrom[i] = maxLis + 1;
        updateFenwickTree(fenwickFrom, compressedY, lisFrom[i]);
    }

    int result = lisUp[k] + lisFrom[k] - 1;

    free(xValues);
    free(yValues);
    free(sortedY);
    free(yCompressed);
    free(yValuesRev);
    free(yCompressedRev);
    free(lisUp);
    free(lisFrom);
    free(fenwickUp->tree);
    free(fenwickFrom->tree);
    free(fenwickUp);
    free(fenwickFrom);

    return result;
}

int main() {
    int coordinates[][2] = {{1, 2}, {2, 3}, {3, 4}};
    int k = 1;
    int n = sizeof(coordinates) / sizeof(coordinates[0]);
    printf("%d\
", maxPathLength(coordinates, n, k));
    return 0;
}
```

# BEATS 100% || Union-Find Algorithm || C || C++ || C# || Java || Python3 || JavaScript

**Author:** yallavamsipavan1234
**Votes:** 18
**Link:** [https://leetcode.com/problems/check-if-the-rectangle-corner-is-reachable/solutions/5546479/](https://leetcode.com/problems/check-if-the-rectangle-corner-is-reachable/solutions/5546479/)

---

# Intuition
The problem involves determining if there is a path from the bottom-left corner to the top-right corner of a rectangle, while avoiding any circles that obstruct the path. This can be visualized as a problem of connectivity in a graph, where we want to check if two points (the corners of the rectangle) belong to the same connected component while avoiding the circles.

# Approach
- Initialization: Initialize a union-find data structure where each node represents a circle. Additionally, add two virtual nodes: one representing the bottom-left corner and another representing the top-right corner.

- Union Operations:

- For each circle, check if it touches the left or top boundary of the rectangle. If it does, union it with the bottom-left corner node.
- Similarly, if a circle touches the right or bottom boundary of the rectangle, union it with the top-right corner node.
- For each pair of circles, check if they overlap. If they do, union them.
- Check Connectivity: After performing all union operations, check if the bottom-left corner node is connected to the top-right corner node using the union-find data structure.

# Complexity
- Time complexity: `O(n^2)`


- Space complexity: `O(n)`



```C []
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int find(int* f, int i) {
    if (f[i] != i) {
        f[i] = find(f, f[i]);
    }
    return f[i];
}

void union_sets(int* f, int i, int j) {
    f[find(f, i)] = find(f, j);
}

bool canReachCorner(int X, int Y, int A[][3], int n) {
    int* f = (int*)malloc((n + 2) * sizeof(int));
    for (int i = 0; i < n + 2; i++) {
        f[i] = i;
    }

    for (int i = 0; i < n; i++) {
        int x = A[i][0];
        int y = A[i][1];
        int r = A[i][2];

        if (x - r <= 0 || y + r >= Y) {
            union_sets(f, n, i);
        }
        if (x + r >= X || y - r <= 0) {
            union_sets(f, n + 1, i);
        }

        for (int j = 0; j < i; j++) {
            int x2 = A[j][0];
            int y2 = A[j][1];
            int r2 = A[j][2];

            if ((x - x2) * (x - x2) + (y - y2) * (y - y2) <= (r + r2) * (r + r2)) {
                union_sets(f, i, j);
            }
        }
    }

    bool result = find(f, n) != find(f, n + 1);
    free(f);
    return result;
}

int main() {
    int X = 3, Y = 3;
    int circles[2][3] = {{1, 1, 2}, {2, 1, 1}};
    int n = sizeof(circles) / sizeof(circles[0]);
    printf("%d\
", canReachCorner(X, Y, circles, n)); // Output: 0 (false)
    return 0;
}

```
```C++ []
#include <vector>
using namespace std;

class Solution {
public:
    bool canReachCorner(int X, int Y, vector<vector<int>>& A) {
        int n = A.size();
        vector<int> f(n + 2);
        for (int i = 0; i < n + 2; i++) {
            f[i] = i;
        }

        for (int i = 0; i < n; i++) {
            int x = A[i][0];
            int y = A[i][1];
            int r = A[i][2];

            if (x - r <= 0 || y + r >= Y) {
                f[find(f, n)] = find(f, i);
            }
            if (x + r >= X || y - r <= 0) {
                f[find(f, n + 1)] = find(f, i);
            }

            for (int j = 0; j < i; j++) {
                int x2 = A[j][0];
                int y2 = A[j][1];
                int r2 = A[j][2];

                if ((x - x2) * (x - x2) + (y - y2) * (y - y2) <= (r + r2) * (r + r2)) {
                    f[find(f, i)] = find(f, j);
                }
            }
        }

        return find(f, n) != find(f, n + 1);
    }

private:
    int find(vector<int>& f, int i) {
        if (f[i] != i) {
            f[i] = find(f, f[i]);
        }
        return f[i];
    }
};

```
```C# []
using System;
using System.Collections.Generic;

public class Solution {
    public bool CanReachCorner(int X, int Y, int[][] A) {
        int n = A.Length;
        int[] f = new int[n + 2];
        for (int i = 0; i < n + 2; i++) {
            f[i] = i;
        }

        for (int i = 0; i < n; i++) {
            int x = A[i][0];
            int y = A[i][1];
            int r = A[i][2];

            if (x - r <= 0 || y + r >= Y) {
                f[Find(f, n)] = Find(f, i);
            }
            if (x + r >= X || y - r <= 0) {
                f[Find(f, n + 1)] = Find(f, i);
            }

            for (int j = 0; j < i; j++) {
                int x2 = A[j][0];
                int y2 = A[j][1];
                int r2 = A[j][2];

                if ((x - x2) * (x - x2) + (y - y2) * (y - y2) <= (r + r2) * (r + r2)) {
                    f[Find(f, i)] = Find(f, j);
                }
            }
        }

        return Find(f, n) != Find(f, n + 1);
    }

    private int Find(int[] f, int i) {
        if (f[i] != i) {
            f[i] = Find(f, f[i]);
        }
        return f[i];
    }
}

```
```Python3 []
class Solution:
    def canReachCorner(self, X: int, Y: int, A: List[List[int]]) -> bool:
        def find(i):
            if f[i] != i:
                f[i] = find(f[i])
            return f[i]

        n = len(A)
        f = list(range(n + 2))
        for i in range(n):
            x, y, r = A[i]
            if x - r <= 0 or y + r >= Y:
                f[find(n)] = find(i)
            if x + r >= X or y - r <= 0:
                f[find(n + 1)] = find(i)
            for j in range(i):
                x2, y2, r2 = A[j]
                if (x - x2) ** 2 + (y - y2) ** 2 <= (r + r2) ** 2:
                    f[find(i)] = find(j)
        return find(n) != find(n + 1)

```
```Java []
class Solution {
    public boolean canReachCorner(int X, int Y, int[][] A) {
        int n = A.length;
        int[] f = new int[n + 2];
        
        for (int i = 0; i < n + 2; i++) {
            f[i] = i;
        }

        for (int i = 0; i < n; i++) {
            int x = A[i][0];
            int y = A[i][1];
            int r = A[i][2];

            if (x - r <= 0 || y + r >= Y) {
                f[find(f, n)] = find(f, i);
            }

            if (x + r >= X || y - r <= 0) {
                f[find(f, n + 1)] = find(f, i);
            }

            for (int j = 0; j < i; j++) {
                int x2 = A[j][0];
                int y2 = A[j][1];
                int r2 = A[j][2];

                if ((x - x2) * (x - x2) + (y - y2) * (y - y2) <= (r + r2) * (r + r2)) {
                    f[find(f, i)] = find(f, j);
                }
            }
        }

        return find(f, n) != find(f, n + 1);
    }

    private int find(int[] f, int i) {
        if (f[i] != i) {
            f[i] = find(f, f[i]);
        }
        return f[i];
    }
}

```
```JavaScript []
class Solution {
    canReachCorner(X, Y, A) {
        const n = A.length;
        const f = Array.from({ length: n + 2 }, (_, i) => i);

        const find = (f, i) => {
            if (f[i] !== i) {
                f[i] = find(f, f[i]);
            }
            return f[i];
        };

        const union = (f, i, j) => {
            f[find(f, i)] = find(f, j);
        };

        for (let i = 0; i < n; i++) {
            const [x, y, r] = A[i];

            if (x - r <= 0 || y + r >= Y) {
                union(f, n, i);
            }

            if (x + r >= X || y - r <= 0) {
                union(f, n + 1, i);
            }

            for (let j = 0; j < i; j++) {
                const [x2, y2, r2] = A[j];

                if ((x - x2) ** 2 + (y - y2) ** 2 <= (r + r2) ** 2) {
                    union(f, i, j);
                }
            }
        }

        return find(f, n) !== find(f, n + 1);
    }
}

// Example usage:
const solution = new Solution();
const X = 3;
const Y = 4;
const circles = [[2, 1, 1]];
console.log(solution.canReachCorner(X, Y, circles)); // Output: true

```




# Java || Python || TS || Simple Geometry solution

**Author:** subscriber6436
**Votes:** 2
**Link:** [https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/solutions/4730885/](https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/solutions/4730885/)

---

# Approach
Simply use geometry formula `(x - a) ** 2 + (y - b) ** 2 < r ** 2`.

# Complexity
- Time complexity: **O(N^2)**

- Space complexity: **O(N)**

# Code
```java []
class Solution {
    public int[] countPoints(int[][] points, int[][] queries) {
        int[] ans = new int[queries.length];

        for (int i = 0; i < queries.length; i++) {
            int x = queries[i][0];
            int y = queries[i][1];
            int r = queries[i][2];

            for (int[] point: points) {
                int a = point[0];
                int b = point[1];

                if (Math.pow(x - a, 2) + Math.pow(y - b, 2) <= Math.pow(r, 2)) {
                    ans[i]++;
                }
            }
        }

        return ans;

    }
}
```
```python []
class Solution:
    def countPoints(self, points: List[List[int]], queries: List[List[int]]) -> List[int]:
        ans = [0] * len(queries)

        for i, [x, y, r] in enumerate(queries):
            for a, b in points:
                if (x - a) ** 2 + (y - b) ** 2 <= r ** 2:
                    ans[i] += 1

        return ans
```
```typescript []
function countPoints(points: number[][], queries: number[][]): number[] {
    const n = queries.length;
    const ans = Array(queries.length).fill(0);

    for (let i = 0; i < n; i++) {
        const [x, y, r] = queries[i];

        for (let j = 0; j < points.length; j++) {
            const [a, b] = points[j];

            if ((x - a) ** 2 + (y - b) ** 2 <= r ** 2)
                ans[i] += 1
        }
    }

    return ans
};
```
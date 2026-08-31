# ✔️Easy ✔️91.77% Beats ✔️C++ ✔️Java ✔️Python ✔️Javascript ✔️C#

**Author:** otabek_kholmirzaev
**Votes:** 124
**Link:** [https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/solutions/4890422/](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/solutions/4890422/)

---

![91_77.PNG](./images/0.png)

# Intuition
The problem asks for the **minimum** number of arrows needed to burst all balloons. Since the arrows can only be shot vertically, we need to find **non-overlapping intervals** of balloons and shoot arrows to cover **each interval**.

# Approach
1. First, we sort the balloons based on their **end coordinates**. This allows us to iterate through the balloons in **ascending** order of their end coordinates.
2. We initialize the variable **arrows** to 1, assuming that at least one arrow is needed.
3. We iterate through the **sorted** balloons and compare the **start** coordinate of the current balloon with the **end** coordinate of the previous balloon.
4. If the **start** coordinate of the current balloon is greater than the end coordinate of the previous balloon, it means these two balloons **do not overlap**, so we need to shoot another arrow. We **increment** the arrows count and update the **prevEnd** variable to the **end** coordinate of the **current** balloon.
5. After iterating through all balloons, arrows will contain the **minimum** number of arrows needed.

# Complexity
- Time complexity: O(n*log(n))
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```cpp []
class Solution {
public:
    int findMinArrowShots(vector<vector<int>>& points) {

        // Sort the balloons based on their end coordinates
        sort(points.begin(), points.end(), [](const vector<int>& a, const vector<int>& b) {
            return a[1] < b[1];
        });

        int arrows = 1;
        int prevEnd = points[0][1];

        // Count the number of non-overlapping intervals
        for (int i = 1; i < points.size(); ++i) {
            if (points[i][0] > prevEnd) {
                arrows++;
                prevEnd = points[i][1];
            }
        }

        return arrows;
    }
};
```

```python []
class Solution:
    def findMinArrowShots(self, points):        
        # Sort the balloons based on their end coordinates
        points.sort(key=lambda x: x[1])
        
        arrows = 1
        prevEnd = points[0][1]
        
        # Count the number of non-overlapping intervals
        for i in range(1, len(points)):
            if points[i][0] > prevEnd:
                arrows += 1
                prevEnd = points[i][1]
        
        return arrows
```
```java []
class Solution {
    public int findMinArrowShots(int[][] points) {
        // Sort the balloons based on their end coordinates
        Arrays.sort(points, (a, b) -> Integer.compare(a[1], b[1]));
        
        int arrows = 1;
        int prevEnd = points[0][1];
        
        // Count the number of non-overlapping intervals
        for (int i = 1; i < points.length; ++i) {
            if (points[i][0] > prevEnd) {
                arrows++;
                prevEnd = points[i][1];
            }
        }
        
        return arrows;
    }
}
```

```javascript []
function findMinArrowShots(points) {
    // Sort the balloons based on their end coordinates
    points.sort((a, b) => a[1] - b[1]);

    let arrows = 1;
    let prevEnd = points[0][1];

    // Count the number of non-overlapping intervals
    for (let i = 1; i < points.length; ++i) {
        if (points[i][0] > prevEnd) {
            arrows++;
            prevEnd = points[i][1];
        }
    }

    return arrows;
}
```

```csharp []
public class Solution {
    public int FindMinArrowShots(int[][] points) {
        // Sort the balloons based on their end coordinates
        Array.Sort(points, (a, b) => a[1].CompareTo(b[1]));

        int arrows = 1;
        int prevEnd = points[0][1];

        // Count the number of non-overlapping intervals
        for (int i = 1; i < points.Length; ++i) {
            if (points[i][0] > prevEnd) {
                arrows++;
                prevEnd = points[i][1];
            }
        }

        return arrows;
    }
}
```

```c []
int compare(const void *a, const void *b) {
    long long int diff = (long long int)(*(int**)a)[1] - (long long int)(*(int**)b)[1];
    if (diff < 0) return -1;
    else if (diff > 0) return 1;
    else return 0;
}

int findMinArrowShots(int** points, int pointsSize, int* pointsColSize) {
    // Sort the balloons based on their end coordinates
    qsort(points, pointsSize, sizeof(int*), compare);

    int arrows = 1;
    int prevEnd = points[0][1];

    // Count the number of non-overlapping intervals
    for (int i = 1; i < pointsSize; ++i) {
        if (points[i][0] > prevEnd) {
            arrows++;
            prevEnd = points[i][1];
        }
    }

    return arrows;
}
```

```go []
func findMinArrowShots(points [][]int) int {
    // Sort the balloons based on their end coordinates
    sort.Slice(points, func(i, j int) bool {
        return points[i][1] < points[j][1]
    })

    arrows := 1
    prevEnd := points[0][1]

    // Count the number of non-overlapping intervals
    for i := 1; i < len(points); i++ {
        if points[i][0] > prevEnd {
            arrows++
            prevEnd = points[i][1]
        }
    }

    return arrows
}
```

```swift []
class Solution {
    func findMinArrowShots(_ points: [[Int]]) -> Int {
        // Sort the balloons based on their end coordinates
        let sortedPoints = points.sorted { $0[1] < $1[1] }

        var arrows = 1
        var prevEnd = sortedPoints[0][1]

        // Count the number of non-overlapping intervals
        for i in 1..<sortedPoints.count {
            if sortedPoints[i][0] > prevEnd {
                arrows += 1
                prevEnd = sortedPoints[i][1]
            }
        }

        return arrows
    }
}
```

```typescript []
function findMinArrowShots(points: number[][]): number {
    // Sort the balloons based on their end coordinates
    points.sort((a, b) => a[1] - b[1]);

    let arrows = 1;
    let prevEnd = points[0][1];

    // Count the number of non-overlapping intervals
    for (let i = 1; i < points.length; ++i) {
        if (points[i][0] > prevEnd) {
            arrows++;
            prevEnd = points[i][1];
        }
    }

    return arrows;
}
```

```kotlin []
class Solution {
    fun findMinArrowShots(points: Array<IntArray>): Int {
        // Sort the balloons based on their end coordinates
        points.sortBy { it[1] }

        var arrows = 1
        var prevEnd = points[0][1]

        // Count the number of non-overlapping intervals
        for (i in 1 until points.size) {
            if (points[i][0] > prevEnd) {
                arrows++
                prevEnd = points[i][1]
            }
        }

        return arrows
    }
}
```

```rust []
impl Solution {
    pub fn find_min_arrow_shots(mut points: Vec<Vec<i32>>) -> i32 {
        // Sort the balloons based on their end coordinates
        points.sort_by(|a, b| a[1].cmp(&b[1]));

        let mut arrows = 1;
        let mut prev_end = points[0][1];

        // Count the number of non-overlapping intervals
        for i in 1..points.len() {
            if points[i][0] > prev_end {
                arrows += 1;
                prev_end = points[i][1];
            }
        }

        arrows
    }
}
```
# Please upvote, because it motivates me to create such contents :)
![upvote_new_cc82e8aa-dc98-4f10-af4c-64b1528c0fb6_1680844232.130332.png](./images/1.png)


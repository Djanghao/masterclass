# ✔️ 98.87% Beats ✔️ Easy Explanation ✔️ C++ ✔️ Java ✔️ Python

**Author:** otabek_kholmirzaev
**Votes:** 66
**Link:** [https://leetcode.com/problems/insert-interval/solutions/4885810/](https://leetcode.com/problems/insert-interval/solutions/4885810/)

---

![dark_98.PNG](./images/0.png)


# Intuition
To solve this problem, we can iterate through the given intervals and compare them with the newInterval to determine their relationship. We need to consider three cases:

1. The current interval ends before the newInterval starts.
2. The current interval overlaps with the newInterval.
3. The current interval starts after the newInterval ends.

# Approach
We initialize an empty list **result** to store the merged intervals. We iterate through the given intervals, adding non-overlapping intervals before the newInterval to **result**. Then, we merge overlapping intervals with the newInterval. After that, we add the merged newInterval to **result**. Finally, we add the remaining non-overlapping intervals after the newInterval to **result**. We return **result** as the final result.

# Complexity
- Time complexity: O(n), where n is the number of intervals. We iterate through all the intervals once.

- Space complexity: O(n), the space used by the **result** list to store the merged intervals.

# Code
``` cpp []
class Solution {
public:
    vector<vector<int>> insert(vector<vector<int>>& intervals, vector<int>& newInterval) {
        vector<vector<int>> result;
        
        // Iterate through intervals and add non-overlapping intervals before newInterval
        int i = 0;
        while (i < intervals.size() && intervals[i][1] < newInterval[0]) {
            result.push_back(intervals[i]);
            i++;
        }
        
        // Merge overlapping intervals
        while (i < intervals.size() && intervals[i][0] <= newInterval[1]) {
            newInterval[0] = std::min(newInterval[0], intervals[i][0]);
            newInterval[1] = std::max(newInterval[1], intervals[i][1]);
            i++;
        }
        
        // Add merged newInterval
        result.push_back(newInterval);
        
        // Add non-overlapping intervals after newInterval
        while (i < intervals.size()) {
            result.push_back(intervals[i]);
            i++;
        }
        
        return result;
    }
};
```
```java []
class Solution {
    public int[][] insert(int[][] intervals, int[] newInterval) {
        List<int[]> result = new ArrayList<>();
        
        // Iterate through intervals and add non-overlapping intervals before newInterval
        int i = 0;
        while (i < intervals.length && intervals[i][1] < newInterval[0]) {
            result.add(intervals[i]);
            i++;
        }
        
        // Merge overlapping intervals
        while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
            newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
            newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
            i++;
        }
        
        // Add merged newInterval
        result.add(newInterval);
        
        // Add non-overlapping intervals after newInterval
        while (i < intervals.length) {
            result.add(intervals[i]);
            i++;
        }
        
        return result.toArray(new int[result.size()][]);
    }
}

```
```python []
class Solution:
    def insert(self, intervals, newInterval):
        result = []
        i = 0
        
        # Iterate through intervals and add non-overlapping intervals before newInterval
        while i < len(intervals) and intervals[i][1] < newInterval[0]:
            result.append(intervals[i])
            i += 1
        
        # Merge overlapping intervals
        while i < len(intervals) and intervals[i][0] <= newInterval[1]:
            newInterval[0] = min(newInterval[0], intervals[i][0])
            newInterval[1] = max(newInterval[1], intervals[i][1])
            i += 1
        
        # Add merged newInterval
        result.append(newInterval)
        
        # Add non-overlapping intervals after newInterval
        while i < len(intervals):
            result.append(intervals[i])
            i += 1
        
        return result

```
```python3 []
class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        result = []
        i = 0
        
        # Iterate through intervals and add non-overlapping intervals before newInterval
        while i < len(intervals) and intervals[i][1] < newInterval[0]:
            result.append(intervals[i])
            i += 1
        
        # Merge overlapping intervals
        while i < len(intervals) and intervals[i][0] <= newInterval[1]:
            newInterval[0] = min(newInterval[0], intervals[i][0])
            newInterval[1] = max(newInterval[1], intervals[i][1])
            i += 1
        
        # Add merged newInterval
        result.append(newInterval)
        
        # Add non-overlapping intervals after newInterval
        while i < len(intervals):
            result.append(intervals[i])
            i += 1
        
        return result

```
```c []
int **insert(int **intervals, int intervalsSize, int *intervalsColSize, int *newInterval, int newIntervalSize, int *returnSize, int **returnColumnSizes) {
    int **result = (int **)malloc((intervalsSize + 1) * sizeof(int *));
    *returnSize = 0;
    *returnColumnSizes = (int *)malloc((intervalsSize + 1) * sizeof(int));
    
    // Iterate through intervals and add non-overlapping intervals before newInterval
    int i = 0;
    while (i < intervalsSize && intervals[i][1] < newInterval[0]) {
        result[*returnSize] = (int *)malloc(2 * sizeof(int));
        result[*returnSize][0] = intervals[i][0];
        result[*returnSize][1] = intervals[i][1];
        (*returnColumnSizes)[*returnSize] = 2;
        (*returnSize)++;
        i++;
    }
    
    // Merge overlapping intervals
    while (i < intervalsSize && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = (newInterval[0] < intervals[i][0]) ? newInterval[0] : intervals[i][0];
        newInterval[1] = (newInterval[1] > intervals[i][1]) ? newInterval[1] : intervals[i][1];
        i++;
    }
    
    // Add merged newInterval
    result[*returnSize] = (int *)malloc(2 * sizeof(int));
    result[*returnSize][0] = newInterval[0];
    result[*returnSize][1] = newInterval[1];
    (*returnColumnSizes)[*returnSize] = 2;
    (*returnSize)++;
    
    // Add non-overlapping intervals after newInterval
    while (i < intervalsSize) {
        result[*returnSize] = (int *)malloc(2 * sizeof(int));
        result[*returnSize][0] = intervals[i][0];
        result[*returnSize][1] = intervals[i][1];
        (*returnColumnSizes)[*returnSize] = 2;
        (*returnSize)++;
        i++;
    }
    
    return result;
}
```

```csharp []
public class Solution {
    public int[][] Insert(int[][] intervals, int[] newInterval) {
        List<int[]> result = new List<int[]>();
        
        // Iterate through intervals and add non-overlapping intervals before newInterval
        int i = 0;
        while (i < intervals.Length && intervals[i][1] < newInterval[0]) {
            result.Add(intervals[i]);
            i++;
        }
        
        // Merge overlapping intervals
        while (i < intervals.Length && intervals[i][0] <= newInterval[1]) {
            newInterval[0] = Math.Min(newInterval[0], intervals[i][0]);
            newInterval[1] = Math.Max(newInterval[1], intervals[i][1]);
            i++;
        }
        
        // Add merged newInterval
        result.Add(newInterval);
        
        // Add non-overlapping intervals after newInterval
        while (i < intervals.Length) {
            result.Add(intervals[i]);
            i++;
        }
        
        return result.ToArray();
    }
}

```
```javascript []
var insert = function(intervals, newInterval) {
    const result = [];

    // Iterate through intervals and add non-overlapping intervals before newInterval
    let i = 0;
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i]);
        i++;
    }
    
    // Merge overlapping intervals
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    
    // Add merged newInterval
    result.push(newInterval);
    
    // Add non-overlapping intervals after newInterval
    while (i < intervals.length) {
        result.push(intervals[i]);
        i++;
    }
    
    return result;
};

```
``` typescript []
function insert(intervals: number[][], newInterval: number[]): number[][] {
    const result: number[][] = [];
    
    // Iterate through intervals and add non-overlapping intervals before newInterval
    let i = 0;
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i]);
        i++;
    }
    
    // Merge overlapping intervals
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    
    // Add merged newInterval
    result.push(newInterval);
    
    // Add non-overlapping intervals after newInterval
    while (i < intervals.length) {
        result.push(intervals[i]);
        i++;
    }
    
    return result;
}

```
```php []
class Solution {
    function insert($intervals, $newInterval) {
        $result = [];
        
        // Iterate through intervals and add non-overlapping intervals before newInterval
        $i = 0;
        while ($i < count($intervals) && $intervals[$i][1] < $newInterval[0]) {
            $result[] = $intervals[$i];
            $i++;
        }
        
        // Merge overlapping intervals
        while ($i < count($intervals) && $intervals[$i][0] <= $newInterval[1]) {
            $newInterval[0] = min($newInterval[0], $intervals[$i][0]);
            $newInterval[1] = max($newInterval[1], $intervals[$i][1]);
            $i++;
        }
        
        // Add merged newInterval
        $result[] = $newInterval;
        
        // Add non-overlapping intervals after newInterval
        while ($i < count($intervals)) {
            $result[] = $intervals[$i];
            $i++;
        }
        
        return $result;
    }
}
```
```go []
func insert(intervals [][]int, newInterval []int) [][]int {
	var result [][]int

    // Iterate through intervals and add non-overlapping intervals before newInterval
	i := 0
	for i < len(intervals) && intervals[i][1] < newInterval[0] {
		result = append(result, intervals[i])
		i++
	}

    // Merge overlapping intervals
	for i < len(intervals) && intervals[i][0] <= newInterval[1] {
		newInterval[0] = int(math.Min(float64(newInterval[0]), float64(intervals[i][0])))
		newInterval[1] = int(math.Max(float64(newInterval[1]), float64(intervals[i][1])))
		i++
	}

    // Add merged newInterval
	result = append(result, newInterval)

    // Add non-overlapping intervals after newInterval
	for i < len(intervals) {
		result = append(result, intervals[i])
		i++
	}

	return result
}

```
```kotlin []
class Solution {
    fun insert(intervals: Array<IntArray>, newInterval: IntArray): Array<IntArray> {
        val result = mutableListOf<IntArray>()
        
        // Iterate through intervals and add non-overlapping intervals before newInterval
        var i = 0
        while (i < intervals.size && intervals[i][1] < newInterval[0]) {
            result.add(intervals[i])
            i++
        }
        
        // Merge overlapping intervals
        while (i < intervals.size && intervals[i][0] <= newInterval[1]) {
            newInterval[0] = minOf(newInterval[0], intervals[i][0])
            newInterval[1] = maxOf(newInterval[1], intervals[i][1])
            i++
        }
        
        // Add merged newInterval
        result.add(newInterval)
        
        // Add non-overlapping intervals after newInterval
        while (i < intervals.size) {
            result.add(intervals[i])
            i++
        }
        
        return result.toTypedArray()
    }
}
```
![upvote_new_cc82e8aa-dc98-4f10-af4c-64b1528c0fb6_1680844232.130332.png](./images/1.png)


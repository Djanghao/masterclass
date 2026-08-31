# 🔥SIMPILL💯 % 🎯 |✨SUPER EASY BEGINNERS 👏

**Author:** CodeWithSparsh
**Votes:** 2
**Link:** [https://leetcode.com/problems/flip-columns-for-maximum-number-of-equal-rows/solutions/6105383/](https://leetcode.com/problems/flip-columns-for-maximum-number-of-equal-rows/solutions/6105383/)

---

### Intuition
The problem involves flipping columns in a binary matrix to maximize the number of rows that are identical. Observing the matrix, if two rows are to become identical after some flips, either the rows must already be identical or one must be the exact complement of the other. Thus, the key insight is to group rows based on their values and complements.

---

### Approach
1. **Group Rows by Their Patterns**:
   - Represent each row as a string (`values`) and its complement as another string (`flippedValues`).
   - Use a map (`Map<String, int>`) to count the occurrences of each row pattern and its complement.

2. **Count Maximum Matches**:
   - As we iterate through each row, update the counts of both `values` and `flippedValues` in the map.
   - The maximum count from the map represents the largest number of rows that can be made identical through column flips.

3. **Key Observations**:
   - Flipping a column affects all rows in the same way, so rows with the same pattern or complementary patterns can always be aligned.

---

### Complexity
- **Time Complexity**:  
  - Iterating through all rows: \\(O(m \\cdot n)\\), where \\(m\\) is the number of rows and \\(n\\) is the number of columns.
  - Creating and updating the map: \\(O(m \\cdot n)\\).
  - Overall: \\(O(m \\cdot n)\\).

- **Space Complexity**:  
  - Storing the map for row patterns: \\(O(m \\cdot n)\\) in the worst case.

---


```dart []
class Solution {
  int maxEqualRowsAfterFlips(List<List<int>> matrix) {
    Map<String, int> map = {};
    
    for (List<int> row in matrix) {
      // Join row as a string
      String values = row.join("");
      // Generate complement of the row
      String flippedValues = row.map((x) => 1 - x).join("");
      
      // Increment the count for the pattern and its complement
      map[values] = (map[values] ?? 0) + 1;
      map[flippedValues] = (map[flippedValues] ?? 0) + 1;
    }
    
    // Find the maximum count
    int ans = 0;
    map.values.forEach((e) {
      ans = max(ans, e);
    });
    
    return ans;
  }
}
```


```java []
import java.util.*;

class Solution {
    public int maxEqualRowsAfterFlips(int[][] matrix) {
        Map<String, Integer> map = new HashMap<>();
        
        for (int[] row : matrix) {
            StringBuilder values = new StringBuilder();
            StringBuilder flippedValues = new StringBuilder();
            
            for (int num : row) {
                values.append(num);
                flippedValues.append(1 - num);
            }
            
            String key = values.toString();
            String flippedKey = flippedValues.toString();
            
            map.put(key, map.getOrDefault(key, 0) + 1);
            map.put(flippedKey, map.getOrDefault(flippedKey, 0) + 1);
        }
        
        int ans = 0;
        for (int count : map.values()) {
            ans = Math.max(ans, count);
        }
        
        return ans;
    }
}
```


```python []
class Solution:
    def maxEqualRowsAfterFlips(self, matrix):
        from collections import defaultdict
        
        patterns = defaultdict(int)
        
        for row in matrix:
            values = "".join(map(str, row))
            flipped_values = "".join(map(str, [1 - x for x in row]))
            
            patterns[values] += 1
            patterns[flipped_values] += 1
        
        return max(patterns.values())
```


```javascript []
var maxEqualRowsAfterFlips = function(matrix) {
    let map = new Map();
    
    for (let row of matrix) {
        let values = row.join("");
        let flippedValues = row.map(x => 1 - x).join("");
        
        map.set(values, (map.get(values) || 0) + 1);
        map.set(flippedValues, (map.get(flippedValues) || 0) + 1);
    }
    
    return Math.max(...map.values());
};
```


```cpp []
#include <vector>
#include <unordered_map>
#include <string>
#include <algorithm>

using namespace std;

class Solution {
public:
    int maxEqualRowsAfterFlips(vector<vector<int>>& matrix) {
        unordered_map<string, int> map;
        
        for (const auto& row : matrix) {
            string values, flippedValues;
            for (int num : row) {
                values += to_string(num);
                flippedValues += to_string(1 - num);
            }
            
            map[values]++;
            map[flippedValues]++;
        }
        
        int ans = 0;
        for (const auto& [key, count] : map) {
            ans = max(ans, count);
        }
        
        return ans;
    }
};
```


```go []
func maxEqualRowsAfterFlips(matrix [][]int) int {
    patternCounts := make(map[string]int)
    
    for _, row := range matrix {
        values := ""
        flippedValues := ""
        
        for _, num := range row {
            values += string('0' + num)
            flippedValues += string('0' + (1 - num))
        }
        
        patternCounts[values]++
        patternCounts[flippedValues]++
    }
    
    maxCount := 0
    for _, count := range patternCounts {
        if count > maxCount {
            maxCount = count
        }
    }
    
    return maxCount
}
```
---
![image.png](./images/0.png) {:style='width:250px'}
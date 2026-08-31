# Easy solution - contest 25/05/2024

**Author:** MangeurDeSushi
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-the-number-of-distinct-colors-among-the-balls/solutions/5206956/](https://leetcode.com/problems/find-the-number-of-distinct-colors-among-the-balls/solutions/5206956/)

---

# Complexity
- Time complexity:
$$O(n)$$

```python []
class Solution:
    def queryResults(self, limit: int, queries: List[List[int]]) -> List[int]:
        color_map = {}
        color_count = defaultdict(int)
        result = []
        distinct_color_count = 0
        
        for x, y in queries:
            if x in color_map:
                old_color = color_map[x]
                color_count[old_color] -= 1
                if color_count[old_color] == 0:
                    distinct_color_count -= 1
            
            color_map[x] = y
            if color_count[y] == 0:
                distinct_color_count += 1
            color_count[y] += 1
            
            result.append(distinct_color_count)
        
        return result
```
```cpp []
class Solution {
public:
    vector<int> queryResults(int limit, vector<vector<int>>& queries) {
        unordered_map<int, int> color_map;
        unordered_map<int, int> color_count;
        vector<int> result;
        int distinct_color_count = 0;
        
        for (const auto& query : queries) {
            int x = query[0];
            int y = query[1];
            
            if (color_map.find(x) != color_map.end()) {
                int old_color = color_map[x];
                color_count[old_color]--;
                if (color_count[old_color] == 0) {
                    distinct_color_count--;
                }
            }
            
            color_map[x] = y;
            if (color_count[y] == 0) {
                distinct_color_count++;
            }
            color_count[y]++;
            
            result.push_back(distinct_color_count);
        }
        
        return result;
    }
};
```
```java []
class Solution {
    public int[] queryResults(int limit, int[][] queries) {
        Map<Integer, Integer> colorMap = new HashMap<>();
        Map<Integer, Integer> colorCount = new HashMap<>();
        List<Integer> result = new ArrayList<>();
        int distinctColorCount = 0;
        
        for (int[] query : queries) {
            int x = query[0];
            int y = query[1];
            
            if (colorMap.containsKey(x)) {
                int oldColor = colorMap.get(x);
                colorCount.put(oldColor, colorCount.get(oldColor) - 1);
                if (colorCount.get(oldColor) == 0) {
                    distinctColorCount--;
                }
            }
            
            colorMap.put(x, y);
            colorCount.put(y, colorCount.getOrDefault(y, 0) + 1);
            if (colorCount.get(y) == 1) {
                distinctColorCount++;
            }
            
            result.add(distinctColorCount);
        }
        
        return result.stream().mapToInt(i -> i).toArray();
    }
}
```
# Simple Hashmap Logic Explained

**Author:** muhammadfarhankt
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-number-of-distinct-colors-among-the-balls/solutions/5206991/](https://leetcode.com/problems/find-the-number-of-distinct-colors-among-the-balls/solutions/5206991/)

---

# Intuition
- The problem requires tracking the color changes of balls and determining the number of distinct colors after each change. The main challenge is efficiently updating and querying the colors of balls to maintain an accurate count of distinct colors.


# Approach
1. Track Ball Colors: Use a map to store the current color of each ball. This helps in quickly updating and querying the color of a specific ball.
2. Track Color Count: Use another map to store the count of each color. This ensures that we only count distinct colors.
3. Process Each Query: For each query, update the color of the specified ball. If the ball's color changes, update the color counts accordingly. Ensure the number of distinct colors is accurately reflected in the result array.

# Complexity
- Time complexity: O(n), where n is the number of queries. Each query involves constant time operations due to efficient use of maps.
- Space complexity: O(n), where n is the number of unique colors or balls. This is for storing the color of each ball and the count of each color.

# Code
```Golang []
func queryResults(limit int, queries [][]int) []int {
    ballColors := make(map[int]int)
    colorCount := make(map[int]int)
    result := make([]int, len(queries))
    distinctColors := 0

    for i, query := range queries {
        ball := query[0]
        color := query[1]

        if prevColor, exists := ballColors[ball]; exists {
            colorCount[prevColor]--
            if colorCount[prevColor] == 0 {
                distinctColors--
            }
        }

        ballColors[ball] = color
        colorCount[color]++
        if colorCount[color] == 1 {
            distinctColors++
        }

        result[i] = distinctColors
    }

    return result
}
```
```C++ []
class Solution {
public:
    vector<int> queryResults(int limit, vector<vector<int>>& queries) {
        unordered_map<int, int> ballColors;
        unordered_map<int, int> colorCount;
        vector<int> result(queries.size());
        int distinctColors = 0;

        for (int i = 0; i < queries.size(); ++i) {
            int ball = queries[i][0];
            int color = queries[i][1];

            if (ballColors.find(ball) != ballColors.end()) {
                int prevColor = ballColors[ball];
                colorCount[prevColor]--;
                if (colorCount[prevColor] == 0) {
                    distinctColors--;
                }
            }

            ballColors[ball] = color;
            colorCount[color]++;
            if (colorCount[color] == 1) {
                distinctColors++;
            }

            result[i] = distinctColors;
        }

        return result;
    }
};
```
```Java []
class Solution {
    public int[] queryResults(int limit, int[][] queries) {
        Map<Integer, Integer> ballColors = new HashMap<>();
        Map<Integer, Integer> colorCount = new HashMap<>();
        int[] result = new int[queries.length];
        int distinctColors = 0;

        for (int i = 0; i < queries.length; ++i) {
            int ball = queries[i][0];
            int color = queries[i][1];

            if (ballColors.containsKey(ball)) {
                int prevColor = ballColors.get(ball);
                colorCount.put(prevColor, colorCount.get(prevColor) - 1);
                if (colorCount.get(prevColor) == 0) {
                    distinctColors--;
                }
            }

            ballColors.put(ball, color);
            colorCount.put(color, colorCount.getOrDefault(color, 0) + 1);
            if (colorCount.get(color) == 1) {
                distinctColors++;
            }

            result[i] = distinctColors;
        }

        return result;
    }
}
```
```Javascript []
/**
 * @param {number} limit
 * @param {number[][]} queries
 * @return {number[]}
 */
var queryResults = function(limit, queries) {
    let ballColors = new Map();
    let colorCount = new Map();
    let result = [];
    let distinctColors = 0;

    for (let [ball, color] of queries) {
        if (ballColors.has(ball)) {
            let prevColor = ballColors.get(ball);
            colorCount.set(prevColor, colorCount.get(prevColor) - 1);
            if (colorCount.get(prevColor) === 0) {
                distinctColors--;
            }
        }

        ballColors.set(ball, color);
        colorCount.set(color, (colorCount.get(color) || 0) + 1);
        if (colorCount.get(color) === 1) {
            distinctColors++;
        }

        result.push(distinctColors);
    }

    return result;
};
```
```Python []
class Solution:
    def queryResults(self, limit: int, queries: List[List[int]]) -> List[int]:
        ball_colors = {}
        color_count = {}
        result = []
        distinct_colors = 0

        for query in queries:
            ball, color = query

            if ball in ball_colors:
                prev_color = ball_colors[ball]
                color_count[prev_color] -= 1
                if color_count[prev_color] == 0:
                    distinct_colors -= 1

            ball_colors[ball] = color
            color_count[color] = color_count.get(color, 0) + 1
            if color_count[color] == 1:
                distinct_colors += 1

            result.append(distinct_colors)

        return result
```
```Dart []
class Solution {
  List<int> queryResults(int limit, List<List<int>> queries) {
    Map<int, int> ballColors = {};
    Map<int, int> colorCount = {};
    List<int> result = [];
    int distinctColors = 0;

    for (var query in queries) {
      int ball = query[0];
      int color = query[1];

      if (ballColors.containsKey(ball)) {
        int prevColor = ballColors[ball]!;
        colorCount[prevColor] = colorCount[prevColor]! - 1;
        if (colorCount[prevColor] == 0) {
          distinctColors--;
        }
      }

      ballColors[ball] = color;
      colorCount[color] = (colorCount[color] ?? 0) + 1;
      if (colorCount[color] == 1) {
        distinctColors++;
      }

      result.add(distinctColors);
    }

    return result;
  }
}
```
# Python | Java DFS in descending orders with detailed explanation.

**Author:** leet_go
**Votes:** 27
**Link:** [https://leetcode.com/problems/select-cells-in-grid-with-maximum-score/solutions/5718057/](https://leetcode.com/problems/select-cells-in-grid-with-maximum-score/solutions/5718057/)

---


# Intuition
There are two constraints to consider:
- Each row can only contain one value.
- All values must be unique.

These constraints imply that, when aiming to maximize the values in all cells, the largest value in the grid must be included. This is because, for any set of values chosen from the grid that excludes the maximum value, substituting one selected value by the maximum value in the same row will not violate the constraints and will result in a higher score.

Given this, it makes sense to adopt a strategy that selects values from the grid in descending order. Thus, a DFS approach comes to mind.


# Approach
There are 3 steps to follow:

- Create a mapping from each unique value in the grid to the indexes of the rows containing that value.
- Execute a DFS algorithm for each unique value in descending order.
- For each value, iterate through the list of row indexes and determine the maximum score. During this process, keep track of rows that have already been selected, and ensure to skip these rows to adhere to the restriction of having only one value per row.

# Code
```python []
class Solution:
    def maxScore(self, grid: List[List[int]]) -> int:
        rows = len(grid)
        cols = len(grid[0])
        # flatten all the values in the grid and deduplicate
        value_set = set([grid[r][c] for r in range(rows) for c in range(cols)])
        
        # sort values from in descending order
        value_list = sorted(list(value_set))[::-1]

        # create a map mapping from each value to the list of row indexes with these values
        val_to_rows = defaultdict(list)
        for value in value_list:
            val_to_rows[value] = [r for r in range(rows) if value in grid[r]]

        # Run dfs on rows with cell values in descending order.
        def dfs(row_set, remaining_values, score):
            if not remaining_values:
                return score

            value = remaining_values[0]
            remaining_values = remaining_values[1:]

            score_list = []

            for row in val_to_rows[value]:
                if row not in row_set:
                    score_list.append(dfs(row_set | {row}, remaining_values, score + value))
            if not score_list:
                score_list.append(dfs(row_set, remaining_values, score))
            return max(score_list)

        return dfs(set(), value_list, 0)
        
```


```java []
class Solution {
    private int dfs(
        final Set<Integer> rows, 
        final List<Integer> sortedVals,
        final Map<Integer, Set<Integer>> valToIndex,
        final int score,
        int depth
    ) {
        if (++depth == sortedVals.size()) {
            return score;
        }
        final int value = sortedVals.get(depth);
        
        final List<Integer> scores = new ArrayList<>();
        final int nxt_depth = depth;
        valToIndex.get(value)
                  .stream()
                  .filter(row -> !rows.contains(row))
                  .forEach(row -> {
            final Set<Integer> updatedRows = new HashSet<>(rows);
            updatedRows.add(row);
            scores.add(dfs(updatedRows, sortedVals, valToIndex, score + value, nxt_depth));
        });
        if (scores.isEmpty()) {
            return dfs(rows, sortedVals, valToIndex, score, depth);
        } else {
           return Collections.max(scores);
        }
    }

    public int maxScore(List<List<Integer>> grid) {
        final Set<Integer> vals =  grid.stream().flatMap(List::stream).collect(Collectors.toSet());
        final Map<Integer, Set<Integer>> valToIndex = new HashMap<>();
        vals.forEach(val -> valToIndex.put(val, new HashSet<>()));
        IntStream.range(0, grid.size()).forEach(row -> {
            vals.forEach(val -> {
                if (grid.get(row).contains(val)) {
                    valToIndex.get(val).add(row);
                }
            });
        });
        final List<Integer> sortedVals = new ArrayList<>(vals);
        Collections.sort(sortedVals, Collections.reverseOrder());
        return dfs(new HashSet<>(), sortedVals, valToIndex, 0, -1);
    }
}
```
# Typescript Approach

**Author:** kyratzakos
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-number-of-distinct-colors-among-the-balls/solutions/5221930/](https://leetcode.com/problems/find-the-number-of-distinct-colors-among-the-balls/solutions/5221930/)

---

# Intuition
The function `queryResults` simulates a dynamic tracking system where "balls" are assigned "colors" based on pairs of inputs (`x`, `y`) from a list of queries. Each `x` represents a ball identifier, and `y` represents a color assigned to that ball. The main task is to record the number of unique colors that exist after each query and respond to these changes as balls might be reassigned to different colors. Essentially, this function deals with counting distinct elements (colors) while they dynamically change.

# Approach
1. Initialize Data Structures:
   - Use a `balls` map to track the current color of each ball.
   - Use a `totalColors` map to count how many balls are currently assigned to each color.
2. Process Each Query:
For each pair `[x, y]` in `queries`:
   - If ball `x` is already assigned a color (`balls.has(x)`), decrease the count of that color in `totalColors`.
   - If the count of the old color becomes zero, remove that color from `totalColors` since it's no longer used.
   - Assign the new color `y` to ball `x` and update or increase the count in `totalColors`.
   - Append the number of unique colors (`totalColors.size`) to the result list.
3. Return the Result: After processing all queries, return a list where each element represents the count of unique colors after each respective query.

# Complexity
- Time complexity:
$O(q)$, where $q$ is the number of queries. Each query is processed in constant time assuming map operations (`get`, `set`, and `delete`) are average-case $O(1)$. The major operations include checking if a color exists, updating counts, and potentially removing a color entry.

- Space complexity:
$O(n+c)$, where $n$ is the number of distinct balls and $c$ is the number of distinct colors used across all queries. The space is used for storing the state of each ball\u2019s color and the count of each color. This ensures that memory usage scales with the diversity and number of updates rather than the total number of queries.

# Code
```
function queryResults(limit: number, queries: number[][]): number[] {
    const balls = new Map<number, number>()
    const totalColors = new Map<number, number>()
    const result: number[] = []
    
    for( const [x, y] of queries) {
        if(balls.has(x)){
            const oldColor = balls.get(x)!
            totalColors.set(oldColor, totalColors.get(oldColor)! - 1)
                  if(totalColors.get(oldColor) === 0){
                        totalColors.delete(oldColor)
                  }
        }
        balls.set(x,y)
        totalColors.set(y, (totalColors.get(y) || 0) + 1)
        result.push(totalColors.size)
    }
    
    
    return result
};
```
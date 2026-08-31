# Short and readable solution for TypeScript and JavaScript

**Author:** codesandtags
**Votes:** 4
**Link:** [https://leetcode.com/problems/relative-ranks/solutions/5127731/](https://leetcode.com/problems/relative-ranks/solutions/5127731/)

---

# Intuition
This problem requires to consider a sort in order to identify the ranking.

# Approach
- Sort the data to have the ranking
- Identify the ranking for each position
- Return the right value from the original input `score`

# Complexity
- Time complexity: O(n log n)
- Space complexity: O(n)


# Code Typescript

```typescript
function findRelativeRanks(score: number[]): string[] {
    const medals = ['Gold', 'Silver', 'Bronze']
    const ranking = [...score]
      .sort((a, b) => b - a) // Sort items by descending order
      .reduce((prev, current, index) => {
         prev[current] = index < 3 ? `${medals[index]} Medal` : `${index + 1}`
         return prev
      }, {})

    return score.map((position, index) => ranking[position])
};
```

# Code Javascript

```javascript
function findRelativeRanks(score){
    const medals = ['Gold', 'Silver', 'Bronze']
    const ranking = [...score]
      .sort((a, b) => b - a) // Sort items by descending order
      .reduce((prev, current, index) => {
         prev[current] = index < 3 ? `${medals[index]} Medal` : `${index + 1}`
         return prev
      }, {})

    return score.map((position, index) => ranking[position])
};
```
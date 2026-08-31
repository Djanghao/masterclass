# Easy to understand beats 100.00% of users with TypeScript

**Author:** 71M
**Votes:** 1
**Link:** [https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/solutions/4239815/](https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/solutions/4239815/)

---



# Approach
1. Memorize all occurrences of the string we are looking for;
2. if there are no occurrences: discard -1;
3. loop through each index:
- Calculate the number of steps if we go head-on;
- Calculate the number of steps if we go through the left edge;
- Calculate the number of steps if going through the right edge;
- We put the minimum number of steps of all calculated steps into the array of answers.
4. Select the minimum number of steps from the array of answers. 

# Complexity
- Time complexity: O(n)

- Space complexity: O(n)

# Code
```
function closetTarget(
  words: string[],
  target: string,
  startIndex: number
): number {
  let indexes: number[] = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i] === target) {
      indexes.push(i);
    }
  }

  if (indexes.length === 0) return -1;
  let answers: number[] = [];

  for (let i = 0; i < indexes.length; i++) {
    let index = indexes[i];
    let straight = Math.abs(index - startIndex);
    let left = words.length - index + startIndex;
    let right = Math.abs(words.length - startIndex + index);

    answers.push(Math.min(straight, left, right));
  }

  return Math.min(...answers);
}
```
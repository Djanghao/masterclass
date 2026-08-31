# Fast JavaScript/TypeScript solution

**Author:** aearlin
**Votes:** 0
**Link:** [https://leetcode.com/problems/matchsticks-to-square/solutions/4311158/](https://leetcode.com/problems/matchsticks-to-square/solutions/4311158/)

---

# Intuition
For each matchstick, try to place it into the existing configuration of sides recursively, returning false if there is no side where it can be placed that still has a possible solution.

# Approach
Optimizations at each step is key here. First, return false if we don't have at least four matchsticks. Then, total the length of all of the matchsticks to determine the length of each individual side. If the total of all of the matchsticks is not a multiple of four, return false. Next, sort the matchsticks largest to smallest so that 1) we can return false if the largest matchstick is bigger than our target side length and 2) to optimize by trying to place the biggest matchsticks first.
Create an array to hold the current total of all of the sides.
Write a function that determines if it is possible to solve the problem with the current configuration of matchsticks up to a given index into the matchstick array. If we have already placed all of the matchsticks, we return true. Otherwise, we try placing the matchstick for the current index into each side, if adding it does not exceed our target side length, then recursively call the function for the next index into the matchstick array. If that returns true, we return true. If not, and we haven't yet placed any matchsticks on the current side, we return false without trying it on any other sides because we've sorted the matches, and if we can't put anything on the current side, there's not going to be a solution with the current configuration. If we try the current matchstick on all sides and it does not return true for any of them, we return false for the current configuration.
After writing this recursive function, all we need to do is return what it returns for the index of 0.

# Complexity
- Time complexity:
$$O(n^2)$$

- Space complexity:
$$O(1)$$

# Code
```
function makesquare(matchsticks: number[]): boolean {
  if (matchsticks.length < 4) {
    return false;
  }

  const totalLength: number = matchsticks.reduce((sum, length) => sum + length, 0);
  if (totalLength % 4 !== 0) return false;
  const targetSideLength: number = totalLength / 4;

  const sideLengths = [0, 0, 0, 0];
  matchsticks.sort((a, b) => b - a);

  if (matchsticks[0] > targetSideLength) return false;

  function canFormSquare(index: number): boolean {
    if (index === matchsticks.length) {
      return true;
    }

    for (let i = 0; i < 4; i++) {
      if (sideLengths[i] + matchsticks[index] <= targetSideLength) {
        sideLengths[i] += matchsticks[index];

        if (canFormSquare(index + 1)) {
          return true;
        }

        // Backtrack
        sideLengths[i] -= matchsticks[index];

        // Skip duplicates to optimize the search
        if (sideLengths[i] === 0) {
          break;
        }
      }
    }

    return false;
  }

  return canFormSquare(0);
}

```
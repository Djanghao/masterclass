# Easy DP explanation with intuition | Memo | Recursion |  Bottom-up | Top Down

**Author:** SheetalB
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-white-tiles-after-covering-with-carpets/solutions/5599956/](https://leetcode.com/problems/minimum-white-tiles-after-covering-with-carpets/solutions/5599956/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
If it was a continous carpets question, this could probably solved by sliding window which were my first thoughts. Later understood that the carpets can be placed anywhere so this becomes including excluding recursion problem.

# Approach
<!-- Describe your approach to solving the problem. -->
- If you want to add a carpet at certain integer then you will cover index+carpetLen values as well with one less carpet. So now we need visible tile count of subProblem (i+1,j-1) i being the floor index and j being the carpet count.
- If you decide not to include a carpet then it means the current integer if its a 1 is visible + the remaining subProblem with same amount of tiles i.e., i+1,j 
- Min of the above two paths is stored in memo
- Note for basic reference :for top down dp you have i as emptyString''+floor and j->0 to carpets .for bottom up you have floor+emptyString and j->carpets to 0
- so at dp[i][j] you will store visible tiles at i with j number of tiles

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(floor.length*numOfCarpets)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(floor.length*numOfCarpets)

# Code
Recursion & Memoization (TLE, just for reference)
```
/**
 * @param {string} floor
 * @param {number} numCarpets
 * @param {number} carpetLen
 * @return {number}
 */
var minimumWhiteTiles = function (floor, numCarpets, carpetLen) {
  let dp = new Array(floor.length);

    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(numCarpets.length);
    }

    let suffixCount = new Array(floor.length).fill(0);
    suffixCount[floor.length - 1] = floor[floor.length - 1] == '1' ? 1 : 0;

    for (let i = floor.length - 2; i >= 0; i--) {
        suffixCount[i] = suffixCount[i + 1] + (floor[i] == '1');
    }

    let helper = function (index, carpsLeft) {
        if (index >= floor.length) {
            return 0;
        }
        if (dp[index] && dp[index][carpsLeft]) return dp[index][carpsLeft];
        if (carpsLeft == 0) {
            return suffixCount[index];
        }

        let addCarpet = helper(index + carpetLen, carpsLeft - 1);
        let noCarpet = (floor[index] == 1) + helper(index + 1, carpsLeft);

        dp[index][carpsLeft] = Math.min(addCarpet, noCarpet);

        return dp[index][carpsLeft];
    }

    return helper(0, numCarpets);
  }

};

```
Top Down approach
```
var minimumWhiteTiles = function (floor, numCarpets, carpetLen) {
    let dp = new Array(floor.length + 1);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(numCarpets + 1)
    }

    for (let i = 0; i < dp.length; i++) {
         for (let j = 0; j < dp[0].length; j++) {
             if ((i == 0 && j == 0) || i == 0) dp[i][j] = 0;
            else if (j == 0) {
                dp[i][j] = floor[i - 1] == '1' ? 1 + dp[i - 1][j] : dp[i - 1][j];
            }
            else {
                let addCarpet = 0;
                if (i >= carpetLen) addCarpet = dp[i - carpetLen][j - 1];
                let noCarpet = floor[i - 1] == '1' ? 1 + dp[i - 1][j] : dp[i - 1][j];
                dp[i][j] = Math.min(addCarpet, noCarpet);
            }
        }
    }

    return dp[floor.length][numCarpets]
  }
```
Bottom-Up approach
```
var minimumWhiteTiles = function (floor, numCarpets, carpetLen) {
  let dp = new Array(floor.length + 1);
  for (let i = 0; i < dp.length; i++) {
      dp[i] = new Array(numCarpets + 1).fill(0)
  }

  let m = dp.length;
  let n = dp[0].length;

  for (let i = m - 1; i >= 0; i--) {
      for (let j = n - 1; j >= 0; j--) {
          if ((i == m - 1 && j == n - 1) || i == m - 1) dp[i][j] = 0;
          else if (j == n - 1) {
              dp[i][j] = floor[i] == '1' ? 1 + dp[i + 1][j] : dp[i + 1][j];
          }
          else {
              let addCarpet = 0;
              //the carpet will cover the length so we just need to consider visible values after that index with less carpets
              if (i + carpetLen < m) addCarpet = dp[i + carpetLen][j + 1];
              //if we are not considering to add carpet then just check next index value with same carpets
              let noCarpet = floor[i] == '1' ? 1 + dp[i + 1][j] : dp[i + 1][j];
              dp[i][j] = Math.min(addCarpet, noCarpet);
          }
      }
  }

  return dp[0][0];
  }




















```
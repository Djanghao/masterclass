# C# solution

**Author:** like2learn
**Votes:** 0
**Link:** [https://leetcode.com/problems/campus-bikes-ii/solutions/2926052/](https://leetcode.com/problems/campus-bikes-ii/solutions/2926052/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
For any worker index, the best bike is going to be the one for which the distance to that bike plus the sum of distances for the remaining bikes+worker combinations is the minimum.
This answer is going to be the same as long as the list of remaining bikes and remaining workers is the same.

# Approach
<!-- Describe your approach to solving the problem. -->
Use backtracking to go through all the combinations, tracking which bikes have already been used up.
Also use memoizatiion to to avoid recalculation when the same remaining bikes have already been calculated before.
To do so, we can use a hashmmap (dictionary) along with a bitmap since the number of bikes is limited to 10.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n*m) since we loop through all the workers and bikes, and use memoization to not recalculate the combinations.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n*m) for memoization

# Code
```
public class Solution {
    public int AssignBikes(int[][] workers, int[][] bikes) {
        return Recur(workers, bikes, 0, 0, new Dictionary<int, int>());
    }

    private int Recur(int[][] workers, int[][] bikes, int workerIndex, int bikesTaken, Dictionary<int, int> memo) {
        if (workerIndex > workers.Length - 1) {
            return 0;
        }

        int key = bikesTaken * 100 + workerIndex;

        if (memo.ContainsKey(key)) {
            return memo[key];
        }

        int min = int.MaxValue;

        for (int bike = 0; bike < bikes.Length; bike++) {
            int bikeBit = 1 << bike;

            if ((bikesTaken & bikeBit) == 0) {

                bikesTaken |= bikeBit;
                
                min = Math.Min(min, Math.Abs(workers[workerIndex][0] - bikes[bike][0]) + Math.Abs(workers[workerIndex][1] - bikes[bike][1]) + Recur(workers, bikes, workerIndex + 1, bikesTaken, memo));

                bikesTaken ^= bikeBit;
            }
        }

        memo[key] = min;

        return min;
    }
}
```
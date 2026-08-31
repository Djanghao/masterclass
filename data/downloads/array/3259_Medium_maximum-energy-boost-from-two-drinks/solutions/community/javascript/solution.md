# Easy DP Solution || Python, JavaScript, C++ ✅

**Author:** 101rror
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-energy-boost-from-two-drinks/solutions/5653065/](https://leetcode.com/problems/maximum-energy-boost-from-two-drinks/solutions/5653065/)

---

# Complexity
- Time complexity: O(n)

- Space complexity: O(1)

# Code
```Python3 []
class Solution:
    def maxEnergyBoost(self, energyDrinkA: List[int], energyDrinkB: List[int]) -> int:
        n = len(energyDrinkA)

        dpA, dpB = [0] * n, [0] * n

        dpA[0], dpB[0] = energyDrinkA[0], energyDrinkB[0]

        for i in range(1, n):
            dpA[i] = max(dpA[i - 1] + energyDrinkA[i], dpB[i - 1])
            dpB[i] = max(dpB[i - 1] + energyDrinkB[i], dpA[i - 1])

        mx = max(dpA[-1], dpB[-1])

        return mx

```
```JavaScript []
/**
 * @param {number[]} energyDrinkA
 * @param {number[]} energyDrinkB
 * @return {number}
 */
var maxEnergyBoost = function(energyDrinkA, energyDrinkB) {
    let n = energyDrinkA.length;

    let dpA = new Array(n).fill(0);
    let dpB = new Array(n).fill(0);

    dpA[0] = energyDrinkA[0];
    dpB[0] = energyDrinkB[0];

    for (let i = 1; i < n; i++) {
        dpA[i] = Math.max(dpA[i - 1] + energyDrinkA[i], dpB[i - 1]);
        dpB[i] = Math.max(dpB[i - 1] + energyDrinkB[i], dpA[i - 1]);
    }

    return Math.max(dpA[n - 1], dpB[n - 1]);
};
```
```C++ []
class Solution {
public:
    long long maxEnergyBoost(vector<int>& energyDrinkA, vector<int>& energyDrinkB) {
        int n = energyDrinkA.size();

        long long prevA = energyDrinkA[0], prevB = energyDrinkB[0];

        for (int i = 1; i < n; ++i) {
            long long currA = max(prevA + energyDrinkA[i], prevB);
            long long currB = max(prevB + energyDrinkB[i], prevA);

            prevA = currA;
            prevB = currB;
        }

        return max(prevA, prevB);
    }
};
```
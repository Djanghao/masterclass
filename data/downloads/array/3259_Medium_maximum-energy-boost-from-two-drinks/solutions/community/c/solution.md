# DP

**Author:** votrubac
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-energy-boost-from-two-drinks/solutions/5656797/](https://leetcode.com/problems/maximum-energy-boost-from-two-drinks/solutions/5656797/)

---

This problem belongs to the [198. House Robber](https://leetcode.com/problems/house-robber/) group of DP problems.

`lastA` is the maximum total boost so far if the last drink was `A`, and `lastB` is the same for `B`.

For hour `i`, we can continue driking `A`, or switch from `B`:
- `lastA = drinkA[i] + max(lastA, lastB - drinkB[i - 1])`. 

Note that we do `lastB - drinkB[i - 1]` as we need to skip the boost from drink `B` for the previous hour. 

**C++**
```cpp
long long maxEnergyBoost(vector<int>& drinkA, vector<int>& drinkB) {
    long long lastA = drinkA[0], lastB = drinkB[0]; 
    for (int i = 1; i < drinkA.size(); ++i) {
        long long tmp = lastA;
        lastA = max(lastA, lastB - drinkB[i - 1]) + drinkA[i];
        lastB = max(lastB, tmp - drinkA[i - 1]) + drinkB[i];
    }
    return max(lastA, lastB);
}
```
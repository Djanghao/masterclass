# O(nlogn) --> O(n)

**Author:** fahad_Mubeen
**Votes:** 50
**Link:** [https://leetcode.com/problems/maximum-points-after-enemy-battles/solutions/5429049/](https://leetcode.com/problems/maximum-points-after-enemy-battles/solutions/5429049/)

---

# Intution

- Sort the list of enemy energies in ascending order to prioritize defeating enemies that require the least energy first, thereby maximizing early points accumulation. 
- If the initial energy is insufficient to defeat the weakest enemy, return 0. 
- Otherwise, absorb energies from the strongest enemies at the right end of the list, using this energy to defeat the weakest enemy multiple times and maximize points. Decrement the right pointer as you continue absorbing energy from the right.
# Complexity
- Time complexity: $$O(nlogn)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    long long maximumPoints(vector<int>& enemyEnergies, int currentEnergy) {
        long long profit = 0, n = enemyEnergies.size(), j = n - 1;
        sort(enemyEnergies.begin(), enemyEnergies.end());
        if(enemyEnergies[0] > currentEnergy) return 0;
        while(j >= 0){
            if(enemyEnergies[0] <= currentEnergy){
                profit += currentEnergy/enemyEnergies[0];
                currentEnergy %= enemyEnergies[0];
            }
            else{
                currentEnergy += enemyEnergies[j];
                j--;
            }
        }
        return profit;
    }
};
```
```Java []
class Solution {
    public long maximumPoints(int[] enemyEnergies, int currentEnergy) {
        long profit = 0;
        int n = enemyEnergies.length;
        Arrays.sort(enemyEnergies);
        
        if (enemyEnergies[0] > currentEnergy)
            return 0;
        
        int j = n - 1;
        while (j >= 0) {
            if (enemyEnergies[0] <= currentEnergy) {
                profit += currentEnergy / enemyEnergies[0];
                currentEnergy %= enemyEnergies[0];
            } else {
                currentEnergy += enemyEnergies[j];
                j--;
            }
        }
        
        return profit;
    }
}
```
```Python3 []
class Solution:
    def maximumPoints(self, enemyEnergies, currentEnergy):
        profit = 0
        enemyEnergies.sort()
        n = len(enemyEnergies)
        
        if enemyEnergies[0] > currentEnergy:
            return 0
        
        j = n - 1
        while j >= 0:
            if enemyEnergies[0] <= currentEnergy:
                profit += currentEnergy // enemyEnergies[0]
                currentEnergy %= enemyEnergies[0]
            else:
                currentEnergy += enemyEnergies[j]
                j -= 1
        
        return profit
```
# Observation
- We always apply the first operation on the minimum value **enemyEnergies[0]**, extracting energy from all other values besides it.
-  Why not directly find the minimum and calculate the cumulative sum? With this approach, we can further optimize our code to O(n) by applying all our first operations on the minimum value.

# Code

```C++ []
class Solution {
public:
    long long maximumPoints(vector<int>& enemyEnergies, int currentEnergy) {
        long long profit = 0, mn = INT_MAX;
        long long totalEnergy = currentEnergy;
        for(long long i = 0; i < enemyEnergies.size(); i++){
            if(enemyEnergies[i] < mn) mn = enemyEnergies[i];
            totalEnergy += enemyEnergies[i];
        }
        if(currentEnergy < mn) return 0;
        totalEnergy -= mn;
        return totalEnergy/mn;
    }
};
```
```Java []
class Solution {
    public long maximumPoints(int[] enemyEnergies, int currentEnergy) {
        long profit = 0;
        long mn = Integer.MAX_VALUE;
        long totalEnergy = currentEnergy;
        
        for (int i = 0; i < enemyEnergies.length; i++) {
            if (enemyEnergies[i] < mn) {
                mn = enemyEnergies[i];
            }
            totalEnergy += enemyEnergies[i];
        }
        
        if (currentEnergy < mn) {
            return 0;
        }
        
        totalEnergy -= mn;
        return totalEnergy / mn;
    }
}
```
```Python3 []
class Solution:
    def maximumPoints(self, enemyEnergies, currentEnergy):
        profit = 0
        mn = float('inf')
        totalEnergy = currentEnergy
        
        for energy in enemyEnergies:
            if energy < mn:
                mn = energy
            totalEnergy += energy
        
        if currentEnergy < mn:
            return 0
        
        totalEnergy -= mn
        return totalEnergy // mn
```





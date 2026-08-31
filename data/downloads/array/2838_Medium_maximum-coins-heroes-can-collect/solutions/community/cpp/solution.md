# C++ Solution using Prefix Sum and Binary Search

**Author:** Romantic-Hacker
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-coins-heroes-can-collect/solutions/6008499/](https://leetcode.com/problems/maximum-coins-heroes-can-collect/solutions/6008499/)

---

# Code
```cpp []
class Solution {
public:
    long long findTotalCoins(vector<pair<int, int>>& monsterCoinMap, int hero, vector<long long>& coinsSum){
        int low = 0;
        int high = monsterCoinMap.size()-1;
        while (low <= high){
            int mid = low + (high - low)/2;
            if (monsterCoinMap[mid].first > hero){
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        if(low == 0 && monsterCoinMap[low].first > hero){
            return 0;
        }
        return coinsSum[high];
    }
    vector<long long> maximumCoins(vector<int>& heroes, vector<int>& monsters, vector<int>& coins) {
        vector<long long> result(heroes.size());
        vector<pair<int, int>> monsterCoinMap;
        for(int i = 0; i < monsters.size(); i++){
            monsterCoinMap.push_back({monsters[i], coins[i]});
        }
        sort(monsterCoinMap.begin(), monsterCoinMap.end());
        vector<long long>coinsSum(coins.size());
        long long prefixSum = 0;
        for(int i = 0; i < monsterCoinMap.size(); i++){
            prefixSum += monsterCoinMap[i].second;
            coinsSum[i] = prefixSum;
        }
        for(int i = 0; i < heroes.size(); i+=1){
            result[i] = findTotalCoins(monsterCoinMap, heroes[i], coinsSum);
        }
        return result;
    }
};
```
# C++ explanation why use backtrack and time space complexity

**Author:** yimingStar5566
**Votes:** 4
**Link:** [https://leetcode.com/problems/optimal-account-balancing/solutions/1560082/](https://leetcode.com/problems/optimal-account-balancing/solutions/1560082/)

---

```
/**
 * Given transactions [a to b, amount]
 * Minmize the given transactions.
 * 
 * Algo backtrack
 * 1. Get users all the balance --> O(N)
 * 2. Map the closest positive and neq balance 
 *      --> try to balance the debt in minimum transactions
 *      If a single positive + single negative = 0, then we balance the debt in one transaction
 *      
 *      However, we cannnot just greedy find the pairs to eliminate because there might have many ways.
 *      For example, [...4, 5, 9, ..., -9, -10], we definitely want to use 9 to balance -9
 *      but there might be a solution that 9 have to go for balance with -10 and creates minimum transactions
 * 
 * 3. So, we have to find all the combinations of positive numbers + negative numbers => Backtracking 
 *    (Plz check problem #46 to get all the permutation by given a vector)
 * 
 * The debt max array size = input size = N
 * Time complexity = O(N) + Combination(N, 2) * Combination(N-2, 2) *... with N/2 times, So it will be O(N) * O(N^2) = O(N^3)
 * Space complexity = O(Recursion Tree height) = O(N)
*/

class Solution {
    vector<long> debt;
public:
    int minTransfers(vector<vector<int>>& transactions) {
        unordered_map<int, long> balance; // balance for each person

        for(auto t: transactions) {
            // give
            balance[t[0]] -= t[2];
            // receive
            balance[t[1]] += t[2];
        }

        for(auto b: balance) {
            if(b.second != 0) debt.push_back(b.second);
        }
        // Try to rearrange this debt
        // We must try all combination
        return backtrack(0);
    }

    int backtrack(int index) {
        if(index == debt.size()) return 0;
        if(debt[index] == 0) {
            // move on to next index
            return backtrack(index+1);
        }
        int minTransactions = INT_MAX;
        // try all the combinations in the back dept[index] and dept[j]
        for(int j=index+1; j < debt.size(); j++) {
            // must be positive and negative
            if(debt[index] * debt[j] < 0) {
                debt[j] += debt[index];
                // other options, or this this is the correct answer +1 transaction to solve the debt -> go on check next index
                minTransactions = min(minTransactions, 1 + backtrack(index+1)); 
                // j might not be a good answer -> try next j
                debt[j] -= debt[index];
            }
        }

        return minTransactions;
    }
};
```
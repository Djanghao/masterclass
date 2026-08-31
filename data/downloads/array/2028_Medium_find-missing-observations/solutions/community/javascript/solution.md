# 99.75% Beats | Basic Maths

**Author:** B_I_T
**Votes:** 82
**Link:** [https://leetcode.com/problems/find-missing-observations/solutions/5739152/](https://leetcode.com/problems/find-missing-observations/solutions/5739152/)

---

![image.png](./images/0.png)
# Intuition
The problem requires us to find n missing dice rolls such that the overall mean (average value) of n + m rolls equals the given mean. We know the result of m rolls (given in the rolls array) and the integer mean, and we need to compute the missing n dice rolls.

- Intuition:
    - Let n be the number of missing rolls and m be the length of the rolls array.
    - The mean of n + m dice rolls is defined as (sum of all dice rolls) / (n + m) = mean.
    - We can rearrange this equation to compute the sum of all dice rolls as mean * (n + m).
    - From this, we can calculate the sum of the missing n rolls by subtracting the sum of the observed rolls from the total sum needed for the mean.
# Approach
1. Calculate Total Sum:

    - We calculate the total sum of all n + m rolls as mean * (n + m).
    - Subtract the sum of the known m rolls from this total sum to get the required sum for the missing n rolls.
2. Check for Feasibility:

    - Each dice roll is between 1 and 6. Hence, the sum of the missing n rolls must be within the range [n * 1, n * 6].
    - If the sum required for the missing rolls is outside this range, return an empty array because it's impossible to achieve the given mean.
3. Distribute the Missing Rolls:

    - If the sum required for the missing rolls is feasible, distribute it across the n missing rolls.
    - Start by assigning the integer division of the sum by n to each roll. Then distribute any remainder one by one among the rolls to ensure all rolls sum up to the required total.
# Complexity
- Time Complexity: O(m + n) because we first sum the m elements in the rolls array and then distribute the values across the n missing rolls.
- Space Complexity: O(n) for storing the n missing rolls.
# Code
```cpp []
class Solution {
public:
    vector<int> missingRolls(vector<int>& rolls, int mean, int n) {
        ios::sync_with_stdio(false);
        cin.tie(nullptr);

        int nNumsSum = 0;
        for(int i : rolls) nNumsSum += i;

        int m=rolls.size();
        int totalLength = n+m;

        int mNumsSum = mean*totalLength - nNumsSum;     // formula to Find mean -> (nNumsSum + X) / (n+m) = mean
                                                        // So, X = mean * (n+m) - nNumsSum;

        if(n*6 < mNumsSum || mNumsSum<n) return {};     // for (n*6 < mNumsSum) see Constraints
        
        int rem = mNumsSum % n;
        int q   = mNumsSum / n;

        vector<int> res(n,q);
        for(int i=1; i<=rem; i++)
            res[i]++;

        return res;
    }
};
```
```Java []
class Solution {
    public int[] missingRolls(int[] rolls, int mean, int n) {
        int m = rolls.length;
        int totalSum = mean * (n + m);
        int observedSum = 0;
        
        for (int roll : rolls) {
            observedSum += roll;
        }
        
        int missingSum = totalSum - observedSum;
        
        if (missingSum < n || missingSum > 6 * n) {
            return new int[0];
        }
        
        int base = missingSum / n;
        int remainder = missingSum % n;
        
        int[] result = new int[n];
        for (int i = 0; i < n; i++) {
            result[i] = base + (i < remainder ? 1 : 0);
        }
        
        return result;
    }
}

```
```Python []
class Solution:
    def missingRolls(self, rolls, mean, n):
        m = len(rolls)
        total_sum = mean * (n + m)
        observed_sum = sum(rolls)
        
        missing_sum = total_sum - observed_sum
        
        if missing_sum < n or missing_sum > 6 * n:
            return []
        
        base = missing_sum // n
        remainder = missing_sum % n
        
        result = [base] * n
        for i in range(remainder):
            result[i] += 1
        
        return result

```
```Javascript []
var missingRolls = function(rolls, mean, n) {
    let m = rolls.length;
    let totalSum = mean * (n + m);
    let observedSum = rolls.reduce((a, b) => a + b, 0);
    
    let missingSum = totalSum - observedSum;
    
    if (missingSum < n || missingSum > 6 * n) {
        return [];
    }
    
    let base = Math.floor(missingSum / n);
    let remainder = missingSum % n;
    
    let result = new Array(n).fill(base);
    for (let i = 0; i < remainder; i++) {
        result[i] += 1;
    }
    
    return result;
};

```
![Please hit the upvote button (1).png](./images/1.png)

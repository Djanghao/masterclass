# Binary Search || C++ || Easy to Implement

**Author:** kartikeyy31
**Votes:** 22
**Link:** [https://leetcode.com/problems/maximum-number-of-alloys/solutions/4053886/](https://leetcode.com/problems/maximum-number-of-alloys/solutions/4053886/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- **Imp Note :** All alloys must be created with the same machine.
- If max no. of alloys to be formed is **X** then we can always form **less than X** no. of alloys.
- That's why, I used a binary search to find the answer based on the above intuition. 
# Approach
<!-- Describe your approach to solving the problem. -->
- If we fixed the **alloys** to be formed **(say mid)**, then I have calculated the minimum budget required to form that much quantity of alloys **(mid)**.
- For the calculation of **minimum budget**, I have iterated through all the machines to calculate the **budget** for **each machines**.
- If at any moment, the **calculated budget** comes out to be less than the **given budget** then in that case, I have returned **true** which means, we can form the **mid** quantity of alloys.

# Complexity
- Time complexity: **O(log(high-low) * k * n)**, where (high-low) is the range of binary search, k is the no of machines & n is the machine size. 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->


<!-- - Space complexity: -->
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# C++ Implementation
``` C++
class Solution {
private:
    bool isPossible(int n, int k, int budget, vector<vector<int>> &composition, vector<int> &stock, 
                    vector<int> &costs, int fixed_alloy) {
        
        for (int i = 0; i < k; i++) {
            long long calBudget = 0;
            for (int j = 0; j < n; j++) {
                // this much quantity of jth metal is required to form the "fixed_alloy";
                long long required = 1LL*composition[i][j]*fixed_alloy;
                // subtracting the stocked portion of the jth metal;
                required -= stock[j];
                if (required > 0) {
                    // adding the cost for required quantity of jth metal to form the "fixed_alloy";
                    calBudget += 1LL*required*costs[j];
                }
            }
            // "fixed alloy can be formed with the ith machine";
            if (calBudget <= 1LL*budget) return true;
        }
        
        // can't be formed with any of the machine;
        return false;
    }
public:
    int maxNumberOfAlloys(int n, int k, int budget, vector<vector<int>> &composition, vector<int> &stock, vector<int> &cost) {
        
        int low = 1, high = 1e9;
        int ans = 0; // intialise the ans = 0;

        while (low <= high) {
            int mid = low + (high-low)/2;
            if (isPossible(n, k, budget, composition, stock, cost, mid)) {
                low = mid + 1;
                ans = mid; // we can form the "mid" quantity of alloys from any of the compositions in the given "budget";
            } else {
                high = mid - 1;
            }
        }

        return ans;
    }
};
```
# Fastest execution || Beats 100% users with java & typescript || python3 || C++ || Greedy

**Author:** SanketSawant18
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-the-maximum-sum-of-node-values/solutions/5176710/](https://leetcode.com/problems/find-the-maximum-sum-of-node-values/solutions/5176710/)

---

# Approach
Greedy

# Complexity
- Time complexity: O(n)

- Space complexity: O(1)

# Explanation
1. **Class Definition:**

- We define a class Solution which contains the method maximumValueSum.
2. **Method Signature:**

- **The method maximumValueSum takes three parameters:**
    - int[] nums: An array of integers representing the values of the nodes.
    - int k: An integer to be used for XOR operations.
    - int[][] edges: A 2D array representing the edges of the tree (though it's not actually used in the computation).
3. **Variables Initialization:**

- bestSum (of type long): This will store the best possible sum we can achieve.
- cnt (of type int): This will count how many times the value of a node increases when XORed with k.
4. **Loop through nums:**

- **For each num in nums:**
    - Calculate the maximum of the original value num and the value after XORing with k (num ^ k). Add this maximum value to bestSum.
    - Check if XORing num with k results in a larger value than num. If it does, increment the cnt counter.
5. **Adjusting the Sum for Odd cnt:**

- If cnt is odd, it means that we have an imbalance in the number of nodes that benefit from XORing with k.
- To balance it, we need to subtract the smallest possible difference between a node's original value and its XORed value from bestSum.
- We initialize minDifference to the maximum possible integer value (Integer.MAX_VALUE).
- Loop through each num in nums to find the minimum difference Math.abs(num - (num ^ k)).
- Subtract this minDifference from bestSum.
6. **Return the Result:**

- Finally, return the calculated bestSum.

---

```java []
class Solution {
    public long maximumValueSum(int[] nums, int k, int[][] edges) {
        long bestSum = 0;
        int cnt = 0;
        
        // Compute the best possible sum and count the number of nodes where XORing increases the value
        for (int num : nums) {
            bestSum += Math.max(num, num ^ k);
            if ((num ^ k) > num) {
                cnt++;
            }
        }
        
        // If cnt is odd, we need to adjust the sum
        if (cnt % 2 != 0) {
            int minDifference = Integer.MAX_VALUE;
            for (int num : nums) {
                minDifference = Math.min(minDifference, Math.abs(num - (num ^ k)));
            }
            bestSum -= minDifference;
        }
        
        return bestSum;
    }
}

```
```python3 []
class Solution:
    def maximumValueSum(self, nums: List[int], k: int, edges: List[List[int]]) -> int:
        best_sum = sum(max(n, k ^ n) for n in nums)
        cnt = sum((n ^ k) > n for n in nums)  
        return best_sum - (min(abs(n - (n ^ k)) for n in nums) if cnt % 2 else 0)
```
```C++ []
#include <vector>
#include <algorithm>
#include <cmath>
#include <numeric>
using namespace std;

class Solution {
public:
    long long maximumValueSum(vector<int>& nums, int k, vector<vector<int>>& edges) {
        long long bestSum = 0;
        int cnt = 0;

        // Compute the best possible sum and count the number of nodes where XORing increases the value
        for (int num : nums) {
            bestSum += max(num, num ^ k);
            if ((num ^ k) > num) {
                cnt++;
            }
        }

        // If cnt is odd, we need to adjust the sum
        if (cnt % 2 != 0) {
            int minDifference = INT_MAX;
            for (int num : nums) {
                minDifference = min(minDifference, abs(num - (num ^ k)));
            }
            bestSum -= minDifference;
        }

        return bestSum;
    }
};

```
```Typescript []
function maximumValueSum(nums: number[], k: number, edges: number[][]): number {
    let bestSum: number = 0;
    let cnt: number = 0;

    // Compute the best possible sum and count the number of nodes where XORing increases the value
    for (let num of nums) {
        bestSum += Math.max(num, num ^ k);
        if ((num ^ k) > num) {
            cnt++;
        }
    }

    // If cnt is odd, we need to adjust the sum
    if (cnt % 2 !== 0) {
        let minDifference: number = Number.MAX_SAFE_INTEGER;
        for (let num of nums) {
            minDifference = Math.min(minDifference, Math.abs(num - (num ^ k)));
        }
        bestSum -= minDifference;
    }

    return bestSum;
}
```

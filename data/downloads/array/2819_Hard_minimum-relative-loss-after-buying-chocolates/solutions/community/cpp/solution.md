# Binary Search for C++, Java & Python

**Author:** cpcs
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-relative-loss-after-buying-chocolates/solutions/3919677/](https://leetcode.com/problems/minimum-relative-loss-after-buying-chocolates/solutions/3919677/)

---

# Intuition
Offline process the query. Sort them first. For each query (k, m), we put all the chocolates with price no larger than k on the left side, and all the other chocolates to the right side.

This part can be done by sliding window after sorting the prices.

For the left side, each one contributes the relative diff by its own price.
For the right side, each one contributes the relative diff by k * 2 - its own price.

Clearly we should select the first seveal (cheapest) ones from the left side and the last several (most expensive) ones from right side.

At the very beginning we selected as many as possible on the left side, Note there might be less m chocolates on the left side and in this case we have to select some (the most expensive ones) from the right side anyway.

Then let's replace the selected most expensive one from left side with the unselected most expensive one on the right side as long as it can reduced the relative diff.

Namely, if price[left] > k * 2 - price[right], we should always do the replacment.

Note, both price[left] and price[right] are decreasing (non incresing),
so k * 2 - price[right] is increasing (non decreasing), so we should just stop when finding the first place when price[left'] <= k  * 2 - price[right'], namely we can do a binary search on the maximum number of chocolates we can replace. 

To calculate the relatvie difference, we just use prefix sum for help since both sides are just sum of conseutive prices (in subarray). 


# Complexity
- Time complexity:
O(n + q) where n is the number of chocolates and q is the number of queries.

- Space complexity:
O(q(logq + logn)) where n is the number of chocolates and q is the number of queries.

# Code
C++
```
class Solution {
public:
    vector<long long> minimumRelativeLosses(vector<int>& prices, vector<vector<int>>& queries) {
        sort(prices.begin(), prices.end());
        const int n = prices.size();
        vector<long long> sum(n + 1);
        for (int i = 1; i <= n; ++i) {
            sum[i] = sum[i - 1] + prices[i - 1];
        }
        const int m = queries.size();
        vector<int> ind(m);
        for (int i = 0; i < m; ++i) {
            ind[i] = i;
        }
        sort(ind.begin(), ind.end(), [&](const int x, const int y) {
            return queries[x][0] < queries[y][0];
        });
        int j = 0;
        vector<long long> r(m);
        for (int i : ind) {
            const int p = queries[i][0], pp = p << 1, num = queries[i][1];
            for (; j < n && prices[j] <= p; ++j)
            ;
            int num1 = min(num, j);
            int left = 1, right = min(num1, n - num);
            while (left <= right) {
                const int mid = (left + right) >> 1;
                if (prices[num1 - mid] > pp - prices[n - (num - num1) - mid]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
            num1 -= left - 1;
            const long long num2 = num - num1;
            r[i] = num2 * pp - (sum[n] - sum[n - num2]) + sum[num1];
        }
        return r;
    }

};
```

Java
```
class Solution {
    public long[] minimumRelativeLosses(int[] prices, int[][] queries) {
        Arrays.sort(prices);
        int n = prices.length;
        long[] sumArr = new long[n + 1];
        for (int i = 1; i <= n; ++i) {
            sumArr[i] = sumArr[i - 1] + prices[i - 1];
        }
        
        int m = queries.length;
        int[] ind = new int[m];
        for (int i = 0; i < m; ++i) {
            ind[i] = i;
        }
        ind = Arrays.stream(ind).boxed()
        .sorted((a, b) -> queries[a][0] - queries[b][0])
        .mapToInt(i -> i)
        .toArray();
        int j = 0;
        long[] result = new long[m];
        
        for (int i : ind) {
            int p = queries[i][0];
            int num = queries[i][1];
            int pp = p << 1;
            while (j < n && prices[j] <= p) {
                j++;
            }
            int num1 = Math.min(num, j);
            int left = 1, right = Math.min(num1, n - num);
            while (left <= right) {
                int mid = (left + right) >> 1;
                if (prices[num1 - mid] > pp - prices[n - (num - num1) - mid]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
            num1 -= left - 1;
            long num2 = num - num1;
            result[i] = num2 * pp - (sumArr[n] - sumArr[n - (int) num2]) + sumArr[num1];
        }
        
        return result;
    }
}

```

Python
```
class Solution:
    def minimumRelativeLosses(self, prices: List[int], queries: List[List[int]]) -> List[int]:
        prices.sort()
        n = len(prices)
        sum_arr = [0] * (n + 1)
        for i in range(1, n + 1):
            sum_arr[i] = sum_arr[i - 1] + prices[i - 1]

        m = len(queries)
        ind = list(range(m))
        ind.sort(key=lambda x: queries[x][0])
        j = 0
        result = [0] * m

        for i in ind:
            p, num = queries[i]
            pp = p << 1
            while j < n and prices[j] <= p:
                j += 1
            num1 = min(num, j)
            left, right = 1, min(num1, n - num)
            while left <= right:
                mid = (left + right) >> 1
                if prices[num1 - mid] > pp - prices[n - (num - num1) - mid]:
                    left = mid + 1
                else:
                    right = mid - 1
            num1 -= left - 1
            num2 = num - num1
            result[i] = num2 * pp - (sum_arr[n] - sum_arr[n - num2]) + sum_arr[num1]

        return result
```
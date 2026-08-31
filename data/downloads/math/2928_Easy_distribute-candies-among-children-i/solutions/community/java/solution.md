# 【O(N) EASY TO UNDERSTAND】 ??How to reduce the problem??

**Author:** ch233
**Votes:** 6
**Link:** [https://leetcode.com/problems/distribute-candies-among-children-i/solutions/4276837/](https://leetcode.com/problems/distribute-candies-among-children-i/solutions/4276837/)

---

# Intuition
Reduce the question to how can we split into two people instead of three.

# Approach
Decide the first number, we can at most pick Math.min(limit, n) for the first person. Let's say we give i for the first person, then we're tryint to split n2 (n - i) for two person.  Observe if we have 4 left with differen limit
n2 = 4, limit = 4:
4, 0
3, 1
2, 2
1, 3
0, 4

n2 = 4, limit = 3;
3, 1
2, 2
1, 3

Notice that we can choose an upper bound and a lower bound, the upper bound would be similar to the first number's, we can take Math.min(limit, n2), because we can at most take these amount of j (total amount we give to the second person). Then we can decide a lower bound. 
During the process we can check if the rest of n and limit is still valid.

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(1)

# Code
```
class Solution {
    public int distributeCandies(int n, int limit) {
        if (limit * 3 < n) {
            return 0;
        }
        // how many combination of 3 numbers that sum up to n but none of them exceed limit
        int res = 0;
        for (int i = Math.min(limit, n); i >= 0; i--) {
            // pick for the first num
            int n2 = n - i;
            if (n2 > limit * 2) continue;
            // how many combination of 2 numbers that sum up to n2 but none of them exceed limit
            int j = Math.min(limit, n2); // max we can pick from the second one
            // we need to do a binary search here
            int k = Math.max(0, n2 - j);
            res += j - k + 1;
        }
        return res;
    }
}
```
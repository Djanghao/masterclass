# (JAVA) Easy recursive DP

**Author:** a068864
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-number-of-k-even-arrays/solutions/5993763/](https://leetcode.com/problems/find-the-number-of-k-even-arrays/solutions/5993763/)

---

# Intuition
Notice that this problem has overlapping subproblems and optimal substructure. Each state indicates the count of k-even arrays given the length, the count of k-even indices so far, and whether the last index is even or not. At each state, we must decide if the number at the current index is even or not, and return the sum of all possibilies. 

# Approach
We will use top-down approach with a 3-D array as our memo table. Also, the range of int in Java is too small so we need to use the long type instead. 

# Complexity
- Time complexity:
$$O(n * k)$$

- Space complexity:
$$O(n * k)$$

# Code
```java []
class Solution {
    int mod = 1000000007;
    Long[][][] cache;

    public int countOfArrays(int n, int m, int k) {
        cache = new Long[n][k + 1][2];
        return (int) helper(n, m, k, 0, 0, 0) % mod;
    }

    private long helper(int n, int m, int k, int index, int count, int prevEven) {
        if (index >= n) {
            return count == k ? 1 : 0;
        }
        if (count > k) { // Early pruning
            return 0;
        }
        if (cache[index][count][prevEven] != null) {
            return cache[index][count][prevEven];
        }
        long currEven = (m / 2 * helper(n, m, k, index + 1, count + prevEven, 1)) % mod;
        long currOdd = ((m + 1) / 2 * helper(n, m, k, index + 1, count, 0)) % mod;
        cache[index][count][prevEven] = (currEven + currOdd) % mod;
        return cache[index][count][prevEven];
    }
}
```
# a

**Author:** user3043SB
**Votes:** 1
**Link:** [https://leetcode.com/problems/make-the-xor-of-all-segments-equal-to-zero/solutions/4572089/](https://leetcode.com/problems/make-the-xor-of-all-segments-equal-to-zero/solutions/4572089/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import java.util.*;


public class Solution {
    // A^0 = A
    // A^A = 0

    // A[l,r] ^ A[r+1] = 0 when A[l,r] = A[r+1]
    // xor[0,k-1] == xor[1,k]
    // A[0]^xor[1,k-1] == xor[1,k-1]^A[k]
    // A[0] == A[k]
    // for every window of size K to have the same XOR=0, means we MUST have the same values in each window K
    // in the exact same order repeating !!!!! each num will appear K indexes apart in the final result: i...i+k
    // 440440440; so problem becomes: make every A[i] === A[i+k] with min changes !!!!!!!

    //           x,x,x                  x,x,x
    // from [3,4,5,2,1,7,3,4,7] to [3,4,7,3,4,7,3,4,7]  //   k = 3  // Output: 3
    // 0: 3,3,2
    // 1: 4,4,1
    // 2: 7,7,5

    // NOTICE KEY DETAIL: A[i] < 2^10 < 1024 very SMALL NUMBER !!!!!!! also len < 2000 means we will have high time complexity!!!

    // IDEA: try all 1024 vals at each of the K positions => O(1024^K) brute force
    // improve with DP !!! notice: A^B <= max(A,B)   O(K*1024*1024) can even reduce space to O(1024) as we look back only 1 step !!

    // dp[i][xor^Q] = dp[i-1][xor] + cost(Q) // choose number Q and add its cost

    // 01201 = EDGE CASE !!!! some positions may have more elems as they appear more !!!
//    public int minChanges(int[] A, int k) {
//        int n = A.length;
//        int[][] cnt = new int[k][1024];
//        int[] posFreq = new int[k];
//        for (int i = 0, q = 0; i < n; i++, q++) {
//            posFreq[q % k]++;
//            cnt[q % k][A[i]]++;
//        }
//
//        int[][] dp = new int[k][1024];
//        for (int i = 0; i < k; i++) {
//            Arrays.fill(dp[i], Integer.MAX_VALUE);
//            for (int num = 0; num < 1024; num++) {
//                for (int prevXor = 0; prevXor < 1024; prevXor++) {
//                    if (i == 0 && prevXor > 0) break; // only possible previous xor at index 0 is 0
//
//                    int xor = prevXor ^ num;
//                    int cost = posFreq[i] - cnt[i][num];
//                    if (i > 0) cost += dp[i - 1][prevXor];
//                    dp[i][xor] = Math.min(dp[i][xor], cost);
//                }
//            }
//        }
//
//        return dp[k - 1][0];
//    }
    // we can also flip it the other way around because of XOR properties:
    // instead of choosing number and prevXor in the DP loop, we can choose number and CURRENT XOR
    // so prevXor = currentXor ^ num

    // This way we can think about optimizing: e.g. for each num at position i there are 2 choices:
    // 1) num exists at this position so cost will be below max cost
    // 2) num DOESNT exist at this position so cost will be MAX COST
    // so for all numbers that DONT exist at this position we add the same constant cost = posFreq[q % k]
    // but which of them is the best one?? the one that has min cost at the prev position (i-1) !!!!
    // so when trying

    // O(K*1024*N/K)
    public int minChanges(int[] A, int k) {
        int n = A.length;
        HashMap<Integer, Integer>[] cnt = new HashMap[k];
        int[] posFreq = new int[k];
        for (int i = 0, q = 0; i < n; i++, q++) {
            int id = q % k;
            if (cnt[id] == null) cnt[id] = new HashMap<>();
            posFreq[id]++;
            cnt[id].put(A[i], cnt[id].getOrDefault(A[i], 0) + 1);
        }

        int[][] dp = new int[k][1024];
        int minCostPrevXor = 0;
        for (int i = 0; i < k; i++) {
            int minCostAtStep = Integer.MAX_VALUE;
            int minCostXorAtStep = 0;
            for (int xor = 0; xor < 1024; xor++) {
                if (i == k - 1 && xor > 0) break; // solved already
                dp[i][xor] = Integer.MAX_VALUE;
                if (i == 0) { // base case
                    dp[i][xor] = posFreq[i] - cnt[i].getOrDefault(xor, 0);
                    if (dp[i][xor] < minCostAtStep) {
                        minCostAtStep = dp[i][xor];
                        minCostXorAtStep = xor;
                    }
                    continue; // only possible previous xor at index 0 is 0
                }

                dp[i][xor] = Math.min(dp[i][xor], dp[i - 1][minCostPrevXor] + posFreq[i]);
                for (int seenNum : cnt[i].keySet()) { // O(N/k) as it is the max num of diff elems at position i
                    int cost = dp[i - 1][xor ^ seenNum] + posFreq[i] - cnt[i].get(seenNum);
                    dp[i][xor] = Math.min(dp[i][xor], cost);
                }
                if (dp[i][xor] < minCostAtStep) {
                    minCostAtStep = dp[i][xor];
                    minCostXorAtStep = xor;
                }
            }
            minCostPrevXor = minCostXorAtStep;
        }

        return dp[k - 1][0];
    }


    // Solution 1 reversed as mentioned above
//    public int minChanges(int[] A, int k) {
//        int n = A.length;
//        HashMap<Integer, Integer>[] cnt = new HashMap[k];
//        int[] posFreq = new int[k];
//        for (int i = 0, q = 0; i < n; i++, q++) {
//            int id = q % k;
//            if (cnt[id] == null) cnt[id] = new HashMap<>();
//            posFreq[id]++;
//            cnt[id].put(A[i], cnt[id].getOrDefault(A[i], 0) + 1);
//        }
//
//        int[][] dp = new int[k][1024];
//        for (int i = 0; i < k; i++) {
//            Arrays.fill(dp[i], Integer.MAX_VALUE);
//            for (int xor = 0; xor < 1024; xor++) {
//                if (i == 0) {
//                    dp[i][xor] = posFreq[i] - cnt[i].getOrDefault(xor, 0);
//                    continue; // only possible previous xor at index 0 is 0
//                }
//
//                for (int num = 0; num < 1024; num++) {
//                    int prevXor = xor ^ num;
//                    int cost = posFreq[i] - cnt[i].getOrDefault(num, 0);
//                    cost += dp[i - 1][prevXor];
//                    dp[i][xor] = Math.min(dp[i][xor], cost);
//                }
//            }
//        }
//
//        return dp[k - 1][0];
//    }

}


```
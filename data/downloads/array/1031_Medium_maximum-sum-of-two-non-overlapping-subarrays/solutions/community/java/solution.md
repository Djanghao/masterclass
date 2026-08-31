# O(n) thought process Java

**Author:** 133c7
**Votes:** 17
**Link:** [https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/solutions/913234/](https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/solutions/913234/)

---

The below documents a thought process to arrive at a solution with `~O(N)` time and `~O(N)` space where `N` is the length if the input array.

A brute force approach would be:

* pick a starting position for L, calculate the sum
* pick a starting position for M, calculate the sum
* calculate the sum of the sums. Keep track of the maximum thus far.
* Repeat by picking other starting positions

How can we do better? One bottleneck is that to calculate the sum of subarray with a length `M`, it takes `M` array access, and we have to repeat the process multiple times. We can get around it by doing using a previously calculated sum to calculate a new sum. The idea is similar to rolling hash in Rabin-Karp substring matching algorithm.

Let's define two arrays `Ls` and `Ms`, where `i`th value is the sum of the subarray of size `L` and `M`, respectively, that begins at `i`.

For an input of `[3,8,1,3,2,1,8,9,0]`, `L=3`, `M=2`,  let's consider `Ls` and `Ms`.

| A | 3| 8  | 1  | 3  | 2  | 1  | 8  | 9  | 0  |  
|---|---|---|---|---|---|---|---|---|---|
| Ls | 12  | 12  |6   | 6  | 11  | 18  | 17  | 0  | 0  |
| Ms |  11 | 9  | 4  | 5  | 3  | 9  | 17  |9   |0   |

How can we calculate those entries efficiently? If we know the current entry at `Ls[i]`, the next entry is `Ls[i] - A[i-1] + A[i+L-1]`. We discard the leading value, and add the new value at the tail.

Given `Ls` and `Ms`, we can find our answer by the following process

* Pick a position in `Ls[i]`, and find the maximum value in `Ms[i+L ... end]`. Add values.
* Pick a position in `Ms[i]`, and find the maximum value in `Ls[i+L ... end]`. Add values.

What is the bottleneck? The bottleneck is that, to find the maximum value in the remaining eligible subarrays, we need to keep iterating. How can we do better?

Let's simply keep track of the maximum `Ms` and `Ls` in `Ms[i...end]` and `Ls[i...end]`. We can use an array to keep track of these values. Let's call them `mmax` and `lmax`.

| A | 3| 8  | 1  | 3  | 2  | 1  | 8  | 9  | 0  |  
|---|---|---|---|---|---|---|---|---|---|
| Ls | 12  | 12  |6   | 6  | 11  | 18  | 17  | 0  | 0  |
| Ms |  11 | 9  | 4  | 5  | 3  | 9  | 17  |9   |0   |
| lmax |  18 | 18  | 18  | 18  | 18  | 17  | 0  | 0   |0   |
| mmax |  17 | 17  | 17  | 17  | 17  |17  | 9  |0   |0   |

Now, we can pick a starting position of subarray with length `L`, and instantly locate two things that we need to calculate the possible answer:

* the sum of the subarray of length `L`, that begins at the chosen position
* the maximum subarray sum for the eligible subarray with length `M`.

We can apply the same logic by for fixing a starting position of subarray with length `M`.

Below is an implementation of this idea.

```java
class Solution {
    public int maxSumTwoNoOverlap(int[] A, int L, int M) {
        int n = A.length;
        if (n == 0) {
            return 0;
        }
        if (L + M > n) {
            throw new IllegalArgumentException();
        }
        
        int[] Ls = new int[n];
        int[] Ms = new int[n];
        
        int lSum = 0;
        int mSum = 0;
        
        for (int i = 0; i <= n - L; i++) {
            if (i == 0) {
                for (int j = 0; j < L; j++) {
                    lSum += A[j];
                }
            } else {
                lSum = lSum - A[i-1] + A[i+L-1];
            }
            
            Ls[i] = lSum;
        }
        
        for (int i = 0; i <= n - M; i++) {
            if (i == 0) {
                for (int j = 0; j < M; j++) {
                    mSum += A[j];
                }
            } else {
                mSum = mSum - A[i-1] + A[i+M-1];
            }
            
            Ms[i] = mSum;
        }
        
        int[] lmax = new int[n+1];
        int[] mmax = new int[n+1];
        
        for (int i = n - 1; i >= 0; i--) {
            lmax[i] = Math.max(lmax[i+1], Ls[i]);
            mmax[i] = Math.max(mmax[i+1], Ms[i]);
        }

        int ans = 0;
        for (int i = 0; i <= n - L - 1; i++) {
            ans = Math.max(ans, Ls[i] + mmax[i+L]);
        }
        for (int i = 0; i <= n - M - 1; i++) {
            ans = Math.max(ans, Ms[i] + lmax[i+M]);
        }

        return ans;
    }
}
```

Let `N` be the length of `A`, then the code above takes `~O(N)` time and `~O(N)` space.
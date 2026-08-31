# Java Short & Best Solution O(NLogN), N=2^n with explanation (41 ms beats 100%)

**Author:** hdchen
**Votes:** 18
**Link:** [https://leetcode.com/problems/find-array-given-subset-sums/solutions/1421426/](https://leetcode.com/problems/find-array-given-subset-sums/solutions/1421426/)

---

**Intuition**
*  Given a set with size m. If we add one new element `B` to it, the size of the power set become `2*m` and it can be divided into 2 groups `left: {A0, A1, ..., An}` and `right: {A0 + B, A1 + B, ..., An + B}`
*  It looks like the problem can be solved recursively by finding the B first. But how?
*  If we sort the power set, we always can find `abs(B)` by calculating A[1] - A[0] no matter the power set contains any negative numbers or not.
*  We can pick the smallest one for the one group and add `abs(B)` to it to create the counterpart in another group and remove used numbers. Repeat the steps to build up these 2 groups.
*  How do we determine the +/- sign for `B`? We can determine it by checking which group the 0 belongs to. 0 is A[0]. If it belongs to left group, `B` is positive (`B = right{A[0]+B} - left{A[0]}`). Otherwise, it's negative (`B = left{A[0]+B} - right{A[0]}`).

**Algorithm**
1. Sort the power set
2. During each loop iteration, we find `abs(B)` by calculating A[1] - A[0] and which group the 0 belongs to. `Note:` there's always at least 1 zero element in each iteration to represent the empty set.
3. Divide the current power set into 2 groups. We always assign the first unused element to the left group and generate the corresponding element to the right group by adding `abs(B)` to it. If the current number already exists in the right group, we simply skip it. Since the sortness of the data is maintained, the check can be done easily.
4. Pick up the group contains 0 as the input for the next iteration because we remove `B` and the input for the next run will be another valid power set.

```
class Solution {
    public int[] recoverArray(int n, int[] sums) {
        Arrays.sort(sums);
        int m = sums.length;
        int[] res = new int[n], left = new int[m / 2], right = new int[m / 2];
        for (int i = 0; i < n; ++i) {
            int diff = sums[1] - sums[0], hasZero = 0, p = -1, q = -1, k = 0;
            for (int j = 0; j < m; ++j) {
                if (k <= q && right[k] == sums[j]) k++;
                else {
                    if (0 == sums[j]) hasZero = 1;
                    left[++p] = sums[j];
                    right[++q] = sums[j] + diff;
                }
            }
            if (1 == hasZero) {
                res[i] = diff;
                sums = left;
            } else {
                res[i] = -diff;
                sums = right;
            }
            m /= 2;
        }
        return res;
    }
}
```

**Update 08/24**
Thanks for [@kcsquared](https://leetcode.com/problems/find-array-given-subset-sums/discuss/1421426/Java-Short-and-Clean-Solution-O(N*2N)-with-explanation-(41-ms-beats-100)/1059152)'s comment. 
Here's the revised code.
```
class Solution {
    public int[] recoverArray(int n, int[] sums) {
        Arrays.sort(sums);
        int m = sums.length, zeroShift = 0;
        int[] res = new int[n];
        for (int i = 0; i < n; ++i) {
            int diff = sums[1] - sums[0], hasZero = 0, p = 0, k = 0, zpos = m;
            for (int j = 0; j < m; ++j) {
                if (k < p && sums[k] == sums[j]) k++;
                else {
                    if (zeroShift == sums[j]) zpos = p;
                    sums[p++] = sums[j] + diff;
                }
            }
            if (zpos >= m / 2) {
                res[i] = -diff;
            } else {
                res[i] = diff;
                zeroShift += diff;
            }
            m /= 2;
        }
        return res;
    }
}
```
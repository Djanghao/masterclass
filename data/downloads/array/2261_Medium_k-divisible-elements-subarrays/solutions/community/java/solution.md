# Three solutions: Trie, Rabin-Karp + Set, LCP-array O(N) time, O(N) space

**Author:** rs9
**Votes:** 25
**Link:** [https://leetcode.com/problems/k-divisible-elements-subarrays/solutions/2000201/](https://leetcode.com/problems/k-divisible-elements-subarrays/solutions/2000201/)

---

# First solution (Trie)
We use a trie to compactly store all possible subarrays.
 When we find out that the prefix doesn't exist, we increment answer and create another node in the tree
```
import java.util.ArrayList;
import java.util.List;

public class Solution {
    private static final int MAX_P = 200;

    public int countDistinct(int[] nums, int k, int p) {
        int n = nums.length;
        List<int[]> child = new ArrayList<>();
        child.add(new int[MAX_P + 1]);
        int nxt = 1, ans = 0;
        for (int i = 0; i < n; i++) {
            int count = 0, node = 0;
            int j = i;
            while (j < n && count <= k) {
                int c = nums[j++];
                if (c % p == 0) if (count++ == k) break;
                if (child.get(node)[c] == 0) {
                    ans++;
                    child.get(node)[c] = nxt++;
                    child.add(new int[MAX_P + 1]);
                }
                node = child.get(node)[c];
            }
        }
        return ans;
    }
}
```

This solution has O(N^2) space complexity and O(N^2) time complexity. 

# Rabin-Karp Rolling Hash
We use some incremental hashing function as we don't want to recalculate it for every possible subarray.
I took as mod the largest prime number below `(Long.MAX_VALUE-200)/201`, so the hash calculation never overflows.
This solution has drawbacks and it depends on some luck, cause it doesn't check any hash collisions.
```
public class Solution {
    private static final int MAX_P = 200;
    private static final long base = MAX_P + 1;
    private static final long mod = 45887423068929227L;

    public int countDistinct(int[] nums, int k, int p) {
        int n = nums.length;
        Set<Long> set = new HashSet<>();
        for (int i = 0; i < n; i++) {
            long hash = 0;
            for (int j = i, count = 0; j < n; j++) {
                if (nums[j] % p == 0) if (count++ == k) break;
                hash = (hash * base + nums[j]) % mod;
                set.add(hash);
            }
        }
        return set.size();
    }
}
```
This solution also has O(N^2) time complexity and O(N^2) space complexity.


# Suffix Array and Longest Common Prefix Array
Construction of Suffix Arrays is pretty hard theme, so I won't explain it here, but the listing of algos can be seen in appendix. You can read more about Suffix Arrays Construction at other resources.

We build suffix array, lcp-array and also for each position we calculate what is the longest valid string can start from this index.
For each element we calculate additional strings it can form. But we remember that some of this strings can be added also by the next element in the suffix array.

```
public class Solution {
    private static final int MAX_P = 200;

    public int countDistinct(int[] nums, int k, int p) {
        int n = nums.length;
        if (n == 0) return 0;
        if (n == 1) {
            if (k >= 1 || nums[0] % p != 0) return 1;
            else return 0;
        }
        int[] maxLength = new int[n];
        for (int l = n - 1, r = n, count = 0; l >= 0; l--) {
            if (nums[l] % p == 0) {
                count++;
                while (count > k) if (nums[--r] % p == 0) count--;
            }
            maxLength[l] = r - l;
        }

        int[] suffixArray = buildSuffixArray(nums, MAX_P);
        int[] invSuffixArray = inverseSuffixArray(suffixArray);
        int[] lcp = buildLongestCommonPrefixArray(nums, suffixArray, invSuffixArray);

        int ans = maxLength[suffixArray[n - 1]];
        for (int sortedPos = n - 2; sortedPos >= 0; sortedPos--) {
            int maxLen = maxLength[suffixArray[sortedPos]];
            int commonLength = lcp[sortedPos];
            if (commonLength < maxLen) ans += maxLen - commonLength;
        }
        return ans;
    }
}
```

This solution has O(N) time complexity and O(N) space compelxity.

# Appendix
Used algo:
K\xE4rkk\xE4inen, Sanders algorithm to build suffix array in O(n)
Kasai, Arimura, Arikawa, Lee, Park algorithm to build LCP array in O(n)

```
	// arr.length>=2, s[i]>=1, s[i]<=K
    private static int[] buildSuffixArray(int[] arr, int K) {
        int n = arr.length;
        int[] s = Arrays.copyOf(arr, n + 3);
        int[] SA = new int[n];
        suffixArray(s, SA, n, K);
        return SA;
    }

    private static int[] inverseSuffixArray(int[] suffixArray) {
        int n = suffixArray.length;
        int[] ans = new int[n];
        for (int i = 0; i < n; i++) ans[suffixArray[i]] = i;
        return ans;
    }

    private static int[] buildLongestCommonPrefixArray(int[] arr, int[] suffixArray, int[] invSuffixArray) {
        int n = arr.length;
        int[] lcp = new int[n - 1];
        int k = 0;
        for (int i = 0; i < n; i++) {
            if (k > 0) k--;
            if (invSuffixArray[i] == n - 1) {
                k = 0;
            } else {
                int j = suffixArray[invSuffixArray[i] + 1];
                while (i + k < n && j + k < n && arr[i + k] == arr[j + k]) k++;
                lcp[invSuffixArray[i]] = k;
            }
        }
        return lcp;
    }

    //Lexicographic order for pairs.
    private static boolean leq(int a1, int a2, int b1, int b2) {
        return (a1 < b1 || (a1 == b1 && a2 <= b2));
    }

    //Lexicographic order for triples.
    private static boolean leq(int a1, int a2, int a3, int b1, int b2, int b3) {
        return (a1 < b1 || (a1 == b1 && leq(a2, a3, b2, b3)));
    }

    private static void suffixArray(int[] s, int[] SA, int n, int K) {
        int n0 = (n + 2) / 3, n1 = (n + 1) / 3, n2 = n / 3, n02 = n0 + n2;
        int[] s12 = new int[n02 + 3], SA12 = new int[n02 + 3], s0 = new int[n0], SA0 = new int[n0];

        for (int i = 0, j = 0; i < n + (n0 - n1); i++) if (i % 3 != 0) s12[j++] = i;

        radixPass(s12, SA12, s, 2, n02, K);
        radixPass(SA12, s12, s, 1, n02, K);
        radixPass(s12, SA12, s, 0, n02, K);

        // find lexicographic names of triples
        int name = 0, c0 = -1, c1 = -1, c2 = -1;
        for (int i = 0; i < n02; i++) {
            if (s[SA12[i]] != c0 || s[SA12[i] + 1] != c1 || s[SA12[i] + 2] != c2) {
                name++;
                c0 = s[SA12[i]];
                c1 = s[SA12[i] + 1];
                c2 = s[SA12[i] + 2];
            }
            if (SA12[i] % 3 == 1) {
                s12[SA12[i] / 3] = name;
            } // left half
            else {
                s12[SA12[i] / 3 + n0] = name;
            } // right half
        }

        // recurse if names are not yet unique
        if (name < n02) {
            suffixArray(s12, SA12, n02, name);
            // store unique names in s12 using the suffix array
            for (int i = 0; i < n02; i++) s12[SA12[i]] = i + 1;
        } else // generate the suffix array of s12 directly
            for (int i = 0; i < n02; i++) SA12[s12[i] - 1] = i;

        // stably sort the mod 0 suffixes from SA12 by their first character
        for (int i = 0, j = 0; i < n02; i++) if (SA12[i] < n0) s0[j++] = 3 * SA12[i];
        radixPass(s0, SA0, s, 0, n0, K);

        // merge sorted SA0 suffixes and sorted SA12 suffixes
        for (int p = 0, t = n0 - n1, k = 0; k < n; k++) {
            int i = getI(SA12, n0, t); // pos of current offset 12 suffix
            int j = SA0[p]; // pos of current offset 0 suffix
            if (SA12[t] < n0 ? // different compares for mod 1 and mod 2 suffixes
                    leq(s[i], s12[SA12[t] + n0], s[j], s12[j / 3]) :
                    leq(s[i], s[i + 1], s12[SA12[t] - n0 + 1], s[j], s[j + 1], s12[j / 3 + n0])
            ) {// suffix from SA12 is smaller
                SA[k] = i;
                t++;
                if (t == n02) // done --- only SA0 suffixes left
                    for (k++; p < n0; p++, k++) SA[k] = SA0[p];
            } else {// suffix from SA0 is smaller
                SA[k] = j;
                p++;
                if (p == n0) // done --- only SA12 suffixes left
                    for (k++; t < n02; t++, k++) SA[k] = getI(SA12, n0, t);
            }
        }
    }

    private static int getI(int[] SA12, int n0, int t) {
        return SA12[t] < n0 ? SA12[t] * 3 + 1 : (SA12[t] - n0) * 3 + 2;
    }

    private static void radixPass(int[] a, int[] b, int[] r, int shift, int n, int K) {
        int[] c = new int[K + 1]; // counter array
        for (int i = 0; i < n; i++) c[r[a[i] + shift]]++; // count occurrences
        for (int i = 0, sum = 0; i <= K; i++) { // exclusive prefix sums
            int t = c[i];
            c[i] = sum;
            sum += t;
        }
        for (int i = 0; i < n; i++) b[c[r[a[i] + shift]]++] = a[i];
    }
```


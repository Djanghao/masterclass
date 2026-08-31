# Longest common subpath

**Author:** r9n
**Votes:** 8
**Link:** [https://leetcode.com/problems/longest-common-subpath/solutions/5638197/](https://leetcode.com/problems/longest-common-subpath/solutions/5638197/)

---


```
using System;
using System.Collections.Generic;

public class Solution {
    private const long MOD1 = 1000000007;
    private const long MOD2 = 1000000009;
    private const long BASE1 = 1000003;
    private const long BASE2 = 1000033;

    public int LongestCommonSubpath(int n, int[][] paths) {
        int left = 0;
        int right = int.MaxValue;

        foreach (var path in paths) {
            right = Math.Min(right, path.Length);
        }

        while (left < right) {
            int mid = (left + right + 1) / 2;
            if (HasCommonSubpath(paths, mid)) {
                left = mid;
            } else {
                right = mid - 1;
            }
        }

        return left;
    }

    private bool HasCommonSubpath(int[][] paths, int length) {
        var commonHashes = new HashSet<(long, long)>(ComputeHashes(paths[0], length));

        for (int i = 1; i < paths.Length; i++) {
            var currentHashes = new HashSet<(long, long)>(ComputeHashes(paths[i], length));
            commonHashes.IntersectWith(currentHashes);
            if (commonHashes.Count == 0) {
                return false;
            }
        }

        return true;
    }

    private IEnumerable<(long, long)> ComputeHashes(int[] path, int length) {
        var hashes = new List<(long, long)>();
        long hash1 = 0, hash2 = 0;
        long baseL1 = 1, baseL2 = 1;

        for (int i = 0; i < length; i++) {
            hash1 = (hash1 * BASE1 + path[i]) % MOD1;
            hash2 = (hash2 * BASE2 + path[i]) % MOD2;
            baseL1 = (baseL1 * BASE1) % MOD1;
            baseL2 = (baseL2 * BASE2) % MOD2;
        }

        hashes.Add((hash1, hash2));

        for (int i = length; i < path.Length; i++) {
            hash1 = (hash1 * BASE1 + path[i] - path[i - length] * baseL1 % MOD1 + MOD1) % MOD1;
            hash2 = (hash2 * BASE2 + path[i] - path[i - length] * baseL2 % MOD2 + MOD2) % MOD2;
            hashes.Add((hash1, hash2));
        }

        return hashes;
    }
}

```
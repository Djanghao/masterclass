# Short and clear JavaScript solution, works for different password requirements

**Author:** loctn
**Votes:** 8
**Link:** [https://leetcode.com/problems/strong-password-checker/solutions/91010/](https://leetcode.com/problems/strong-password-checker/solutions/91010/)

---

```
var strongPasswordChecker = function(s, a = 6, b = 20, c = 3) {
    const clusters = buildClusters(s, c);
    for (let i = 0; i < s.length - b && clusters.minReplaceCount; i++) {
        deleteOne(clusters, c);
    }
    const mustAddCount = !/[a-z]/.test(s) + !/[A-Z]/.test(s) + !/\\d/.test(s);
    return Math.max(0, s.length - b) + Math.max(a - s.length, mustAddCount, clusters.minReplaceCount);
};

function buildClusters(s, c) {
    const clusters = new Array(c).fill(0).map(cl => new Map());
    clusters.minReplaceCount = 0;
    let re = new RegExp(`(.)\\\\1{${c - 1},}`, 'g'), match;
    while (match = re.exec(s)) {
        let len = match[0].length;
        clusters[len % c].set(len, (clusters[len % c].get(len) || 0) + 1);
        clusters.minReplaceCount += Math.floor(len / c);
    }
    return clusters;
}

function deleteOne(clusters, c) {
    const cluster = clusters.find(cl => cl.size);
    for (const [len, count] of cluster) {
        cluster.set(len, count - 1);
        if (count === 1) cluster.delete(len);
        clusters.minReplaceCount -= len % c === 0;
        if (len === c) break;
        const clusterUpdate = clusters[(len - 1) % c];
        clusterUpdate.set(len - 1, (clusterUpdate.get(len - 1) || 0) + 1);
        break;
    }
}
```
The answer for `s.length <= b` is straightforward since we needn't make any deletions. It's covered by `Math.max(a - s.length, mustAddCount, clusters.minReplaceCount)` whose components I explain soon.

For `s.length > b` we need to make `s.length - b` deletions, followed by the requisite replacements to satisfy condition #2. However, we must make our deletions prioritizing repeating character clusters which have the smallest length modulo `c`. This is because clusters divisible by `c` will reduce the number of replacements necessary to uncluster them (satisfy condition #3). For example, deleting one character from either of `'aaa'` or `'aaaaaa'` for `c = 3` decrements the necessary replacements, from `1->0` and `2->1` respectively.

We store maps of each cluster type (its length modulo `c`) in the `clusters` array. `clusters.minReplaceCount` tracks the minimum number of replacements to satisfy condition #3 over all clusters. Finally, `mustAddCount` tracks the replacements necessary to satisfy condition #2.

The complexity is O(1) time and space when `s.length <= b` and O(n) time with O(count(clusters)) space when `s.length > b`. Even though `c` is a parameter, we can treat it as a constant with respect to time complexity since c * min(n - b, count(clusters)) is bounded by n (`s.length`).
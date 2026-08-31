# Union-Find solution C# with comments

**Author:** a_m_78
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-latest-group-of-size-m/solutions/3111232/](https://leetcode.com/problems/find-latest-group-of-size-m/solutions/3111232/)

---

# Code
```
public class Solution {

    int[] parent;
    int[] sz;
    int groupCount = 0;

    public int FindLatestStep(int[] arr, int m) {
        var n = arr.Length;

        // here we store sets and its sizes
        parent = new int[n + 1];
        sz = new int[n + 1];

        var res = -1;

        for (var i = 0; i < n; i++) {
            var ind = arr[i];

            // new set with size=1 and root points to itself
            parent[ind] = ind;
            sz[ind] = 1;

            // m=1 is exception as only 1-size sets occur here
            // bigger sets come only as a result of unions
            if (m == 1) groupCount++;

            // if there is set from the left - union with it
            if (ind > 1 && parent[ind - 1] != 0) {
                Union(ind, ind - 1, m);
            }

            // if there is set from the right - union with it
            if (ind < n && parent[ind + 1] != 0) {
                Union(ind, ind + 1, m);
            }

            // check if groups if size=m still exists
            // if true - update result to current value
            // as we need max step - it will be max finally
            if (groupCount > 0) res = i + 1;
        }

        return res;
    }

    // standard find method to find the root of 'a' set
    private int Find(int a) {
        while (parent[a] != a) {
            a = parent[a];
            parent[a] = parent[parent[a]];
        }
        return a;
    }

    // union of a and b sets
    private void Union(int a, int b, int m) {
        // get roots of both sets
        var root_a = Find(a);
        var root_b = Find(b);
        
        // do nothing if sets are the same set
        if (root_a == root_b) return;

        // if one/both are of size=m - decrement
        if (sz[root_a] == m) groupCount--;
        if (sz[root_b] == m) groupCount--;

        // union sets and increment if new set is of size=m
        if (sz[root_a] < sz[root_b]) {
            parent[root_a] = root_b;
            sz[root_b] += sz[root_a];
            if (sz[root_b] == m) groupCount++;
        } else {
            parent[root_b] = root_a;
            sz[root_a] += sz[root_b];
            if (sz[root_a] == m) groupCount++;
        }
    }

}
```
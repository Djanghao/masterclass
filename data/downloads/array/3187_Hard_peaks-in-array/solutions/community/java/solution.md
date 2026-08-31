# Segment Tree solution beat 1000%

**Author:** MySelfSanyam08
**Votes:** 3
**Link:** [https://leetcode.com/problems/peaks-in-array/solutions/5319870/](https://leetcode.com/problems/peaks-in-array/solutions/5319870/)

---

# Intuition
Simple approach of using segemnt tree

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class SegmentTree {
    int[] arr;
    int[] tree;
    int n;

    public SegmentTree(int[] arr) {
        this.arr = arr;
        this.n = arr.length;
        this.tree = new int[4 * n];
        build(0, 0, n - 1);
    }

    private void build(int node, int start, int end) {
        if (start == end) {
            tree[node] = isGreaterThanAdjacent(start) ? 1 : 0;
        } else {
            int mid = (start + end) / 2;
            build(2 * node + 1, start, mid);
            build(2 * node + 2, mid + 1, end);
            tree[node] = tree[2 * node + 1] + tree[2 * node + 2];
        }
    }

    private boolean isGreaterThanAdjacent(int index) {
        boolean leftCheck = (index == 0) || (arr[index] > arr[index - 1]);
        boolean rightCheck = (index == n - 1) || (arr[index] > arr[index + 1]);
        return leftCheck && rightCheck;
    }

    public int query(int L, int R) {
        return query(0, 0, n - 1, L, R);
    }

    private int query(int node, int start, int end, int L, int R) {
        if (R < start || end < L) {
            return 0;
        }
        if (L <= start && end <= R) {
            return tree[node];
        }
        int mid = (start + end) / 2;
        int leftQuery = query(2 * node + 1, start, mid, L, R);
        int rightQuery = query(2 * node + 2, mid + 1, end, L, R);
        return leftQuery + rightQuery;
    }

    public void update(int index, int value) {
        arr[index] = value;
        update(0, 0, n - 1, index);
        // Update the adjacent elements that might be affected by the change
        if (index > 0) {
            update(0, 0, n - 1, index - 1);
        }
        if (index < n - 1) {
            update(0, 0, n - 1, index + 1);
        }
    }

    private void update(int node, int start, int end, int index) {
        if (start == end) {
            tree[node] = isGreaterThanAdjacent(index) ? 1 : 0;
        } else {
            int mid = (start + end) / 2;
            if (start <= index && index <= mid) {
                update(2 * node + 1, start, mid, index);
            } else {
                update(2 * node + 2, mid + 1, end, index);
            }
            tree[node] = tree[2 * node + 1] + tree[2 * node + 2];
        }
    }

}

class Solution {
    public List<Integer> countOfPeaks(int[] arr, int[][] q) {
        SegmentTree t = new SegmentTree(arr);
        List<Integer> ans = new ArrayList<>();
        for (int i = 0; i < q.length; i++) {
            if (q[i][0] == 1) {
                ans.add(t.query(q[i][1] + 1, q[i][2] - 1));
            } else {
                t.update(q[i][1], q[i][2]);
            }
        }
        return ans; // Expected output: [0]
        
    }
}
```
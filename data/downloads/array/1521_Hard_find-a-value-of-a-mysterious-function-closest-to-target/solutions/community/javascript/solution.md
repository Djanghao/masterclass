# Javascript treeset 544ms 100%

**Author:** henrychen222
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-a-value-of-a-mysterious-function-closest-to-target/solutions/3031157/](https://leetcode.com/problems/find-a-value-of-a-mysterious-function-closest-to-target/solutions/3031157/)

---

```
function Bisect() {
    return { insort_right, insort_left, bisect_left, bisect_right }
    function insort_right(a, x, lo = 0, hi = null) {
        lo = bisect_right(a, x, lo, hi);
        a.splice(lo, 0, x);
    }
    function bisect_right(a, x, lo = 0, hi = null) { // > upper_bound
        if (lo < 0) throw new Error('lo must be non-negative');
        if (hi == null) hi = a.length;
        while (lo < hi) {
            let mid = parseInt((lo + hi) / 2);
            a[mid] > x ? hi = mid : lo = mid + 1;
        }
        return lo;
    }
    function insort_left(a, x, lo = 0, hi = null) {
        lo = bisect_left(a, x, lo, hi);
        a.splice(lo, 0, x);
    }
    function bisect_left(a, x, lo = 0, hi = null) { // >= lower_bound
        if (lo < 0) throw new Error('lo must be non-negative');
        if (hi == null) hi = a.length;
        while (lo < hi) {
            let mid = parseInt((lo + hi) / 2);
            a[mid] < x ? lo = mid + 1 : hi = mid;
        }
        return lo;
    }
}

function TreeSet(elements) {
    let ts = [], se = new Set(), bisect = new Bisect();
    initialize();
    return { add, first, last, poll, pollLast, floor, ceiling, lower, higher, remove, contains, size, clear, show };
    function initialize() {
        if (elements) {
            for (const e of elements) {
                if (!se.has(e)) {
                    bisect.insort_right(ts, e);
                    se.add(e);
                }
            }
        }
    }
    function add(e) {
        if (!se.has(e)) {
            bisect.insort_right(ts, e);
            se.add(e);
        }
    }
    function first() {
        return ts[0];
    }
    function last() {
        return ts[ts.length - 1];
    }
    function poll() {
        let res = ts[0];
        ts.splice(0, 1);
        se.delete(res);
        return res;
    }
    function pollLast() {
        let res = ts.pop();
        se.delete(res);
        return res;
    }
    function ceiling(e) { // >= lower_bound
        let idx = bisect.bisect_right(ts, e);
        let res = ts[idx - 1] == e ? e : ts[bisect.bisect_right(ts, e)];
        return res == undefined ? null : res;
    }
    function higher(e) { // > upper_bound
        let idx = bisect.bisect_right(ts, e);
        let res = ts[idx] > e ? ts[idx] : ts[bisect.bisect_right(ts, e) + 1];
        return res == undefined ? null : res;
    }
    function floor(e) { // <= 
        let idx = bisect.bisect_left(ts, e);
        let res = ts[idx] == e ? e : ts[bisect.bisect_left(ts, e) - 1];
        return res == undefined ? null : res;
    }
    function lower(e) { // <
        let idx = bisect.bisect_left(ts, e);
        let res = ts[idx] < e ? ts[idx] : ts[bisect.bisect_left(ts, e) - 1];
        return res == undefined ? null : res;
    }
    function remove(e) {
        let idx = bisect.bisect_left(ts, e);
        if (ts[idx] == e) ts.splice(idx, 1);
        se.delete(e);
    }
    function contains(e) {
        return se.has(e);
    }
    function size() {
        return ts.length;
    }
    function clear() {
        ts = [];
        se.clear();
    }
    function show() {
        return ts;
    }
}

const closestToTarget = (a, t) => {
    let ts = new TreeSet(), res = Number.MAX_SAFE_INTEGER;
    for (const x of a) {
        let nts = new TreeSet();
        nts.add(x);
        for (const y of ts.show()) nts.add(x & y);
        for (const y of nts.show()) res = Math.min(res, Math.abs(y - t));
        ts = nts;
    }
    return res;
};
```

Another version use AVL tree to implement treeset 323ms
```
function AVLTreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.height = 1;
    this.cnt = 1;
}

function getHeight(node) {
    return node != null ? node.height : 0;
}
function getBalance(node) {
    return node != null ? getHeight(node.left) - getHeight(node.right) : 0;
}
function LR(z) {
    let y = z.right;
    let T2 = y.left;
    y.left = z;
    z.right = T2;
    z.height = 1 + Math.max(getHeight(z.left), getHeight(z.right));
    y.height = 1 + Math.max(getHeight(y.left), getHeight(y.right));
    return y;
}
function RR(z) {
    let y = z.left;
    let T3 = y.right;
    y.right = z
    z.left = T3
    z.height = 1 + Math.max(getHeight(z.left), getHeight(z.right));
    y.height = 1 + Math.max(getHeight(y.left), getHeight(y.right));
    return y;
}
function insert(node, v) {
    if (node == null) {
        return new AVLTreeNode(v);
    } else if (v < node.val) {
        node.left = insert(node.left, v);
    } else if (v > node.val) {
        node.right = insert(node.right, v);
    } else {
        node.cnt++;
        return node;
    }
    node.height = 1 + Math.max(getHeight(node.left), getHeight(node.right));
    let bal = getBalance(node);
    if (bal > 1 && v < node.left.val) return RR(node);
    if (bal > 1 && v > node.left.val) {
        node.left = LR(node.left);
        return RR(node);
    }
    if (bal < -1 && v > node.right.val) return LR(node);
    if (bal < -1 && v < node.right.val) {
        node.right = RR(node.right);
        return LR(node);
    }
    return node;
}
function remove(node, v) {
    if (node == null) {
        return node;
    } else if (v < node.val) {
        node.left = remove(node.left, v);
    } else if (v > node.val) {
        node.right = remove(node.right, v);
    } else {
        if (node.cnt > 1) {
            node.cnt--;
            return node;
        }
        if (node.left == null) {
            let tmp = node.right;
            node = null;
            return tmp;
        } else if (node.right == null) {
            let tmp = node.left;
            node = null;
            return tmp;
        }
        let tmp = minx(node.right);
        node.val = tmp.val;
        node.right = remove(node.right, tmp.val);
    }
    if (node == null) return node;
    node.height = 1 + Math.max(getHeight(node.left), getHeight(node.right));
    let bal = getBalance(node);
    if (bal > 1 && getBalance(node.left) >= 0) return RR(node);
    if (bal < -1 && getBalance(node.right) <= 0) return LR(node);
    if (bal > 1 && getBalance(node.left) < 0) {
        node.left = LR(node.left);
        return RR(node);
    }
    if (bal < -1 && getBalance(node.right) > 0) {
        node.right = RR(node.right);
        return LR(node);
    }
    return node;
}
function minx(node) {
    return node == null || node.left == null ? node : minx(node.left);
}
function maxx(node) {
    return node == null || node.right == null ? node : maxx(node.right);
}

function TreeSet() {
    let root = null, se = new Set();
    return { add, first, last, rem, size, show}
    function add(v) {
        if (!se.has(v)) { // insert duplicates will cause issue
            root = insert(root, v);
            se.add(v);
        }
    }
    function first() {
        let res = minx(root);
        return res ? res.val : null;
    }
    function last() {
        let res = maxx(root);
        return res ? res.val : null;
    }
    function rem(v) {
        root = remove(root, v);
        se.delete(v);
    }
    function size() {
        return se.size;
    }
    function show() {
        return se;
    }
}

const closestToTarget = (a, t) => {
    let ts = new TreeSet(), res = Number.MAX_SAFE_INTEGER;
    for (const x of a) {
        let nts = new TreeSet();
        nts.add(x);
        for (const y of ts.show()) nts.add(x & y);
        for (const y of nts.show()) res = Math.min(res, Math.abs(y - t));
        ts = nts;
    }
    return res;
};
```
# javascript treeset 444ms 100%

**Author:** henrychen222
**Votes:** 2
**Link:** [https://leetcode.com/problems/closest-room/solutions/1190285/](https://leetcode.com/problems/closest-room/solutions/1190285/)

---

reference:
https://github.com/python/cpython/blob/3.9/Lib/bisect.py
https://github.com/fukatani/TreeSet/blob/master/treeset.py

Java Version:
https://leetcode.com/problems/closest-room/discuss/1186546/java-TreeSet-81ms
```
function Bisect() {
    return { insort_right, insort_left, bisect_left, bisect_right }
    function insort_right(a, x, lo = 0, hi = null) {
        lo = bisect_right(a, x, lo, hi);
        a.splice(lo, 0, x);
    }
    function bisect_right(a, x, lo = 0, hi = null) {
        if (lo < 0) throw new Error('lo must be non-negative');
        if (hi == null) hi = a.length;
        while (lo < hi) {
            let mid = lo + hi >> 1;
            x < a[mid] ? hi = mid : lo = mid + 1;
        }
        return lo;
    }
    function insort_left(a, x, lo = 0, hi = null) {
        lo = bisect_left(a, x, lo, hi);
        a.splice(lo, 0, x);
    }
    function bisect_left(a, x, lo = 0, hi = null) {
        if (lo < 0) throw new Error('lo must be non-negative');
        if (hi == null) hi = a.length;
        while (lo < hi) {
            let mid = lo + hi >> 1;
            a[mid] < x ? lo = mid + 1 : hi = mid;
        }
        return lo;
    }
}

function TreeSet(elements) {
    let ts = [];
    let se = new Set();
    let bisect = new Bisect();
    if (elements) addAll(elements);
    return { add, floor, ceiling, remove, contains, size, clear, toArray };
    function addAll(elements) {
        for (const e of elements) {
            if (se.has(e)) continue;
            add(e);
            se.add(e);
        }
    }
    function add(e) {
        if (!se.has(e)) {
            bisect.insort_right(ts, e);
            se.add(e);
        }
    }
    function ceiling(e) {
        let idx = bisect.bisect_right(ts, e);
        if (ts[idx - 1] == e) return e;
        return ts[bisect.bisect_right(ts, e)];
    }
    function floor(e) {
        let idx = bisect.bisect_left(ts, e);
        if (ts[idx] == e) {
            return e;
        } else {
            return ts[bisect.bisect_left(ts, e) - 1];
        }
    }
    function remove(e) {
        ts = ts.filter(x => x != e);
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
    }
    function toArray() {
        return ts;
    }
}

const closestRoom = (rooms, queries) => {
    rooms.sort((x, y) => y[1] - x[1]);
    let qn = queries.length;
    queries = queries.map((t, i) => [i, ...t]);
    queries.sort((x, y) => y[2] - x[2]);
    let res = Array(qn).fill(0);
    let ri = 0;
    let ts = new TreeSet();
    for (const e of queries) {
        let qi = e[0];
        let qid = e[1];
        let qmize = e[2];
        while (ri < rooms.length && rooms[ri][1] >= qmize) {
            ts.add(rooms[ri][0]);
            ri++;
        }
        if (ts.size() == 0) {
            res[qi] = -1;
        } else {
            let lower = ts.floor(qid) || -1000000000;
            let higher = ts.ceiling(qid) || 1000000000;
            if (qid - lower <= higher - qid) {
                res[qi] = lower;
            } else {
                res[qi] = higher;
            }
        }
    }
    return res;
};
```
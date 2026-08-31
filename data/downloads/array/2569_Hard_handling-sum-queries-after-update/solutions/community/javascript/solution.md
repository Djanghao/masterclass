# Efficient JS Solution - Segment tree (Beat 100% time and 75% memory)

**Author:** CuteTN
**Votes:** 0
**Link:** [https://leetcode.com/problems/handling-sum-queries-after-update/solutions/4232009/](https://leetcode.com/problems/handling-sum-queries-after-update/solutions/4232009/)

---

![image.png](./images/0.png)

Classic segment tree.

# Complexity
- Let $$n = nums1.length = nums2.length$$
- Let $$q = queries.length $$
- Time complexity: $$O((n+q)log(n))$$
- Space complexity: $$O(n)$$

# Code
```js
class IntervalTree {
  /**
   * @param {number[]} data
   */
  constructor(data) {
    let size = data.length;
    this.vals = new Uint32Array(size * 4);
    this.lazy = new Uint8Array(size * 4);

    const build = (index, l, r) => {
      if (l === r) {
        this.vals[index] = data[l];
      } else {
        const mid = (l + r) >> 1;
        this.vals[index] =
          build(2 * index + 1, l, mid) + build(2 * index + 2, mid + 1, r);
      }

      return this.vals[index];
    };
    build(0, 0, size - 1);
  }

  propagate(rootIndex, l, r) {
    if (this.lazy[rootIndex]) {
      let m = (l + r) >> 1;
      let childIndex = rootIndex * 2 + 1;

      this.lazy[childIndex] ^= 1;
      this.vals[childIndex] = m - l + 1 - this.vals[childIndex];

      childIndex++;
      this.lazy[childIndex] ^= 1;
      this.vals[childIndex] = r - m - this.vals[childIndex];

      this.lazy[rootIndex] = 0;
    }
  }

  flip(ql, qr, rootIndex, l, r) {
    if (ql > r || qr < l) return this.vals[rootIndex];
    if (ql <= l && r <= qr) {
      this.lazy[rootIndex] ^= 1;
      this.vals[rootIndex] = r - l + 1 - this.vals[rootIndex];
    } else {
      this.propagate(rootIndex, l, r);
      const m = (l + r) >> 1;
      this.vals[rootIndex] =
        this.flip(ql, qr, 2 * rootIndex + 1, l, m) +
        this.flip(ql, qr, 2 * rootIndex + 2, m + 1, r);
    }

    return this.vals[rootIndex];
  }

  cnt1() {
    return this.vals[0];
  }
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[][]} queries
 * @return {number[]}
 */
var handleQuery = function (nums1, nums2, queries) {
  let n = nums1.length;
  let it = new IntervalTree(nums1);
  let sum = 0;
  for (let i = 0; i < n; i++) sum += nums2[i];
  let q = queries.length;
  n--;
  let res = [];

  for (let i = 0; i < q; i++) {
    if (queries[i][0] == 1) {
      it.flip(queries[i][1], queries[i][2], 0, 0, n);
    } else if (queries[i][0] == 2) sum += it.cnt1() * queries[i][1];
    else res.push(sum);
  }

  return res;
};
```
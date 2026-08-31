# JS Solution - Dijkstra + Bitmask

**Author:** CuteTN
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-minimum-cost-array-permutation/solutions/5147304/](https://leetcode.com/problems/find-the-minimum-cost-array-permutation/solutions/5147304/)

---

Pro tip: Love Xie, just love Xie \uD83D\uDC9C

# Complexity
- Time complexity: $$O(n^2 * 2^n)$$
- Space complexity: $$O(n * 2^n)$$

# Code
```js
//#region Heap
/**
 * @template TItem
 * @typedef {Object} HeapConstructorParams<TItem>
 * @property {(a: TItem, b: TItem) => boolean} isMorePriority
 * @property {TItem[]} [initialData]
 * @property {(node: TItem, index: number) => any} [onHeapIndexChange]
 */

/**
 * @template TItem
 */
class Heap {
  /**
   * @private
   * @type {(TItem | undefined)[]}
   */
  _nodes;

  /**
   * @private
   * @type {number}
   */
  _size;

  /** @type {boolean} */
  isEnabledTrackingIndex;

  /** @param {HeapConstructorParams<TItem>} param0 */
  constructor({ initialData, isMorePriority, onHeapIndexChange }) {
    /**
     * @private
     * @param {TItem | undefined} a
     * @param {TItem | undefined} b
     * @returns {boolean}
     */
    this._isMorePriority = (a, b) => {
      if (b == undefined) return true;
      if (a == undefined) return false;
      return isMorePriority(a, b);
    };

    /**
     * @private
     */
    this._onHeapIndexChange = onHeapIndexChange;

    /**
     * @private
     * @param {number} index
     * @param {TItem} node
     */
    this._setNodeAndTriggerChange = (index, node) => {
      if (index >= this._nodes.length) return;
      this._nodes[index] = node;

      if (this.isEnabledTrackingIndex) this._onHeapIndexChange?.(node, index);
    };

    this.isEnabledTrackingIndex = !!onHeapIndexChange;
    if (initialData?.length) this.build(initialData);
    else {
      this._nodes = [];
      this._size = 0;
    }
  }

  /**
   * @param {number} index
   */
  floatNode(index) {
    let parentIndex;
    let node = this._nodes[index];

    while ((index - 1) >> 1 >= 0) {
      parentIndex = (index - 1) >> 1;
      if (this._isMorePriority(this._nodes[parentIndex], node)) break;

      this._setNodeAndTriggerChange(index, this._nodes[parentIndex]);
      index = parentIndex;
    }
    this._setNodeAndTriggerChange(index, node);
  }

  /**
   * @param {number} index
   */
  sinkNode(index) {
    let childIndex;
    let node = this._nodes[index];

    while (index * 2 + 1 < this._nodes.length) {
      childIndex = index * 2 + 1;
      if (
        childIndex + 1 < this._nodes.length &&
        this._isMorePriority(
          this._nodes[childIndex + 1],
          this._nodes[childIndex]
        )
      )
        childIndex++;

      if (this._isMorePriority(node, this._nodes[childIndex])) break;

      this._setNodeAndTriggerChange(index, this._nodes[childIndex]);
      index = childIndex;
    }
    this._setNodeAndTriggerChange(index, node);
  }

  /**
   * Sink/Float node.
   * @param {number} index
   */
  adjustNode(index) {
    this.sinkNode(index);
    this.floatNode(index);
  }

  /**
   * @param {TItem[]} data
   */
  build(data) {
    const isEnabledTrackingIndex = this.isEnabledTrackingIndex;
    this.isEnabledTrackingIndex = false;

    this._nodes = [...data];
    this._size = data.length;
    const lastNonLeafIndex = (data.length - 2) >> 1;
    for (let i = lastNonLeafIndex; i >= 0; i--) {
      this.sinkNode(i);
    }

    if (isEnabledTrackingIndex) {
      this.isEnabledTrackingIndex = true;
      this._nodes.forEach((node, index) => {
        this._onHeapIndexChange?.(node, index);
      });
    }
  }

  /**
   * @param {TItem} node
   */
  add(node) {
    this._nodes.push(node);
    this._size++;
    this.floatNode(this._nodes.length - 1);
  }

  pop() {
    if (this._nodes[0] == null) return null;

    const result = this._nodes[0];
    this._nodes[0] = null;
    this._size--;
    this.sinkNode(0);

    return result;
  }

  get size() {
    return this._size;
  }

  getTop() {
    return this._nodes[0];
  }

  getSecond() {
    return this._isMorePriority(this._nodes[1], this._nodes[2])
      ? this._nodes[1]
      : this._nodes[2];
  }

  clear() {
    this._nodes = [];
    this._size = 0;
  }
}
//#endregion

let dists = new Uint8Array(229376);
let oo = 200;

let temp = new Uint8Array(14);

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findPermutation = function (nums) {
  let n = nums.length;

  let fullMask = 1 << n;
  dists.fill(oo, 0, n * fullMask);
  --fullMask;

  /**
   * @type {Heap<{ code, dist }}
   */
  let h = new Heap({
    isMorePriority: (a, b) => {
      return a.dist < b.dist;
    },
  });

  dists[0] = 0;
  h.add({
    code: 0,
    dist: 0,
  });

  let resVal = oo;

  while (h.size) {
    let { code, dist } = h.pop();
    if (dist > resVal) break;
    if (dist > dists[code]) continue;

    let mask = code & fullMask;

    if (mask == fullMask) {
      resVal = dist;
      continue;
    }

    let node = code >> n;

    for (let newNode = 0, b = 1; newNode < n; ++newNode, b <<= 1) {
      if (mask & b) continue;

      let newMask = mask | b;
      if (!newNode && newMask != fullMask) continue;

      let newCode = (newNode << n) | newMask;
      let newDist = dist + Math.abs(newNode - nums[node]);

      if (newDist < dists[newCode]) {
        dists[newCode] = newDist;
        h.add({
          code: newCode,
          dist: newDist,
        });
      }
    }
  }

  let res = new Uint8Array(n);

  let code = fullMask;
  let mask = fullMask;

  for (let i = 1; i < n; ++i) {
    for (let pNode = 1, b = 2; pNode < n; ++pNode, b <<= 1) {
      if (!(mask & b)) continue;

      let pMask = mask ^ (1 << res[i - 1]);
      let pCode = (pNode << n) | pMask;
      if (dists[code] != dists[pCode] + Math.abs(res[i - 1] - nums[pNode]))
        continue;

      res[i] = pNode;
      mask = pMask;
      code = pCode;
      break;
    }
  }

  return res;
};
```
# Number of Valid Move Combinations on ChessBoard

**Author:** Naeem_ABD
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-valid-move-combinations-on-chessboard/solutions/6043381/](https://leetcode.com/problems/number-of-valid-move-combinations-on-chessboard/solutions/6043381/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Despite the board side being a constant, it's fair to define it as variable: b = board.width. The same to d - the max number of direction a piece can go (in this problem, d = 8 because a queen can move in 8 direction).
Time complexity: O(db\u22172 
n
 ) (tbh idk lol...)
Space complexity: O(db\u22172 
n
 ) (same...)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []
//#region Circular Queue
/**
 * @template TItem
 */
class CircularQueue {
  /**
   * @param {number} capacity
   */
  constructor(capacity) {
    /**
     * @private
     * @type {number}
     */
    this._capacity = capacity;
    /**
     * @private
     * @type {number}
     */
    this._size = 0;
    /**
     * @private
     * @type {number}
     */
    this._bottom = 0;

    /**
     * @private
     * @type {TItem[]}
     */
    this._data = Array(capacity).fill(undefined);
  }

  /**
   * @private
   * @param {number} index
   * @returns {number}
   */
  _getCircularIndex(index) {
    const result = index % this._capacity;
    if (result < 0) result += this._capacity;
    return result;
  }

  get capacity() {
    return this._capacity;
  }

  get size() {
    return this._size;
  }

  get nextItem() {
    return this._size ? this._data[this._bottom] : undefined;
  }

  get lastItem() {
    return this._size
      ? this._data[this._getCircularIndex(this._bottom + this._size - 1)]
      : undefined;
  }

  /**
   * @param  {...TItem} items
   */
  enqueue(...items) {
    if (this._size + items.length > this._capacity)
      throw new Error("Queue capacity exceeded.");

    let queueIndex = (this._bottom + this._size) % this._capacity;
    this._size += items.length;
    for (let i = 0; i < items.length; i++) {
      this._data[queueIndex] = items[i];
      queueIndex = (queueIndex + 1) % this._capacity;
    }
  }

  /**
   * @returns {TItem | undefined}
   */
  dequeue() {
    if (!this._size) return undefined;

    const result = this._data[this._bottom];
    this._bottom = (this._bottom + 1) % this._capacity;
    this._size--;

    return result;
  }

  clear() {
    this._size = 0;
  }
}
//#endregion

const q = new CircularQueue(810000);

const DIR_R = [0, -1, -1, -1, 0, 1, 1, 1];
const DIR_C = [1, 1, 0, -1, -1, -1, 0, 1];

const posStatesSet = new Set();

/**
 * @typedef {object} TData
 * @property {number[]} r
 * @property {number[]} c
 * @property {number[]} dir
 * @property {number[]} steps
 * @property {number[]} stopped
 * @property {number} posState
 */

/** @type {TData} */
let dataPre = {
  r: new Uint8Array(4),
  c: new Uint8Array(4),
  dir: new Uint8Array(4),
  steps: new Uint8Array(4),
  stopped: new Uint8Array(4),
  posState: 0,
};

/** @type {TData} */
let dataCur = {
  r: new Uint8Array(4),
  c: new Uint8Array(4),
  dir: new Uint8Array(4),
  steps: new Uint8Array(4),
  stopped: new Uint8Array(4),
  posState: 0,
};

/**
 * @param {TData} data
 */
function encode(data, n) {
  let res = 0;

  for (let i = n - 1; i >= 0; i--) {
    res =
      (res << 7) | (data.steps[i] << 4) | (data.dir[i] << 1) | data.stopped[i];
  }

  return res;
}

/**
 * @param {*} code
 * @param {*} n
 * @param {TData} target
 */
function decode(code, n, initialPositions, target) {
  target.posState = 0;

  for (let i = 0; i < n; i++) {
    target.stopped[i] = code & 1;
    code >>= 1;

    target.dir[i] = code & 7;
    code >>= 3;

    target.steps[i] = code & 7;
    code >>= 3;

    target.r[i] =
      initialPositions[i][0] + target.steps[i] * DIR_R[target.dir[i]];
    target.c[i] =
      initialPositions[i][1] + target.steps[i] * DIR_C[target.dir[i]];

    target.posState <<= 3;
    target.posState |= target.r[i] - 1;
    target.posState <<= 3;
    target.posState |= target.c[i] - 1;
  }
}

/**
 * @param {string[]} pieces
 * @param {number[][]} positions
 * @return {number}
 */
var countCombinations = function (pieces, positions) {
  let n = pieces.length;
  q.clear();
  posStatesSet.clear();

  for (let i = 0; i < n; i++) {
    positions[i][0];
    positions[i][1];
    dataCur.steps[i] = 0;
    dataCur.stopped[i] = 0;
  }

  function btInit(i) {
    if (i >= n) {
      q.enqueue(encode(dataCur, n));
      return;
    }

    let d = pieces[i] == "bishop" ? 1 : 0;
    let j = pieces[i] == "queen" ? 1 : 2;

    for (; d < 8; d += j) {
      dataCur.dir[i] = d;
      btInit(i + 1);
    }
  }
  btInit(0);

  function btNext(i, codePre) {
    if (i >= n) {
      let code = encode(dataCur, n);
      if (code != codePre) q.enqueue(code);
      return;
    }

    dataCur.r[i] = dataPre.r[i];
    dataCur.c[i] = dataPre.c[i];
    dataCur.steps[i] = dataPre.steps[i];
    dataCur.dir[i] = dataPre.dir[i];
    dataCur.stopped[i] = 1;
    let flagValid = true;

    for (let j = 0; j < i; j++)
      if (dataCur.c[i] == dataCur.c[j] && dataCur.r[i] == dataCur.r[j]) {
        flagValid = false;
        break;
      }

    if (flagValid) btNext(i + 1, codePre);

    if (dataPre.stopped[i]) return;
    dataCur.steps[i] = dataPre.steps[i] + 1;
    dataCur.stopped[i] = 0;
    dataCur.r[i] = dataPre.r[i] + DIR_R[dataPre.dir[i]];
    dataCur.c[i] = dataPre.c[i] + DIR_C[dataPre.dir[i]];

    if (dataCur.r[i] <= 0 || dataCur.r[i] > 8) return;
    if (dataCur.c[i] <= 0 || dataCur.c[i] > 8) return;

    for (let j = 0; j < i; j++)
      if (dataCur.c[i] == dataCur.c[j] && dataCur.r[i] == dataCur.r[j]) {
        return;
      }

    btNext(i + 1, codePre);
  }

  let maxSize = q.size;
  while (q.size) {
    maxSize = Math.max(q.size, maxSize)
    let code = q.dequeue();
    decode(code, n, positions, dataPre);
    posStatesSet.add(dataPre.posState);
    btNext(0, code);
  }

  return posStatesSet.size;
};
```
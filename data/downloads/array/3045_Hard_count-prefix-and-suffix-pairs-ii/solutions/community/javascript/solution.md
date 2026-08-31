# JS solution - Double hashing

**Author:** CuteTN
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-prefix-and-suffix-pairs-ii/solutions/4745690/](https://leetcode.com/problems/count-prefix-and-suffix-pairs-ii/solutions/4745690/)

---

Pro tip: big love for little Xie \uD83D\uDC9C

# Complexity
- let `n = words.length`, `m = sum(word[i].length)`
- Time complexity: $$O(mlogn)$$
- Space complexity: $$O(m)$$

# Code
```js
//#region Rolling hash pack
const HASH_MAX_LENGTH = 100004;
let XIE_XIE = 2406;
let MOD1 = 87605359;
let MOD2 = 88320413;
let BASE1 = 523;
let BASE2 = 277;

function quickMul(a, b, m) {
  a = ((a % m) + m) % m;
  b = ((b % m) + m) % m;
  if (a === 0 || b === 0) return 0;
  if (Math.log2(a) + Math.log2(b) < 50) return (a * b) % m;

  let result = 0;
  while (b) {
    while (b % 2 === 0) {
      a = (a * 2) % m;
      b /= 2;
    }

    if (b % 2 !== 0) {
      result = (result + a) % m;
      b--;
    }
  }

  return result;
}

let pow1 = new Uint32Array(HASH_MAX_LENGTH);
let pow2 = new Uint32Array(HASH_MAX_LENGTH);

pow1[0] = 1;
pow2[0] = 1;
for (let i = 1; i < HASH_MAX_LENGTH; ++i) {
  pow1[i] = (pow1[i - 1] * BASE1) % MOD1;
  pow2[i] = (pow2[i - 1] * BASE2) % MOD2;
}

function combineHash(h1, h2) {
  return XIE_XIE * h1 + h2;
}
//#endregion

//#region Multi-Set
/**
 * @template TItem
 */
class MultiSet {
  constructor() {
    /**
     * @private
     * @type {Map<TItem, number>}
     */
    this._counters = new Map();
  }

  /**
   * @param {TItem} item
   * @param {number} quantity
   */
  add(item, quantity = 1) {
    let cnt = this.count(item) + quantity;
    this._counters.set(item, cnt);
    return cnt;
  }

  /**
   * @param {TItem} item
   * @param {number} quantity
   */
  remove(item, quantity = 1) {
    let cnt = this.count(item);
    if (cnt) {
      if (cnt > quantity) this._counters.set(item, cnt - quantity);
      else this._counters.delete(item);
    }
  }

  /**
   * @param {TItem} item
   */
  has(item) {
    return this._counters.has(item);
  }

  /**
   * @param {TItem} item
   * @returns {number}
   */
  count(item) {
    return this._counters.get(item) ?? 0;
  }

  clear() {
    this._counters.clear();
  }

  /**
   * @param {(count: number, key: TItem)} cb
   */
  forEach(cb) {
    this._counters.forEach(cb);
  }
}
//#endregion

let set = new MultiSet();

/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function (words) {
  set.clear();

  let res = 0;
  for (let w of words) {
    let n = w.length;
    let p1 = 0;
    let p2 = 0;
    let s1 = 0;
    let s2 = 0;

    for (let i = 1; i <= n; ++i) {
      let cp = w.charCodeAt(i - 1);
      let cs = w.charCodeAt(n - i);

      p1 = quickMul(p1 + cp, BASE1, MOD1);
      s1 = (s1 + quickMul(cs, pow1[i], MOD1)) % MOD1;

      p2 = quickMul(p2 + cp, BASE2, MOD2);
      s2 = (s2 + quickMul(cs, pow2[i], MOD2)) % MOD2;

      if (p1 != s1 || p2 != s2) continue;

      res += set.count(combineHash(p1, p2));
    }

    set.add(combineHash(p1, p2));
  }

  return res;
};
```
# JS Solution

**Author:** CuteTN
**Votes:** 0
**Link:** [https://leetcode.com/problems/string-transformation/solutions/4027787/](https://leetcode.com/problems/string-transformation/solutions/4027787/)

---

LOL contests these days are painfully hard.

# Approach
- To save your time, the full solution involves **hash**, **inversed modulo**, **generating function**.

- let `l = t.length`
- A simple trick to find a rotation of `s` that equals to `t` is to find all occurrence of `t` in `s + s` (which starts before index `l` of `s + s`).
- If you're like me, lazy enough to implement any fancy algorithms on finding occurrence in a string, you should use **Hash**. With the technique, we can calculate:
- $$z$$ is the number of valid rotation at index 0 (technically, it's just `z = s === t? 1 : 0`).
- $$c$$ is the total number of valid rotations.

- Let `dp[k]` be the answer to the problem, we have:
```js
dp[0] = z
dp[1] = c - z
dp[i] = (l-2) * dp[i-1] + (l-1) * dp[i-2]
```

- Since `k` is ridiculously large, we need to optimize this formula, 2 techniques can be taken into consideration is **matrix multiplication** or **generating function**. I opted for the latter. So the general formula would be:
$$dp[i] = ((l - 1)^k * c + (-1)^k * (z * l - c)) / l$$
- I have a marvelous proof for this but this text area is too narrow. :^( 

# Complexity
- Time complexity: $$O(s.length + t.length + log(k))$$
- Space complexity: $$O(s.length)$$

# Code
```js
class Modulo {
  /**
   * @param {number} modulo
   */
  constructor(modulo) {
    /** @type {number} @readonly */
    this.modulo = modulo;

    /** @private @type {undefined | number} */
    this._phi = undefined;
  }

  /**
   * @returns {number}
   */
  getPhi() {
    if (this._phi !== undefined) return this._phi;

    let result = this.modulo;
    let temp = this.modulo;
    for (let i = 2; i <= Math.sqrt(temp); i++) {
      if (temp % i === 0) {
        result /= i;
        result *= i - 1;
      }
      while (temp % i === 0) temp /= i;
    }
    if (temp > 1) {
      result /= temp;
      result *= temp - 1;
    }

    this._phi = result;
    return result;
  }

  /**
   * @param {number} a
   * @returns {number}
   */
  getInverse(a) {
    return this.pow(a, this.getPhi() - 1);
  }

  /**
   * @param  {...number} numbers
   */
  add(...numbers) {
    let result = 0;
    for (let number of numbers) {
      result = (result + (number % this.modulo)) % this.modulo;
    }

    if (result < 0) result += this.modulo;
    return result;
  }

  /**
   * @private
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  _quickMul(a, b) {
    a = ((a % this.modulo) + this.modulo) % this.modulo;
    b = ((b % this.modulo) + this.modulo) % this.modulo;
    if (a === 0 || b === 0) return 0;

    let result = 0;
    while (b) {
      while (b % 2 === 0) {
        a = (a * 2) % this.modulo;
        b /= 2;
      }

      if (b % 2 !== 0) {
        result = (result + a) % this.modulo;
        b--;
      }
    }

    return result;
  }

  /**
   * @param  {...number} numbers
   */
  mul(...numbers) {
    let result = 1;
    for (let number of numbers) {
      if (number > 0 && number < 1)
        number = this.getInverse(Math.round(1 / number));
      result = this._quickMul(result, number);
      if (result === 0) return 0;
    }

    if (result < 0) result += this.modulo;
    return result;
  }

  /**
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  div(a, b) {
    return this._quickMul(a, this.getInverse(b));
  }

  /**
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  pow(a, b) {
    a = ((a % this.modulo) + this.modulo) % this.modulo;
    if (a === 0) return 0;

    let result = 1;
    while (b) {
      while (b % 2 === 0) {
        a = this._quickMul(a, a);
        b /= 2;
      }

      if (b % 2 !== 0) {
        result = this._quickMul(result, a);
        b--;
      }
    }

    return result;
  }
}

const mod = new Modulo(1000000007);

/**
 * @param {string} s
 * @param {string} t
 * @param {number} k
 * @return {number}
 */
var numberOfWays = function (s, t, k) {
  s += s;
  // const MOD = 1000000007;
  const BASE = 26;

  const basePows = [1];
  function getBasePow(n) {
    while (n >= basePows.length) {
      basePows.push(mod.mul(basePows[basePows.length - 1], BASE));
    }
    return basePows[n];
  }

  /** @param {string} s */
  function calcHashWord(s, pre = 0) {
    let result = pre;
    for (let i = 0; i < s.length; i++) {
      result = mod.add(
        mod.mul(result, BASE),
        mod.mul(1 + s.charCodeAt(i), s.charCodeAt(i))
      );
    }
    return result;
  }

  const prefixHash = [];
  prefixHash[-1] = 0;

  for (let i = 0; i < s.length; i++) {
    prefixHash.push(calcHashWord(s[i], prefixHash[prefixHash.length - 1]));
  }

  function getHash(l, r) {
    return mod.add(
      prefixHash[r],
      -mod.mul(prefixHash[l - 1], getBasePow(r - l + 1))
    );
  }

  const hashedT = calcHashWord(t, 0);
  let cntOcc = 0;
  let flagFirstMatch = 0;
  if (getHash(0, t.length - 1) === hashedT) {
    cntOcc++;
    flagFirstMatch = 1;
  }

  for (let i = 1; i < t.length; i++) {
    if (getHash(i, i + t.length - 1) === hashedT) cntOcc++;
  }

  if (k == 1) return cntOcc - flagFirstMatch;
  let res = mod.mul(cntOcc, mod.pow(t.length - 1, k));
  res = mod.add(
    res,
    mod.mul(flagFirstMatch * t.length - cntOcc, k % 2 ? -1 : 1)
  );
  res = mod.div(res, t.length);

  return res;
};
```
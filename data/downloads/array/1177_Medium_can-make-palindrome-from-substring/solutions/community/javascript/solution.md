# [JavaScript] Easy understand with explanation - 2 solutions

**Author:** poppinlp
**Votes:** 3
**Link:** [https://leetcode.com/problems/can-make-palindrome-from-substring/solutions/379265/](https://leetcode.com/problems/can-make-palindrome-from-substring/solutions/379265/)

---

The core algorithm is to count the frequence for each lowercase letter. And then calculate the number of single charactor for every query.

According to this, we have 2 solutions here.

## SOLUTION 1

This solution is easy to understand. We do the counting for each lowercase letter first. And save it in a two-dimensional array `freq`. Then counting for every query and get the result.

```js
const canMakePaliQueries = (s, queries) => {
  const freq = [];

  for (let i = 0; i < 26; ++i) {
    freq[i] = new Int16Array(s.length + 1);
  }
  for (let i = 1; i <= s.length; ++i) {
    const code = s.charCodeAt(i - 1) - 97;
    ++freq[code][i - 1];
    for (let j = 0; j < 26; ++j) {
      freq[j][i] = freq[j][i - 1];
    }
    --freq[code][i - 1];
  }

  return queries.map(([start, end, count]) => {
    let sum = 0;
    for (let i = 0; i < 26; ++i) {
      sum += (freq[i][end + 1] - freq[i][start]) & 1;
    }
    return Math.floor(sum / 2) <= count;
  });
};
```

## SOLUTION 2

The second solution has some tricky performance optimizations.

We use an one-dimensional array as the `freq` rather than two-dimensional in solution 1 since we use the bit in a 32-bit number to save the pairing status of each lowercase letter such as `1001` means just single `a` and `d`. And the other thing is to use `^` operation to counting the pairing status. Finally, for every query, we just need to count the bit and get the result.

```js
const canMakePaliQueries = (s, queries) => {
  const freq = new Int32Array(s.length + 1);

  for (let i = 1; i <= s.length; ++i) {
    const code = s.charCodeAt(i - 1) - 97;
    freq[i] = freq[i - 1] ^ (1 << code);
  }

  return queries.map(([start, end, count]) => {
    if (count >= 13) return true;

    let data = freq[end + 1] ^ freq[start];
    let sum = 0;
    while (data > 0) {
      sum += data & 1;
      data >>= 1;
    }

    return Math.floor(sum / 2) <= count;
  });
};
```


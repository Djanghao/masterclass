# JavaScript with Explanation, no substring comparison, fast O(n) time, O(1) space. (Credit to nate17)

**Author:** ecgan
**Votes:** 16
**Link:** [https://leetcode.com/problems/last-substring-in-lexicographical-order/solutions/369191/](https://leetcode.com/problems/last-substring-in-lexicographical-order/solutions/369191/)

---

Credit goes to this wonderful Python solution [post](https://leetcode.com/problems/last-substring-in-lexicographical-order/discuss/363662/Short-python-code-O(n)-time-and-O(1)-space-with-proof-and-visualization) written by [nate17](https://leetcode.com/nate17).

## Code

```javascript
const lastSubstring = (s) => {
  let i = 0 // index of final substring.
  let j = 1 // index of lookahead possible substring.
  let k = 0 // moving offset to compare i & j.

  while (j + k < s.length) {
    if (s[i + k] < s[j + k]) {
      i = Math.max(i + k + 1, j)
      j = i + 1
      k = 0
    }

    if (s[i + k] === s[j + k]) {
      k += 1
    }

    if (s[i + k] > s[j + k]) {
      j = j + k + 1
      k = 0
    }
  }

  return s.substring(i)
}

module.exports = lastSubstring
```

## Explanation

Consider the following cases:

```text
Input: zyxbzyxa
Expected output: zyxbzyxa

Input: zyxbzyxc
Expected output: zyxc
```

We have two index pointers, `i` and `j`. `i` will always be set to the index of the final substring result. `j` is a moving lookahead index pointer that is used to loop through and compare the character at `j` with the character at `i`.

When `s[i]` and `s[j]` are the same (the first z and the second z in the above example), we need to compare the characters next to them (the first y and the second y). Since they are the same, we need to compare the characters next to them (the first x and the second x), and so on. To achieve this, we use an offset `k` to compare the `k` character next to `i` and `j`. Note that `k` starts at 0, and this is essentially comparing characters `s[i+k]` and `s[j+k]`.

When `s[i+k]` is bigger than `s[j+k]`, we just need to let `i` remain as is, continue move `j` forward to the next character at `j+k+1`, and reset `k` back to 0.

When `s[i+k]` is smaller than `s[j+k]`, this means that the substring starting at `j` is a better result than the substring at `i`. At this point, there are two situations to consider: 

1. When `j` is more than `i+k`: Consider an input `hhhccchhhddd`, when `i` is 0, `j` is 6, and `k` is 3, both `i` and `j` are pointing to `h`, and you are comparing the first `c` and the first `d`. You would want to set `i = j`. 
2. When `j` is less than `i+k`: Consider an input `nnnp`, when `i` is 0, `j` is 1, and `k` is 2, you are comparing the last `n` and `p`. You would want to change `i` to point to `p`, so you need to set `i = i+k+1`. Note that in this case, even though `j` is equal to `i+1`, `j` is *not always* equal to `i+1` (see situation 1 above), and hence you should not use `i = j+k`.

So with the above considerations, when `s[i+k]` is smaller than `s[j+k]`, we can simply set `i = Math.max(i + k + 1, j)`. 

In the end, the result would be the substring starting at `i`.

## Tests

Below are some tests using jest:

```javascript
test('nnnhnnninnndnnnj should return nnnj', () => {
  const s = 'nnnhnnninnndnnnj'

  const result = lastSubstring(s)

  expect(result).toBe('nnnj')
})

test('nnnhnnnjnnndnnni should return nnnjnnndnnni', () => {
  const s = 'nnnhnnnjnnndnnni'

  const result = lastSubstring(s)

  expect(result).toBe('nnnjnnndnnni')
})
```

## Complexity Analysis

Assume `n` is the number of characters in string `s`.

Time complexity: O(n) since we visit each character exactly once.

Space complexity: O(1). Extra space used is always constant regardless of `n`.

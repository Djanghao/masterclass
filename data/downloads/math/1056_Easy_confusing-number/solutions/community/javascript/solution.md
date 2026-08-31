# JavaScript simple solution [88%, 100%]

**Author:** i-love-typescript
**Votes:** 4
**Link:** [https://leetcode.com/problems/confusing-number/solutions/605266/](https://leetcode.com/problems/confusing-number/solutions/605266/)

---

**Without using strings**

Runtime: 48 ms, faster than 88.43% of JavaScript online submissions for Confusing Number.
Memory Usage: 33.7 MB, less than 100.00% of JavaScript online submissions for Confusing Number.

```
function confusingNumber(n) {
  let k = n;
  const map = new Map([[0,0], [1,1], [6,9] , [8,8], [9,6]]);
  let rotated = 0;
  while (k) {
    const num =  k % 10;
    if (!map.has(num)) return false;
    rotated = rotated * 10 + map.get(num);
    k = Math.floor(k / 10);
  }
  return rotated !== n;
}
```

**With using strings**

This one is a bit slower.

```
function confusingNumber(n) {
  const str = `${n}`;
  const map = new Map([['0','0'], ['1','1'], ['6','9'] , ['8','8'], ['9','6']]);
  let rotated = [];
  for (let i = str.length - 1; i >= 0 ; i--) {
    const ch1 = str.charAt(i);
    const ch2 = map.get(ch1);
    if (!ch2) return false;
    rotated.push(ch2);
  }
  rotated = rotated.join('');
  rotated = parseInt(rotated);
  return rotated !== n;
}
```
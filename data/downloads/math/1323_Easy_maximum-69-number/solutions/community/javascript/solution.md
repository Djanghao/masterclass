# [JavaScript] Easy to understand - 3 solutions

**Author:** poppinlp
**Votes:** 29
**Link:** [https://leetcode.com/problems/maximum-69-number/solutions/484939/](https://leetcode.com/problems/maximum-69-number/solutions/484939/)

---

### SOLUTION 1

We convert the number to string and replace the first '6' to '9'.

```js
const maximum69Number = num => Number(num.toString().replace('6', '9'));
```

### SOLUTION 2

We check every digit of the number, if it's 6, we add value to make it be 9.

```js
const maximum69Number = num => {
  if (num / 1000 << 0 === 6) return num + 3000;
  if ((num / 100 << 0) % 10 === 6) return num + 300;
  if (num % 100 / 10 << 0 === 6) return num + 30;
  if (num % 10 === 6) return num + 3;
  return num;
};
```

### SOLUTION 3

We enumerate all possible numbers first. Then we just need to find it in the map.
It's a little cheat. I don't know how to call it in English. In Chinese, we call it "\u6253\u8868\u6CD5". LOL.

```js
const map = {
  6: 9,
  9: 9,
  66: 96,
  69: 99,
  96: 99,
  99: 99,
  666: 966,
  669: 969,
  696: 996,
  699: 999,
  966: 996,
  969: 999,
  996: 999,
  999: 999,
  6666: 9666,
  6669: 9669,
  6696: 9696,
  6699: 9699,
  6966: 9966,
  6969: 9969,
  6996: 9996,
  6999: 9999,
  9666: 9966,
  9669: 9969,
  9696: 9996,
  9699: 9999,
  9966: 9996,
  9969: 9999,
  9996: 9999,
  9999: 9999
};
const maximum69Number = num => map[num];
```
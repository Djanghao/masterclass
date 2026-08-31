# Javascript with explanation.

**Author:** andyoung
**Votes:** 3
**Link:** [https://leetcode.com/problems/ip-to-cidr/solutions/1098377/](https://leetcode.com/problems/ip-to-cidr/solutions/1098377/)

---

##### Notes
1. This is an interesting question for me to learn something about CIDR, but its description is poorly written.
2. However, there's a buggy test case below that expects wrong result.

	```
	"0.0.0.0"
	2
	```
	should return `[ 0.0.0.0/31]`, the test case expects `["0.0.0.0/32","0.0.0.1/32"]`.

##### Idea

1. To get a list of CIDR starting from `ip` to match the number `n`, we need to **increment** the `ip` step by step to match them,
2. Note that for each CIDR, it can cover `2^(32 - # of mask bits)` ips. For example, `255.0.0.8/29`, which has a binary form of `11111111 00000000 000000000 00001xxx` can cover `2^3 = 8` ips.
3. Also note that it does not mean you can always pick the largest number less or equal to `n` to increment. For example,  for test case `ip = "255.0.0.7", n = 10`, you might want to pick mask bits = `29`, so we can cover `8` ips in one step, however, it's not correct. Because the `ip` has a binary form of `11111111 00000000 00000000 00000111`, with 29-bit mask, you get `11111111 00000000 00000000 00000xxx`. This will include ip like `11111111 00000000 00000000 00000000`, i.e., `(255.0.0.0)`, which is smaller than the current ip.
4. If you try a few examples you will see that the number of mask bits is determined by the minimum of 
	1. the # of bits from rightmost `1` to the end bit of `ip` and 
	2. the # of bits from leftmost `1` to the end bit of `n`.
5. For example, for the test case  `ip = "255.0.0.7", n = 10`,
	1. `ip` in binary form `11111111 00000000 00000000 00000111` , from rightmost `1` to end, there's `0` bits, and `n` in binary form `1010`, from leftmost `1` to end, there're `3` bits. So we will increment `ip` by `2^0 = 1`, and decrement `n` by `2^0 = 1`. With # of mask bits = `32 - 0 = 32`, we get CIDR: `${ip}/${# of mask bits} = 255.0.0.7/32`.
	2. `ip` now becomes  `11111111 00000000 00000000 00001000`, from rightmost `1` to end, there're `3` bits, and `n` becomes `1001`, from leftmost `1` to end, there're `3` bits. So we will increment `ip` by `2^3 = 8`, and decrement `n` by `2^3 = 8`. With # of mask bits = `32 - 3 = 29`, we get CIDR: `${ip}/${# of mask bits} = 255.0.0.8/29`.
	3. `ip` now becomes  `11111111 00000000 00000000 00010000`, from rightmost `1` to end, there're `4` bits, and `n` becomes `1`, from leftmost `1` to end, there're `0` bits. So we will increment `ip` by `2^0 = 1`, and decrement `n` by `2^0 = 1`. With # of mask bits = `32 - 0 = 32`, we get CIDR: `${ip}/${# of mask bits} = 255.0.0.16/32`.
	4. `n` becomes `0`, stop.

First version without bit operation.
```
var ipToCIDR = function(ip, n) {
  // find number of bits from rightmost one to the right end
  const findBitNum = num => {
    // if (num == 0) return 0; // this is to pass the buggy test case
    let ans = 0, numStr = num.toString(2).padStart(32, '0');
    while (ans < 32 && numStr[31 - ans] != "1") ans += 1;
    return ans; 
  }
  const numToIp = num => [24, 16, 8, 0].map(i => Math.floor(num / (2 ** i)) % 256).join('.');
  
  const ans = [];
  let start = ip.split('.').reduce((acc, num) => 256 * acc + parseInt(num), 0);
  
  while (n > 0) {
    const len1 = findBitNum(start), len2 = n.toString(2).length - 1;
    const size = Math.min(len1, len2);
    ans.push(numToIp(start) + `/${32-size}`);
    start += 2 ** size;
    n -= 2 ** size;
  }
  
  return ans;
};
```

Second version with bit operation, slightly cleaner.
```
const ipToCIDR = function(ip, n) {
  // this findBitNum passes the buggy test case by coincidence.
  const findBitNum = num => num.toString(2).length - 1;
  const numToIp = num => [24, 16, 8, 0].map(i => (num >>> i) % 256).join('.');
  let start = ip.split('.').reduce((acc, x) => 256 * acc + parseInt(x), 0);
  
  const ans = [];
  while (n > 0) {
	// start & -start will clear all bits before rightmost 1
    const len1 = findBitNum(start & -start), len2 = findBitNum(n);
    const len = Math.min(len1, len2);
    ans.push(numToIp(start) + `/${32-len}`);
    start += 1 << len;
    n -= 1 << len;
  }
  return ans;
};
```
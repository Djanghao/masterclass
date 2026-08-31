# No Magic Numbers Clean Solution

**Author:** zimturing
**Votes:** 8
**Link:** [https://leetcode.com/problems/convert-a-number-to-hexadecimal/solutions/1598274/](https://leetcode.com/problems/convert-a-number-to-hexadecimal/solutions/1598274/)

---

```
function toHex(num: number): string {
  // Create Map
  const Hex = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "a",
    11: "b",
    12: "c",
    13: "d",
    14: "e",
    15: "f",
  };
  let res = "";
  if (num === 0) return Hex[0];
  // If number is less than 0 convert to 2's complement
  if (num < 0) {
    num += 2 ** 32;
  }
  console.log(num);
  while (num > 0) {
    let rem = Math.floor(num % 16);
    res = Hex[rem].toString() + res;
    num = Math.floor(num / 16);
  }
  return res;
}
```
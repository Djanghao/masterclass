# TypeScript solution by finding minimal number to each RGB in 65ms

**Author:** lisez
**Votes:** 0
**Link:** [https://leetcode.com/problems/similar-rgb-color/solutions/5266287/](https://leetcode.com/problems/similar-rgb-color/solutions/5266287/)

---


# Details

https://leetcode.com/submissions/detail/1278980077/

# Code
```
function splitColor(color: string): string[] {
  return [color.slice(1, 3), color.slice(3, 5), color.slice(5, 7)];
}

function isDoubleDigit(color: string): boolean {
  return color[0] === color[1];
}

function findMin(num: number): number {
  const pairs: number[] = [
    0x00,
    0x11,
    0x22,
    0x33,
    0x44,
    0x55,
    0x66,
    0x77,
    0x88,
    0x99,
    0xAA,
    0xBB,
    0xCC,
    0xDD,
    0xEE,
    0xFF,
  ];

  let min = 0;
  let last = Infinity;
  for (const n of pairs) {
    const diff = (num - n) ** 2;
    if (diff < last) {
      min = n;
      last = diff;
    }
  }

  return min;
}

function similarRGB(color: string): string {
  return "#" +
    splitColor(color).map((e) =>
      isDoubleDigit(e)
        ? e
        : findMin(parseInt(e, 16)).toString(16).padStart(2, "0")
    )
      .join("");
}

```
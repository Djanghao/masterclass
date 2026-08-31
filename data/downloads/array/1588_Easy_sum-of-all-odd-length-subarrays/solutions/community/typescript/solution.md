# Typescript - O(n)

**Author:** jarreskng
**Votes:** 3
**Link:** [https://leetcode.com/problems/sum-of-all-odd-length-subarrays/solutions/1189659/](https://leetcode.com/problems/sum-of-all-odd-length-subarrays/solutions/1189659/)

---

```
/*
 * base = Math.ceil(n / 2) = 4 (count of lengths of sub-arrays)
 * f(k) = f(n - k) (how many times arr[k] appears in sub-arrays)
 * f(k) = Math.ceil(n / 2) + Math.floor(0.5 * k * (n - k - 1))
 *
 * arr = [ 0, 1, 2, 3, 4, 5, 6, 7 ]
 * n = arr.length = 8
 * base = Math.ceil(8 / 2) = 4
 * f(0) = f(7) = 4 + 0 = 4
 * f(1) = f(6) = 4 + 3 = 7
 * f(2) = f(5) = 4 + 5 = 9
 * f(3) = f(4) = 4 + 6 = 10
 *
 * (0 * 4) + (1 * 7) + (2 * 9) + (3 * 10) + (4 * 10) + (5 * 9) + (6 * 7) + (7 * 4) = 210
 */
function sumOddLengthSubarrays(arr: number[]): number {
    const count = (index: number): number => Math.ceil(n / 2) + Math.floor(0.5 * index * (n - index - 1));
    const n = arr.length;
    return arr.reduce((acc, x, i) => acc + x * count(i), 0);
}
```
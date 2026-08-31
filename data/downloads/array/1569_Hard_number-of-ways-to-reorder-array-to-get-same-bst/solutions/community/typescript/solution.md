# Editorial Solution /  Typescript / Pascal Triangle

**Author:** bakunovdo
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/solutions/3644435/](https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/solutions/3644435/)

---

# 
```
function numOfWays(nums: number[]): number {
  const mod = BigInt(10 ** 9 + 7);
  const table: number[][] = [];

  // Fill Pascal Table
  for (let i = 0; i < nums.length; i++) {
    table[i] = new Array(i + 1).fill(1);
    for (let j = 1; j < nums.length; j++) {
      if (j > i) continue;
      const a = table[i - 1][j - 1] ?? 0;
      const b = table[i - 1][j] ?? 0;
      table[i][j] = (a + b) % Number(mod);
    }
  }

  function getWaysHelper(nums: number[]): bigint {
    const m = nums.length;
    if (m < 3) return 1n;

    const leftNodes: number[] = [];
    const rightNodes: number[] = [];

    for (let i = 1; i < m; i++) {
      if (nums[i] < nums[0]) leftNodes.push(nums[i]);
      else rightNodes.push(nums[i]);
    }

    const leftWays = getWaysHelper(leftNodes) % mod;
    const rightWays = getWaysHelper(rightNodes) % mod;

    return (((leftWays * rightWays) % mod) * BigInt(table[m - 1][leftNodes.length])) % mod;
  }

  const ways = getWaysHelper(nums) - 1n; // -1 original order

  return Number(ways % mod);
}
```
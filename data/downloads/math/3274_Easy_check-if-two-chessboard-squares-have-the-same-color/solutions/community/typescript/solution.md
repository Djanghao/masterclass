# Brute Force TypeScript Solution

**Author:** mirzaianov
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-two-chessboard-squares-have-the-same-color/solutions/5726809/](https://leetcode.com/problems/check-if-two-chessboard-squares-have-the-same-color/solutions/5726809/)

---

# Complexity
- Time complexity: O(1)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
enum Color {
  WHITE = 'white',
  BLACK = 'black',
}

const findColor = (cell: string): Color => {
  const map = new Map<string, number>([
    ['a', 1],
    ['b', 2],
    ['c', 3],
    ['d', 4],
    ['e', 5],
    ['f', 6],
    ['g', 7],
    ['h', 8],
  ]);

  const sum: number = map.get(cell[0])! + Number(cell[1]);

  return sum % 2 === 0 ? Color.BLACK : Color.WHITE;
};

const checkTwoChessboards = (coordinate1: string, coordinate2: string): boolean =>
  findColor(coordinate1) === findColor(coordinate2);
```
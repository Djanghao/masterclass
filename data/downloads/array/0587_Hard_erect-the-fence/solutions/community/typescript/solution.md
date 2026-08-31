# Typescript | Convex Hull Algorithm with a little modification

**Author:** anandawira754
**Votes:** 1
**Link:** [https://leetcode.com/problems/erect-the-fence/solutions/1443383/](https://leetcode.com/problems/erect-the-fence/solutions/1443383/)

---

```
function outerTrees(trees: number[][]): number[][] {
  // Boring case: no points or a single point, possibly repeated multiple times.
  if (trees.length === 1) return trees;

  // Sort the points lexicographically (tuples are compared lexicographically).
  // Remove duplicates to detect the case we have just one unique point.
  trees.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });

  // 2D cross product of OA and OB vectors, i.e. z-component of their 3D cross product.
  // Returns a positive value, if OAB makes a counter-clockwise turn,
  // negative for clockwise turn, and zero if the points are collinear.
  const cross = (
    o: Array<number>,
    a: Array<number>,
    b: Array<number>,
  ): number => {
    return (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
  };

  // Build lower hull
  const lower: number[][] = new Array();
  trees.forEach((p) => {
    while (
      lower.length >= 2 &&
      cross(lower[lower.length - 2], lower[lower.length - 1], p) < 0
    ) {
      lower.pop();
    }
    lower.push(p);
  });

  // Build upper hull
  const upper: number[][] = new Array();
  trees
    .slice()
    .reverse()
    .forEach((p) => {
      while (
        upper.length >= 2 &&
        cross(upper[upper.length - 2], upper[upper.length - 1], p) < 0
      ) {
        upper.pop();
      }
      upper.push(p);
    });

  // Concatenation of the lower and upper hulls gives the convex hull.
  // Last point of each list is omitted because it is repeated at the beginning of the other list.
  upper.pop();
  lower.pop();

  // Remove duplicate point
  const prevs = new Set();
  return [...upper, ...lower].filter((value) => {
    if (prevs.has(value.toString())) {
      return false;
    }
    prevs.add(value.toString());
    return true;
  });
}

```
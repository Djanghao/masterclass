# [TypeScript] 40ms Beats 100%

**Author:** badnewz
**Votes:** 1
**Link:** [https://leetcode.com/problems/furthest-point-from-origin/solutions/3978081/](https://leetcode.com/problems/furthest-point-from-origin/solutions/3978081/)

---

# Approach
l = count of "L"
r = count of "R"
k = count of "_"
n = length of $moves$
Furthest distance (f) = $|l-r|+k$
$k=n-l-r$
So, $f =
  \\begin{cases}
    \	ext{if }l>r,&l-r+k=l-r+(n-l-r)=n-2r\\\\
    \	ext{if }l \\leq r,&r-l+k=r-l+(n-l-r)=n-2l
  \\end{cases}$

# Complexity
- Time complexity: $\\mathcal{O}(n)$
- Space complexity: $\\mathcal{O}(1)$

# Code
```
function furthestDistanceFromOrigin(moves: string): number {
    let l = 0, r = 0, n = moves.length;
    for (let i = 0; i < n; i++)
        if (moves[i] === 'L') l++
        else if (moves[i] === 'R') r++;
    return n - 2 * (l > r ? r : l);
};
```
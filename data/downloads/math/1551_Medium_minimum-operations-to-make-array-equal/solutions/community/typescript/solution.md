# [TypeScript] 1-line math solution. Beats 100% (46ms). O(1)

**Author:** badnewz
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-array-equal/solutions/4310569/](https://leetcode.com/problems/minimum-operations-to-make-array-equal/solutions/4310569/)

---

# Math approach
We need to find sum of differences $num[i]$ and $num*$ for all $i<n/2$,
where $num*$ is an average of $nums$.
for sequense $[2i-1,i=1..n]$, average is $n$
$num*=(1+(2n-1))/2=n$
the goal is to find $\\sum_{i=1}^{\\lfloor n/2 \\rfloor}(n-nums[i])$=$\\sum_{i=1}^{\\lfloor n/2 \\rfloor}(n-(2i-1))$=
$\\begin{cases}
  n^2/4   & \\quad \	ext{if } n \	ext{ is even}\\\\
  (n^2-1)/4 & \\quad \	ext{if } n \	ext{ is odd}
\\end{cases}$


# Complexity
- Time complexity: $\\mathcal{O}(1)$
- Space complexity: $\\mathcal{O}(1)$

# Code
```
const minOperations = (n: number) => n * n >> 2
```

# Regular approach
$\\sum_{i=1}^{\\lfloor n/2 \\rfloor}(n-nums[i])$=$\\sum_{i=1}^{\\lfloor n/2 \\rfloor}(n-(2i-1))$=$\\sum_{j=1}^{n}\\lfloor j/2 \\rfloor$

# Complexity
- Time complexity: $\\mathcal{O}(n)$
- Space complexity: $\\mathcal{O}(1)$

# Code
```
function minOperations( n: number ): number {
    let r = 0;
    for ( let i = 1; i <= n; i++ ) r += i >> 1;
    return r;
};
```

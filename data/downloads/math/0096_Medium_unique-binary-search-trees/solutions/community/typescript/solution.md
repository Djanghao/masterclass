# Catalan Numbers

**Author:** vmss
**Votes:** 1
**Link:** [https://leetcode.com/problems/unique-binary-search-trees/solutions/5358827/](https://leetcode.com/problems/unique-binary-search-trees/solutions/5358827/)

---

I don't know, but this feels like cheating, maybe I should use some algorithmic approach to calculate answer for this.

But here is a fact which is good to remember : 
The number of unique binary search trees that can be formed with $$n$$ vertices is called the $$n$$<sup>$$th$$</sup> Catalan number.

$$n$$<sup>$$th$$</sup> Catalan number is given by <sup>$$2n$$</sup>$$C$$<sub>$$n$$</sub>$$/(n+1)$$.

To understand how I implemented the `ncr` function, please refer to this solution where I explain everything, I just don't want to write it again:
https://leetcode.com/problems/unique-paths/solutions/5358575/combinatorics

If you know any other recursive, or iterative approach, please explain.

# Code
```
function numTrees(n: number): number {
    return ncr(2*n, n)/(n+1);
};

function ncr(n : number, r : number) {
    if(r === 0) return 1;
    if(r === n) return n;

    return (n/r) * ncr(n-1, r-1);
}
```
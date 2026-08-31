# [TypeScript] 3 pointers. Clean and fast code (54 ms, beats 100%)

**Author:** badnewz
**Votes:** 3
**Link:** [https://leetcode.com/problems/ugly-number-ii/solutions/4349536/](https://leetcode.com/problems/ugly-number-ii/solutions/4349536/)

---

# Complexity
- Time complexity: $\\mathcal{O}(n)$
- Space complexity: $\\mathcal{O}(n)$

# Code
```
function nthUglyNumber(n: number): number {
    const ugly = Array( n ); ugly[ 0 ] = 1;
    let p2 = 0, p3 = 0, p5 = 0;
    for ( let i = 1; i < n; i++ ) {
        const next = Math.min( ugly[ p2 ] * 2, ugly[ p3 ] * 3, ugly[ p5 ] * 5 );
        ugly[ i ] = next;
        if ( next % 2 === 0 ) p2++;
        if ( next % 3 === 0 ) p3++;
        if ( next % 5 === 0 ) p5++;
    }
    return ugly[ n - 1 ];
}
```
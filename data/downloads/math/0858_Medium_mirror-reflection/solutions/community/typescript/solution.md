# TS solution beats 100%. Using LCM.

**Author:** dimasiandro
**Votes:** 0
**Link:** [https://leetcode.com/problems/mirror-reflection/solutions/6056015/](https://leetcode.com/problems/mirror-reflection/solutions/6056015/)

---

# Code
```typescript []
function mirrorReflection(p: number, q: number): number {
    const lcm = p * q / gcd(p, q);
    return (lcm / p) % 2 ? ((lcm / q) % 2 ? 1 : 2) : 0;
};
function gcd(a, b) {
    while (b !== 0) [a, b] = [b, a % b];
    return a;
}
```
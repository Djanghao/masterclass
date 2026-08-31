# Count number with even/odd set bits

**Author:** macrohard
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-triplets-with-even-xor-set-bits-ii/solutions/5674067/](https://leetcode.com/problems/count-triplets-with-even-xor-set-bits-ii/solutions/5674067/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
class Solution {
    public long tripletCount(int[] a, int[] b, int[] c) {
        int an = a.length, bn = b.length, cn = c.length;
        int ae = countEvenOneBits(a); 
        int be = countEvenOneBits(b); 
        int ce = countEvenOneBits(c); 
        int ao = an - ae;
        int bo = bn - be;
        int co = cn - ce;

        long abe = (long)ae * be + (long)ao * bo;
        long abo = (long)an * bn - abe;
        long abce = abe * ce + abo * co;
        return abce;
    }

    int countEvenOneBits(int[] a) {
        int res = 0;
        for(int k: a) {
            if(Integer.bitCount(k) % 2 == 0) res++;
        }
        return res;
    }
}
```

Another version:
```
class Solution {
    public long tripletCount(int[] a, int[] b, int[] c) {
        long e = 1, o = 0;
        for(int[] arr: List.of(a, b, c)) {
            int an = arr.length;
            int ae = countEvenOneBits(arr);
            int ao = an - ae;
            long e2 = e * ae + o * ao;
            long o2 = (e + o) * an - e2;
            e = e2;
            o = o2;
        }
        return e;
    }

    int countEvenOneBits(int[] a) {
        int res = 0;
        for(int k: a) {
            if(Integer.bitCount(k) % 2 == 0) res++;
        }
        return res;
    }
}
```
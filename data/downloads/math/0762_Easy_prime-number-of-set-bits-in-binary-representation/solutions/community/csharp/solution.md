# C# solution | 70% time, 67.5% space | used set

**Author:** Photon_einstein
**Votes:** 1
**Link:** [https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/solutions/3566428/](https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/solutions/3566428/)

---

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(log2(n))
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int CountPrimeSetBits(int left, int right) {
        int i, maxPrime = 32, step=1, n=0;
        HashSet<int> s = new HashSet<int>();
        for (i = 2; i <= maxPrime; i+=step) {
            if (isPrime(ref i)) {
                s.Add(i);
            }
            if (i == 3) {
                ++step;
            }
        }
        for (i = left; i <= right; ++i) {
            if (s.Contains(binCountBitsOn(ref i))) {
                ++n;
            }
        }
        return n;
    }

    public int binCountBitsOn(ref int n) {
        int i, c = 0;
        for (i = 1 << 30; i > 0; i = i / 2) {
            if((n & i) != 0) {
                ++c;
            }
        }
        return c;
    }

    public bool isPrime(ref int n) {
        if (n <= 1) {
            return false;
        } else if (n == 2) {
            return true;
        }
        for (int i = 3; i < n; i+=2) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }

}


```
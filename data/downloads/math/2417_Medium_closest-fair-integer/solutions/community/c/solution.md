# C++ Short BruteForce by Skipping Odd Length

**Author:** Student2091
**Votes:** 2
**Link:** [https://leetcode.com/problems/closest-fair-integer/solutions/2608127/](https://leetcode.com/problems/closest-fair-integer/solutions/2608127/)

---

In the worst case, it won't be run for that many times (I think about 1e4) if we skip odd length.
So bruteforce is a good option here.

```C++
    int closestFair(int n) {
        for(;;++n){
            string s = to_string(n);
            int sz = int(s.size());
            if (sz & 1){ // make it even length
                n = pow(10, sz++);
                s = to_string(n);
            }
            if (count_if(begin(s), end(s), [](char c){return (c-'0')&1;}) == sz/2){
                return n;
            }
        }
    }
```
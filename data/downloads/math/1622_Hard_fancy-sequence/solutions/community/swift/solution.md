# [0ms][1LINER][100%][Fastest Solution Explained] O(n)time complexity O(n)space complexity

**Author:** darian-catalin-cucer
**Votes:** 1
**Link:** [https://leetcode.com/problems/fancy-sequence/solutions/2309293/](https://leetcode.com/problems/fancy-sequence/solutions/2309293/)

---


(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful, ***please upvote*** this post.)
***Take care brother, peace, love!***

```
```

The best result for the code below is ***0ms / 3.27MB*** (beats 99.04% / 90.42%).

```

int mod97 = 1000000007;
/**
Calculates multiplicative inverse
*/
unsigned long modPow(unsigned long x, int y) {
        unsigned long tot = 1, p = x;
        for (; y; y >>= 1) {
            if (y & 1)
                tot = (tot * p) % mod97;
            p = (p * p) % mod97;
        }
        return tot;
    }
class Fancy {
public:
    unsigned long seq[100001];
    unsigned int length = 0;
    unsigned long increment = 0;
    unsigned long mult = 1;
    Fancy() {
        ios_base::sync_with_stdio(false);
        cin.tie(NULL);
    }
    
    void append(int val) {
        seq[length++] = (((mod97 + val - increment)%mod97) * modPow(mult, mod97-2))%mod97;
    }
    void addAll(int inc) {
        increment = (increment+ inc%mod97)%mod97;
    }
    
    void multAll(int m) {
        mult = (mult* m%mod97)%mod97;
        increment = (increment* m%mod97)%mod97;
    }
    
    int getIndex(int idx) {
        
        if (idx >= length){
            return -1;
        }else{
            return ((seq[idx] * mult)%mod97+increment)%mod97;
        }
    }
};

```

```
```

```
```

***"Open your eyes. Expect us." - \uD835\uDCD0\uD835\uDCF7\uD835\uDCF8\uD835\uDCF7\uD835\uDD02\uD835\uDCF6\uD835\uDCF8\uD835\uDCFE\uD835\uDCFC***

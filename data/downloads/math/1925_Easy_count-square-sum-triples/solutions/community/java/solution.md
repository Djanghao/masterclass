# O(n^2) [C++/Java/Python]

**Author:** lokeshsk1
**Votes:** 27
**Link:** [https://leetcode.com/problems/count-square-sum-triples/solutions/1329355/](https://leetcode.com/problems/count-square-sum-triples/solutions/1329355/)

---

**C++ :**
```
class Solution {
public:
    int countTriples(int n) { 
        int c = 0;
        for(int i=1 ; i<=n ; i++){
            for(int j=i+1 ; j<=n ; j++){
                int sq = ( i * i) + ( j * j);
                int r = sqrt(sq);
                if( r*r == sq && r <= n )
                    c += 2;
            }
        }
        return c;
    }
};
```

**Java:**
```
class Solution {
    public int countTriples(int n) {
        int c = 0;
        for(int i=1 ; i<=n ; i++){
            for(int j=i+1 ; j<=n ; j++){
                int sq = ( i * i) + ( j * j);
                int r = (int) Math.sqrt(sq);
                if( r*r == sq && r <= n )
                    c += 2;
            }
        }
        return c;
    }
}
```

**Python:**
```
class Solution:
    def countTriples(self, n: int) -> int:
        c = 0
        for i in range(1, n+1):
            for j in range(i+1, n+1):
                sq = i*i + j*j
                r = int(sq ** 0.5)
                if ( r*r == sq and r <= n ):
                    c +=2
        return c
```
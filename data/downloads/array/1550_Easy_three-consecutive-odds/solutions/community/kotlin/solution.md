# a few solutions

**Author:** claytonjwong
**Votes:** 2
**Link:** [https://leetcode.com/problems/three-consecutive-odds/solutions/794079/](https://leetcode.com/problems/three-consecutive-odds/solutions/794079/)

---

# Some Solutions

*Kotlin*
```
class Solution {
    var threeConsecutiveOdds = { A: IntArray -> (2..A.lastIndex).any{ A[it-2] and 1 == 1 && A[it-1] and 1 == 1 && A[it] and 1 == 1 } }
}
```

*Javascript*
```
let threeConsecutiveOdds = A => A.some((_, i) => i < 2 ? false : A[i - 2] & A[i - 1] & A[i] & 1);
```

*Python3*
```
class Solution:
    def threeConsecutiveOdds(self, A: List[int]) -> bool:
        return any([False if i < 2 else A[i - 2] & A[i - 1] & A[i] & 1 for i in range(len(A))])
```

*C++*
```
class Solution {
public:
    using VI = vector<int>;
    bool threeConsecutiveOdds(VI& A) {
        return any_of(A.begin(), A.end(), [i = -1, &A](auto _) mutable {
            return ++i < 2 ? false : A[i - 2] & A[i - 1] & A[i] & 1;
        });
    }
};
```

---

# Reduce Solutions

Reduce `A` with accumulator `found` initially set to `false`, return `true` if and only if a consecutive sequence of 3 odd values is `found` during this linear reduction of `A`.

**Note:** accumulate() can be hacked into "reduce()" for C++ via a mutable lambda used to track the current i-th index \uD83D\uDC4D

---

**Contest 202 Screenshare:** https://www.youtube.com/watch?v=t1_lHuLvhzU&feature=youtu.be

---
    
*Javascript*
```
let threeConsecutiveOdds = A => A.reduce((found, _, i) => i < 2 ? found : found || A[i - 2] & A[i - 1] & A[i] & 1, false);
```

*Python3*
```
class Solution:
    def threeConsecutiveOdds(self, A: List[int]) -> bool:
        return reduce(lambda found, i: found if i < 2 else found or A[i - 2] & A[i - 1] & A[i] & 1, [i for i in range(len(A))], False)
```
    
*C++*
```
class Solution {
public:
    using VI = vector<int>;
    bool threeConsecutiveOdds(VI& A) {
        return accumulate(A.begin(), A.end(), false, [i = -1, &A](auto found, auto _) mutable {
            return ++i < 2 ? found : found || A[i - 2] & A[i - 1] & A[i] & 1;
        });
    }
};
```
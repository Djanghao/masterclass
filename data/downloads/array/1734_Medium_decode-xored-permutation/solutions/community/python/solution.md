# Python 3   ||   4 lines, w/example ||   T/S : 76% / 75%

**Author:** Spaulding_
**Votes:** 8
**Link:** [https://leetcode.com/problems/decode-xored-permutation/solutions/2782337/](https://leetcode.com/problems/decode-xored-permutation/solutions/2782337/)

---

It helps to recall that the xor operator is commutative and associative, and that (a^b)^b = a

```
class Solution:
    def decode(self, encoded: List[int]) -> List[int]:  # acc1: xor of [1... n]
                                                        # acc2: xor of [1...,k-1, k+1,... n], where k is 
        n, acc2 = len(encoded), 0                       # the last element of the answer

                                                        #   Ex: encoded = [6,5,4,6]

        acc1 = reduce(lambda x, y: x^y,range(1, n+2))   # acc1 = xor([1,2,3,4,5]) = 1^2^3^4^5 = 1
       
        for i in range(0,n,2): acc2 ^= encoded[i]       # acc2 = xor([6,4]) = 6^4 = 2
  
        return list(accumulate(encoded[::-1],           # acc1 ^ acc2 = 1^2 = 3;  return [2, 4, 1, 5, 3]
                    xor, initial = acc1^acc2))[::-1]
```
[https://leetcode.com/problems/decode-xored-permutation/submissions/1280013599/](https://leetcode.com/problems/decode-xored-permutation/submissions/1280013599/)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*^), in which *N* ~ `len(encoded)`.
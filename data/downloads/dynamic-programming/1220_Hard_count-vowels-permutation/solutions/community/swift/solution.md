# 100% fastest solution in Swift with O(n) time and O(1) memory

**Author:** SaketMurari
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-vowels-permutation/solutions/2394101/](https://leetcode.com/problems/count-vowels-permutation/solutions/2394101/)

---

```
class Solution {
       func countVowelPermutation(_ n: Int) -> Int {
           
           if n == 1 {
               return 5
           }
           
           var count = 2 
           
            var a = 1 
            var e = 1
            var i = 1
            var o = 1
            var u = 1
            var mod = 1000000007
           /* fundamental is simple, how many strings can end up with last character as a, e, i.... , 
		   for 1st iteration 1 string each vowel. But when n is 2, you would notice 3 strings with end char a, 2 for e 
		   likewise.  Pattern here is that for last character is e, i or u, that string can have "a" as end. Similarly for other scenarios. */
           while count <= n {
               
               var nextA = e+i+u
               var nextE = a+i
               var nextO = i
               var nextI = e + o
               var nextU =  i + o
               
               a = nextA % mod
               e = nextE % mod
               i = nextI % mod
               o = nextO % mod
               u = nextU % mod
               
               count += 1
               
           }
           
           return (a+e+i+o+u)%mod
        
    }
}
```
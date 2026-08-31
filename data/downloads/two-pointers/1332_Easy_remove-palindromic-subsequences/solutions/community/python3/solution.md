# ✅ Python || 2 Easy || One liner

**Author:** constantine786
**Votes:** 52
**Link:** [https://leetcode.com/problems/remove-palindromic-subsequences/solutions/2124192/](https://leetcode.com/problems/remove-palindromic-subsequences/solutions/2124192/)

---

The input `s` meets the following requirements:
>s[i] is either 'a' or 'b'.
>1 <= s.length <= 1000

So if you take this as a hint, you can observe there are only two possible outputs:
1. if `s` is pallindrome, return `1`
2. else return `2`. 

If the `s` is not pallindrome, it will always be reduced to empty string in 2 steps.
>eg: s='ababaab'
>ababaab -> bbb -> '' or ababaab -> aba -> ''

So taking this observation into account, the main component of our solution is to determine if a given input is pallindrome or not.

1. ## **Reverse String**
```
class Solution:
    def removePalindromeSub(self, s: str) -> int:
        return 1 if s == s[::-1] else 2
```

Another variation by [darkHarry](https://leetcode.com/darkHarry/):
```
class Solution:
    def removePalindromeSub(self, s: str) -> int:
        return int(s==s[::-1]) or 2
```

**Time - O(n)**
**Space - O(n)** - space for reverse string

---

2. ## **Two pointers**
```
class Solution:
    def removePalindromeSub(self, s: str) -> int:
        def zip_iter():
            i,j,n=0,len(s)-1,len(s)//2
            while i<=n:
                yield (s[i], s[j])
                i+=1
                j-=1
                
        return 1 if all(x==y for x,y in zip_iter()) else 2
```

A one-liner variation by [borkooo](https://leetcode.com/borkooo/).

```
class Solution:
    def removePalindromeSub(self, s: str) -> int:
        return 2 - all(s[i] == s[~i] for i in range(len(s) // 2))
```

**Time - O(n)**
**Space - O(1)**

---

***Please upvote if you find it useful***
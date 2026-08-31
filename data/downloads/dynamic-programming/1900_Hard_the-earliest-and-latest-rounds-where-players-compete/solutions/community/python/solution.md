# Greedy  log(N) solution

**Author:** wisdompeak
**Votes:** 20
**Link:** [https://leetcode.com/problems/the-earliest-and-latest-rounds-where-players-compete/solutions/1271531/](https://leetcode.com/problems/the-earliest-and-latest-rounds-where-players-compete/solutions/1271531/)

---

This greedy code can handle n up to 1e18. No iteration over choices, no min() or max() used. 
However, the solution is hard to explain. Sorry, have to leave it for you guys to understand.
```py
class Solution(object):
    def earliestAndLatest(self, n, a, b):
        """
        :type n: int
        :type firstPlayer: int
        :type secondPlayer: int
        :rtype: List[int]
        """
        def simplify(n, a, b):
            # swap
            if a>b: a, b = b, a
            # flip
            if a+b >= n+1:
                a, b = n+1-b, n+1-a
            return n, a, b
    
        def get_info(n,a,b):
            ll, rr = a-1, n-b
            aa = n-ll
            bb = 1+rr
            return ll,rr,aa,bb

        def while_loop(n, a, b):
            ans = 1
            while a+b < n+1:
                n = (n+1)/2
                ans += 1
            if b-a-1==0:
                while n%2:
                    n = (n+1)/2
                    ans += 1
            return ans

        def solve_fast(n, a, b):
            n, a, b = simplify(n, a, b)
            if a+b == n+1: 
                return 1

            # b is on the left, including center
            if b <= (n+1)/2:
                return while_loop(n, a, b)
            
            # b is on the right
            ll, rr, aa, bb = get_info(n, a, b)
            if (ll%2==1 and bb-a-1==0):
                if (n%2==0) and (b == n/2+1):                    
                    return 1 + while_loop((n+1)/2, a, a+1)
                else:
                    return 3
            else:
                return 2

        def solve_slow(n, a, b):
            n, a, b = simplify(n, a, b)
            if a+b==n+1: 
                return 1
            # b is in the left, all can be deleted
            if b <= n+1-b:  
                return 1+solve_slow((n+1)/2, 1, 2)
            else:
                # b is in the right
                ll, rr, aa, bb = get_info(n, a, b)
                keep = (b-bb-1)/2 + n%2
                return 1+solve_slow((n+1)/2, 1, 1+keep+1) 

        return [solve_fast(n,a,b), solve_slow(n,a,b)]
```		
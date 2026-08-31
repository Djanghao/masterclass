# Why (a&b) ^ (a&c) = a&(b^c)? | Proof | Full Explanation | Logic

**Author:** KarMa_001
**Votes:** 7
**Link:** [https://leetcode.com/problems/find-xor-sum-of-all-pairs-bitwise-and/solutions/2499760/](https://leetcode.com/problems/find-xor-sum-of-all-pairs-bitwise-and/solutions/2499760/)

---

```
Please consider upvoting if found helpful! :)
```

"^"  = Logical XOR
"+"  = Logical OR
"."   = Logical AND

As per Boolean Algebra, we know that A^B = A'.B + A.B'

Proof:

LHS  = (a&b) ^ (a&c)
= (a.b) ^ (a.c)
	    = A^B . . . . . . . . . . . . . .(A = a.b, B = a.c)
	    = A'B | AB'
		= (a . b)' . (a . c) + (a . b) . (a . c)'
		= (a' + b') . (a . c) + (a . b) . (a' + c')
	    = (a' . a . c  +  b' . a . c)  +  (a . b . a' + a . b . c')
		= ( 0 + a.b'.c) + ( 0 + a.b.c') . . . . . . . . . . . . . . . . (becoz   a . a' = 0 (null) )
		= a.b'.c + a.b.c'
		= a.(b'c + b.c')
		= a.(b^c)
		= a&(b^c) = RHS
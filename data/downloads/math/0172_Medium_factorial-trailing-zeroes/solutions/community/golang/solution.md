# Python/JS/Go/C++ solution with O( log N ) [w/ Hint]

**Author:** brianchiang_tw
**Votes:** 5
**Link:** [https://leetcode.com/problems/factorial-trailing-zeroes/solutions/448166/](https://leetcode.com/problems/factorial-trailing-zeroes/solutions/448166/)

---

[\u4E2D\u6587\u8A73\u89E3 \u89E3\u984C\u6587\u7AE0](https://vocus.cc/article/651d2000fd89780001a9820d)

Hint:

----

n! = n x n-1 x n-2 ... x 1
That means trailing zero is contributed by the number of (5, 2) pair in prime factor decomposition of n!

With the value growing on n, n can be re-written as n = **5**^**k** x **2**^**q** x  (other prime factors ...).

The **key-point** is the **k**, the exponent of 5, because k \u2266 q always for every possible n! with trailing zero.

Observation:

5! = 5 x 4 x 3 x 2 x 1 = 5^1 x 2^1 x ( 4 x 3 ) = 5^**1** x 2^3 x other prime factors= 12**0**

10! = 10 x 9 x ... 5 x ...x 2 x 1 = 5^**2** x 2^8 x other prime factors = 36288**00**

15! = 15 x 14 x ... x 2 x1 = 5^**3** x 2^11 x other prime factors = 1307674368**000**

---

Method_#1: Iterative implementation

Python:

```
class Solution:
    def trailingZeroes(self, n: int) -> int:
        
        exponent_of_5 = 0
        
        while n > 4 :
            
            quotient = n // 5
            
            exponent_of_5, n =  exponent_of_5+quotient, quotient
        
        return exponent_of_5
```

---

Javascript:

```
var trailingZeroes = function(n) {
    
    let exp_of_5 = 0;
    
    while( n > 4 ){
        
        let quotient = Math.floor(n / 5);
        
        exp_of_5 = exp_of_5 + quotient;
        n = quotient;
    }
    
    return exp_of_5;
};
```

---

Go

```
func trailingZeroes(n int) int {
    
    exp_of_5 := 0
    
    for n > 4 {
        
        quotient := n / 5
        
        exp_of_5 = exp_of_5 + quotient
        n = quotient
        
    }
    
    return exp_of_5
}
```

---

C++

```
class Solution {
public:
    int trailingZeroes(int n) {
        
        int exp_of_5 = 0;
        
        while( n > 4 ){
            
            int quotient = n / 5;
            exp_of_5 = exp_of_5 + quotient;
            n = quotient;
        }
        
        return exp_of_5;
    }
};
```

---

Method_#2: Recursive implementation

Python:

```
class Solution:
    def trailingZeroes(self, n: int) -> int:
        
        if n == 0:
            # Base case
            return 0
        
        else:
            # Inductive step
            return ( n//5 + self.trailingZeroes(n//5) )
```

---

Javascript:

```
var trailingZeroes = function(n) {
    
    if( n == 0 ){
        // base case
        return 0;
    }
    
    // General cases
    let quotient = Math.floor( n / 5 );
    return ( quotient + trailingZeroes(quotient) );
    
}
```

---

Go

```
func trailingZeroes(n int) int {
    
    // Base case
    if( n == 0 ){
        
        return 0
    }
    
    
    // General cases
    
    quotient := n / 5
    
    return quotient + trailingZeroes( quotient )
}
```

---

C++

```
class Solution {
public:
    int trailingZeroes(int n) {
        
        // Base case:
        if( n == 0){
            return 0;
        }
        
        // General case
        int quotient = n / 5;
        return quotient + trailingZeroes( quotient );
    }
};

```
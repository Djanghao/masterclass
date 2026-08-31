# Python/JS/Java/Go/C++ O( lg n ) by bit-manipulation 有中文解題文章

**Author:** brianchiang_tw
**Votes:** 44
**Link:** [https://leetcode.com/problems/number-of-1-bits/solutions/468836/](https://leetcode.com/problems/number-of-1-bits/solutions/468836/)

---

[Tutorial video in Chinese \u4E2D\u6587\u89E3\u984C\u5F71\u7247](https://www.youtube.com/watch?v=BcLiDexMnvU)

[\u4E2D\u6587\u89E3\u984C\u6587\u7AE0](https://vocus.cc/article/65672814fd8978000103ef98)

Python sol. based on bit-manipulation

Note: Assume the input is of int32.

---


```python []
class Solution:

    def hammingWeight(self, n: int) -> int:
        
        # Base case
        if n == 0 :
            return 0
        
        # General case:
        # hammingWeight(n) 
        # = hammingWeight(n / 2) + LSB 
        # = hammingWeight(n / 2) + odd bit 
        # = hammingWeight(n / 2) + ( n & 1)
        
        # Python's right shift operator is >>
        return (n & 1) + self.hammingWeight( n >> 1 )
```


---

Share extra solutions

---
in Python:
```
class Solution:
    def hammingWeight(self, n: int) -> int:
        
        num_of_1s = 0
        
        for i in range(32):
            
            num_of_1s += (n & 1)
            
            n = n >> 1
            
        return num_of_1s
```

Extra supplementary material, python has native binary string corversion function

```
class Solution:
    def hammingWeight(self, n: int) -> int:
        
        # Convert to binary string
		# then count the occurrence of "1"
        return bin(n).count("1")
```

---

For python 3.10 or later version, bit_count() becomes a built-in function for integer.

```
class Solution:   
    def hammingWeight(self, n: int) -> int:
        
        return n.bit_count()
```

---

Java:

```
public class Solution {
    // you need to treat n as an unsigned value
    public int hammingWeight(int n) {
        
        int onesCount = 0;
        
        for( int i = 0 ; i < 32 ; i++){
            
            // keep detecting LSB of n is 1 or 0
            onesCount += n & 1;
            
            // get next digit of n by right shift rotation
            n >>= 1;
        }
        
        return onesCount;
    }
}
```


Extra supplementary material, Java has native bitCount function.
```
public class Solution {
    // you need to treat n as an unsigned value
    public int hammingWeight(int n) {
        
        return Integer.bitCount(n);
    }
}
```

---

in JavaScript:
```
var hammingWeight = function(n) {
    
    let num_of_1s = 0;
    
    for( let i=0 ; i < 32; i++ ){
        
        num_of_1s += n & 1;
        
        n >>= 1;

    }
    
    return num_of_1s
};
```

---
in Go:

```
func hammingWeight(num uint32) int {
    
    num_of_1s := 0
    
    for i := 0 ; i < 32; i+=1 {
        
        if num & uint32(1) == 1{
            num_of_1s += 1    
        }
         
        num >>= 1
        
    }
    
    return num_of_1s
}
```

Extra supplementary material, Go has native bit count method in package "math/bits"

```
func hammingWeight(num uint32)int{
    
    return bits.OnesCount( uint(num) )
    
}
```

---

in C++

```
class Solution {
public:
    int hammingWeight(uint32_t n) {
        
        uint32_t numOfOnes = 0;
        
        for( short bit = 0 ; bit < 32 ; bit++){
            
            // Check the 0/1 on LSB
            numOfOnes += n & 1;
            
            // input number right shift
            n >>= 1;    
        }
        
        return numOfOnes;
    }
};
```

Extra supplementary material, GNU C++ has built-in bit count function.

```
class Solution {
public:
    int hammingWeight(uint32_t n) {
        
        return __builtin_popcount(n);
    }
};


```


---
---

Share another implementation based on bit operation

in Python:

```
class Solution:
    def hammingWeight(self, n: int) -> int:
        
        counter = 0
    
        while n:
            
            # this will take out the right-most 1 of n    
            n = n & (n-1)
            
            # update counter
            counter += 1
        
        return counter
```

---

Java:

```
public class Solution {
    // you need to treat n as an unsigned value
    public int hammingWeight(int n) {
        
        int onesCount = 0;
        
        while( n != 0 ){
            
            // update counter when n is non-zero
            onesCount ++;
            
            // take out right most 1 of n
            n = n & (n-1);
            
        }
        
        return onesCount;
    }
}

```

---

in Javascript:

```
/**
 * @param {number} n - a positive integer
 * @return {number}
 */

var hammingWeight = function(n) {
    
    let count = 0;
    
    while( n ){
        
        // this will take out the right-most 1 of n    
        n = n & (n-1);
        
        // update counter
        count += 1
    }
    
    return count
};
```

---

in Go:

```
func hammingWeight(num uint32) int {
    
    num_of_1s := 0
    
    for  ;  num != 0;  {
        
        // this will take out the right-most 1 of n    
        num = num & (num - 1)
        
        // update counter
        num_of_1s += 1
    }
    
    return num_of_1s
}
```

---

in C++:

```
class Solution {
public:
    int hammingWeight(uint32_t n) {
        
        uint32_t numOfOnes = 0;
        
        while( n ){
            
            // this will take out rightmost 1 in binary representation 
            n = n & (n-1);
            
            numOfOnes++;
            
        }
        return numOfOnes;
    }
};

```

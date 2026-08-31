# Python/Go O(log n) by digit-occurrence mapping [w/ Comment]

**Author:** brianchiang_tw
**Votes:** 9
**Link:** [https://leetcode.com/problems/reordered-power-of-2/solutions/1120140/](https://leetcode.com/problems/reordered-power-of-2/solutions/1120140/)

---

For example:

Given power of 2 = 2 ^ 6 = 64

64 => {6: 1, 4: 1}
6 shows up one time
4 shows up one time

---

N=46 or N=64 return **true** because their **digit - occurrence mapping** are the same with 64

46 => {4: 1, 6: 1}
4 shows up one time
6 shows up one time

64 => {6: 1, 4: 1}
6 shows up one time
4 shows up one time

---

**Implementation** by digit - occurrence mapping

Python:

```
class Solution:
    def reorderedPowerOf2(self, N: int) -> bool:
        
        # digit <-> occurrence mapping of N
        signature_of_N = Counter(str(N))
        
        
        # check each possible power of 2
        for i in range(32):
            
            # get power of 2 by bitwise operation
            power_of_2 = 1 << i
                
            if Counter( str(power_of_2) ) == signature_of_N:
                
                # Accept if at least one power of 2's mapping is the same with N's mapping
                return True
        
        # Reject otherwise
        return False
```

---

**Implementation** by digit - occurrence mapping based on recursion and decimal representation

Python:

```
class Solution:
    def reorderedPowerOf2(self, N: int) -> bool:
        
        def make_signature(n: int):
            
			## base case
            if n == 0:
                return 0
            
			
			## general case
			
            leading, remaining = divmod(n, 10)
            return make_signature(leading) + ( 10 ** remaining )
        
        # ---------------------------------------------------------
        
        signature_of_N = make_signature(N)
        
		# check each possible power of 2
        for i in range(32):
            
			# get power of 2 by bitwise operation, and check signature
            if make_signature( 1 << i ) == signature_of_N:
			
				# Accept if at least one power of 2's signature is the same with N's signature
                return True
        
		# Reject otherwise
        return False
```

---

**Implementation** by digit - occurrence mapping based on recursion and decimal representation

Go:

```
func reorderedPowerOf2(N int) bool {
 
    var makeSignature func(n int) int
    
    makeSignature = func(n int) int {
        
        if n == 0{
            // base case
            return 0
        }
        
        // general case
        leading, remaining := n / 10, n % 10
        return makeSignature( leading ) + int( math.Pow(10, float64(remaining) ) )
        
    }
    
    // -----------------------------------------------------
    
    signatureN := makeSignature( N )
    
    // check each possible power of 2
    for i := 0 ; i < 32 ; i++ {
        
        if makeSignature( 1 << i ) == signatureN{
            
            // Accept if at least one power of 2's signature is the smae with N's
            return true
        }
        
    }
    
    // Reject otherwise
    return false
}
```

---

Reference:

[1] [Python official docs about specialized dictionary Counter( ... )](https://docs.python.org/3/library/collections.html#collections.Counter)

[2] [Python official docs about bitwise operation](https://wiki.python.org/moin/BitwiseOperators)
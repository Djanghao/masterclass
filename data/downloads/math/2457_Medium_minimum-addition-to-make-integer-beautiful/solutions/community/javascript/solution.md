# Python/JS/Java/C++ O(log n)^2 by padding recursion [w/ Example]

**Author:** brianchiang_tw
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-addition-to-make-integer-beautiful/solutions/2758736/](https://leetcode.com/problems/minimum-addition-to-make-integer-beautiful/solutions/2758736/)

---

Padding n, from LSB to MSB, to nearest multiple of 10, 100, 1000, 10000....

---

**Example**

Given n = 1234, target = 3

1st iteration:
123**4** +  **6** = 124**0**

2nd iteration:
12**4**0 + **6**0 = 13**00**

3rd iteration:
1**3**00 + **7**00 = 2**000**

Now, 2000 is beautiful, where digit sum = 2, and 2 is smaller than target 3

padding 
= minimal addition to make 1234 beautiful under target 3 
= **7**00+**6**0+**6** 
= 766



---

**Python**:

```
class Solution:
    def makeIntegerBeautiful(self, n: int, target: int) -> int:
        
		# calculate digit sum from LSB to MSB
        def digitSum( x ):
            
            summtaion = 0
            
            while x != 0:
                
                summtaion += x % 10
                x //= 10
                
            return summtaion
    
        # -------------------------------
        
        # Base case
		# n is beautiful already : )
        if digitSum( n ) <= target:
            return 0
        
        # General cases:
        
        # Padding to N, where N > n, and N is nearest multiple of 10, 100, 1000, 10000, ... and so on
        padding = (10 - n % 10)
        return padding + 10 * self.makeIntegerBeautiful(( n + padding ) // 10, target)
    
```

---

**Javascript**:

```
var makeIntegerBeautiful = function(n, target) {

    // Base case
	// n is beautiful already : )
    if( digitSum( n ) <= target ){ 
        return 0;
    }
    
    // General cases:

    // Padding to N, where N > n, and N is nearest multiple of 10, 100, 1000, 10000, ... and so on
    let padding = (10 - (n % 10));
    return padding + 10 * makeIntegerBeautiful(( n + padding ) / 10, target);
    
};

// calculate digit sum from LSB to MSB
var digitSum = function( x ){

    let summation = 0;

    while( x > 0 ){

        summation += x % 10;
        x = Math.floor(x / 10); // Take care to force round down to integer to avoid underflow
    }
    return summation;
};
```

---

**Java**:

```
class Solution {
    public long makeIntegerBeautiful(long n, int target) {
        
        // Base case: 
        // n is beautiful already : )
        if( digitSum( n ) <= target ){
            return 0;
        }
        
        // General cases:
        // Padding to N, where N > n, and N is nearest multiple of 10, 100, 1000, 10000, ... and so on
        long padding = (10 - n % 10);
        return padding + 10 * makeIntegerBeautiful(( n + padding ) / 10, target);   
        
    }
    
    // calculate digit sum from LSB to MSB
    private int digitSum(long x) {
        
        int summation = 0;

        while( x != 0 ){
            summation += (x % 10);
            x /= 10 ;
        }
        return summation;
    
    }        
    
}

```

---

**C++**:

```
class Solution{
public:
    long long makeIntegerBeautiful(long long n, int target) {
        
        // Base case: 
        // n is beautiful already : )
        if( digitSum( n ) <= target ){
            return 0;
        }
        
        // General cases:
        // Padding to N, where N > n, and N is nearest multiple of 10, 100, 1000, 10000, ... and so on
        long long padding = (10 - n % 10);
        return padding + 10 * makeIntegerBeautiful(( n + padding ) / 10, target);        
        
        
    }

private:

	// calculate digit sum from LSB to MSB
    int digitSum(long long x) {
        
        int summation = 0;

        while( x != 0 ){
            summation += (x % 10);
            x /= 10 ;
        }
        return summation;
    
    }                                                        
};
```
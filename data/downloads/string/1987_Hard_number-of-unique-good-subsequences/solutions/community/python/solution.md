# Python/Go O(n) by DP [w/ Hint]

**Author:** brianchiang_tw
**Votes:** 4
**Link:** [https://leetcode.com/problems/number-of-unique-good-subsequences/solutions/1632763/](https://leetcode.com/problems/number-of-unique-good-subsequences/solutions/1632763/)

---

Python O(n) by DP

**Hint**:

Define
**S0** = the number of good subsequence count **ending in 0**
**S1** = the number of good subsequence count **ending in 1**
**F0** = the **existence flag of 0** in input binary string

DP( i ) computes and return S0, S1, F0 for index i

```
## Base case :
if i == -1:
	
	# Empty string has no good subsequence
	return 0, 0, 0
```

```
## General cases:
if i != -1
	
	if cut_digit == 1:
		
		# current good = ( S0 concate with 1 ) + ( S1 concate with 1 ) + 1 alone
		# + "1" is allowed because leading 1 is valid by description
		S1 = S0 + S1 + 1
		S0 = S0
		
	else:
		# current good = ( S0 concate with 0 ) + ( S1 concate with 0 ) 
		# + "0" is NOT allowed because leading 0 is invalid by description
		S0 = S0 + S1
		S1 = S1
		
		# update existence flag of 0
		F0 = F0 | (1-cur_digit)
	
	return S0, S1, F0
```

---

Final answer = **S0 + S1 + F0**
( F0 is for **single "0"** if "0" exists in input binary string )

---

**Implementation** by bottom-up DP in Python:

```
class Solution:
    def numberOfUniqueGoodSubsequences(self, binary: str) -> int:
        
        
        # zero_as_last: the count of S0, good sequence ending in 0
        # one_as_last : the count of S1: good sequence ending in 1
        # zero_exist:   existence flag of 0 in given binary
        
        dp = {"zero_as_last": 0, "one_as_last": 0, "zero_exist": 0}
        
        for bit in map(int, binary):
            
            if bit:
                # current good = ( S0 concate with 1 ) + ( S1 concate with 1 ) + 1 alone
                # + "1" is allowed because leading 1 is valid by description
                dp["one_as_last"] = dp["zero_as_last"] + dp["one_as_last"] + 1
            
            else:
                # current good = ( S0 concate with 0 ) + ( S1 concate with 0 ) 
                # + "0" is NOT allowed because leading 0 is invalid by description
                dp["zero_as_last"] = dp["zero_as_last"] + dp["one_as_last"]
            
            # check the existence of 0
            dp["zero_exist"] |= (1-bit)
        
        
        return sum( dp.values() ) % ( 10**9 + 7 )
```

---

**Implementaiton** by Bottom-up DP in Golang

```

func numberOfUniqueGoodSubsequences(binary string) int {
    
    // Modulo constant, required by description
    const modulo_const int = 1e9 + 7
    
    zero_as_last := 0
    one_as_last := 0
    zero_exist := 0
    
    for _, bitChar := range binary{
        
        
        if bitChar == '1'{
            one_as_last = (zero_as_last + one_as_last + 1) % (modulo_const)
        }else{
            zero_as_last = (zero_as_last + one_as_last ) % (modulo_const)
            zero_exist = 1
        }
        
        
    }
    
    return (zero_as_last + one_as_last + zero_exist) % (modulo_const)
    
}
```

---

**Implementation** by Top-down DP

```
class Solution:
    def numberOfUniqueGoodSubsequences(self, binary: str) -> int:
        
       
        def dp(ending_idx):
            
            if ending_idx == -1:
                
                return 0, 0 ,0
            
            else:
                prev_zero, prev_one, zero_exist = dp(ending_idx-1)
                
                cur_digit = int( binary[ending_idx] )
                
                if cur_digit == 1:
                    zero_as_last = prev_zero
                    one_as_last = ( (prev_zero + prev_one) + 1 ) % (10**9+7)
                
                else:
                    zero_as_last = ( (prev_zero + prev_one) ) %  (10**9+7)
                    one_as_last = prev_one
                    
                    zero_exist = zero_exist | (1-cur_digit) 
                
                
                return zero_as_last, one_as_last, zero_exist
        
        # -------------------------

        return  sum( dp( len(binary)-1 ) ) % (10**9+7)
```

---

Related leetcode challenge:

[Leetcode #940 Distinct Subsequence II](https://leetcode.com/problems/distinct-subsequences-ii/)
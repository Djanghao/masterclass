# Python/JS/Java/Go/C++ O(n) by pattern analysis [w/ Hint]

**Author:** brianchiang_tw
**Votes:** 32
**Link:** [https://leetcode.com/problems/flip-string-to-monotone-increasing/solutions/1394838/](https://leetcode.com/problems/flip-string-to-monotone-increasing/solutions/1394838/)

---

Observe and analyze two possible cases on binary string pattern

Let S start on empty string "", and add either '0' or '1' on the tail to make it longer.

---
Case #1
S + '**1**' : No need to flip, because '**1**' **keeps monotone increasing** always.

---

---
Case #2
S + '**0**' : Need **flip operation** to **maintain** monotone increasing.

**Option 1** for case #2: 
**Flip current 0 to 1**, **keep leading digits**, then substring is monotone increasing.
S + '0' becomes S + '1'

---

**Option 2** for case #2:
**Flip leading 1s to 0s**, **keep current 0**, then substring is monotone increasing.
S + '0' becomes S' + '0' where S' is modified from S and all leading 1s is flipped to 0s

---

**Implementation** in Python

```
class Solution:
    def minFlipsMonoIncr(self, s: str) -> int:
        
        # occurrence of 1 in strings s
        occ_of_1 = 0
        
        # counter of flips of 1->0 and 0->1
        flip = 0
        
        
        # scan each digit on substring s[:i], i = 1 ~ len(s)
        for char in s:
            
            if char == '1':
                
				# update occurrence of '1'
                occ_of_1 += 1
                
				# current digit is '1'
                # no need to flip when 1 is on the tail of current substring
            
            else:
                
				# current digit is '0'
                # need to flip when 0 is on the tail of current substring
                
                # option_1: flip current 0 to 1, keep leading digits, then substring is monotone increasing
                
                # option_2: flip leading 1s to 0s, keep current 0, then substring is monotone increasing
                
                # select optimal solution
                flip = min(flip+1, occ_of_1)
                
        return flip
```

---

**Implementation** in Java:

```
class Solution {
    public int minFlipsMonoIncr(String s) {
        
		// occurrence of 1 in strings s
        int occOf1 = 0;
		
		// counter of flips of 1->0 and 0->1
        int flips = 0;
        
		// scan each digit on substring
        for( char ch : s.toCharArray() ){
            
            if( ch == '1' ){
				
				// update occurrence of '1'
                occOf1 += 1;
				
				// current digit is '1'
                // no need to flip when 1 is on the tail of current substring
            
            }else{
			
				// current digit is '0'
                // need to flip when 0 is on the tail of current substring
                
                // option_1: flip current 0 to 1, keep leading digits, then substring is monotone increasing
                
                // option_2: flip leading 1s to 0s, keep current 0, then substring is monotone increasing
                
                // select optimal solution
                flips = Math.min(flips+1, occOf1);
            }
            
        }
        return flips;
    }
}
```

---

**Implementation** in Javascript:

```
var minFlipsMonoIncr = function(s) {

	// occurrence of 1 in strings s
	// counter of flips of 1->0 and 0->1
    let [occOf1, flips] = [0, 0];
    
	// scan each character in input string
    for( const char of s){
        
        if( char == "1" ){
			
			// update occurrence of '1'
            occOf1 += 1;

            // current digit is '1'
            // no need to flip when 1 is on the tail of current substring

        }else{

            // current digit is '0'
            // need to flip when 0 is on the tail of current substring

            // option_1: flip current 0 to 1, keep leading digits, then substring is monotone increasing

            // option_2: flip leading 1s to 0s, keep current 0, then substring is monotone increasing

            // select optimal solution            
            flips = Math.min(flips+1, occOf1);
        }
        
    }
    
    return flips;
    
};
```


---

**Implementation** in Golang

```
func Min(x, y int)int{
    if x <= y {
        return x
    }    
    return y
}

func minFlipsMonoIncr(s string) int {
    
    // occurrence of 1 in string s
    occ_of_1 := 0
    
    // counter of flips of 1->0 and 0->1
    flip := 0
    
    // scan each digit on substring
    for _, char := range(s){
        
        if char == '1'{
            
            // update occurrence of 1
            occ_of_1 += 1
            
            // current digit is '1'
            // no need to flip when 1 is on the tail of current substring
            
        }else{

            // current digit is '0'
            // need to flip when 0 is on the tail of current substring

            // option_1: flip current 0 to 1, keep leading digits, then substring is monotone increasing

            // option_2: flip leading 1s to 0s, keep current 0, then substring is monotone increasing

            // select optimal solution            
            flip = Min(flip+1, occ_of_1)
            
        }
    }
    return flip
}
```

---

**Implementation** in C++

```
class Solution {
public:
    int minFlipsMonoIncr(string s) {
        
		// occurrence of 1 in strings s
        int occOf1 = 0;
		
		// counter of flips of 1->0 and 0->1
        int flips = 0;
        
		// scan each digit on substring
        for( const char& ch : s){
            
            if( ch == '1' ){
				
				// update occurrence of '1'
                occOf1 += 1;
				
				// current digit is '1'
                // no need to flip when 1 is on the tail of current substring
            
            }else{
			
				// current digit is '0'
                // need to flip when 0 is on the tail of current substring
                
                // option_1: flip current 0 to 1, keep leading digits, then substring is monotone increasing
                
                // option_2: flip leading 1s to 0s, keep current 0, then substring is monotone increasing
                
                // select optimal solution
                flips = min(flips+1, occOf1);
            }
            
        }
        return flips;
    }
};
```
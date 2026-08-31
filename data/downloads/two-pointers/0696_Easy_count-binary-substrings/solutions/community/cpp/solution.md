# Python/C++/Java/Go O(n) by character grouping [w/ Hint]

**Author:** brianchiang_tw
**Votes:** 24
**Link:** [https://leetcode.com/problems/count-binary-substrings/solutions/1172575/](https://leetcode.com/problems/count-binary-substrings/solutions/1172575/)

---

**Hint**:

binary substring of equal 0s and 1s is **decided** by the **minimal continuous occurrence** between character groups

Example:

Given s = **000**11111

0's continuous occurrence = 3
1's continuous occurrence = 5

min(3, 5) = 3

There are 3 binary substrings of equal 0s and 1s as following:

**0**1
**00**11
**000**111


---

**Implementation** by character grouping in **Python**:

```
class Solution:
    def countBinarySubstrings(self, s: str) -> int:
        
        # previous continuous occurrence, current continuous occurrence
        pre_cont_occ, cur_cont_occ = 0, 1
        
        # counter for binary substrings with equal 0s and 1s
        counter = 0
        
		# scan each character pair in s
        for idx in range(1, len(s)):
            
            if s[idx] == s[idx-1]:
                
                # update current continuous occurrence
                cur_cont_occ += 1
            
            else:
                # update counter of binary substrings between prevous character group and current character group
                counter += min(pre_cont_occ, cur_cont_occ)

                # update previous as current's continuous occurrence
                pre_cont_occ = cur_cont_occ
                
                # reset current continuous occurrence to 1
                cur_cont_occ = 1
        
        # update for last time
        counter += min(pre_cont_occ, cur_cont_occ)
        
        return counter
```

---

**Implementation** by character grouping in **C++**:

```
class Solution {
public:
    int countBinarySubstrings(string s) {
        
        // previous continuous occurrence, current continuous occurrence
        int pre_cont_occ=0, cur_cont_occ= 1;
        
        // counter for binary substrings with equal 0s and 1s
        int counter = 0;
        
		// scan each character pair in s
        for( int idx = 1 ; idx < s.length() ; idx++ ){
            
            if( s[idx] == s[idx-1] ){
                
                // update current continuous occurrence
                cur_cont_occ += 1;
            
            }else{
                // update counter of binary substrings between prevous character group and current character group
                counter += min(pre_cont_occ, cur_cont_occ);

                // update previous as current's continuous occurrence
                pre_cont_occ = cur_cont_occ;
                
                // reset current continuous occurrence to 1
                cur_cont_occ = 1;
            }
        }
        // update for last time
        counter += min(pre_cont_occ, cur_cont_occ);
        
        return counter;
    }
};
```

---

**Implementation** by character grouping in **Java**:

```
class Solution {
    public int countBinarySubstrings(String s) {
        
        // previous continuous occurrence, current continuous occurrence
        int pre_cont_occ=0, cur_cont_occ= 1;
        
        // counter for binary substrings with equal 0s and 1s
        int counter = 0;
        
		// scan each character pair in s
        for( int idx = 1 ; idx < s.length() ; idx++ ){
            
            if( s.charAt(idx) == s.charAt(idx-1) ){
                
                // update current continuous occurrence
                cur_cont_occ += 1;
            
            }else{
                // update counter of binary substrings between prevous character group and current character group
                counter += Math.min(pre_cont_occ, cur_cont_occ);

                // update previous as current's continuous occurrence
                pre_cont_occ = cur_cont_occ;
                
                // reset current continuous occurrence to 1
                cur_cont_occ = 1;
            }
        }
        // update for last time
        counter += Math.min(pre_cont_occ, cur_cont_occ);
        
        return counter;
    }
}
```

---

**Implementation** by character grouping in **Go**:

```
// min function have to be implemented by programmer in Golang
func Min(x, y int)int{
    if x < y{
        return x
    }
    return y
}

func countBinarySubstrings(s string) int {
 
    // previous continuous occurrence, current continuous occurrence
    preContOcc, curContOcc := 0, 1
    
    // counter for binary substrings with equal 0s and 1s
    counter := 0
    
    // scan each character pair in s
    for idx := 1; idx < len(s) ; idx++{
        
        if s[idx] == s[idx-1]{
            
            // update current continuous occurrence
            curContOcc += 1
            
        }else{
            
            // update counter of binary substring between previous character group and current character group
            counter += Min(preContOcc, curContOcc)
            
            // update previous as current's continuous occurrence
            preContOcc = curContOcc
            
            // reset current continuous occurrence to 1
            curContOcc = 1
            
        }
        
    }
    
    // update for last time
    counter += Min(preContOcc, curContOcc)
    
    return counter
    
}
```
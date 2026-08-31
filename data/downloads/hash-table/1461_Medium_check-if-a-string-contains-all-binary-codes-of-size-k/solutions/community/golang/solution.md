# Python/Go O(nk) by code set [w/ Hint]

**Author:** brianchiang_tw
**Votes:** 3
**Link:** [https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/solutions/1105771/](https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/solutions/1105771/)

---

**Hint**:

1. Scan each code substring and save them into code set
2. We have all binary codes if code set size = 2^k

For exmaple, given k = 2
ideal code set = {"00", "01", "10", "11"}

---

**Implementation** in Python

```
class Solution:
    def hasAllCodes(self, s: str, k: int) -> bool:
        
        # input string size as well as code size
        str_size, code_len = len(s), k
        
        # scan each substring with code length, save into code set
        code_set = { s[ start : start + code_len] for start in range(str_size - code_len + 1) }
        
        # we have all binary codes if code set size = 2^k
        return len(code_set) == 2**k
```

---

**Implementation** by Go

```
func hasAllCodes(s string, k int) bool {
 
    // input string size as well as code size
    strSize, codeLen := len(s), k
    
	// Go doesn't have native set, so we use map(i.e., so-called dictionary) as alternative plan
    codeDict := make( map[string]bool)
    
    // scan each substring with code length, save into code dictionary
    for start :=0 ; start < strSize - codeLen + 1 ; start += 1{
        
        cur_code := s[ start : start + codeLen ]
        
        if _, exist := codeDict[cur_code]; exist == false{
            codeDict[cur_code] = true
        }
    }
    
    // we have all binary codes if code set size = 2^k
    return len(codeDict) == int( math.Pow(2.0, float64(k) ) )
    
}
```

---

Reference:

[1] [Python docs about slicing syntax](https://python-reference.readthedocs.io/en/latest/docs/brackets/slicing.html)

[2] [Golang docs about map (i.e., so-called dictionary)](https://gobyexample.com/maps)

[3] [Golang docs about slicing syntax](https://golang.org/ref/spec#Slice_expressions)
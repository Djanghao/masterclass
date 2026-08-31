# Python/JS/C++/Go O(2^n) by toggle bitmask [w/ Example]

**Author:** brianchiang_tw
**Votes:** 14
**Link:** [https://leetcode.com/problems/gray-code/solutions/1110683/](https://leetcode.com/problems/gray-code/solutions/1110683/)

---

Python O(2^n) by toggle bitmask

---

Example with n = 2:

1st iteration
```
\u30000 0
\u2295 0 0
\u2014\u2014\u2014\u2014\u2014
\u30000 0 
```
  
  We get 0'b 00 = **0**

---

2nd iteration
```
\u30000 1
\u2295 0 0
\u2014\u2014\u2014\u2014\u2014
\u30000 1 
```
  
  We get 0'b 01 = **1**

---

3rd iteration
```
\u30001 0
\u2295 0 1
\u2014\u2014\u2014\u2014\u2014
\u30001 1 
```
  
  We get 0'b 11 = **3**

---

4th iteration
```
\u30001 1
\u2295 0 1
\u2014\u2014\u2014\u2014\u2014
\u30001 0 
```
  
  We get 0'b 10 = **2**
  
---

Finally, we have gray codes with n=2: 
[**0**, **1**, **3**, **2**]

---

**Implementation** in Python:

```
class Solution:
    def grayCode(self, n: int) -> List[int]:
        
        # total 2^n codes for bit length n
        code_count = 1 << n
        
        # generate gray code from 0, and toggle 1 bit on each iteration
        # toggle mask: ( i >> 1 )
        
        gray_codes =[ i ^ ( i >> 1 ) for i in range(code_count) ]
        
        return gray_codes
```

---

in **Javascript**:

<details>
	<summary> Expand to see source code </summary>

```

var grayCode = function(n) {

    // toal 2^n codes for bit length n
    const codeCount = 1 << n;
    
    let result = [];
    
    // generate gray code from 0, and toggle 1 bit on each iteration
    // toggle mask: ( i >> 1 )
    
    for(let i = 0 ; i < codeCount ; i++){
        
        code = i ^ ( i >> 1);
        result.push( code );
    }
    
    return result
};
```

</details>

---

in **C++**:

<details>
	<summary> Expand to see source code </summary>

```
class Solution {
public:
    vector<int> grayCode(int n) {
        
        // toal 2^n codes for bit length n
        const int codeCount = 1 << n;
        
        vector<int> result;

        // generate gray code from 0, and toggle 1 bit on each iteration
        // toggle mask: ( i >> 1 )
        
        for( int i = 0 ; i < codeCount ; i++ ){
            
            int mask = i >> 1;
            result.push_back( i ^ mask );
        }
        
        return result;
    }
};
```

</details>

---

in **Go**:

<details>
	<summary> Expand to see source code </summary>


```
func grayCode(n int) []int {
    
    // total 2^n codes for bit length n
    code_count := 1 << n
    
    // slice to store gray codes
    gray_codes := make([]int, code_count)
    
    for i:=0 ; i < code_count ; i+=1 {
        
        toggle_mask := ( i >> 1 )
        
        gray_codes[ i ] = i ^ toggle_mask
    }
    
    return gray_codes
}
```

</details>

---
Reference:

[1] [Wiki: Gray code](https://en.wikipedia.org/wiki/Gray_code)

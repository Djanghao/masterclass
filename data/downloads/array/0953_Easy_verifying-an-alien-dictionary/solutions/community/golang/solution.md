# Python/Go O(w) by index mapping [w/ Hint]

**Author:** brianchiang_tw
**Votes:** 6
**Link:** [https://leetcode.com/problems/verifying-an-alien-dictionary/solutions/1149930/](https://leetcode.com/problems/verifying-an-alien-dictionary/solutions/1149930/)

---

Python O(w) by index mapping

---

**Hint**:

1. Build the **index** <-> **character** **mapping relation** based on givern **alien order**

2. **Convert** each word to **numerical mapping** by dictionary built in step #1

3. **Check** each numerical mapping is **sorted** in **ascending order**

---

**Implementation** by index mapping in Python

```
class Solution:
    def isAlienSorted(self, words: List[str], order: str) -> bool:
        
		# Step 1:
		# Build the index <-> character mapping relation based on givern alien order
		
        ## dictionary
        # key: alien character
        # value: index of alien character
        char_idx_dict = { char: idx for idx, char in enumerate(order) }
        
        size = len(words)
        
		
		# Step 2:
        # Convert words to numerical mapping by dictionary
		
        numerical_mapping = [[char_idx_dict[char] for char in word] for word in words]
        
		
		# Step 3:
        # Check numerical mapping is sorted in ascending order
		
        for i in range(0, size-1):
            
            if numerical_mapping[i] > numerical_mapping[i+1]:
                
                # Reject if we find out-of-order
                return False
        
        # Accept, otherwise.
        return True
```

---

**Implementation** by index mapping in Go

```
import (
    "unicode/utf8"
)

func isAlienSorted(words []string, order string) bool {

	// Step 1:
	// Build the index <-> character mapping relation based on givern alien order
    charIdxMapping := make(map[rune]int)
    
    for idx, char := range order{
        charIdxMapping[char] = idx
    }
    
    // -------------------------------------------
    
	// Step 2:
	// Convert each word to numerical mapping by dictionary
	
    var inorder func(s1, s2 string)bool
    
    inorder = func(s1, s2 string) bool{
        
        size1, size2 := len(s1), len(s2)
        
        for idx := 0 ; idx < size1 && idx < size2 ; idx++{
            
            rune1, _ := utf8.DecodeRuneInString(s1[idx:])
            rune2, _ := utf8.DecodeRuneInString(s2[idx:])
            order1, order2 := charIdxMapping[ rune1 ], charIdxMapping[ rune2 ]
            
            if  order1 > order2 {
                return false
                
            }else if order1 < order2 {
                return true
            }

        }
        
        return len(s1) <= len(s2)
    }
    
    
    // -------------------------------------------
    
	// Step 3:
	// Check each numerical mapping is sorted in ascending order
	
    for i:= 0; i < len(words)-1 ; i++{
        if !inorder(words[i], words[i+1]){
            return false
        }  
    }
    
    return true
}

```

---

Reference:

[1] [Python official docs about dictioanry](https://docs.python.org/3/tutorial/datastructures.html#dictionaries)

[2] [Golang official docs about map[]](https://blog.golang.org/maps)

[3] [Golang official docs about DecodeRuneInString](https://golang.org/pkg/unicode/utf8/#DecodeRuneInString)
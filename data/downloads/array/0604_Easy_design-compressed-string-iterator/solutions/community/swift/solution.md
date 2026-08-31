# [🚀] Beats 100%, Easy O(1) Solution

**Author:** acetechinterview
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-compressed-string-iterator/solutions/4335555/](https://leetcode.com/problems/design-compressed-string-iterator/solutions/4335555/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
- My initial approach was a stack, but test cases caused a timeout becaused of collecting too many elements within stack
- Instead, my approach became the following:
  - Keep track of current index
  - Keep track of current char
  - When `next()` is called, decrement `currentNum` until 0 is reached
  - Once 0 is reached, either set the next char and currentNum OR return an empty white space if index is out of bounds 

# Complexity
- Time complexity: O(1)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```

class StringIterator {
    private let compressedString: String
    
    // Current letter frequency
    private var currentNum: Int
    
    // Current string index
    private var currentIndex: String.Index
    
    // Current character
    private var currentChar: Character

    init(_ compressedString: String) {
        self.compressedString = compressedString
        currentIndex = compressedString.startIndex
        currentChar = compressedString[currentIndex]
        currentNum = 0
        
        generateNum()
    }

    /// Checks if currentIndex is currently within bounds
    private var isInBounds: Bool {
        currentIndex < compressedString.index(before: compressedString.endIndex)
    }
    
    func next() -> Character {
        if currentNum > 0 {
            currentNum -= 1
            return currentChar
        } else {
            guard isInBounds else {
                return " "
            }
            currentChar = compressedString[currentIndex]
            generateNum()

            currentNum -= 1
            return currentChar
        }
    }

    // Sets `currentNum`
    private func generateNum() {
        // Set to index after char
        currentIndex = compressedString.index(after: currentIndex)
        
        var countStr = ""
        // Collect all chars that are numbers
        while compressedString[currentIndex].isNumber {
            countStr += String(compressedString[currentIndex])

            guard isInBounds else { 
                break 
            }
            
            currentIndex = compressedString.index(after: currentIndex)
        }

        // set number
        currentNum = Int(countStr)!
    }
    
    func hasNext() -> Bool {
        return currentNum > 0 || isInBounds
    }
}
```
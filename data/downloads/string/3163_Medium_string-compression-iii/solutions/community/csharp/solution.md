# ✅Beats 100% | Simple | Explained step by step | Most common Interview String

**Author:** Piotr_Maminski
**Votes:** 11
**Link:** [https://leetcode.com/problems/string-compression-iii/solutions/6004708/](https://leetcode.com/problems/string-compression-iii/solutions/6004708/)

---

### Beats 100% all without C++ (98%,4ms)
```python3 []
class Solution:
    def compressedString(self, word: str) -> str:
        # Handle empty string case
        if not word:
            return ""
        
        # Initialize result array and tracking variables
        comp = []              # Array to store compressed string parts

        current_char = word[0] # Track the current character being counted
        count = 1             # Count occurrences of current character
        
        # Iterate through string starting from second character
        for c in word[1:]:
            if c == current_char:
                # If same character continues
                if count == 9:
                    # When count reaches 9, append current run and reset count
                    # This handles the case where same character appears more than 9 times
                    comp.append("9")
                    comp.append(current_char)
                    count = 1
                else:
                    # Increment count for consecutive same characters
                    count += 1
            else:
                # When different character is encountered:
                # 1. Append count of previous character
                comp.append(str(count))
                # 2. Append the previous character
                comp.append(current_char)
                # 3. Update current_char to new character
                current_char = c
                # 4. Reset count for new character
                count = 1
        
        # Handle the last run of characters
        comp.append(str(count))
        comp.append(current_char)
        
        # Join all parts into final compressed string
        return ''.join(comp)
```
```cpp []
class Solution {
public:
    string compressedString(string word) {
        // Handle empty string case
        if (word.empty()) return "";
        
        // Initialize result string with reserved capacity to avoid reallocations
        string comp;
        comp.reserve(word.size() * 2);
        
        // Initialize counter and first character
        int cnt = 1;                // Tracks consecutive occurrences of current character
        char ch = word[0];         // Current character being counted
        
        // Iterate through string starting from second character
        for (size_t i = 1; i < word.size(); ++i) {
            // If current character matches previous and count < 9
            // increment counter
            if (word[i] == ch && cnt < 9) {
                ++cnt;
            } 
            // If character changes or count reaches 9
            // append count and character to result
            else {
                comp += (cnt + '0');    // Convert count to character and append
                comp += ch;             // Append the character
                ch = word[i];           // Update current character
                cnt = 1;                // Reset counter for new character
            }
        }
        
        // Handle the last group of characters
        comp += (cnt + '0');    // Append final count
        comp += ch;             // Append final character
        
        return comp;
    }
};
```
```java []
class Solution {
    public String compressedString(String word) {
        // Create StringBuilder for efficient string manipulation
        StringBuilder sb = new StringBuilder();
        
        // count: tracks number of consecutive characters
        // j: used for inner loop to count consecutive characters
        int count = 0, j = 0;
        
        // Iterate through each character in the word
        for(int i = 0; i < word.length(); ++i) {
            // Set j to current position
            j = i;
            
            // Get current character to compare
            char c = word.charAt(i);
            
            // Count consecutive occurrences of current character
            while(j < word.length() && word.charAt(j) == c) {
                ++count;
                ++j;
            }
            
            // Handle cases where count exceeds 9
            // Break it into multiple groups of 9
            while(count > 9) {
                sb.append('9');        // Add count of 9
                sb.append(c);          // Add character
                count -= 9;            // Reduce remaining count by 9
            }
            
            // Append remaining count (1-9) and character
            sb.append((char)(count + '0'));  // Convert count to character
            sb.append(c);                    // Add character
            
            // Reset count for next character
            count = 0;
            
            // Update outer loop counter
            // Subtract 1 because loop will increment i
            i = j - 1;
        }
        
        // Return compressed string
        return sb.toString();
    }
}
```
```csharp []
public class Solution {
    public string CompressedString(string word) {
        // Handle empty string case
        if (string.IsNullOrEmpty(word)) return "";
        
        // Initialize result StringBuilder for efficient string concatenation
        StringBuilder comp = new StringBuilder(word.Length * 2);
        
        // Initialize counter and first character
        int cnt = 1;
        char ch = word[0];
        
        // Iterate through string starting from second character
        for (int i = 1; i < word.Length; i++) {
            // If current character matches previous and count < 9
            // increment counter
            if (word[i] == ch && cnt < 9) {
                cnt++;
            } 
            // If character changes or count reaches 9
            // append count and character to result
            else {
                comp.Append((char)(cnt + '0')); // Convert count to character and append
                comp.Append(ch);                // Append the character
                ch = word[i];                   // Update current character
                cnt = 1;                        // Reset counter for new character
            }
        }
        
        // Handle the last group of characters
        comp.Append((char)(cnt + '0')); // Append final count
        comp.Append(ch);                // Append final character
        
        return comp.ToString();
    }
}
```
```golang []
func compressedString(word string) string {
    // Handle empty string case
    if len(word) == 0 {
        return ""
    }
    
    // Initialize result builder with capacity to avoid reallocations
    var comp strings.Builder
    comp.Grow(len(word) * 2)
    
    // Initialize counter and first character
    cnt := 1
    ch := word[0]
    
    // Iterate through string starting from second character
    for i := 1; i < len(word); i++ {
        // If current character matches previous and count < 9
        // increment counter
        if word[i] == ch && cnt < 9 {
            cnt++
        } else {
            // If character changes or count reaches 9
            // append count and character to result
            comp.WriteByte(byte('0' + cnt)) // Convert count to byte and append
            comp.WriteByte(ch)              // Append the character
            ch = word[i]                    // Update current character
            cnt = 1                         // Reset counter for new character
        }
    }
    
    // Handle the last group of characters
    comp.WriteByte(byte('0' + cnt)) // Append final count
    comp.WriteByte(ch)              // Append final character
    
    return comp.String()
}
```
```swift []
class Solution {
    func compressedString(_ word: String) -> String {
        // Handle empty string case
        guard !word.isEmpty else { return "" }
        
        // Initialize result string
        var comp = ""
        comp.reserveCapacity(word.count * 2)
        
        // Initialize counter and first character
        var cnt = 1
        var ch = word.first!
        
        // Iterate through string starting from second character
        let chars = Array(word)
        for i in 1..<chars.count {
            // If current character matches previous and count < 9
            // increment counter
            if chars[i] == ch && cnt < 9 {
                cnt += 1
            } else {
                // If character changes or count reaches 9
                // append count and character to result
                comp.append(String(cnt))    // Convert count to string and append
                comp.append(ch)             // Append the character
                ch = chars[i]               // Update current character
                cnt = 1                     // Reset counter for new character
            }
        }
        
        // Handle the last group of characters
        comp.append(String(cnt))    // Append final count
        comp.append(ch)             // Append final character
        
        return comp
    }
}
```
```javascript [JS]
// JavaScript

/**
 * Compresses a string by counting consecutive characters (max 9)
 * Example: "aaa" -> "3a", "aabbcc" -> "2a2b2c"
 * @param {string} word
 * @return {string}
 */
var compressedString = function(word) {
    // Initialize empty result string
    let comp = "";
    
    // Get total length of input string
    let n = word.length;
    
    // Iterate through string with variable increment
    for(let i = 0; i < n; ) {
        // Get current character to count
        let char = word[i];
        
        // Set maximum look-ahead limit to i + 9 
        // This ensures we never count more than 9 consecutive chars
        let k = i + 9;
        
        // Initialize counter for current character sequence
        let length = 0;
        
        // Count consecutive occurrences of current char
        // Stop if: reached end of string OR hit max count of 9 OR different char found
        while(i < n && i < k && word[i] == char) {
            length += 1;
            i += 1;
        }
        
        // Add the count and character to result string
        comp += String(length) + char;
    }
    
    return comp;
};
```
```typescript [TS]
// TypeScript

function compressedString(word: string): string {
    // Initialize empty result string
    let comp: string = "";
    
    // Get total length of input string
    let n: number = word.length;
    
    // Iterate through string with variable increment
    for(let i: number = 0; i < n; ) {
        // Get current character to count
        let char: string = word[i];
        
        // Set maximum look-ahead limit to i + 9 
        // This ensures we never count more than 9 consecutive chars
        let k: number = i + 9;
        
        // Initialize counter for current character sequence
        let length: number = 0;
        
        // Count consecutive occurrences of current char
        // Stop if: reached end of string OR hit max count of 9 OR different char found
        while(i < n && i < k && word[i] === char) {
            length += 1;
            i += 1;
        }
        
        // Add the count and character to result string
        comp += length.toString() + char;
    }
    
    return comp;
}
```
```rust []
impl Solution {
    pub fn compressed_string(word: String) -> String {
        // Handle empty string case
        if word.is_empty() {
            return String::new();
        }
        
        // Initialize result string with reserved capacity to avoid reallocations
        let mut comp = String::with_capacity(word.len() * 2);
        
        // Convert string to char vector for efficient indexing
        let chars: Vec<char> = word.chars().collect();
        
        // Initialize counter and first character
        let mut cnt = 1;                // Tracks consecutive occurrences of current character
        let mut ch = chars[0];          // Current character being counted
        
        // Iterate through string starting from second character
        for i in 1..chars.len() {
            // If current character matches previous and count < 9
            // increment counter
            if chars[i] == ch && cnt < 9 {
                cnt += 1;
            } 
            // If character changes or count reaches 9
            // append count and character to result
            else {
                comp.push((cnt as u8 + b'0') as char);    // Convert count to character and append
                comp.push(ch);                            // Append the character
                ch = chars[i];                           // Update current character
                cnt = 1;                                 // Reset counter for new character
            }
        }
        
        // Handle the last group of characters
        comp.push((cnt as u8 + b'0') as char);    // Append final count
        comp.push(ch);                            // Append final character
        
        comp
    }
}
```
```ruby []
def compressed_string(word)
    # Handle empty string case - return empty string if input is empty
    return "" if word.empty?
    
    # Initialize result string to store compressed output
    comp = ""
    
    # Initialize counter to track consecutive character occurrences
    cnt = 1
    # Initialize first character to process
    ch = word[0]
    
    # Iterate through string starting from second character
    (1...word.length).each do |i|
        # If current character matches previous and count less than 9
        # increment counter
        if word[i] == ch && cnt < 9
            cnt += 1
        # If character changes or count reaches 9
        # append count and character to result
        else
            comp << cnt.to_s << ch    # Convert count to string and append with character
            ch = word[i]              # Update current character being tracked
            cnt = 1                   # Reset counter for new character
        end
    end
    
    # Handle the last group of characters
    comp << cnt.to_s << ch    # Append final count and character
    
    # Return compressed string
    comp
end
```
## without comments
```python3 []
class Solution:
    def compressedString(self, word: str) -> str:
        if not word:
            return ""
        
        comp = []
        current_char = word[0]
        count = 1
        
        for c in word[1:]:
            if c == current_char:
                if count == 9:
                    comp.append("9")
                    comp.append(current_char)
                    count = 1
                else:
                    count += 1
            else:
                comp.append(str(count))
                comp.append(current_char)
                current_char = c
                count = 1
        
        comp.append(str(count))
        comp.append(current_char)
        
        return ''.join(comp)
```

```python3 [AltPy]
class Solution:
    def compressedString(self, word: str) -> str:
        if not word:
            return ""
        
        comp = []
        cnt = 1
        ch = word[0]
        
        for i in range(1, len(word)):
            if word[i] == ch and cnt < 9:
                cnt += 1
            else:
                comp.append(str(cnt))
                comp.append(ch)
                ch = word[i]
                cnt = 1
        
        comp.append(str(cnt))
        comp.append(ch)
        
        return "".join(comp)

```
```cpp []
class Solution {
public:
    string compressedString(string word) {
        if (word.empty()) return "";
        
        string comp;
        comp.reserve(word.size() * 2);
        
        int cnt = 1;
        char ch = word[0];
        
        for (size_t i = 1; i < word.size(); ++i) {
            if (word[i] == ch && cnt < 9) {
                ++cnt;
            } else {
                comp += (cnt + '0');
                comp += ch;
                ch = word[i];
                cnt = 1;
            }
        }
        
        comp += (cnt + '0');
        comp += ch;
        
        return comp;
    }
};
```
```java []
class Solution {
    public String compressedString(String word) {
        StringBuilder sb=new StringBuilder();
        int count=0,j=0;
        for(int i=0;i<word.length();++i){
            j=i;
            char c=word.charAt(i);
            while(j<word.length() && word.charAt(j)==c){
                ++count;
                ++j;
            }
            while(count>9){
                sb.append('9');
                sb.append(c);
                count-=9;

            }
            sb.append((char)(count+'0'));
            sb.append(c);
            count=0;
            i=j-1;

        }
        return sb.toString();
    }
}
```
```java [AltJava]
class Solution {
    public String compressedString(String word) {
        if (word.isEmpty()) {
            return "";
        }
        
        StringBuilder comp = new StringBuilder();
        int cnt = 1;
        char ch = word.charAt(0);
        
        for (int i = 1; i < word.length(); i++) {
            if (word.charAt(i) == ch && cnt < 9) {
                cnt++;
            }
            else {
                comp.append(cnt);
                comp.append(ch);
                ch = word.charAt(i);
                cnt = 1;
            }
        }
        
        comp.append(cnt);
        comp.append(ch);
        
        return comp.toString();
    }
}
```
```csharp []
public class Solution {
    public string CompressedString(string word) {
        if (string.IsNullOrEmpty(word)) return "";
        
        StringBuilder comp = new StringBuilder(word.Length * 2);
        
        int cnt = 1;
        char ch = word[0];
        
        for (int i = 1; i < word.Length; i++) {
            if (word[i] == ch && cnt < 9) {
                cnt++;
            } 
            else {
                comp.Append((char)(cnt + '0'));
                comp.Append(ch);
                ch = word[i];
                cnt = 1;
            }
        }
        
        comp.Append((char)(cnt + '0'));
        comp.Append(ch);
        
        return comp.ToString();
    }
}
```
```golang []
func compressedString(word string) string {
    if len(word) == 0 {
        return ""
    }
    
    var comp strings.Builder
    comp.Grow(len(word) * 2)
    
    cnt := 1
    ch := word[0]
    
    for i := 1; i < len(word); i++ {
        if word[i] == ch && cnt < 9 {
            cnt++
        } else {
            comp.WriteByte(byte('0' + cnt))
            comp.WriteByte(ch)
            ch = word[i]
            cnt = 1
        }
    }
    
    comp.WriteByte(byte('0' + cnt))
    comp.WriteByte(ch)
    
    return comp.String()
}
```
```swift []
class Solution {
    func compressedString(_ word: String) -> String {
        guard !word.isEmpty else { return "" }
        
        var comp = ""
        comp.reserveCapacity(word.count * 2)
        
        var cnt = 1
        var ch = word.first!
        
        let chars = Array(word)
        for i in 1..<chars.count {
            if chars[i] == ch && cnt < 9 {
                cnt += 1
            } else {
                comp.append(String(cnt))
                comp.append(ch)
                ch = chars[i]
                cnt = 1
            }
        }
        
        comp.append(String(cnt))
        comp.append(ch)
        
        return comp
    }
}
```
```javascript [JS]
// JavaScript

var compressedString = function(word) {
    let comp = "";
    let n = word.length;
    
    for(let i = 0; i < n; ) {
        let char = word[i];
        let k = i + 9;
        let length = 0;
        
        while(i < n && i < k && word[i] == char) {
            length += 1;
            i += 1;
        }
        
        comp += String(length) + char;
    }
    
    return comp;
};
```
```typescript [TS]
// TypeScript

function compressedString(word: string): string {
    let comp: string = "";
    let n: number = word.length;
    
    for(let i: number = 0; i < n; ) {
        let char: string = word[i];
        let k: number = i + 9;
        let length: number = 0;
        
        while(i < n && i < k && word[i] === char) {
            length += 1;
            i += 1;
        }
        
        comp += length.toString() + char;
    }
    
    return comp;
}
```
```rust []
impl Solution {
    pub fn compressed_string(word: String) -> String {
        if word.is_empty() {
            return String::new();
        }
        
        let mut comp = String::with_capacity(word.len() * 2);
        let chars: Vec<char> = word.chars().collect();
        
        let mut cnt = 1;
        let mut ch = chars[0];
        
        for i in 1..chars.len() {
            if chars[i] == ch && cnt < 9 {
                cnt += 1;
            } else {
                comp.push((cnt as u8 + b'0') as char);
                comp.push(ch);
                ch = chars[i];
                cnt = 1;
            }
        }
        
        comp.push((cnt as u8 + b'0') as char);
        comp.push(ch);
        
        comp
    }
}
```
```ruby []
def compressed_string(word)
    return "" if word.empty?
    
    comp = ""
    cnt = 1
    ch = word[0]
    
    (1...word.length).each do |i|
        if word[i] == ch && cnt < 9
            cnt += 1
        else
            comp << cnt.to_s << ch
            ch = word[i]
            cnt = 1
        end
    end
    
    comp << cnt.to_s << ch
    comp
end
```

![image.png](./images/0.png)


### Complexity
- Time complexity: O(n)


- Space complexity: O(1)


# Explanation

---

## Intuition

The problem asks us to compress a string by counting **consecutive** occurrences of characters, with a maximum count of 9.

Example:
 aaa **->** 3a
aabbcc" **->** 2a2b2c

Key Logic:

1. Count consecutive characters
2. Break counts when they reach 9
3. Handle transitions between different characters


## Approach

1. Initialize tracking variables:
- comp: array to store compressed parts
- current_char: tracks character being counted
- count: tracks number of consecutive occurrences
2. Main Processing

- Iterate through string
- For same characters:
    - If count reaches 9, output "9" + char and reset count
    - Otherwise increment count
- For different characters:
    - Output current count + char
    - Reset count and update current_char
3. Final step:
- Handle last sequence
- Join all parts into final string

## Pseudocode
```
FUNCTION compressString(word)
    IF word is empty THEN
        RETURN empty string
    END IF
    
    Initialize empty array comp
    Set current_char = first character of word
    Set count = 1
    
    FOR each character c in word (starting from second character)
        IF c equals current_char THEN
            IF count equals 9 THEN
                Add "9" to comp
                Add current_char to comp
                Set count = 1
            ELSE
                Increment count by 1
            END IF
        ELSE
            Add count as string to comp
            Add current_char to comp
            Set current_char = c
            Set count = 1
        END IF
    END FOR
    
    Add count as string to comp
    Add current_char to comp
    
    RETURN joined comp array as string
END FUNCTION
```

---

# Still dont understand string/array/pointers

**Video with IMO best explained:** google "Pointers in C / C++ [Full Course]"
(leetscode flag video in solution :)


# Most common String Interview Problems

From the most to the least common (from GitHub/reddit):


[[8. String to Integer (atoi)]](https://leetcode.com/problems/string-to-integer-atoi/description/) [[20. Valid Parentheses]](https://leetcode.com/problems/valid-parentheses/description/) [[28. Implement strStr()]](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/) [[65. Valid Number]](https://leetcode.com/problems/valid-number/description/) [[125. Valid Palindrome]](https://leetcode.com/problems/valid-palindrome/description/) [[680. Valid Palindrome II]](https://leetcode.com/problems/valid-palindrome-ii) [[49. Group Anagrams]](https://leetcode.com/problems/group-anagrams/description/) [[91. Decode Ways]](https://leetcode.com/problems/decode-ways/description/)

[List Most Common String Problem](https://leetcode.com/problem-list/atf8zle5/)



####  [Interview Questions and Answers Repository](https://github.com/RooTinfinite/Interview-questions-and-answers)


# Interview Priorities


| Patterns                | Difficulty | Interview Frequently           |
|----------------------|---------------------|----------------------|
| **Basic [Array](https://leetcode.com/problems/two-sum/solutions/5999466/beats-100-explained-step-by-step-list-most-common-array-inverview) / String**                 | **Easy**              | **Very High**               |
| **Two Pointers**         | **Easy**                | **High**                 |
| **Sliding Window**       | **Easy**                | **High**                 |
| **Breadth-First Search** | **Easy**                | **High**                 |
| **Depth-First Search**   | **Medium**              | **High**                 |
| **[Backtracking](https://leetcode.com/problems/letter-combinations-of-a-phone-number/solutions/5976064/complex-backtracking-interview-prepare-list-of-backtracking-questions-beats-100)**         | **High**                | **High**                 |
| Heap                 | Medium              | Medium               |
| Binary Search        | Easy                | Medium               |
| [Dynamic Programming](https://leetcode.com/problem-list/atwflvk7/)  | High                | Medium               |
| Divide and Conquer   | Medium              | Low                  |
| Trie                 | Medium              | Low                  |
| Union Find           | Medium              | Low                  |
| Greedy               | High                | Low                  |





















#### I put a lot of work into it, so pretty please with sugar on top UPVOTE
 
![image.png](./images/1.png)


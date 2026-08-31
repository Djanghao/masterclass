# Simple Java || C++ Code ☠️

**Author:** abhinandannaik1717
**Votes:** 5
**Link:** [https://leetcode.com/problems/hash-divided-string/solutions/5724915/](https://leetcode.com/problems/hash-divided-string/solutions/5724915/)

---



# Code
```java []
class Solution {
    public String stringHash(String s, int k) {
        int n = s.length();
        int d = (n/k);
        StringBuilder str = new StringBuilder();
        for(int i=0;i<n;i++){
            int e = k,f = 0;
            while(e!=0){
                f += ((int)(s.charAt(i)))%97;
                e--;
                i++;
            }
            f%=26;
            f+=97;
            str.append((char)(f));
            i--;
        }
        return str.toString();
    }
}
```
``` C++ []
class Solution {
public:
    string stringHash(string s, int k) {
        int n = s.length();
        int d = (n/k);
        string str;
        for(int i=0;i<n;i++){
            int e = k,f = 0;
            while(e!=0){
                f += ((int)(s[i]))%97;
                e--;
                i++;
            }
            f%=26;
            f+=97;
            str.push_back((char)(f));
            i--;
        }
        return str; 
    }
};
```

### Explanation

#### 1. Initialization

- **`n = s.length();`**  
  This calculates the length of the input string `s`.

- **`int d = (n / k);`**  
  This calculates the number of substrings `s` will be divided into. This value is `n / k`, but it is not used in the code directly.

- **`StringBuilder str = new StringBuilder();`**  
  This initializes a `StringBuilder` object to construct the result string efficiently. `StringBuilder` is used instead of `String` because appending to a `String` is less efficient due to immutability.

#### 2. Outer Loop to Process Each Substring

- **`for (int i = 0; i < n; i++)`**  
  The loop iterates over each character in the input string `s`. The variable `i` tracks the current index in the string.

#### 3. Inner Loop to Calculate Hash Value for Each Substring

Within the outer loop, the code uses a `while` loop to process each substring of length `k`:

- **`int e = k, f = 0;`**  
  - `e = k` initializes a counter to control the length of the substring being processed.
  - `f = 0` initializes the sum of hash values for the current substring.

- **`while (e != 0)`**  
  This loop runs exactly `k` times to process each character in the current substring.

- **`f += ((int)(s.charAt(i))) % 97;`**  
  - `s.charAt(i)` gets the character at index `i` of the string `s`.
  - `(int)(s.charAt(i))` converts this character to its ASCII value.
  - `((int)(s.charAt(i))) % 97` converts the ASCII value to the 0-based index of the character in the alphabet ('a' = 0, 'b' = 1, ..., 'z' = 25). This is achieved by subtracting 97 (ASCII value of 'a') from the ASCII value of the character.
  - `f += ((int)(s.charAt(i))) % 97` adds this hash value to the sum `f`.

- **`e--;`**  
  Decrements the counter `e` to track how many characters of the substring have been processed.

- **`i++;`**  
  Increments `i` to move to the next character in the string `s`.

#### 4. Finalize Hash Value for the Substring

After processing all `k` characters of the substring:

- **`f %= 26;`**  
  This operation ensures that the accumulated hash value `f` is within the bounds of the English alphabet (0 to 25). This is necessary because we want to map the sum back to a character from 'a' to 'z'.

- **`f += 97;`**  
  Converts the 0-based index `f` back to its corresponding ASCII character value by adding 97.

- **`str.append((char)(f));`**  
  Converts `f` to a character and appends it to the `StringBuilder`.

- **`i--;`**  
  Decrement `i` by 1 to adjust for the additional increment at the end of the `while` loop. This ensures that the next iteration of the outer `for` loop starts at the correct position in `s`.

#### 5. Return the Result String

- **`return str.toString();`**  
  Converts the `StringBuilder` to a `String` and returns it as the final result.

### Step-by-Step Example


#### Example Input

- **Input String**: `s = "abcdefgh"`, `k = 2`
- **Length of `s`**: `n = 8`
- **Substrings**: The string `s` is divided into 4 substrings of length `k = 2`: `"ab"`, `"cd"`, `"ef"`, `"gh"`

#### Execution Steps

1. **First Substring ("ab")**:
   - **Character 'a'**:
     - Hash value: `(int)'a' % 97 = 0`  
     - Sum `f` becomes `0`.
   - **Character 'b'**:
     - Hash value: `(int)'b' % 97 = 1`
     - Sum `f` becomes `1`.
   - `f % 26 = 1`  
   - `f + 97 = 98` (ASCII for 'b')
   - Append `'b'` to `str`.

2. **Second Substring ("cd")**:
   - **Character 'c'**:
     - Hash value: `(int)'c' % 97 = 2`
     - Sum `f` becomes `2`.
   - **Character 'd'**:
     - Hash value: `(int)'d' % 97 = 3`
     - Sum `f` becomes `5`.
   - `f % 26 = 5`
   - `f + 97 = 102` (ASCII for 'f')
   - Append `'f'` to `str`.

3. **Third Substring ("ef")**:
   - **Character 'e'**:
     - Hash value: `(int)'e' % 97 = 4`
     - Sum `f` becomes `4`.
   - **Character 'f'**:
     - Hash value: `(int)'f' % 97 = 5`
     - Sum `f` becomes `9`.
   - `f % 26 = 9`
   - `f + 97 = 106` (ASCII for 'j')
   - Append `'j'` to `str`.

4. **Fourth Substring ("gh")**:
   - **Character 'g'**:
     - Hash value: `(int)'g' % 97 = 6`
     - Sum `f` becomes `6`.
   - **Character 'h'**:
     - Hash value: `(int)'h' % 97 = 7`
     - Sum `f` becomes `13`.
   - `f % 26 = 13`
   - `f + 97 = 110` (ASCII for 'n')
   - Append `'n'` to `str`.

#### Final Output

- **Output**: `"bfjn"`

### Complexity Analysis

1. **Time Complexity**: `O(n)`  
   The code processes each character in the input string `s` exactly once. Thus, the time complexity is linear with respect to the length of the input string `n`.

2. **Space Complexity**: `O(n / k)`  
   The space complexity is determined by the length of the output string stored in `StringBuilder`, which is `n / k`.

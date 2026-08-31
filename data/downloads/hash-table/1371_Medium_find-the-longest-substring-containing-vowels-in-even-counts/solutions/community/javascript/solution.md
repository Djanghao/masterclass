# 🔥🔥Easiest Approach | Fully Explained 🚀| Must Watch 😎

**Author:** The_Sanket_Deshmukh
**Votes:** 64
**Link:** [https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/solutions/5788167/](https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/solutions/5788167/)

---

### Intuition \u2728
The key idea to solve this problem is based on **bitmasking**. The problem asks for the longest substring where each vowel ('a', 'e', 'i', 'o', 'u') appears an **even number of times**. Instead of directly counting vowels, we track whether each vowel has appeared an odd or even number of times using bitwise operations.

Here's the approach:
- Use a bitmask to represent the even/odd occurrence of vowels. Each vowel is assigned a bit, so the mask is a 5-bit number where each bit represents whether a vowel has appeared an odd number of times.
- A bit value of `1` means the vowel has appeared an **odd** number of times, while a bit value of `0` means it has appeared an **even** number of times.
- The task is to find the longest substring where all the vowels have appeared an even number of times.

### Approach \uD83D\uDE80

1. **Track Vowel Occurrences Using Bitmasking**:
   - We initialize a bitmask (`mask`) with 5 bits, each corresponding to a vowel.
   - As we traverse the string, we update the bitmask based on the vowel we encounter. For instance, if we encounter an 'a', we flip the 0th bit; if it's 'e', we flip the 1st bit, and so on.

2. **Map to Track Previous Occurrences**:
   - We use a hash map (`m`) to store the first occurrence of each bitmask value.
   - If the current bitmask has been seen before, it means the substring between the previous occurrence and the current position contains an even number of each vowel, so we calculate the length of this substring.

3. **Initial Condition**:
   - We initialize the bitmask `0` in the map at index `-1` because a bitmask of `0` means all vowels have appeared an even number of times. This helps when we find such a substring starting from the beginning.

4. **Return the Maximum Length**:
   - As we process the string, we keep track of the maximum length of the valid substrings where all vowels appear an even number of times.

### Code Walkthrough \uD83D\uDCDD

1. **Initialize Variables**:
   - `mask` starts at 0, meaning all vowels have an even count initially.
   - `maxLength` tracks the maximum length of valid substrings.
   - The hash map (`m`) is initialized with `m[0] = -1` to handle cases where the valid substring starts from index 0.

2. **Iterate Through the String**:
   - For each character, update the bitmask based on whether it is a vowel. 
   - If the current bitmask has been seen before, calculate the length of the substring and update `maxLength`.
   - If not, store the current index for this bitmask.

3. **Return the Result**:
   - After processing the entire string, return the maximum length of the valid substring.

### Time Complexity \u23F3
- **O(n)** where `n` is the length of the string. We traverse the string once, and all operations involving the bitmask and hash map are constant time.

### Space Complexity \uD83D\uDCBE
- **O(1)** for the bitmask and a small number of variables, but **O(n)** for the hash map storing previous bitmask states.

### Summary \uD83C\uDFAF
- **Time Complexity**: O(n)
- **Space Complexity**: O(n)

# Code
```cpp []
class Solution {
public:
    int findTheLongestSubstring(string s) {
        int n = s.length();
        int mask = 0, maxLength = 0;
        unordered_map<int,int> m;
        m[0] = -1;
        
        for (int i = 0; i < n; i++) {

            if (s[i] == 'a') mask ^= (1 << 0);
            else if (s[i] == 'e') mask ^= (1 << 1);
            else if (s[i] == 'i') mask ^= (1 << 2);
            else if (s[i] == 'o') mask ^= (1 << 3);
            else if (s[i] == 'u') mask ^= (1 << 4);
            
            if (m.find(mask) != m.end()) {
                maxLength = max(maxLength, i  - m[mask]);
            } else {
                m[mask] = i;
            }
        }
        return maxLength;
    }
};
```
```java []
import java.util.HashMap;

class Solution {
    public int findTheLongestSubstring(String s) {
        int n = s.length();
        int mask = 0;
        int maxLength = 0;
        HashMap<Integer, Integer> m = new HashMap<>();
        m.put(0, -1);
        
        for (int i = 0; i < n; i++) {
            char c = s.charAt(i);
            if (c == 'a') mask ^= (1 << 0);
            else if (c == 'e') mask ^= (1 << 1);
            else if (c == 'i') mask ^= (1 << 2);
            else if (c == 'o') mask ^= (1 << 3);
            else if (c == 'u') mask ^= (1 << 4);
            
            if (m.containsKey(mask)) {
                maxLength = Math.max(maxLength, i - m.get(mask));
            } else {
                m.put(mask, i);
            }
        }
        return maxLength;
    }
}

```
```python []
class Solution:
    def findTheLongestSubstring(self, s: str) -> int:
        n = len(s)
        mask = 0
        maxLength = 0
        m = {0: -1}
        
        for i in range(n):
            if s[i] == 'a':
                mask ^= (1 << 0)
            elif s[i] == 'e':
                mask ^= (1 << 1)
            elif s[i] == 'i':
                mask ^= (1 << 2)
            elif s[i] == 'o':
                mask ^= (1 << 3)
            elif s[i] == 'u':
                mask ^= (1 << 4)
            
            if mask in m:
                maxLength = max(maxLength, i - m[mask])
            else:
                m[mask] = i
        
        return maxLength

```
```javascript []
var findTheLongestSubstring = function(s) {
    let n = s.length;
    let mask = 0;
    let maxLength = 0;
    let m = new Map();
    m.set(0, -1);
    
    for (let i = 0; i < n; i++) {
        if (s[i] === 'a') mask ^= (1 << 0);
        else if (s[i] === 'e') mask ^= (1 << 1);
        else if (s[i] === 'i') mask ^= (1 << 2);
        else if (s[i] === 'o') mask ^= (1 << 3);
        else if (s[i] === 'u') mask ^= (1 << 4);
        
        if (m.has(mask)) {
            maxLength = Math.max(maxLength, i - m.get(mask));
        } else {
            m.set(mask, i);
        }
    }
    
    return maxLength;
};
```

Similar Question : https://leetcode.com/problems/contiguous-array/description/

![98700cfd-8ddb-4740-b56b-2a5c83585dac_1726305638.9046905.png](./images/0.png)

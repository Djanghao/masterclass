# Intuitive ➡️ Explained In Depth ➡️[Java/C++/JavaScript/C#/Python3/Go]

**Author:** Shivansu_7
**Votes:** 20
**Link:** [https://leetcode.com/problems/isomorphic-strings/solutions/4960588/](https://leetcode.com/problems/isomorphic-strings/solutions/4960588/)

---

# Approach
1. **Initialize Frequency Maps**: Two arrays, `map1` and `map2`, of size 128 are created. These arrays are used to store the frequency of characters encountered in strings `s` and `t`, respectively. Since the ASCII character set has 128 characters, these arrays can efficiently store the frequency of each character encountered.

2. **Iterate Through Characters**: The code iterates through each character of the strings `s` and `t` simultaneously using a single loop. For each character at position `i`, it retrieves the characters `s_ch` and `t_ch`.

3. **Mapping Characters**: 
   - If both `s_ch` and `t_ch` haven't been encountered before (`map1[s_ch] == 0 && map2[t_ch] == 0`), it establishes a mapping between them. It sets `map1[s_ch]` to `t_ch` and `map2[t_ch]` to `s_ch`.
   - If there's already a mapping but it doesn't match the current characters, it means the strings are not isomorphic, so it returns `false`.

4. **Return**: After iterating through all characters, if no inconsistency is found, it returns `true`, indicating that the strings are isomorphic.

***This approach effectively determines if the given strings `s` and `t` are isomorphic by ensuring that each character in one string uniquely maps to a character in the other string, and vice versa, maintaining the isomorphism property. The use of frequency maps allows for efficient tracking of character mappings.***

<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Java []
class Solution {
    public boolean isIsomorphic(String s, String t) {
        int[] map1 = new int[128];  // Stores frequency of s
        int[] map2 = new int[128];  // Stores frequency of t

        for(int i=0; i<s.length(); i++) {
            char s_ch = s.charAt(i);
            char t_ch = t.charAt(i);

            if(map1[s_ch]==0 && map2[t_ch]==0) {
                map1[s_ch] = t_ch;
                map2[t_ch] = s_ch;
            }
            else if(map1[s_ch] != t_ch || map2[t_ch] != s_ch) {
                return false;
            }
        }
        return true;
    }
}
```
```C++ []
class Solution {
public:
    bool isIsomorphic(string s, string t) {
        vector<int> map1(128, 0);  // Stores frequency of s
        vector<int> map2(128, 0);  // Stores frequency of t

        for(int i=0; i<s.length(); i++) {
            char s_ch = s[i];
            char t_ch = t[i];

            if(map1[s_ch]==0 && map2[t_ch]==0) {
                map1[s_ch] = t_ch;
                map2[t_ch] = s_ch;
            }
            else if(map1[s_ch] != t_ch || map2[t_ch] != s_ch) {
                return false;
            }
        }
        return true;
    }
};
```
```Python3 []
class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        map1 = [0] * 128  # Stores frequency of s
        map2 = [0] * 128  # Stores frequency of t

        for i in range(len(s)):
            s_ch = s[i]
            t_ch = t[i]

            if map1[ord(s_ch)] == 0 and map2[ord(t_ch)] == 0:
                map1[ord(s_ch)] = ord(t_ch)
                map2[ord(t_ch)] = ord(s_ch)
            elif map1[ord(s_ch)] != ord(t_ch) or map2[ord(t_ch)] != ord(s_ch):
                return False
        return True
```
```C# []
public class Solution {
    public bool IsIsomorphic(string s, string t) {
        int[] map1 = new int[128];  // Stores frequency of s
        int[] map2 = new int[128];  // Stores frequency of t

        for(int i=0; i<s.Length; i++) {
            char s_ch = s[i];
            char t_ch = t[i];

            if(map1[s_ch]==0 && map2[t_ch]==0) {
                map1[s_ch] = t_ch;
                map2[t_ch] = s_ch;
            }
            else if(map1[s_ch] != t_ch || map2[t_ch] != s_ch) {
                return false;
            }
        }
        return true;
    }
}
```
```Go []
func isIsomorphic(s string, t string) bool {
    map1 := make([]int, 128) // Stores frequency of s
    map2 := make([]int, 128) // Stores frequency of t

    for i := 0; i < len(s); i++ {
        sCh := s[i]
        tCh := t[i]

        if map1[sCh] == 0 && map2[tCh] == 0 {
            map1[sCh] = int(tCh)
            map2[tCh] = int(sCh)
        } else if map1[sCh] != int(tCh) || map2[tCh] != int(sCh) {
            return false
        }
    }
    return true
}
```
```Rust []
impl Solution {
    pub fn is_isomorphic(s: String, t: String) -> bool {
        let mut map1 = vec![0; 128]; // Stores frequency of s
        let mut map2 = vec![0; 128]; // Stores frequency of t

        for (s_ch, t_ch) in s.chars().zip(t.chars()) {
            if map1[s_ch as usize] == 0 && map2[t_ch as usize] == 0 {
                map1[s_ch as usize] = t_ch as i32;
                map2[t_ch as usize] = s_ch as i32;
            } else if map1[s_ch as usize] != t_ch as i32 || map2[t_ch as usize] != s_ch as i32 {
                return false;
            }
        }
        true
    }
}
```
```JavaScript []
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let map1 = new Array(128).fill(0);  // Stores frequency of s
    let map2 = new Array(128).fill(0);  // Stores frequency of t

    for (let i = 0; i < s.length; i++) {
        let sCh = s.charCodeAt(i);
        let tCh = t.charCodeAt(i);

        if (map1[sCh] === 0 && map2[tCh] === 0) {
            map1[sCh] = tCh;
            map2[tCh] = sCh;
        } else if (map1[sCh] !== tCh || map2[tCh] !== sCh) {
            return false;
        }
    }
    return true;
};
```

---


---

![5c63d377-8ef4-4beb-b09d-0edb07e09a41_1702955205.6568592.png](./images/0.png)

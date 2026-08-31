# Beats 100% || 2 approaches||NO HASHMAP || Full explained || [Java/C++/Python/JavaScript/Rust/Kotlin]

**Author:** Shivansu_7
**Votes:** 5
**Link:** [https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/solutions/4555550/](https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/solutions/4555550/)

---

# Intuition is Same for both the approach
1. Count the frequency of characters of each string.
2. Loop over all characters if the frequency of a character in t is less than the frequency of the same character in s then add the difference between the frequencies to the answer.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach 1 Using two frequency array.
1. Initialize two arrays `freqS` and `freqT` of size `26` to represent the frequency of each letter in the English alphabet. The index 0 represents 'a', index 1 represents 'b', and so on.
2. Loop through each character in the strings `s` and `t` and update the frequency arrays accordingly.
3. Initialize a variable count to keep track of the number of steps needed to make `s` and `t` anagrams.
4. Iterate through the frequency arrays and compare the frequency of each character in `t` with that in `s`. If the frequency in `t` is less than that in `s`, add the difference to the count.
5. Finally, return the total count, which represents the minimum number of steps needed to make `s` and `t` anagrams.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Java []
class Solution {
    // Method to calculate the minimum steps to make two strings anagrams
    public int minSteps(String s, String t) {
        // Arrays to store the frequency of each character in the English alphabet
        int[] freqS = new int[26];
        int[] freqT = new int[26];

        // Populate frequency arrays based on characters in strings s and t
        for (int i = 0; i < s.length(); i++) {
            freqS[s.charAt(i) - 'a']++; // Increment the frequency of the current character in string s
            freqT[t.charAt(i) - 'a']++; // Increment the frequency of the current character in string t
        }

        // Variable to store the count of steps needed to make the strings anagrams
        int count = 0;

        // Compare the frequency of each character in t with that in s
        for (int i = 0; i < 26; i++) {
            if (freqT[i] < freqS[i]) {
                // If frequency in t is less than that in s, add the difference to the count
                count += freqS[i] - freqT[i];
            }
        }

        // Return the total count, representing the minimum steps needed
        return count;
    }
}
```
```C++ []
class Solution {
public:
    // Method to calculate the minimum steps to make two strings anagrams
    int minSteps(string s, string t) {
        // Arrays to store the frequency of each character in the English alphabet
        vector<int> freqS(26, 0);
        vector<int> freqT(26, 0);

        // Populate frequency arrays based on characters in strings s and t
        for (int i = 0; i < s.length(); i++) {
            freqS[s[i] - 'a']++; // Increment the frequency of the current character in string s
            freqT[t[i] - 'a']++; // Increment the frequency of the current character in string t
        }

        // Variable to store the count of steps needed to make the strings anagrams
        int count = 0;

        // Compare the frequency of each character in t with that in s
        for (int i = 0; i < 26; i++) {
            if (freqT[i] < freqS[i]) {
                // If frequency in t is less than that in s, add the difference to the count
                count += freqS[i] - freqT[i];
            }
        }

        // Return the total count, representing the minimum steps needed
        return count;
    }
};
```
```Python3 []
class Solution:
    def minSteps(self, s: str, t: str) -> int:
           # Lists to store the frequency of each character in the English alphabet
        freq_s = [0] * 26
        freq_t = [0] * 26

        # Populate frequency lists based on characters in strings s and t
        for i in range(len(s)):
            freq_s[ord(s[i]) - ord('a')] += 1  # Increment the frequency of the current character in string s
            freq_t[ord(t[i]) - ord('a')] += 1  # Increment the frequency of the current character in string t

        # Variable to store the count of steps needed to make the strings anagrams
        count = 0

        # Compare the frequency of each character in t with that in s
        for i in range(26):
            if freq_t[i] < freq_s[i]:
                # If frequency in t is less than that in s, add the difference to the count
                count += freq_s[i] - freq_t[i]

        # Return the total count, representing the minimum steps needed
        return count
```
```JavaScript []
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    // Arrays to store the frequency of each character in the English alphabet
    const freqS = Array(26).fill(0);
    const freqT = Array(26).fill(0);

    // Populate frequency arrays based on characters in strings s and t
    for (let i = 0; i < s.length; i++) {
        freqS[s.charCodeAt(i) - 'a'.charCodeAt(0)]++; // Increment the frequency of the current character in string s
        freqT[t.charCodeAt(i) - 'a'.charCodeAt(0)]++; // Increment the frequency of the current character in string t
    }

    // Variable to store the count of steps needed to make the strings anagrams
    let count = 0;

    // Compare the frequency of each character in t with that in s
    for (let i = 0; i < 26; i++) {
        if (freqT[i] < freqS[i]) {
            // If frequency in t is less than that in s, add the difference to the count
            count += freqS[i] - freqT[i];
        }
    }

    // Return the total count, representing the minimum steps needed
    return count;
};
```
```Rust []
impl Solution {
    pub fn min_steps(s: String, t: String) -> i32 {
        // Vectors to store the frequency of each character in the English alphabet
        let mut freq_s = vec![0; 26];
        let mut freq_t = vec![0; 26];

        // Populate frequency vectors based on characters in strings s and t
        for c in s.chars() {
            freq_s[(c as u8 - b'a') as usize] += 1; // Increment the frequency of the current character in string s
        }

        for c in t.chars() {
            freq_t[(c as u8 - b'a') as usize] += 1; // Increment the frequency of the current character in string t
        }

        // Variable to store the count of steps needed to make the strings anagrams
        let mut count = 0;

        // Compare the frequency of each character in t with that in s
        for i in 0..26 {
            if freq_t[i] < freq_s[i] {
                // If frequency in t is less than that in s, add the difference to the count
                count += freq_s[i] - freq_t[i];
            }
        }

        // Return the total count, representing the minimum steps needed
        count
    }
}
```
```Kotlin []
class Solution {
    fun minSteps(s: String, t: String): Int {
        // Arrays to store the frequency of each character in the English alphabet
        val freqS = IntArray(26)
        val freqT = IntArray(26)

        // Populate frequency arrays based on characters in strings s and t
        for (char in s) {
            freqS[char - 'a']++ // Increment the frequency of the current character in string s
        }

        for (char in t) {
            freqT[char - 'a']++ // Increment the frequency of the current character in string t
        }

        // Variable to store the count of steps needed to make the strings anagrams
        var count = 0

        // Compare the frequency of each character in t with that in s
        for (i in 0 until 26) {
            if (freqT[i] < freqS[i]) {
                // If frequency in t is less than that in s, add the difference to the count
                count += freqS[i] - freqT[i]
            }
        }

        // Return the total count, representing the minimum steps needed
        return count
    }
}
```

---

# Approach 2 Using 1 frequency array.
1. Initialize an array `freq` of size 26 to represent the frequency of each letter in the English alphabet.
2. Loop through each character in the first string `s` and update the frequency array accordingly.
3. Initialize a variable `count` to keep track of the number of characters in the second string `t` that need to be changed to make the strings anagrams.
4. Loop through each character in the second string `t`. If the frequency of the character in the frequency array `freq` is non-zero, decrement the frequency; otherwise, increment the `count`.
5. The final value of `count` represents the minimum number of steps needed to make the two strings anagrams.

# Code
```Java []
class Solution {
    public int minSteps(String s, String t) {
        // Step 1: Initialize an array to store the frequency of each character in the English alphabet
        int[] freq = new int[26];

        // Step 2: Count the frequency of each character in the first string 's'
        for (int i = 0; i < s.length(); i++) {
            freq[s.charAt(i) - 'a']++;
        }

        // Step 3: Initialize a variable to count the characters in the second string 't' that need to be changed
        int count = 0;

        // Step 4: Iterate through each character in the second string 't'
        for (char ch : t.toCharArray()) {
            // If the frequency of the character in 'freqS' is non-zero, decrement the frequency
            if (freq[ch - 'a'] != 0) {
                freq[ch - 'a']--;
            } else {
                // If frequency is zero, increment the count as it needs to be changed
                count++;
            }
        }

        // Step 5: Return the final count, representing the minimum steps needed to make the two strings anagrams
        return count;
    }
}
```
```C++ []
class Solution {
public:
    // Method to calculate the minimum steps to make two strings anagrams
    int minSteps(string s, string t) {
        // Step 1: Initialize an array to store the frequency of each character in the English alphabet
        vector<int> freqS(26, 0);

        // Step 2: Count the frequency of each character in the first string 's'
        for (int i = 0; i < s.length(); i++) {
            freqS[s[i] - 'a']++;
        }

        // Step 3: Initialize a variable to count the characters in the second string 't' that need to be changed
        int count = 0;

        // Step 4: Iterate through each character in the second string 't'
        for (char ch : t) {
            // If the frequency of the character in 'freqS' is non-zero, decrement the frequency
            if (freqS[ch - 'a'] != 0) {
                freqS[ch - 'a']--;
            } else {
                // If frequency is zero, increment the count as it needs to be changed
                count++;
            }
        }

        // Step 5: Return the final count, representing the minimum steps needed to make the two strings anagrams
        return count;
    }
};
```
```Python3 []
class Solution:
    def minSteps(self, s: str, t: str) -> int:
        # Step 1: Initialize a list to store the frequency of each character in the English alphabet
        freqS = [0] * 26

        # Step 2: Count the frequency of each character in the first string 's'
        for char in s:
            freqS[ord(char) - ord('a')] += 1

        # Step 3: Initialize a variable to count the characters in the second string 't' that need to be changed
        count = 0

        # Step 4: Iterate through each character in the second string 't'
        for char in t:
            # If the frequency of the character in 'freqS' is non-zero, decrement the frequency
            if freqS[ord(char) - ord('a')] != 0:
                freqS[ord(char) - ord('a')] -= 1
            else:
                # If frequency is zero, increment the count as it needs to be changed
                count += 1

        # Step 5: Return
        return count
```
```JavaScript []
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    // Step 1: Initialize an array to store the frequency of each character in the English alphabet
    const freqS = Array(26).fill(0);

    // Step 2: Count the frequency of each character in the first string 's'
    for (let i = 0; i < s.length; i++) {
        freqS[s.charCodeAt(i) - 'a'.charCodeAt(0)] += 1;
    }

    // Step 3: Initialize a variable to count the characters in the second string 't' that need to be changed
    let count = 0;

    // Step 4: Iterate through each character in the second string 't'
    for (let i = 0; i < t.length; i++) {
        // If the frequency of the character in 'freqS' is non-zero, decrement the frequency
        if (freqS[t.charCodeAt(i) - 'a'.charCodeAt(0)] !== 0) {
            freqS[t.charCodeAt(i) - 'a'.charCodeAt(0)] -= 1;
        } else {
            // If frequency is zero, increment the count as it needs to be changed
            count++;
        }
    }

    // Step 5: Return the final count, representing the minimum steps needed to make the two strings anagrams
    return count;
};
```
```Rust []
/**
 * @param {String} s
 * @param {String} t
 * @return {i32}
 */
fn min_steps(s: String, t: String) -> i32 {
    // Step 1: Initialize a vector to store the frequency of each character in the English alphabet
    let mut freq_s = vec![0; 26];

    // Step 2: Count the frequency of each character in the first string 's'
    for c in s.chars() {
        freq_s[c as usize - 'a' as usize] += 1;
    }

    // Step 3: Initialize a variable to count the characters in the second string 't' that need to be changed
    let mut count = 0;

    // Step 4: Iterate through each character in the second string 't'
    for c in t.chars() {
        // If the frequency of the character in 'freq_s' is non-zero, decrement the frequency
        if freq_s[c as usize - 'a' as usize] != 0 {
            freq_s[c as usize - 'a' as usize] -= 1;
        } else {
            // If frequency is zero, increment the count as it needs to be changed
            count += 1;
        }
    }

    // Step 5: Return the final count, representing the minimum steps needed to make the two strings anagrams
    count
}
```

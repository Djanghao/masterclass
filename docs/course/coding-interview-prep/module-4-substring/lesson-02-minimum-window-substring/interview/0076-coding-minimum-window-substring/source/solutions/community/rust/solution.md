# Sliding Window  | Beats 100%  | Java | Python | C++ | JS | Go | Rust

**Author:** kartikdevsharma_
**Votes:** 38
**Link:** [https://leetcode.com/problems/minimum-window-substring/solutions/5485181/](https://leetcode.com/problems/minimum-window-substring/solutions/5485181/)

---



### INTUITION


We\u2019re given two strings: `s`, the large string, and `t`, the smaller one. Our job is to find the **smallest substring** of `s` that contains **all the characters** of `t`, and crucially, we need to consider duplicates. So, if `t` contains two `A`s, then any substring we pick from `s` needs to have **at least** two `A`s.

Let\u2019s step back and simplify what this means in real terms. Imagine `t` as a kind of "recipe" that we need to find ingredients for inside `s`. For every character in `t`, we need to find those exact characters inside `s`\u2014and not just once, but exactly as many times as they appear in `t`.



At first  it might seem like an easy task: just scan through `s`, looking for the characters in `t`, right? But the challenge lies in **how** we do this efficiently. Think about it: `s` could be **really** long\u2014thousands of characters long\u2014and if we simply checked every possible substring to see if it contains `t`, that could take a huge amount of time. Checking all possible substrings of `s` could get out of hand, especially with a string as long as 100,000 characters.

So, the tricky part is finding an approach that doesn\u2019t require us to check every substring one by one. Instead, we need a way to efficiently scan through `s` and pinpoint the smallest valid substring that includes all characters from `t`.


What\u2019s the simplest approach that comes to mind? Maybe we just scan through `s` and mark where each character from `t` appears. That could be a good first step. But we need more than just knowing where the characters are\u2014we also need to group them together into a substring that includes **all** the characters from `t`, in the right quantities.

So, we need a strategy to **group** characters together and dynamically check whether they form a valid solution. This is where the idea of a **sliding window** comes into play.


Let\u2019s talk about this concept of a "window." Imagine that `s` is like a long line of people, and we\u2019re trying to find the smallest group of people that contains certain key individuals from `t`. You start by focusing on a small group of people at the beginning of the line, then gradually expand your view to include more people. The moment your group contains everyone you need from `t`, you pause and check: \u201CIs this group the smallest one that works?\u201D If not, you start **shrinking** the group from the left to see if you can make it smaller while still keeping all the key people.

This idea of **expanding** and **shrinking** the window is at the heart of the solution. Instead of checking every possible group from scratch, you can adjust the group you\u2019re looking at by adding or removing people (characters) dynamically. This way, you\u2019re always refining your group, making it bigger when you need more characters and smaller when you have enough.


Okay, so now we\u2019ve got this concept of a window in mind. But how do we actually make it work? How do we keep track of which characters we\u2019ve seen and how many we need?

>Step 1: Expanding the Window

Let\u2019s imagine we start at the very beginning of `s`. We\u2019ll have two pointers:
- A **left** pointer that marks the beginning of the current window (the group of characters we\u2019re considering).
- A **right** pointer that expands the window by moving to the right, adding more characters to the current window.

We begin by expanding the window by moving the right pointer. As we add each new character from `s` to the window, we check: is this character in `t`? If it is, and we still need more of that character (because `t` might have multiple copies of the same letter), we decrease a counter that tells us how many more of that character we need.

For example, say `t = "AAB"` and we\u2019re expanding the window in `s`. The first time we see an `A`, we note that we still need one more `A` (since `t` needs two). When we see a `B`, we note that we no longer need any more `B`s.

>Step 2: Checking if the Window is Valid

As we keep expanding the window, we\u2019re keeping track of how many of each character from `t` we\u2019ve seen. The moment we\u2019ve seen **all** the characters in `t` (in the right quantities), the window becomes "valid." Now we know that this window contains everything `t` requires.

But just because the window is valid doesn\u2019t mean it\u2019s the **smallest** window. So, now we need to start **shrinking** it.

> Step 3: Shrinking the Window

Once we\u2019ve found a valid window, we try to shrink it from the left. Why? Because even though the window contains all the characters we need, it might have some extra characters that aren\u2019t necessary. So, we move the left pointer to the right, one character at a time, trying to remove as many characters as possible while still keeping the window valid.

For example, if `t = "AAB"` and the current window contains `AABCC`, we can safely remove one `C` without making the window invalid. But the moment we try to remove one of the `A`s or the `B`, the window becomes invalid again because it no longer contains all the characters from `t`.

As we shrink the window, we keep track of the **smallest** valid window we\u2019ve seen so far.

> Step 4: Continuing Until the End

After shrinking the window as much as possible, we go back to expanding it by moving the right pointer further to the right. We repeat this process\u2014expanding the window, checking if it\u2019s valid, shrinking it, and updating the smallest valid window\u2014until the right pointer reaches the end of `s`.



Now, how do we actually **keep track** of the characters we\u2019ve seen and still need? One efficient way is to use an array or a dictionary. We can create an array where each index represents a character (using the ASCII values of the characters as indices). This allows us to quickly update the count of each character in the window as we expand or shrink it.

We\u2019ll have two arrays:
- One to store the counts of each character in `t` (this is our **target**).
- Another to store the counts of each character in the current window of `s`.

Every time we add a character to the window by moving the right pointer, we update our current window\u2019s character count. When we remove a character by moving the left pointer, we adjust the count again. If the counts in the window match the counts in `t`, the window is valid.


Let\u2019s go one step further. What if `s` is really long, but `t` only contains a few distinct characters? We might spend a lot of time checking characters in `s` that aren\u2019t even relevant to `t`. To optimize this, we can **pre-filter** `s` to remove any characters that don\u2019t appear in `t`.

By filtering `s` down to only the characters we care about, we reduce the amount of work the sliding window needs to do. This optimization is especially useful when `s` contains many irrelevant characters that don\u2019t appear in `t`.


*So, to summarize:*
1. We start with two pointers, left and right, both at the beginning of `s`.
2. We use the right pointer to expand the window by adding characters from `s` and keeping track of which characters we\u2019ve seen and how many we still need.
3. Once we have a valid window (i.e., a window that contains all characters from `t` in the right quantities), we shrink the window from the left to find the smallest possible valid window.
4. We keep track of the smallest valid window we\u2019ve seen and return it at the end.


This approach is efficient because we only touch each character in `s` a limited number of times\u2014once when we add it to the window and once when we remove it. This gives us a time complexity of O(m + n), where `m` is the length of `s` and `n` is the length of `t`.

### Algorithm:



1. **Step 1: Initialize variables**:
   - Two pointers: `start` and `end`, both initialized to 0. These will represent the window's left and right boundaries, respectively.
   - A character frequency map for `t` (let's call it `target_freq`), which will store the count of each character in `t`.
   - A second frequency map (let's call it `window_freq`) to track the characters within the current window of `s`.
   - A counter variable `count` to keep track of how many characters from `t` have been fully matched in the current window.

2. **Step 2: Populate the frequency map for `t`**:
   - For each character in `t`, increment its corresponding count in `target_freq`.

3. **Step 3: Expand the window (Move the `end` pointer)**:
   - Start traversing `s` from left to right by moving the `end` pointer. For each character `s[end]`, increment its frequency in `window_freq`.
   - If the frequency of `s[end]` in `window_freq` matches the frequency in `target_freq` for that character, increment `count`.

4. **Step 4: Check for valid windows**:
   - Once `count` equals the number of unique characters in `t` (i.e., the window contains all characters of `t`), move the `start` pointer to shrink the window.
   - For each valid window, compare its length with the minimum window length found so far. Update the minimum window length and its starting position if a smaller valid window is found.

5. **Step 5: Shrink the window (Move the `start` pointer)**:
   - When the window is valid, try to shrink it by moving the `start` pointer to the right. After each move, update `window_freq` and check whether the window still contains all characters of `t`.
   - If the window becomes invalid (i.e., missing a required character), stop shrinking and continue expanding by moving the `end` pointer.

6. **Step 6: Return the result**:
   - Once the `end` pointer reaches the end of `s`, return the smallest valid window substring found.



```pseudo
function minWindow(s, t):
    if length(s) < length(t):
        return ""
    
    # Step 1: Initialize variables
    target_freq = create empty map
    window_freq = create empty map
    
    for char in t:
        target_freq[char] += 1

    start = 0
    end = 0
    min_len = infinity
    min_start = 0
    count = 0  # Number of characters fully matched

    # Step 3: Expand the window by moving the `end` pointer
    while end < length(s):
        char_end = s[end]
        window_freq[char_end] += 1

        if char_end is in target_freq and window_freq[char_end] == target_freq[char_end]:
            count += 1

        # Step 4: When all characters are matched, try shrinking the window
        while count == number of unique characters in t:
            if (end - start + 1) < min_len:
                min_len = end - start + 1
                min_start = start

            char_start = s[start]
            window_freq[char_start] -= 1

            if char_start is in target_freq and window_freq[char_start] < target_freq[char_start]:
                count -= 1

            start += 1  # Shrink the window from the left

        end += 1  # Expand the window from the right

    if min_len == infinity:
        return ""

    return substring(s, min_start, min_start + min_len)
```


### Time Complexity (TC):$O( n)$

- **Sliding Window Expansion (`end` pointer):**
  - The `end` pointer moves from the start of `s` to the end of `s`. Each character in `s` is processed once, so the time complexity of this is **O(m)**, where `m` is the length of `s`.

- **Sliding Window Contraction (`start` pointer):**
  - The `start` pointer can also traverse the entire string `s`, but it only moves when the window contains all characters from `t`. The `start` pointer can move at most `m` times as well, since every character in `s` is processed once during contraction.
  - Therefore, the time complexity of shrinking the window is also **O(m)**.

- **Checking and Updating Frequencies (`map` array):**
  - Checking whether the current window contains all characters from `t` requires constant time per operation because we are using an array of fixed size 128 (`int[] map = new int[128]`) to store the frequency of characters (based on ASCII values).
  - Therefore, all operations related to `map` (checking and updating character frequencies) take **O(1)** time per operation.

- **Total Time Complexity:**
  - Since both `start` and `end` traverse the entire string `s` and the operations inside the loop are O(1), the overall time complexity is **O(m + n)**, where `m` is the length of `s` and `n` is the length of `t`but since n (the length of t) is smaller than or equal to m (the length of s), we can simplify the complexity to O(m), where m is the length of the string s.

### Space Complexity (SC):$O(1)$

- **Frequency Map (`map` array):**
  - The `map` array has a fixed size of 128 (since it stores the frequency of ASCII characters), regardless of the length of `s` or `t`.
  - The space complexity for the `map` array is **O(1)** (constant space).

- **Other Variables:**
  - A few other integer variables like `count`, `start`, `end`, `minStart`, and `minLen` are used, but these take constant space.

- **Total Space Complexity:**
  - The space complexity is **O(n)** because we need to store the characters in `t` in the `map` array and count the frequencies. However, since the `map` array is of constant size (128), it doesn\u2019t depend on the size of `s` or `t`. So, the overall space complexity is **O(1)**, or more accurately **O(128)**, which is effectively constant.




# Code
```java []
class Solution {
    public String minWindow(String s, String t) {
        if (s.length() < t.length()) return "";
        
        int[] map = new int[128];
        int count = t.length();
        int start = 0, end = 0, minStart = 0, minLen = Integer.MAX_VALUE;
        
        for (char c : t.toCharArray()) map[c]++;
        
        while (end < s.length()) {
            if (map[s.charAt(end++)]-- > 0) count--;
            
            while (count == 0) {
                if (end - start < minLen) {
                    minStart = start;
                    minLen = end - start;
                }
                
                if (map[s.charAt(start++)]++ == 0) count++;
            }
        }
        
        return minLen == Integer.MAX_VALUE ? "" : s.substring(minStart, minStart + minLen);
    }
}
```
```python []
class Solution:
    def minWindow(self, s: str, t: str) -> str:
        if len(s) < len(t):
            return ""
        
        map = [0] * 128
        count = len(t)
        start = 0
        min_len = float('inf')
        min_start = 0
        
        for c in t:
            map[ord(c)] += 1
        
        for end in range(len(s)):
            if map[ord(s[end])] > 0:
                count -= 1
            map[ord(s[end])] -= 1
            
            while count == 0:
                if end - start + 1 < min_len:
                    min_start = start
                    min_len = end - start + 1
                
                map[ord(s[start])] += 1
                if map[ord(s[start])] > 0:
                    count += 1
                start += 1
        
        return "" if min_len == float('inf') else s[min_start:min_start + min_len]
```
```cpp []
class Solution {
public:
    string minWindow(string s, string t) {
        if (s.length() < t.length()) return "";
        
        vector<int> map(128, 0);
        int count = t.length();
        int start = 0, minStart = 0, minLen = INT_MAX;
        
        for (char c : t) map[c]++;
        
        for (int end = 0; end < s.length(); end++) {
            if (map[s[end]]-- > 0) count--;
            
            while (count == 0) {
                if (end - start + 1 < minLen) {
                    minStart = start;
                    minLen = end - start + 1;
                }
                
                if (map[s[start++]]++ == 0) count++;
            }
        }
        
        return minLen == INT_MAX ? "" : s.substr(minStart, minLen);
    }
};

```
```Rust []
impl Solution {
    pub fn min_window(s: String, t: String) -> String {
        if s.len() < t.len() {
            return String::new();
        }

        let s_bytes = s.as_bytes();
        let t_bytes = t.as_bytes();
        let mut map = [0; 128];
        let mut count = t.len();
        let mut start = 0;
        let mut min_start = 0;
        let mut min_len = usize::MAX;

        for &c in t_bytes {
            map[c as usize] += 1;
        }

        for end in 0..s.len() {
            if map[s_bytes[end] as usize] > 0 {
                count -= 1;
            }
            map[s_bytes[end] as usize] -= 1;

            while count == 0 {
                if end - start + 1 < min_len {
                    min_start = start;
                    min_len = end - start + 1;
                }

                map[s_bytes[start] as usize] += 1;
                if map[s_bytes[start] as usize] > 0 {
                    count += 1;
                }
                start += 1;
            }
        }

        if min_len == usize::MAX {
            String::new()
        } else {
            s[min_start..min_start + min_len].to_string()
        }
    }
}
```
```Go []
func minWindow(s string, t string) string {
    if len(s) < len(t) {
        return ""
    }

    freqMap := [128]int{}
    count := len(t)
    start, minStart, minLen := 0, 0, math.MaxInt32

    // Initialize the frequency map with characters from t
    for _, c := range t {
        freqMap[c]++
    }

    // Start the sliding window
    for end := 0; end < len(s); end++ {
        if freqMap[s[end]] > 0 {
            count--
        }
        freqMap[s[end]]--

        // Try to minimize the window
        for count == 0 {
            if end-start+1 < minLen {
                minStart = start
                minLen = end - start + 1
            }

            freqMap[s[start]]++
            if freqMap[s[start]] > 0 {
                count++
            }
            start++
        }
    }

    if minLen == math.MaxInt32 {
        return ""
    }
    return s[minStart : minStart+minLen]
}

```

```JavaScript []
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (s.length < t.length) return "";
    
    const map = new Array(128).fill(0);
    let count = t.length;
    let start = 0, minStart = 0, minLen = Infinity;
    
    for (let c of t) {
        map[c.charCodeAt(0)]++;
    }
    
    for (let end = 0; end < s.length; end++) {
        if (map[s.charCodeAt(end)]-- > 0) count--;
        
        while (count === 0) {
            if (end - start + 1 < minLen) {
                minStart = start;
                minLen = end - start + 1;
            }
            
            if (map[s.charCodeAt(start++)]++ === 0) count++;
        }
    }
    
    return minLen === Infinity ? "" : s.slice(minStart, minStart + minLen);
};
```
---
### Examples
Let's go through some examples 

We will focus on how the two pointers (`start` and `end`) work, how the `count` variable changes, and how the character frequency is managed in the `map` array.

#### Explanation of Key Variables:

- `start`: Beginning of the current window.
- `end`: End of the current window.
- `count`: Tracks how many characters from `t` are still missing from the window in `s`. When `count == 0`, it means all characters from `t` are currently in the window.
- `map`: A frequency map for characters in `t`. It records how many times each character of `t` appears.
- `minStart`: Keeps track of the starting index of the minimum window found so far.
- `minLen`: Length of the minimum window substring found.

### Example 1: Input: `s = "ADOBECODEBANC"`, `t = "ABC"`

| Step | `start` | `end` | Current Window (`s[start:end]`) | `count` | Explanation (Character Operations) | `minStart` | `minLen` |
|------|---------|-------|----------------------------------|---------|------------------------------------|------------|----------|
| 1    | 0       | 1     | "A"                              | 2       | 'A' is found (map['A'] > 0), decrease `count` to 2 | -          | \u221E        |
| 2    | 0       | 2     | "AD"                             | 2       | 'D' is not in `t`, continue sliding `end` | -          | \u221E        |
| 3    | 0       | 3     | "ADO"                            | 2       | 'O' is not in `t`, continue sliding `end` | -          | \u221E        |
| 4    | 0       | 4     | "ADOB"                           | 1       | 'B' is found (map['B'] > 0), decrease `count` to 1 | -          | \u221E        |
| 5    | 0       | 5     | "ADOBE"                          | 1       | 'E' is not in `t`, continue sliding `end` | -          | \u221E        |
| 6    | 0       | 6     | "ADOBEC"                         | 0       | 'C' is found (map['C'] > 0), decrease `count` to 0. Window contains all characters from `t` | 0          | 6        |
| 7    | 1       | 6     | "DOBEC"                          | 0       | Shrinking window by moving `start`. 'A' removed, `count` remains 0 | 1          | 5        |
| 8    | 2       | 6     | "OBEC"                           | 0       | Shrinking window by moving `start`. 'D' removed, `count` remains 0 | 2          | 4        |
| 9    | 3       | 6     | "BEC"                            | 0       | Shrinking window by moving `start`. 'O' removed, `count` remains 0 | 3          | 3        |
| 10   | 4       | 6     | "BEC"                            | 1       | Shrinking window by moving `start`. 'B' removed, `count` increases to 1 (not valid window anymore) | 3          | 3        |
| 11   | 4       | 7-10  | "CODEB"                          | 1       | Move `end` until all characters are found again. 'A' is found again at `end = 10` | -          | -        |
| 12   | 4       | 11    | "CODEBA"                         | 0       | 'A' is found again (valid window) | 4          | 3        |
| 13   | 4-7     | 11-13 | "BANC"                           | 0       | Shrink window to get minimum valid window ("BANC") | 9          | 4        |

**Result:** The minimum window is `"BANC"`.

---

### Example 2: Input: `s = "a"`, `t = "a"`

| Step | `start` | `end` | Current Window (`s[start:end]`) | `count` | Explanation (Character Operations) | `minStart` | `minLen` |
|------|---------|-------|----------------------------------|---------|------------------------------------|------------|----------|
| 1    | 0       | 1     | "a"                              | 0       | 'a' found (map['a'] > 0), `count` becomes 0, valid window found | 0          | 1        |
| 2    | 1       | 1     | -                                | -       | As `start` moves, no valid window remains | -          | -        |

**Result:** The minimum window is `"a"`.

---

### Example 3: Input: `s = "a"`, `t = "aa"`

| Step | `start` | `end` | Current Window (`s[start:end]`) | `count` | Explanation (Character Operations) | `minStart` | `minLen` |
|------|---------|-------|----------------------------------|---------|------------------------------------|------------|----------|
| 1    | 0       | 1     | "a"                              | 1       | 'a' found, but only 1 'a' in `s`, `count` remains 1 | -          | \u221E        |
| 2    | 1       | 1     | -                                | -       | No valid window can be formed since `t` requires 2 'a's but `s` only has 1 | -          | -        |

**Result:** The minimum window is `""` (empty string).

---



- We traverse the string `s` using two pointers `start` and `end`.
- We expand the window by moving `end`, and shrink the window by moving `start` when all characters from `t` are found in the window (i.e., `count == 0`).
- The minimum valid window is updated by comparing the length of each valid window with `minLen`.
- The algorithm ensures that even duplicate characters in `t` are taken care of by the frequency map `map`.




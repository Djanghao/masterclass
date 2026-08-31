# Detailed Explanation | Sliding Window with Explanation | C++ | Ruby | Rust | Python

**Author:** rbssmtkr
**Votes:** 3
**Link:** [https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/solutions/3381697/](https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/solutions/3381697/)

---

## Problem Statement
Given a string `s` and an integer `k`, find the length of the longest substring with at least `k` repeating characters.

## Approach
We can solve this problem using a sliding window approach. We iterate over the range of unique characters in the string `s`, and for each range, we use a sliding window to find the longest substring that has at least `k` repeating characters and has only the characters within the current range.

In the sliding window, we maintain a `count of the characters` that appear in the current window, and we shrink the window from the left side if the number of unique characters exceeds the range or if the number of characters with frequency `k` is less than the number of unique characters in the window.

We keep track of the `maximum length of the valid substring` seen so far and return it as the result.

## Intuition
The problem asks us to find the length of the `longest substring` with at least `k` repeating characters. We can approach this problem by considering different ranges of unique characters in the string `s`. For each range, we use a sliding window to find the longest substring with at least `k` repeating characters and only characters from the current range.

## Algorithm

-  iterate over different `count of unique` symbols in substring possible `[1...26 ]`
- Create a `window` for that count using `end and start` [ a basic 2 pointer formalism ]
- Now check for `valid` as if `count[char] > 0` but `count[char] < k` then the window becomes invalid 
- Update maxlen to the best answer using `maxlen = max(maxlen, end - start + 1)`

## Time Complexity
The time complexity of this approach is` O(n^2)`, where n is the length of the input string `s`. This is because we are iterating over all possible ranges of unique characters in the string and using a sliding window approach within each range.

## Space Complexity
The space complexity of this approach is `O(n)`, where n is the length of the input string `s`. This is because we are maintaining a count of the characters that appear in the current sliding window, which can have at most n distinct characters in the worst case.


## Code 
```C++ []
class Solution {
public:
    int longestSubstring(string s, int k) {
        int n = s.size(), maxlen = 0;

        for(int num_uniq = 1; num_uniq <= 26; ++num_uniq) 
          { 
            int count[128] = {0};
            int num_valid_uniq = 0, start = 0;

            for(int end = 0; end < n; ++end) {
                int index = s[end];
                if(count[index] == 0) num_valid_uniq++;
                count[index]++;

                while(num_valid_uniq > num_uniq) {
                    int index = s[start];
                    count[index]--;
                    if(count[index] == 0) num_valid_uniq--;
                    start++;
                }

                bool valid = true;
                for(int i = 0; i < 128; ++i) {
                    if(count[i] > 0 && count[i] < k) {
                        valid = false;
                        break;
                    }
                }
                if(valid) maxlen = max(maxlen, end - start + 1);
            }
        }

        return maxlen;
    }
};
```
```python []
class Solution:
    def longestSubstring(self, s: str, k: int) -> int:
        max_len = 0
        
        # Iterate over different counts of unique characters in substring
        for n_unique_chars in range(1, len(set(s))+1):
            
            start = 0
            char_count = {}
            n_chars_at_least_k = 0
            
            # Iterate over each character in the string
            for end in range(len(s)):
                # Count the frequency of the current character
                char_count[s[end]] = char_count.get(s[end], 0) + 1
                # If the frequency of the current character is at least k, increment the count of characters with at least k frequency
                if char_count[s[end]] == k:
                    n_chars_at_least_k += 1
                
                # Shrink the window from the left side if the number of unique characters exceeds the limit
                while len(char_count) > n_unique_chars:
                    # If the frequency of the character at the left end of the window is k, decrement the count of characters with at least k frequency
                    if char_count[s[start]] == k:
                        n_chars_at_least_k -= 1
                    # Decrement the frequency count of the character at the left end of the window
                    char_count[s[start]] -= 1
                    # Remove the character from the frequency count dictionary if its frequency becomes zero
                    if char_count[s[start]] == 0:
                        del char_count[s[start]]
                    start += 1
                
                # Update the maximum length of the substring with at least k repeating characters seen so far
                if len(char_count) == n_unique_chars and n_chars_at_least_k == n_unique_chars:
                    max_len = max(max_len, end - start + 1)
        
        return max_len
```
```Ruby []
def longest_substring(s, k)
  uniq_symb_set = s.chars.uniq
  maxlen = 0 # max length of potential substring, if we cannot find this string, it'll remain 0

  (1..uniq_symb_set.size).each do |uniq_symbs| # iterate over different count of unique symbols in substr
    at_least_k_chars = 0
    cnt = Hash.new(0) # count symbols in our window

    l = 0

    s.chars.each_with_index do |c, r| # using dynamic size of sliding window to fit into our uniq_symbs and k freq limits
      cnt[c] += 1 # move right border of this window

      if cnt[c] == k # count this symbol as at least k times repeated in sliding window
        at_least_k_chars += 1
      end

      while l < r && cnt.size > uniq_symbs # when window contains more than uniq_symbs chars, we need to shrink left border to t
        if cnt[s[l]] == k # if l is located on such symbol s[l] that consists k times in window [l, r] it means that it is at_least_char symbol
          at_least_k_chars -= 1
        end
        cnt[s[l]] -= 1 # remove it from window counter
        cnt.delete(s[l]) if cnt[s[l]] == 0 # it it was last s[l] in window we need to erase it from set to maintain actual set size
        l += 1
      end

      if cnt.size == uniq_symbs && at_least_k_chars == uniq_symbs
        maxlen = [maxlen, r - l + 1].max
      end
    end
  end

  maxlen
end
```

```Rust []
use std::collections::{HashMap, HashSet};

fn longest_substring(s: String, k: i32) -> i32 {
    let s = s.as_bytes();
    let uniq_symb_set: HashSet<u8> = s.iter().cloned().collect();
    let mut maxlen = 0; // max length of potential substring, if we cannot find this string, it'll remain 0

    for uniq_symbs in 1..=uniq_symb_set.len() { // iterate over different count of unique symbols in substr
        let mut at_least_k_chars = 0;
        let mut cnt: HashMap<u8, i32> = HashMap::new(); // count symbols in our window

        let mut l = 0;

        for r in 0..s.len() { // using dynamic size of sliding window to fit into our uniq_symbs and k freq limits
            let c = s[r];
            let count = cnt.entry(c).or_insert(0);
            *count += 1; // move right border of this window

            if *count == k { // count this symbol as at least k times repeated in sliding window
                at_least_k_chars += 1;
            }

            while l < r && cnt.len() > uniq_symbs { // when window contains more than uniq_symbs chars, we need to shrink left border to t
                let c = s[l];
                let count = cnt.get_mut(&c).unwrap();
                if *count == k { // if l is located on such symbol s[l] that consists k times in window [l, r] it means that it is at_least_char symbol
                    at_least_k_chars -= 1;
                }
                *count -= 1; // remove it from window counter
                if *count == 0 { // it it was last s[l] in window we need to erase it from set to maintain actual set size
                    cnt.remove(&c);
                }
                l += 1;
            }

            if cnt.len() == uniq_symbs && at_least_k_chars == uniq_symbs {
                maxlen = maxlen.max((r - l + 1) as i32);
            }
        }
    }

    maxlen
}
```
# Official Solution

**Link:** [https://leetcode.com/problems/find-k-length-substrings-with-no-repeated-characters/solution/](https://leetcode.com/problems/find-k-length-substrings-with-no-repeated-characters/solution/)

---

[TOC]

## Solution

---

### Approach 1: Brute Force

#### Intuition

The input string consists only of lowercase English letters, meaning the longest possible substring with all unique characters can have at most 26 characters. This is because there are only 26 distinct letters, and introducing any additional character would require repetition. This insight immediately tells us that if `k` is greater than 26, it's impossible to find a valid substring of length `k` with all unique characters, so we can directly return 0.  

For cases where `k` is at most 26, we can take a brute-force approach to check every possible substring of length `k` and determine whether it contains repeated characters. To efficiently check for duplicates, we can use either a hash table or a frequency array. As we iterate through each substring, we insert its characters into the data structure one by one. If we encounter a character that already exists in our set, we know that the substring contains duplicates and is therefore invalid.

The algorithm is visualized below:

!?!../Documents/1100/slideshow1.json:960,540!?!

#### Algorithm

- Check if `k > 26`. If true, return `0` as no substring >26 can have all unique chars (only 26 lowercase letters).  
- Initialize `n` as `s.length()` to store string length and `answer` as `0` to count valid substrings.  
- Iterate over all starting indices `i` of substrings:  
  - Initialize `freq[26]` to track char counts in the current substring.  
  - Set `isUnique` as `true` to assume no repeating chars in the substring.  
  - Iterate over the substring of length `k` starting at `i`:  
    - For each char `ch`, increment its count in `freq`.  
    - If `freq[ch - 'a'] > 1`, set `isUnique` to `false` and break (repeating char found).  
  - If `isUnique` is still `true`, increment `answer` (substring has all unique chars).  
- Return `answer` as the total number of valid substrings.

#### Implementation

<iframe src="https://leetcode.com/playground/4XZduhrM/shared" frameBorder="0" width="100%" height="500" name="4XZduhrM"></iframe>

#### Complexity Analysis

Let $$n$$ be the length of $$s$$, $$k$$ be the given substring length, and $$m$$ be the number of unique characters allowed in the string. In this case, $$m = 26$$.

- Time Complexity: $$O(n \cdot \min(m, k))$$  

    At first glance, the complexity might appear to be $$O(n \cdot k)$$ since, for each index, we check whether the substring of length $$k$$ starting at that index contains repeated characters. However, this check is only performed when $$k \leq m$$. If $$k > m$$, we immediately return 0. This means $$k$$ is effectively bounded by $$m$$, reducing the complexity to $$O(n \cdot \min(m, k))$$.  

    Since $$m = 26$$ in this case, it can be treated as a constant, simplifying the complexity to $$O(n)$$.

- Space Complexity: $$O(m)$$  

    The only extra space used is for a frequency array of size $$m$$, which is 26 in this case. Since this is a constant, the space complexity simplifies to $$O(1)$$.

---

### Approach 2: Sliding Window

#### Intuition

The problem requires us to count the number of substrings of length `k` that contain only unique characters. Instead of checking every possible substring individually, we can frame the problem differently: we need to find all *windows* of length `k` in the string that consist of distinct characters. This naturally leads to a Sliding Window approach, where we maintain a moving window of length at most `k` while ensuring that all characters within it remain unique.

The sliding window technique relies on two pointers, `left` and `right`, which represent the boundaries of our current window. As we traverse the string, we expand the window by moving `right` forward, adding new characters to a hash table or frequency array to keep track of their occurrences. If we encounter a duplicate character, we contract the window by moving `left` forward and removing elements from the data structure until all characters in the window are unique again. 

Throughout this process, the window's size is always at most `k`, i.e., `right - left + 1 ≤ k`. If the window reaches exactly `k` in length while containing only distinct characters, we count it as a valid substring. At this point, we slide the window forward by incrementing `left`, ensuring that the window size remains within the limit while checking for further valid substrings.

The algorithm is visualized below:

!?!../Documents/1100/slideshow2.json:960,540!?!

#### Algorithm

- Check if `k > 26`. If true, return `0` as no substring greater than 26 can have all unique chars (only 26 lowercase letters).  
- Initialize `answer` as `0` to count valid substrings and `n` as length of the input string.  
- Initialize `left` and `right` pointers to `0` for sliding window and a frequency array of size 26 to track char counts.  
- While `right < n`:  
  - Increment count of current char (`s[right]`) in frequency array.  
  - If count of current char exceeds `1`, move `left` forward and decrement count of `s[left]` until count of current char becomes `1`.  
  - If window size (`right - left + 1`) equals `k`:  
    - Increment `answer` (valid substring found).  
    - Decrement count of `s[left]` and move `left` forward to slide window.  
  - Move `right` forward to expand window.  
- Return `answer` as the total number of valid substrings.

#### Implementation

<iframe src="https://leetcode.com/playground/hruNJMn6/shared" frameBorder="0" width="100%" height="500" name="hruNJMn6"></iframe>

#### Complexity Analysis

Let $$n$$ be the length of $$s$$ and $$m$$ be the number of unique characters allowed in the string. Here, $$m = 26$$.

- Time Complexity: $$O(n)$$  

    At first glance, the nested loop might suggest a complexity of $$O(n^2)$$. However, note that both loops only move the $$left$$ or $$right$$ pointer forward, and this happens while $$right < n$$. Each character is visited at most twice—once by the $$right$$ pointer and once by the $$left$$ pointer—leading to a total of $$O(2n)$$ operations, which simplifies to $$O(n)$$.  

- Space Complexity: $$O(m)$$  

    The only extra space used is a frequency array of size $$m$$, which is 26 in this case. Since this is constant, the space complexity simplifies to $$O(1)$$.

---
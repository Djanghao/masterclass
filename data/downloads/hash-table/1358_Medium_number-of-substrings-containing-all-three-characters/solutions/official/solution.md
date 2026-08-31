# Official Solution

**Link:** [https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/solution/](https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/solution/)

---

[TOC]

## Solution

---

### Approach 1: Sliding Window

#### Intuition

The brute force approach would be to consider every possible substring and individually check whether they contain all three characters. However, this would be quite inefficient and wouldn't meet the problem constraints.

To optimize this, we need to think about what makes a substring valid. If we find a substring that contains at least one occurrence of each required character, then any larger substring that includes it must also be valid. This means that once we identify a valid substring, we can immediately infer the validity of multiple other substrings that extend from it. For instance, if `"abc"` is a valid substring, then `"abca"` and `"abcab"` are automatically valid because they still include all three required characters.

Given this insight, we need an efficient way to locate and count valid substrings while avoiding redundant checks. A sliding window approach achieves this by dynamically expanding and contracting the window of characters we are considering. We use two pointers: `left` and `right`, which define the current window. The `right` pointer expands the window by adding new characters, and we maintain a frequency count of `a`, `b`, and `c` within the window. Once the window contains at least one occurrence of each character, we know we have found a valid substring.

At this point, we can count not just the current substring, but all possible extensions of it that still contain the required characters. To do this, we increment our total count by the number of ways we can extend the substring to the right. Next, we move the `left` pointer forward, shrinking the window while ensuring that it still contains all three characters. As long as it remains valid, we continue counting substrings from this new position. Once the window loses one of the required characters, we stop shrinking and move the `right` pointer again to expand the window.

The process ends when the `right` pointer reaches the end of the string, having considered all possible valid substrings. We can now return the total count as our required answer.

#### Algorithm

Main method `numberOfSubstrings`:
- Initialize variables:
  - `len` to store the length of the input string.
  - `left` and `right`, both set to `0`, to track the sliding window.
  - `total` to store the count of valid substrings.
- Create an integer array `freq` of size 3 to store the frequency of characters `a`, `b`, and `c`.
- While the `right` pointer is less than the `len`:
  - Get the current character at the right pointer.
  - Increment the frequency of the current character in the `freq` array.
  - While all three characters (`a`, `b`, `c`) are present in the current window:
    - Add the count of all possible substrings from the current window to the end of the string (`len` - `right`).
    - Decrement the frequency of the character at the `left` pointer.
    - Move the `left` pointer one step ahead.
  - Move the `right` pointer one step ahead.
- Return the `total` count of valid substrings.

Helper method `hasAllChars(freq)`:
- Return `true` if the frequency array contains at least one occurrence of each character (`a`, `b`, `c`).
- Return `false` otherwise.

#### Implementation

<iframe src="https://leetcode.com/playground/m96j2GeG/shared" frameBorder="0" width="100%" height="500" name="m96j2GeG"></iframe>

#### Complexity Analysis

Let $n$ be the length of the input string `s`.  

- Time complexity: $O(n)$  

    The algorithm uses a two-pointer approach with `left` and `right` traversing the string. Each character is processed at most twice - once when expanding `right` and once when contracting `left`. Since each operation inside the loop runs in constant time, the overall time complexity is $O(n)$.  

- Space complexity: $O(1)$  

    The algorithm maintains a fixed-size frequency array `freq` of size $3$ to track the counts of `'a'`, `'b'`, and `'c'`. Since this array does not grow with the input size, the space usage is constant, i.e., $O(1)$.

---

### Approach 2: Last Position Tracking

#### Intuition

Instead of thinking in terms of a sliding window, we can take a different perspective: for each position in the string, how many valid substrings end at this position? The key observation is that a substring is valid if it contains at least one occurrence of each required character (`a`, `b`, and `c`). However, instead of tracking exact counts, we only care about where the most recent occurrence of each character is.

Let's use the string `"abcab"` as an example. When we reach position 4 (the last `'b'`), we need to include at least one `'a'` and one `'c'` to form valid substrings ending at this `'b'`. Looking backward, we find the last `'a'` at position 3 and the last `'c'` at position 2. To create a valid substring, we must include everything from the leftmost required character up to our current position.

This reveals an important pattern. At every position, we determine the leftmost occurrence among the last seen positions of `'a'`, `'b'`, and `'c'`. The number of valid substrings ending at this position is simply the number of possible starting points, which range from the beginning of the string up to this leftmost position.

In our `"abcab"` example, at position 4:
- The last `'a'` appears at position 3.
- The last `'b'` is at our current position 4.
- The last `'c'` appears at position 2.

Since `'c'` appears leftmost at position 2, any substring starting at positions 0, 1, or 2 and ending at position 4 will be valid. This gives us three valid substrings at this position!

This leads to a simple counting method: at each position, we add 1 plus the minimum of the last positions of `'a'`, `'b'`, and `'c'`. We add 1 because if the minimum position is $k$, we can start our substring at any position from $0$ to $k$, giving us $k + 1$ possible starting points.

To handle cases where a character hasn't appeared yet, we initialize its last position as `-1`. When calculating the minimum of the last positions, finding a `-1` tells us we don't have all the required characters yet, so we won't count any substrings at that position.

> For a more comprehensive understanding of the sliding window technique, check out the [Sliding Window Explore Card 🔗](https://leetcode.com/explore/learn/card/array-and-string/204/sliding-window/). This resource provides an in-depth look at the sliding window approach, explaining its key concepts and applications with a variety of problems to solidify understanding of the pattern.

#### Algorithm
 
- Initialize variables:
  - `len` to store the length of the input string.
  - `total` to store the count of valid substrings.
- Create an integer array `lastPos` of size 3 with all values set to `-1` to track the most recent positions of characters `a`, `b`, and `c`.
- For each position `pos` from `0` to `len`:
  - Update the last position of the current character in the `lastPos` array.
  - Find the minimum position among the last positions of `a`, `b`, and `c`.
  - If all characters are present, the minimum gives the leftmost required character position.
  - Add `1` plus this minimum position to the `total` count (accounting for 0-based indexing).
- Return the `total` count of valid substrings.

The slideshow below demonstrates the algorithm in action:

!?!../Documents/1358/slideshow.json:694,662!?!

#### Implementation

<iframe src="https://leetcode.com/playground/aGH7RJrr/shared" frameBorder="0" width="100%" height="412" name="aGH7RJrr"></iframe>

#### Complexity Analysis

Let $n$ be the length of the input string `s`.  

- Time complexity: $O(n)$  

    The algorithm processes each character in the string exactly once using a single loop that runs $n$ times. Each iteration performs a constant amount of work, including updating the `lastPos` array and computing the minimum of three values. Thus, the overall time complexity remains linear, i.e., $O(n)$.  

- Space complexity: $O(1)$  

    The algorithm maintains a fixed-size array `lastPos` of length $3$ to track the last seen positions of characters `a`, `b`, and `c`. Since this array does not grow with the input size, the space usage is constant, i.e., $O(1)$.

---
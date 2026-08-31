# Official Solution

**Link:** [https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/solution/](https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/solution/)

---

[TOC]

## Video Solution
---

<div>
  <div class="video-container">
    <iframe src="https://player.vimeo.com/video/482204478" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
  </div>
</div>

<div>&nbsp;
</div>

## Solution Article

---

### Approach 1: Sliding Window

**Intuition**

To solve the problem in one pass let's use here _sliding window_ approach with two set pointers `left` and `right` serving as the window boundaries.

The idea is to set both pointers in the position `0` and then move `right` pointer to the right while the window contains not more than two distinct characters. If at some point we've got `3` distinct characters, let's move `left` pointer to keep not more than `2` distinct characters in the window.

![compute](../Figures/159/sliding.png)

Basically, that's the algorithm: to move the sliding window along the string, to keep not more than `2` distinct characters in the window, and to update the max substring length at each step.

> There is just one more question to reply - how to move the left pointer to keep only `2` distinct characters in the string?

Let's use for this purpose a hashmap containing all characters in the sliding window as keys and their rightmost positions as values. At each moment, this hashmap could contain not more than `3` elements.

![compute](../Figures/159/move_left.png)

For example, using this hashmap one knows that the rightmost position of character `e` in `"eeeeeeeet"` window is `8` and so one has to move `left` pointer in the position `8 + 1 = 9` to exclude the character `e` from the sliding window.

Do we have here the best possible time complexity? Yes, we do - it's the only one who passes along the string with `N` characters and the time complexity is $$\mathcal{O}(N)$$.

**Algorithm**

Now one could write down the algortihm.

- Return `N` if the string length `N` is smaller than `3`.
- Set both set pointers at the beginning of the string `left = 0` and `right = 0` and init max substring length `max_len = 2`.
- While `right` pointer is less than `N`:
    * If the hashmap contains less than `3` distinct characters, add the current character `s[right]` in the hashmap and move `right` pointer to the right.
    * If the hashmap contains `3` distinct characters, remove the leftmost character from the hashmap and move the `left` pointer so that the sliding window contains `2` distinct characters only.
    * Update `max_len`.

**Implementation**

!?!../Documents/159_LIS.json:1000,492!?!

<iframe src="https://leetcode.com/playground/eUYyRTw7/shared" frameBorder="0" width="100%" height="500" name="eUYyRTw7"></iframe>

**Complexity Analysis**

* Time complexity: $$\mathcal{O}(N)$$ where `N` is the number of characters in the input string.

* Space complexity: $$\mathcal{O}(1)$$ since additional space is used only for a hashmap with at most `3` elements.

**Problem generalization**

The same sliding window approach could be used to solve the generalized problem :

[Longest Substring with At Most K Distinct Characters](https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/)
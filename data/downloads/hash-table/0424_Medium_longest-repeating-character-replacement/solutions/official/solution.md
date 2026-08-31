# Official Solution

**Link:** [https://leetcode.com/problems/longest-repeating-character-replacement/solution/](https://leetcode.com/problems/longest-repeating-character-replacement/solution/)

---

[TOC]

## Solution

---

### Overview

In this problem, we are given a string `s` consisting of uppercase English alphabets. We are allowed to replace any letter of this string with any other uppercase English letter in one operation. A maximum of $k$ such operations are permitted.

We need to find the longest substring after at most $k$ operations such that all the letters are identical and return its length.

There are several ways to solve this problem. We start with the brute force solution and improve it with a binary-search-based approach. We build on the understanding developed from the previous methods and present an optimized $O(n)$ solution which uses an expanding sliding window.

---

### Approach 1: Sliding Window + Binary Search

#### Intuition

Since the question asks us to find the longest substring length that satisfies the given conditions, we can start with generating all possible substrings.

Now, given a substring, we want to find out if it can be converted into a string with the same letters. Because we are allowed only $k$ operations to do so, we would want to minimize the number of operations.

We can divide all the characters of the string `s` into two groups - fixed letters and the letters that will be changed. Fixed letters remain unchanged. The rest of the letters would be substituted by fixed letters. To keep the number of substitutions minimum, the number of fixed letters must be maximum.

So, we find the character $target$, which occurs with the maximum frequency in the string. All other characters can now be replaced with $target$. If the count of other characters is less than or equal to $k$, then this substring fulfills the condition given in the question. We'd call it a valid substring.

![Each letter is a part of one of the two groups](../Figures/424/424-letter-groups.png)

We can try it over every substring and filter out all the valid substrings. The length of the longest valid substring would be our answer. However, this is a time-consuming process, for it involves nested $for$ loops which take $O(n ^ 2)$ time only for generating substring ranges and the additional overhead of calculating the maximum frequency element.

##### Optimization

While this might not be a good solution, we learn an important idea here. We observe that if a valid substring of length $i$ exists, then we can indeed say that a valid substring of length $i - 1$ would also exist.

Let's understand this with an example.

`s = "ABCCDC", k = 1`

Let's revisit the condition of validity - a substring is valid if, after at most $k$ character replacements, all the letters in the substring become the same.

In this case, `CCDC` is the longest substring that satisfies the given condition. We can take any substring of `CCDC`, and it would still be valid. That's because any substring of a valid string can never contain more than $k$ instances of *other characters* (any character other than `C` in this example). According to the condition of validity, it would make a valid substring.

Using induction, we can say that if there exists a valid string of length $i$, then all of its substrings of lengths $i - 1$, $i - 2$, $i - 3$... $2$ and $1$ would also be valid.

We can observe that it is making a monotonic function over the length of a valid substring. For the example given above, we have -

| substring length | 1    | 2    | 3    | 4    | 5     | 6     |
|------------------|------|------|------|------|-------|-------|
| valid            | true | true | true | true | false | false |

We want to find the longest valid substring. Because of the presence of monotonic values, we should be able to use binary search over the length of substrings. We try to find out if a valid substring with a certain length exists or not.

How to check whether a valid substring of a given length exists or not?

A valid substring of a given length could exist anywhere in the string. Think of a window of the given size which slides over the string from left to right. If a valid substring of the given length does exist, one of the sliding window positions will provide it to us.

As discussed earlier, we would need the element that appears the maximum number of times. A frequency map can be helpful here. A frequency map stores a list of characters with the frequency they appear in a particular window. Starting from the left edge of the string, we build a frequency map of the window. As we move the window of fixed length toward the right, the frequency of the new character added to the window increases, and the frequency of the departing character decreases.

Using this frequency map, we can easily check when we come across a valid window.

As we move the sliding window from left to right, we also keep track of the maximum frequency we have seen so far of any character in the sliding window. When we subtract the frequency from the size of the window, we get the count of all other characters which would be replaced. For a valid substring, the number of other characters should be less than or equal to $k$.

![All substrings of a valid substring are valid](../Figures/424/424-substrings-of-valid-substring.png)

#### Algorithm

If you don't have experience dealing with binary search related problems, an excellent place to start is [LeetCode Explore Card](https://leetcode.com/explore/learn/card/binary-search/).

We use binary search to implement this solution.

While working on binary search related problems, our first step is usually finding the search range. Let's focus on the same.

Because a single character would always make a valid substring, we can confidently say that the minimum length of a valid substring is $1$; let's call it $min$. The complete string could also be a valid string, so the maximum length can be the length of the given string; let's call it $max$. Our answer will lie in the range of $[min, max]$ (inclusive).

In this implementation of binary search, we use two variables, $lo$ and $hi$. It is similar to [template III](https://leetcode.com/explore/learn/card/binary-search/135/template-iii/) discussed in *binary search explore card*.

$lo$ always points to the length of a valid string. At the beginning of the program, the length of a known valid string is $min$, which is equal to $1$. So we initialize $lo$ to $1$. The range of $lo$ is the same as the search space defined above $[min, max]$ (both inclusive).

Here our task is to find the largest of $lo$, which stands for the longest valid substring.

$hi$ stays just above the search space and always points to an invalid length. In this case, we initialize $hi$ to $max + 1$. As we proceed, $lo$ and $hi$ converge toward the answer. In the end, $lo$ contains the answer, and $hi$ points to one higher number than $lo$.

!?!../Documents/424/binary-search-slideshow.json:960,540!?!

<br />

**Let's see the step by step procedure**

1. Initialize $lo$ to $1$ ($min$) and $hi$ to $1$ more than the length of string ($max + 1$).
2. Do the following until $lo$ and $hi$ are right next to each other.

   * Find the middle value $mid$ of $lo$ and $hi$. Check if a valid string of length $mid$ is possible or not. For this we use *another function*, $canMakeValidSubstring$, which uses a sliding window of length $mid$.
   * If we find a valid substring, we move the binary search to the right half of the range. So $lo$ becomes $mid$.
   * If we don't find a valid substring of length $mid$, then a valid string must exist on the left half of the range. $hi$ becomes $mid$.
3. In the end, $lo$ contains the maximum length of the string that satisfies our condition. We return $lo$.

Function to check if a valid substring of the given length $windowLength$ exists or not. We call it $canMakeValidSubstring$.

   1. Create a frequency map to track the maximum frequency of a character in the sliding window.
   2. Initialize $start$ to $0$.
   3. Create an $end$ pointer that iterates over each character of the given string $s$.
      * As it moves toward the right, add the character pointed by $end$ to the frequency map. If the size of the window exceeds $windowLength$, then it is time to move $start$ one step further. Before $start$ moves, decrease the frequency of the character pointed by it.
      * Store the maximum frequency seen so far of any character in a variable $maxFrequency$.
      * If $maxFrequency$ fulfills the condition for a valid substring, return $true$.
   4. If we cannot find a valid substring by the end of the loop, there is no valid range substring possible of the length $windowLength$. So we return $false$.

#### Implementation

<iframe src="https://leetcode.com/playground/QcLGaVRZ/shared" frameBorder="0" width="100%" height="500" name="QcLGaVRZ"></iframe>


#### Complexity Analysis

If there are $n$ characters in the given string -

* Time complexity: $O(n\log n)$. Binary search divides the search space in half in each iteration until one element is left. So from $n$ elements to reach $1$ element it takes $O(\log n)$ iterations. We go through the full length of the string using a sliding window in every iteration. So it takes $O(n)$ additional time per iteration. So the final time complexity is $O(\log n) * O(n) = O(n\log n)$ .

* Space complexity: $O(m)$ where $m$ is the number of distinct characters in the string. The core logic of binary search doesn't involve any auxiliary data structure but checking for valid string involves creating a hash map. The number of keys could be as many as the number of distinct characters. For uppercase English alphabets, $m=26$.

---

### Approach 2: Sliding Window (Slow)

#### Intuition

In the previous approach, our implementation of binary search makes use of a sliding window to check the validity condition. We explore the idea of sliding window from another angle in the current approach.

What if the question was about a specific character? Let's understand this with an example.

`s = "AABEAFACAAEAA"`, `k = 1`

Here, we are allowed to do a $1$ operation. i.e., $1$ replacement of a character with any other character. After the operation, we need to return the longest substring where all the letters are `A`.

We are going to use a sliding window here as well, but this time the window's size (the number of characters in the window) isn't fixed. It can expand as well as shrink.

Let's take two pointers $start$ and $end$. These pointers point to the start and end of the window. We also use a variable $count$ (which is set as $0$ initially) to record the number of `A`s in the current window. We call a window valid only if the difference between the size of the window and $count$ is less than or equal to $k$.

$$ end + 1 - start - count <= k $$

The size of the window expands when the pointer $end$ moves forward. In contrast, the size shrinks when $start$ moves ahead. The variable $count$ increases when the window grows, and the new character entering the window is `A`. On the opposite side, when the window shrinks and the outgoing character is `A`, we decrease $count$.

In the beginning, $start$ points to $0$ and $end$ point to $-1$. Thereby creating a sliding window of size $0$ ($end + 1 - start = -1 + 1 - 0 = 0$). A window of size $0$ is a valid window as per the condition.

While the window is valid, we expand the window by moving the $end$ pointer forward. As we do so, we also note the maximum length of the window seen so far, $maxLength$. When the window becomes invalid, we shrink the size by moving the $start$ pointer forward. $start$ pointer moves until the window becomes valid again. The process continues until the window reaches the right edge of the string and can't move any further.

In the end, $maxLength$ contains our answer.

!?!../Documents/424/sliding-window-slow-slideshow.json:960,540!?!

We did the whole process for one character, though. Now, let's go back to the original question. We see that we are not limited to just one character (`A` in the example above), but it could be any character. So, in place of considering one character, we consider all unique characters in the string one by one. The $maxLength$ would contain our answer.

#### Algorithm

1. Loop over the string to collect all the unique characters. Store them in a set $allLetters$.
2. Initialize $maxLength$ to $0$. This variable would contain the final answer.
3. For each letter $letter$ present in $allLetters$, do the following.
   1. Declare three variables, $start$, $end$, and $count$, and initialize them to $0$.
   2. Iterate $end$ from index $0$ to the end of the given string.
      1. If $end$ points at the same letter as the character stored in $letter$, then increase $count$ by $1$.
      2. If $end$ points to a different letter
         * Check if the current window is valid, if it is valid, then move $end$ to the next index.
         * If the window is not valid, we move $start$ in steps of $1$ until the window becomes valid again. Before every step, if $start$ is pointing at a character same as $letter$, then decrease $count$ by $1$.
      3. Compare $maxLength$ with the current length of the window. If the current length is bigger, then update $maxLength$.
4. Return $maxLength$ back to the caller.

#### Implementation

<iframe src="https://leetcode.com/playground/7iDoFWjt/shared" frameBorder="0" width="100%" height="500" name="7iDoFWjt"></iframe>

#### Complexity Analysis

Let $n$ be the number of characters in the string and $m$ be the number of unique characters.

* Time complexity: $O(nm)$. We iterate over each unique character once, which requires $O(k)$ time. We move a sliding window for each unique character from left to right of the string. As the window moves, each character of the string is visited at most two times. Once when it enters the window and again when it leaves the window. This adds $O(n)$ time complexity for each iteration. So the final time complexity is $O(nm)$. For all uppercase English letters, the maximum value of $m$ would be $26$.

* Space complexity: $O(m)$. We use an auxiliary set to store all unique characters, so the space complexity required here is $O(m)$. Since there are only uppercase English letters in the string, $m = 26$.

---

### Approach 3: Sliding Window (Fast)

#### Intuition

Let's revisit the first approach, where we apply binary search to different lengths of substrings. Depending on whether a substring meets the specified conditions or not, we increase or decrease the length of the substring. We use a sliding window-based approach to test the validity condition.

Note that the size of the sliding window does not change while it moves across the string. We test to see if the window ever becomes valid. If it does, we *try again from the beginning*, increasing the window size (or decreasing it if it remains invalid). In this way, we try to find the longest valid window. But do we need to start at the beginning of the string again?

Recall that when a string of length $l$ is valid, all its substrings form a valid string. Let's try looking at it from the other side. Suppose we have identified a valid substring/window of length $l - 1$. To find an even longer valid window, we should try adding the next alphabet. This temporarily increases the size of the window to $l$. We check whether it forms a valid window or not. If not, we move the beginning of the window to the right, which resets the window size back to $l - 1$ and effectively moves the window to the right.

We keep moving it until we reach a point where we find a valid window of size $l$. Now, we don't need to stop there. We can continue looking for a valid window of size $l + 1$. We continue this process until the window hits the right edge of the string. The size of the window at the end would be our answer.

The key takeaway here is that once we have found a valid window, we don't need to decrease the size of it. The window keeps moving toward the right. At each step, even if the window becomes invalid, we never decrease its size. We increase the size only when we find a valid window of larger size.

**Now let's look at it a bit more formally**

We begin with a sliding window of size 0 positioned at the left edge of the string. We consider an empty window as valid.

$start$ points at the first character of the window initially positioned at index $0$. $end$ points at the last character of the window initially positioned at index $-1$. We can see that the window's size is $0$ ($end + 1 - start = -1 + 1 - 0 = 0$). Here, we also consult our old friend, the frequency map. It stores a map of characters to their frequencies in the window; we call it $frequencyMap$.

Our objective is to find the longest valid window. So, whenever we see a valid window, we try to expand its size by moving the $end$ pointer forward. As we move the pointer forward, we update the $frequencyMap$ as well. The frequency map helps us keep track of the character that appears most frequently in the window. We compare the frequency of the newly added character with the maximum frequency of any character seen so far - $maxFrequency$. We update $maxFrequency$ when we find a new maximum.

The window size increases only when $maxFrequency$ finds a new maximum. For this, we always want the following condition to hold true -

$$ windowSize - maxFrequency <= k $$

We stop moving the $end$ pointer forward, or in other words, stop expanding the window when it becomes invalid. Say the size of the window when it becomes invalid is $l$. We know the previous window with the size $l - 1$ was valid. So, we move the prior window of length $l - 1$ toward the right. To do so, the $start$ pointer moves one step further. Remember that the $end$ pointer had already moved, so we don't need to move the $end$ pointer again.

At this point, the last valid window has moved one step to the right, but it might still be invalid. As explained earlier, we are only interested in larger windows, so we don't need to decrease the window size. We move the window of size $i - 1$ further and further to the right until it becomes valid again.

If we come across a valid window, we try to expand it as much as possible, and the process continues until the $end$ pointer reaches the rightmost alphabet of the string. At this point, the size of the window indicates the longest valid substring seen yet.

!?!../Documents/424/sliding-window-fast-slideshow.json:960,540!?!

#### Algorithm

1. Initialize $start = 0$ and $end = -1$. They represent the indexes of the window's left most and the most characters resepectively.
2. Initialize a hash map $frequencyMap$ to contain characters and their frequencies.
3. Initially the size of the window is $0$, which we consider as valid. Expand the window by moving $end$ pointer forward. We do so until the window becomes invalid.
4. Every time $end$ moves forward, we update the frquency map of the newly added element. We update $maxFrequency$ if its frequency is the maximum we have seen so far.

   We check for validity using the following formula

   $$ end + 1 - start - maxFrequency <= k $$
   
5. If the window is invalid, move the start pointer ahead by one step. Every time $start$ moves forward, we update the frequency of the outgoing element in the map. At this point the size of the window is equal to the longest valid window we have seen so far. We make a note of the window size in a variable $longestSubstringLength$.
6. We repeat the last two steps until the window reaches the right edge of the string.
7. $longestSubstringLength$ contains the answer.

#### Implementation


<iframe src="https://leetcode.com/playground/N5jNfaGK/shared" frameBorder="0" width="100%" height="500" name="N5jNfaGK"></iframe>


#### Complexity Analysis

If there are $n$ characters in the given string -

* Time complexity: $O(n)$. In this approach, we access each index of the string at most two times. When it is added to the sliding window, and when it is removed from the sliding window. The sliding window always moves forward. In each step, we update the frequency map, $maxFrequency$, and check for validity, they are all constant-time operations. To sum up, the time complexity is proportional to the number of characters in the string - $O(n)$.

* Space complexity: $O(m)$. Similar to the previous approaches, this approach requires an auxiliary frequency map. The maximum number of keys in the map equals the number of unique characters in the string. If there are $m$ unique characters, then the memory required is proportional to $m$. So the space complexity is $O(m)$. Considering uppercase English letters only, $m = 26$.

---
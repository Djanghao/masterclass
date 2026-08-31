# 【Video】Find a circle in the string

**Author:** niits
**Votes:** 7
**Link:** [https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-i/solutions/5665408/](https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-i/solutions/5665408/)

---


# Solution Video

https://youtu.be/yg-6LwlLYwA

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 7,683
Thank you for your support!

---

# Approach

Let's think about this case.
```
Input: word = "abacaba", k = 3
```
We know that we have to remove the first `k` characters of the word and add any `k` characters to the end of word.

By simultaneously removing `k` characters from the end to the beginning  of the string and if the remaining characters match at some point, we have discovered a cycle within the string. This led me to believe that the minimum number of repetitions to form a cycle would occur under this condition.

**The video might make it easier to visualize the circle.**

For example,

In the first step,
```
"abacaba"
remove "aba" from the beginning \u2192 "caba"
remove "aba" from the last \u2192 "abac"

"caba" == "abac"
\u2192 False

count 1
```
Again, 
```
remove "cab" from the beginning \u2192 "a"
remove "bac" from the last \u2192 "a"

"a" == "a"
\u2192 true

count 2
```
We found a circle in the string. This indicates that by adding appropriate characters(we don't have to know exact characters to solve the question), the string can be made identical to the original.

```
return 2
```

## What if we don't find a circle?
In this case, return count + 1. Let's see an example.

```
Input: word = "abc", k = 2
```
```
remove "ab" from the beginning \u2192 "c"
remove "bc" from the last \u2192 "a"

"c" == "a"
\u2192 false

count 1
```
But let's say we remove `ab` and add `aa` after `c`(= `caa`) in the first step. in the second step, remove `ca` and add `bc` after `a`. Now we can create `abc`.

From this example, if we don't find a circle, return `count + 1`.

---

\u2B50\uFE0F Points

- Find a circle in the string.
- If we don't find the circle, return count + 1

---

\u2B50\uFE0F I recently created a video on how I've been using LeetCode to learn.

https://youtu.be/bU_dXCOWHls


---



# Complexity
- Time complexity: $$O((n // k) * n)$$
n is length of input string
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

```python []
class Solution:
    def minimumTimeToInitialState(self, word: str, k: int) -> int:
        count = 0
        for i in range(1, len(word) // k + 1):
            count = i
            if word[k * i:] == word[:len(word) - k * i]:
                return i

        return count + 1

```
```javascript []
/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumTimeToInitialState = function(word, k) {
    let count = 0;

    for (let i = 1; i <= Math.floor(word.length / k); i++) {
        count = i;
        if (word.slice(k * i) === word.slice(0, word.length - k * i)) {
            return i;
        }
    }

    return count + 1;    
};
```
```Java []
class Solution {
    public int minimumTimeToInitialState(String word, int k) {
        int count = 0;

        for (int i = 1; i <= word.length() / k; i++) {
            count = i;
            if (word.substring(k * i).equals(word.substring(0, word.length() - k * i))) {
                return i;
            }
        }

        return count + 1;        
    }
}
```
```C++ []
class Solution {
public:
    int minimumTimeToInitialState(string word, int k) {
        int count = 0;

        for (int i = 1; i <= word.length() / k; i++) {
            count = i;
            if (word.substr(k * i) == word.substr(0, word.length() - k * i)) {
                return i;
            }
        }

        return count + 1;        
    }
};
```

## Step by Step Algorithm

1. **Initialization**:
   ```python
   count = 0
   ```
   - `count` is initialized to 0. It will be used to keep track of the minimum time required to reach the initial state.

2. **Iterating through Possible Repetitions**:
   ```python
   for i in range(1, len(word) // k + 1):
   ```
   - This loop iterates from 1 to the maximum possible number of repetitions of the substring `k` within the word. 
   - The maximum number of repetitions is determined by `len(word) // k`.

3. **Update Count**:
   ```python
   count = i
   ```
   - `count` is updated to the current value of `i`. This represents the number of repetitions checked so far.

4. **Checking for Initial State**:
   ```python
   if word[k * i:] == word[:len(word) - k * i]:
   ```
   - This condition checks if the substring of `word` starting from index `k * i` until the end (`word[k * i:]`) is equal to the substring from the beginning until index `len(word) - k * i` (`word[:len(word) - k * i]`).
   - If these substrings are equal, it means the word has been reset to its initial state after `i` repetitions.

5. **Return the Minimum Time**:
   ```python
   return i
   ```
   - If the condition is satisfied, the function returns the current value of `i`, which represents the minimum time required to reach the initial state.

6. **Handle the Edge Case**:
   ```python
   return count + 1
   ```
   - If no initial state is found within the loop, the function returns `count + 1`, indicating that the minimum time required to reach the initial state is at least one more repetition than the maximum possible number of repetitions.

The algorithm essentially checks for the smallest number of repetitions needed to bring the word back to its initial state. It does this by comparing substrings of the word after each potential repetition.

---

Thank you for reading my post.
\u2B50\uFE0F Please upvote it and don't forget to subscribe to my channel!

\u2B50\uFE0F Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

\u2B50\uFE0F Twitter
https://twitter.com/CodingNinjaAZ


https://youtu.be/8f0TlWnaWLQ





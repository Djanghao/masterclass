# Official Solution

**Link:** [https://leetcode.com/problems/single-row-keyboard/solution/](https://leetcode.com/problems/single-row-keyboard/solution/)

---

[TOC]

## Video Solution

---

<div>
    <div class="video-container">
        <iframe src="https://player.vimeo.com/video/781362485" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
</div>

<div>&nbsp;
</div>

## Solution Article

---

### Approach 1: Storing indexes for all letters

**Intuition**

A simple brute force solution to the problem would be: iterate over `word`, and at each iteration, add the distance between the previous and current key to a `result` variable. To find these distances, we could search over the keyboard to get the indexes of the previous and current keys. The distance would then be the absolute value of the difference between them.

Let's see if we can improve upon the above algorithm. Observe that we could create an array that "reverses" the mapping, that is, each key will be mapped to its index. This way, finding the distance between two keys will no longer require traversing over `keyboard`. Instead, it will simply be two constant-time lookups for the indexes. This is a significant improvement to the approach described above.

Each letter can be converted into an array index, by assigning `a = 0, b = 1, c = 2 … z = 26`.

!?!../Documents/1165/1165_Keyboard.json:1131,266!?!

*Mapping keyboard letters to array


**Algorithm**

1. The keyboard only has unique lowercase English letters, so we can map it to an array of size `26`. Therefore, we'll create an array of size `26`, let's call it `keyIndices`.
2. Store the index of each letter in this array by traversing `keyboard`.
3. Initialize the `result` variable to `0` which would store the summation of all the distances.
4. Declare a variable `prev` which would store the index of the previous key. Since the starting position is `0`, initialize it to `0`.
5. Traverse `word` letter-by-letter.
6. For each letter `c` add $$|\text{prev} - indexOf(\text{c})|$$ to `result`.
7. Update `prev` to index of `c`.
8. Repeat step 6 and 7 for all letters.
9. At the end of the traversal, `result` will be the final time required to type the word.

<iframe src="https://leetcode.com/playground/BM2tiioD/shared" frameBorder="0" width="100%" height="480" name="BM2tiioD"></iframe>

**Complexity Analysis**

* Time complexity: $$O(n)$$. Where $$n$$ is the length of `word`, since we need to traverse the word. An additional constant of $$O(26) = O(1)$$ is needed to iterate through `keyboard`.

* Space complexity: $$O(1)$$. The algorithm requires constant space to store indices for `26` letters.
# Official Solution

**Link:** [https://leetcode.com/problems/first-unique-character-in-a-string/solution/](https://leetcode.com/problems/first-unique-character-in-a-string/solution/)

---

[TOC]

## Video Solution
---

<div>
    <div class="video-container">
        <iframe src="https://player.vimeo.com/video/784616895" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
</div>

<div>&nbsp;
</div>

## Solution Article

---

### Approach 1: Linear time solution

The best possible solution here could be of a linear time because to ensure that the character is unique you have to check the whole string anyway. 

The idea is to go through the string and save in a hash map the number of times each character appears in the string. That would take $$\mathcal{O}(N)$$ time, where `N` is the number of characters in the string.
 
Then we go through the string the second time, this time we use the hash map as a reference to check if a character is unique or not. If the character is unique, one could just return its index. The complexity of the second iteration is $$\mathcal{O}(N)$$ as well.

!?!../Documents/387_LIS.json:1000,621!?!

<iframe src="https://leetcode.com/playground/e6zf5RKZ/shared" frameBorder="0" width="100%" height="361" name="e6zf5RKZ"></iframe>

**Complexity Analysis**

* Time complexity: $$\mathcal{O}(N)$$ since we go through the string of length `N` two times. 
* Space complexity: $$\mathcal{O}(1)$$ because English alphabet contains 26 letters.
# Multiple Python Solutions

**Author:** noobmldude
**Votes:** 4
**Link:** [https://leetcode.com/problems/single-row-keyboard/solutions/2911269/](https://leetcode.com/problems/single-row-keyboard/solutions/2911269/)

---

# Background
<!-- Describe your first thoughts on how to solve this problem. -->

In this problem:
> Time take for one character  = Position of prev key -  position of current key. 

So the sequence of the `word` affects the time taken.
So we need to look at the characters of the `word` sequentially

# Approach 1 - Brute Force : O(N*M)
<!-- Describe your approach to solving the problem. -->
Keyboard already stores the order of all 26 characters.
Loop through characters in Word and check for that characters position in keyboard everytime.

### Complexity
- Time complexity: $$O(N*M)$$ 
    - `N` is the length of the word -  we loop through each item of word which has a time of $$O(N)$$
    - `M` is the length of the keyboard - for each call to `index()` there is a search operation which has a time of $$O(M)$$


- Space complexity: $$O(1)$$
    - There is not additional storage required if the size of keyboard or word changes, so its in $$O(1)$$

### Code
```
class Solution:
    def calculateTime(self, keyboard: str, word: str) -> int:
        i = 0
        total_time = 0
        for w in word:
            j = keyboard.index(w)
            total_time += abs(i - j)
            i = j
        return total_time
```

# Approach 2 - Using HashMap : O(N)
<!-- Describe your approach to solving the problem. -->
Instead of looking up the position for each character every time. We save the positions in a hasmap that makes it faster to retrieve.

This time again we need to loop through characters in Word and check for that characters position **but intead of the keyboard string like before, but in the hashmap**. As you know accessing values from hashmap is much faster and has $$O(1)$$ read times on average. 
*Note: It has worst case read times of $$O(N)$$ if there are a lot of hash collisions.*

### Complexity
- Time complexity: $$O(M+N)$$ 
    - `N` is the length of the word -  we loop through each item of word which has a time of $$O(N)$$
    - `M` is the length of the keyboard (here 26). We also loop through the items in keyboard once t create the map of positions. 
    - Since `M` is a constant(26) we can ignore it. Time complexity is $$O(N)$$

- Space complexity: $$O(1)$$
    - There is not additional storage required if the size of keyboard or word changes, so its in $$O(1)$$

### Code
```
class Solution:
    def calculateTime(self, keyboard: str, word: str) -> int:
        keypos = {}
        for i, k in enumerate(keyboard):
            keypos[k] = i
        
        i = 0
        total_time = 0
        for w in word:
            j = keypos[w]
            total_time += abs(i-j)
            i=j
        return total_time
```
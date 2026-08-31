# Very easy 4 liner explained , beats 100%/100%

**Author:** Flame_BlitZ
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-ii/solutions/4674556/](https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-ii/solutions/4674556/)

---

# DISCLAIMER 
<h6>I only code in JS, so only JS solution exists, But using the tag for all code languages as string slicing is available in all languages and variable defining loop and return is easy to understand regardless of language.
I tried to explain to the best of my knowledge and I understand it might be clear still. I'll try to edit it again later when I can find the right words to put here :)

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
<h6>Since we can add any characters at the end and we're forced to remove k chars from the start, we can just keep ignoring last k characters by each passing second.

# Approach
- We declare a variable i with the value k.
- Check if the word slice from i to end of the string is eqal to the word slice of the start to the end-i of string.
- Why do we do this? because we can add any k chars at the end at every second, so we do not care to keep track of what they were anymore.
- Keep checking as you're iterating through k increments.
- If a match is found , that means from that particular point , things can be added from the back of the string to make it equal to what it was before, thus you return i/k ,  which is nothing but how many seconds have passed as i is a multiple of k.

If unclear , include `console.log(word.slice(i,word.length), word.slice(0,word.length-i))` inside the for loop before the if condition and you'll see how its processing as it runs.


<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumTimeToInitialState = function(word, k) {
    let i=k;
    for(    ; i<word.length ; i+=k)
        if(word.slice(i,word.length) == word.slice(0,word.length-i))  return i/k;
  return i/k;
};
```
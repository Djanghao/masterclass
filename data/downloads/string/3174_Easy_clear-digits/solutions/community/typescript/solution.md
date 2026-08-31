# Fast solution mapping the string to an array and replacing removals with empty string

**Author:** mnjk
**Votes:** 0
**Link:** [https://leetcode.com/problems/clear-digits/solutions/5941907/](https://leetcode.com/problems/clear-digits/solutions/5941907/)

---

# Intuition

We will walk throught the input string an each time we face a digit, we will walk back and remove the first occurrence of a valid letter.

After the removal we continue walking through the input string.


# Approach

We will split the input string into an array where each position is occupied by a single character.

We then iterate through the array and check whether we face a digit or an empty string (more on the empty string later).
We then move backwards and remove the first occurrence of a valid letter and replace it with an empty string: That is also the reason why we need to check not only for digits but also whether we are facing an empty string

Also, we replace the occurrence of the digit.

At the end, we can simply join the array into a string, all the occurrences of the empty string (which represent a removal) will be automatically discarded in the final string.


# Complexity
- Time complexity: $$O(n^2)$$
  - We walk through the entire string and need to walk finding the next occurrence of the matching letter 

- Space complexity: $$O(n)$$
  - We use `n` extra space when we split the string into an array

# Code
```typescript []
function clearDigits(str: string): string {

  let s = str.split('');

  const check = (d: string): boolean => {
    return d === '' || (d >= '0' && d <= '9');
  }

  for (let i = 0; i < s.length; i++) {
    if (check(s[i])) {
      let k = i - 1;
      while (k >= 0 && check(s[k])) {
        k--;
      }
      s[k] = '';
      s[i] = '';
    }
  }

  const result = s.join('');
    
  return result;
};
```
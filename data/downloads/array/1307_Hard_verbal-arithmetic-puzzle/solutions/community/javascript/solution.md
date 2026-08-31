# JavaScript Backtrack+Pruning w/ explanation

**Author:** stevenkinouye
**Votes:** 6
**Link:** [https://leetcode.com/problems/verbal-arithmetic-puzzle/solutions/464165/](https://leetcode.com/problems/verbal-arithmetic-puzzle/solutions/464165/)

---

Would love any comments, votes, or criticism.  Looking to help and learn

# Step 1: Simplifying the formula
The basic idea is that we basically want to create a table with the charater as a key and a value of the weight of the character using common arithmetic.
### First Move all the variables (words) to one side
```
'SIX' + 'SEVEN' + 'SEVEN' = 'TWENTY'

'SIX' + 'SEVEN' + 'SEVEN' - 'TWENTY' = 0
```
### Now we can break apart each variable
```
'SIX' = ('S' * (10 ^ 2)) + ('I' * (10 ^ 1)) + ('X' * (10 ^ 0))
'SEVEN' = ('S' * (10 ^ 4)) + ('E' * (10 ^ 3)) + ('V' * (10 ^ 2)) + ('E' * (10 ^ 1)) + ('N' * (10 ^ 0))
'SEVEN' = ('S' * (10 ^ 4)) + ('E' * (10 ^ 3)) + ('V' * (10 ^ 2)) + ('E' * (10 ^ 1)) + ('N' * (10 ^ 0))
'TWENTY' = ('T' * (10 ^ 5)) + ('W' * (10 ^ 4)) + ('E' * (10 ^ 3)) + ('N' * (10 ^ 2)) + ('T' * (10 ^ 1)) + ('Y' * (10 ^ 0))
```

### Now we plug in the values into the above equation
```
('S' * (10 ^ 2)) + ('I' * (10 ^ 1)) + ('X' * (10 ^ 0))
+ ('S' * (10 ^ 4)) + ('E' * (10 ^ 3)) + ('V' * (10 ^ 2)) + ('E' * (10 ^ 1)) + ('N' * (10 ^ 0))
+ ('S' * (10 ^ 4)) + ('E' * (10 ^ 3)) + ('V' * (10 ^ 2)) + ('E' * (10 ^ 1)) + ('N' * (10 ^ 0))
- ('T' * (10 ^ 5)) + ('W' * (10 ^ 4)) + ('E' * (10 ^ 3)) + ('N' * (10 ^ 2)) + ('T' * (10 ^ 1)) + ('Y' * (10 ^ 0))
= 0
```
### Now we group all the multiples for each character
*This is a little difficult to type out so just going to use the example
```
(('S' * (10 ^ 2)) + ('S' * (10 ^ 4) + ('S' * (10 ^ 4)) + (('I' * (10 ^ 1))) +
(('X' * (10 ^ 0)) + (('V' * (10 ^ 2) + ('V' * (10 ^ 2))) + 
(('N' * (10 ^ 0) + ('N' * (10 ^ 0) + -('N' * (10 ^ 2)) +
(-('T' * (10 ^ 5)) +  -('T' * (10 ^ 1))) + -('W' * (10 ^ 4) + -('Y' * (10 ^ 0)
= 0

turns to

('S' * (10 ^ 2 + 10 ^ 4 + 10 ^ 4 ) + ('I' * (10 ^ 1)) + ('X' * (10 ^ 0) + ('V' * (10 ^ 2 + 10 ^ 2) +
('N' * (10 ^ 0 + 10 ^ 0 + -10 ^ 2)) + ('T' * (-10 ^ 5 + -10 ^ 1)) + ('W' * (-10 ^ 4)) + ('Y' * (-10 ^ 0)) 
= 0

turns to

('S' * 20100) + ('I' * 10) + ('X' * 1) + ('V' * 200) + ('N' * -98) + ('T' * -100010) + ('W' * -10000) + ('Y' * -1) = 0
```

# Step 2: Map the weights
You'll see this in the code
```
const map = {
  'S': 20100,
  'I': 10,
  'X': 1,
  'V': 200,
  'N': -98,
  'T': 100010,
  'W': -10000,
  'Y': -1,
}
```

# Step 3: Group the positives and negatives
Because we are aiming for a total of `0` we group each of the mapped values like so:
```
const positives = [['S', 20100], ['I', 10], ['X', 1], ['V', 200], ['T', 100010]];
const negatives = [['N', -98], ['W', -10000], ['Y', -1]];
```
TLDR: This way we will be able to instantly return if we have no values in `positives` or `negatives`

If the total that we have is positive and we only have positive values (multiples) left we will never be able to reach `0`
If the total that we have is negative and we only have negative values (multiples) left we will never be able to reach `0`

# Step 4: Backtrack
We use backtracking while trying all the different possibilities while making sure that we don't assign `0` as any of the first characters and returning when the above condition is met.

```javascript
/**
 * @param {string[]} words
 * @param {string} result
 * @return {boolean}
 */
var isSolvable = function(words, result) {
  // set to hold all the first characters
  const firstChars = new Set();
  
  // map for steps 1 & 2
  // this will hold the key as the character and multiple as the value
  let map = {};
  for (let i = 0; i < result.length; i++) {
      const char = result[i];
      if (!i) firstChars.add(char);
      if (!map.hasOwnProperty(char)) map[char] = 0;
      map[char] -= 10 ** (result.length - i - 1);
    }
    for (let j = 0; j < words.length; j++) {
      const word = words[j];
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!i) firstChars.add(char);
        if (!map.hasOwnProperty(char)) map[char] = 0;
        map[char] += 10 ** (word.length - i - 1);
      }
  }
  
  // Step 3: we group the positive and negative values
  const positives = [];
  const negatives = [];
  Object.entries(map).forEach((entry) => {
    if (entry[1] < 0) negatives.push(entry);
    else positives.push(entry);
  })

  // Step 4: backtrack
  const numsUsed = new Set();
  const backtrack = (val = 0) => {
    // if we have used all the characters and the value is 0 the input is solvable
    if (!positives.length && !negatives.length) return val === 0;
	
	// get the store that we are going to examine depending on the value
    let store = val > 0 || (val === 0 && negatives.length) ? negatives : positives;
    if (store.length === 0) return false;
    const entry = store.pop();
    const [char, multiple] = entry;
	
	// try every possible value watching out for the edge case that it was a first character
    for (let i = firstChars.has(char) ? 1 : 0; i < 10; i++) {
      if (numsUsed.has(i)) continue;
      numsUsed.add(i);
      if (backtrack(i * multiple + val)) return true;
      numsUsed.delete(i);
    }
    store.push(entry);
    return false;
  }
  return backtrack();
};
```
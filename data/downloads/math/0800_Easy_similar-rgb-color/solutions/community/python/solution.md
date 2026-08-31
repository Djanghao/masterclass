# Python Solution with Explanation, O(1) Time O(1) space

**Author:** geegeenoree
**Votes:** 7
**Link:** [https://leetcode.com/problems/similar-rgb-color/solutions/2269625/](https://leetcode.com/problems/similar-rgb-color/solutions/2269625/)

---

**Intuition**

The problem statement is written in a very confusing way which makes this problem look more difficult than it actually is. The actual question in the problem is very simple. There are 3 important pieces to point out:

1) The problem is operating on pairs of hex characters within the overall hex color string, NOT the whole string at once. For example, given #ABCDEF, the problem does not operate on #ABCDEF in its totality, but rather on "AB", then "CD", then "EF". You can see this in the formula given for similarity. This means that we can take each pair of hex characters indepedently from all other pairs. 

2) What does it mean - quantifiably - for a color to be similar to another color? Lets say I have a color #ABCDEF . The most similar color, theoretically, is the same color right? #ABCDEF is most similar to itself, #ABCDEF. Looking at the math function for this problem, this would mean that the formula given would yield a similarity score of 0. **So, the color that yields a similarity score closest to 0 is most similar.** This is why I think the problem is not written well, it kept saying "highest" score when its really "score closest to 0". You can measure how far away any number is from 0 using absolute value - `abs(a - b)` in python. 

3) The answer must be representable in shorthand, of the form #XYZ. What does this mean? Looking at the examples, a hex color string can be represented as #XYZ when it is of the form #XXYYZZ. This just simply means that there are only 3 distinct characters in the original string and they are each repeated once immediately after. In other words #aa11bb can be represented as #a1b which is of the form #XYZ (X = "a", Y = "1", Z = "b"). Capitalization doesn't matter here. This helps us because this means the problem space of possible answers is finite and limited.

How do we tie all of the above points together to form the algorithm for the problem?

We must operate on each pair of hex characters in the original string. For each pair of hex characters, we want to find the hex pair that is numerically closest to it - numerically closest means we want to minimize `abs(int(color[i:i+2], 16) - int(possibleHexPairInAnswer, 16))` for each pair in `color`. Finally, we don't need to test every possible XY pair that can be formed from hex characters (there would be 16 x 16 = 256 permutations of this). Rather, we can just focus on the pairs that have the form XX. So this would be `"00", "11", "22", ... "99", "aa" "bb" .. "ee", "ff"`. This means we don't even need to implement the original formula for the problem! If we find the closest hex pair for each hex pair in the original string, it would logically mean that we have found the closest overall result, based on the formula given!

**Code:**

```
class Solution:
    def similarRGB(self, color: str) -> str:
        # the one with the smallest absolute value score is the most similar
        # the answer must be represented as some shorthand XYZ, which only happens if the result is of the form XXYYZZ.
        # Thus, we want to find, for each pair of 2 elements in the color input, a pair of the form XX that is closest to it.
        symbols = []
        symbolHexVals = []
        for i in range(10):
            symbols.append(str(i)+str(i))
            symbolHexVals.append(int(symbols[i], 16))
        
        for i, c in enumerate("abcdef"):
            symbols.append(c+c)
            symbolHexVals.append(int(c+c, 16))
                
        result = ['#']
        i = 1
        while i < len(color):
            hexval = int(color[i:i+2], 16)
            print(hexval)
            minSymbol = None
            minVal = float('inf')
            for j, symbolHexVal in enumerate(symbolHexVals):
                diff = abs(hexval - symbolHexVal)
                if diff < minVal:
                    minVal = diff
                    minSymbol = symbols[j]
            result.append(minSymbol)
            i += 2
        return ''.join(result)
```

**Complexity**

Technically, its O(1) time and O(1) space, because the input size is finite and always the same (6 hex characters + 1 "#" character) and we perform the same number of operations and allocate the same amount of space per input, so neither the runtime nor the space utilized grows with input. It is constant.
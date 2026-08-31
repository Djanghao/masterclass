# 🍉✅Complete Easy Explanation🙌 || Java,C++, Python, Javascript, C#, Typescript, PHP🔥

**Author:** dharmikgohil
**Votes:** 3
**Link:** [https://leetcode.com/problems/bag-of-tokens/solutions/4822876/](https://leetcode.com/problems/bag-of-tokens/solutions/4822876/)

---


\u200E 
> "Code is like humor. When you have to explain it, it\u2019s bad." - Cory House
\u200E 
# Intuition
The intuition behind this solution is to iterate through the sorted array of tokens and use a two-pointer approach to maximize the score. 

# Approach
1. Sort the array of tokens in ascending order to ensure that we always use the smallest token first.
2. Initialize two pointers, `low` and `high`, to the start and end of the array respectively.
3. Iterate through the array while `low` is less than or equal to `high`.
4. If the current token can be used with the available power (`power >= tokens[low]`), use it, decrease the power, and increment the score.
5. If we have enough score to exchange for power (`score > 0`) and there are more tokens available (`low != high`), exchange the highest value token for power, decrease the score, and decrement `high`.
6. If none of the above conditions are met, return the current score.
7. Return the final score.

# Complexity
- Time complexity: `O(n log n)` due to sorting the tokens array.
- Space complexity: `O(1)` as no extra space is used apart from a few variables.

# Codes
```Java []
class Solution {
    public int bagOfTokensScore(int[] tokens, int power) {
        Arrays.sort(tokens);
        int low = 0;
        int high = tokens.length - 1;
        int score = 0;

        while (low <= high) {
            if (power >= tokens[low]) {
                power -= tokens[low];
                score += 1;
                low++;
            } else if (score > 0 && low != high) {
                power += tokens[high];
                score -= 1;
                high--;
            } else {
                return score;
            }
        }
        return score;
    }
}

```
```C++ []
class Solution {
public:
    int bagOfTokensScore(std::vector<int>& tokens, int power) {
        std::sort(tokens.begin(), tokens.end());
        int low = 0;
        int high = tokens.size() - 1;
        int score = 0;

        while (low <= high) {
            if (power >= tokens[low]) {
                power -= tokens[low];
                score += 1;
                low++;
            } else if (score > 0 && low != high) {
                power += tokens[high];
                score -= 1;
                high--;
            } else {
                return score;
            }
        }
        return score;
    }
};

```
```Python []
class Solution:
    def bagOfTokensScore(self, tokens: List[int], power: int) -> int:
        tokens.sort()
        low = 0
        high = len(tokens) - 1
        score = 0

        while low <= high:
            if power >= tokens[low]:
                power -= tokens[low]
                score += 1
                low += 1
            elif score > 0 and low != high:
                power += tokens[high]
                score -= 1
                high -= 1
            else:
                return score

        return score

```
```Javascript []
var bagOfTokensScore = function(tokens, power) {
    tokens.sort((a, b) => a - b);
    let low = 0;
    let high = tokens.length - 1;
    let score = 0;

    while (low <= high) {
        if (power >= tokens[low]) {
            power -= tokens[low];
            score += 1;
            low++;
        } else if (score > 0 && low !== high) {
            power += tokens[high];
            score -= 1;
            high--;
        } else {
            return score;
        }
    }
    return score;
};

```
```PHP []
class Solution {
    function bagOfTokensScore($tokens, $power) {
        sort($tokens);
        $low = 0;
        $high = count($tokens) - 1;
        $score = 0;

        while ($low <= $high) {
            if ($power >= $tokens[$low]) {
                $power -= $tokens[$low];
                $score += 1;
                $low++;
            } elseif ($score > 0 && $low != $high) {
                $power += $tokens[$high];
                $score -= 1;
                $high--;
            } else {
                return $score;
            }
        }
        return $score;
    }
}

```

```C# []
public class Solution {
    public int BagOfTokensScore(int[] tokens, int power) {
        Array.Sort(tokens);
        int low = 0;
        int high = tokens.Length - 1;
        int score = 0;

        while (low <= high) {
            if (power >= tokens[low]) {
                power -= tokens[low];
                score += 1;
                low++;
            } else if (score > 0 && low != high) {
                power += tokens[high];
                score -= 1;
                high--;
            } else {
                return score;
            }
        }
        return score;
    }
}

```
```Typescript []
function bagOfTokensScore(tokens: number[], power: number): number {
    tokens.sort((a, b) => a - b);
    let low = 0;
    let high = tokens.length - 1;
    let score = 0;

    while (low <= high) {
        if (power >= tokens[low]) {
            power -= tokens[low];
            score += 1;
            low++;
        } else if (score > 0 && low !== high) {
            power += tokens[high];
            score -= 1;
            high--;
        } else {
            return score;
        }
    }
    return score;
}

```


# Code With Complete Explaintion\uD83D\uDD25


```Java []
class Solution {
    public int bagOfTokensScore(int[] tokens, int power) {
        
        //sort array to find highest token value at last
        Arrays.sort(tokens);
        int low =0;
        int high = tokens.length-1;
        int score= 0;

        
        while(low<=high){
            if(power>=tokens[low]){

                //power decrese by tokens value
                power-=tokens[low];
                score+=1;

                //increse low value 
                low++;
                
            }
            
            //when we need to increse our power we always requires score>0

            else if(score>0 &&low!=high){  //here low!=high is used when there is only one largest token left in tokens, please see in testcase 2
               
                //takes highest value from tokens and increse the power
                power+=tokens[high];
                
                //when power increse decrese the power
                score-=1;

                //also decreste the high value index ti terminate while loop
                high--;


            }else{

                //this return when at there is only one highest value remains in tokens,
                // because if we increse the power with this highest last token value it decrese out score
                //see in test case 2
                return score;
            }
        }
        return score;
        
    }
}
```
```C++ []
#include <vector>
#include <algorithm>

class Solution {
public:
    int bagOfTokensScore(std::vector<int>& tokens, int power) {
        // Sort the array to find the highest token value at last
        std::sort(tokens.begin(), tokens.end());
        int low = 0;
        int high = tokens.size() - 1;
        int score = 0;

        while (low <= high) {
            if (power >= tokens[low]) {
                // Decrease power by tokens value
                power -= tokens[low];
                // Increase score
                score += 1;
                // Increase low value 
                low++;
            } else if (score > 0 && low != high) {
                // Takes highest value from tokens and increase the power
                power += tokens[high];
                // Decrease the power when it increases
                score -= 1;
                // Decrease the high value index to terminate while loop
                high--;
            } else {
                // This returns when there is only one highest value remains in tokens,
                // because if we increase the power with this highest last token value it decreases our score
                // See in test case 2
                return score;
            }
        }
        return score;
    }
};

```
```Python []
class Solution:
    def bagOfTokensScore(self, tokens: List[int], power: int) -> int:
        # Sort array to find highest token value at last
        tokens.sort()
        low = 0
        high = len(tokens) - 1
        score = 0

        while low <= high:
            if power >= tokens[low]:
                # Power decreases by tokens value
                power -= tokens[low]
                # Increase low value
                low += 1
                # Increase score
                score += 1
            elif score > 0 and low != high:
                # Takes highest value from tokens and increase the power
                power += tokens[high]
                # Decrease the power when it increases
                score -= 1
                # Decrease high value index to terminate while loop
                high -= 1
            else:
                # This returns when there is only one highest value remains in tokens,
                # because if we increase the power with this highest last token value it decreases our score
                # See in test case 2
                return score

        return score

```
```Javascript []
var bagOfTokensScore = function(tokens, power) {
    // Sort array to find highest token value at last
    tokens.sort((a, b) => a - b);
    let low = 0;
    let high = tokens.length - 1;
    let score = 0;

    while (low <= high) {
        if (power >= tokens[low]) {
            // Power decreases by tokens value
            power -= tokens[low];
            // Increase low value
            low++;
            // Increase score
            score += 1;
        } else if (score > 0 && low !== high) {
            // Takes highest value from tokens and increase the power
            power += tokens[high];
            // Decrease the power when it increases
            score -= 1;
            // Decrease high value index to terminate while loop
            high--;
        } else {
            // This returns when there is only one highest value remains in tokens,
            // because if we increase the power with this highest last token value it decreases our score
            // See in test case 2
            return score;
        }
    }
    return score;
};

```
```PHP []
class Solution {
    function bagOfTokensScore($tokens, $power) {
        // Sort array to find highest token value at last
        sort($tokens);
        $low = 0;
        $high = count($tokens) - 1;
        $score = 0;

        while ($low <= $high) {
            if ($power >= $tokens[$low]) {
                // Power decreases by tokens value
                $power -= $tokens[$low];
                // Increase low value
                $low++;
                // Increase score
                $score += 1;
            } elseif ($score > 0 && $low != $high) {
                // Takes highest value from tokens and increase the power
                $power += $tokens[$high];
                // Decrease the power when it increases
                $score -= 1;
                // Decrease high value index to terminate while loop
                $high--;
            } else {
                // This returns when there is only one highest value remains in tokens,
                // because if we increase the power with this highest last token value it decreases our score
                // See in test case 2
                return $score;
            }
        }
        return $score;
    }
}

```
```C# []
using System;

public class Solution {
    public int BagOfTokensScore(int[] tokens, int power) {
        // Sort array to find highest token value at last
        Array.Sort(tokens);
        int low = 0;
        int high = tokens.Length - 1;
        int score = 0;

        while (low <= high) {
            if (power >= tokens[low]) {
                // Power decreases by tokens value
                power -= tokens[low];
                // Increase low value
                low++;
                // Increase score
                score += 1;
            } else if (score > 0 && low != high) {
                // Takes highest value from tokens and increase the power
                power += tokens[high];
                // Decrease the power when it increases
                score -= 1;
                // Decrease high value index to terminate while loop
                high--;
            } else {
                // This returns when there is only one highest value remains in tokens,
                // because if we increase the power with this highest last token value it decreases our score
                // See in test case 2
                return score;
            }
        }
        return score;
    }
}

```
```Typescript []
function bagOfTokensScore(tokens: number[], power: number): number {
    // Sort array to find highest token value at last
    tokens.sort((a, b) => a - b);
    let low = 0;
    let high = tokens.length - 1;
    let score = 0;

    while (low <= high) {
        if (power >= tokens[low]) {
            // Power decreases by tokens value
            power -= tokens[low];
            // Increase low value
            low++;
            // Increase score
            score += 1;
        } else if (score > 0 && low !== high) {
            // Takes highest value from tokens and increase the power
            power += tokens[high];
            // Decrease the power when it increases
            score -= 1;
            // Decrease high value index to terminate while loop
            high--;
        } else {
            // This returns when there is only one highest value remains in tokens,
            // because if we increase the power with this highest last token value it decreases our score
            // See in test case 2
            return score;
        }
    }
    return score;
}

```
![HOPE YOU GOT IT (1).png](./images/0.png)

# Please\uD83E\uDD7A\uD83D\uDC4D

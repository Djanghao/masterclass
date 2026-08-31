# T(n) = O(n); S(n) = O(1); lots of code comments with explanations

**Author:** sharrief
**Votes:** 0
**Link:** [https://leetcode.com/problems/decode-ways-ii/solutions/4917838/](https://leetcode.com/problems/decode-ways-ii/solutions/4917838/)

---

# Intuition
Start small by focusing on substring/subarray and build on the previous answer by multiplying it by the number of ways each new digit can be interpreted

# Approach
Loop over the string from right to left

# Complexity
- Time complexity:
O(n) - one loop over the input string

- Space complexity:
O(1) - used only a tuple for memoization

# Code
```
function numDecodings(s: string): number {
    /*
        Coders note: It took me three hours to come up with this solution from scratch. 

        Use a "decrease and conquer" strategy.
        Start with an substring of size 1, using just the last digit/character in the string.
        Calculate the number of ways it can be interpreted:
        "*" can be interpreted 9 ways
        "0" cannot be interpreted by itself, so 0 ways
        "1","2"...."9" can be interpreted 1 way

        Then, for every substring of size 2 or more, 
        find the number of ways the digit can be interpreted ALONE
        and the number of ways it can be interpreted COMBINED (if possible)
        
        Ex: orig input "1122", and we are currently looking at the final iteration where i === 0, since we iterating start from the right end
            // ALONE
            digit = input[0] = "1" // this can be interpreted only 1 way
            substringToTheRight = "122" // interpreted 3 ways [1,2,2] [1,22] [12,2]
            NumberOfWaysToInterpretAlone = interpret digit 1 way x interpret substring 3 ways = 3
            // COMBINED
            digitToTheRight = "1""
            combinedNumber = "11" // this can be interpreted only 1 way
            remainingSubstring = "22" // interpreted 2 ways [2,2] [22]
            NumberOfWaysToInterpretCombined = interpret combination 1 way x interpret substring 2 ways = 2
            final answer for iteration i === 0 (also final for this entire subarray) = 3 ways alone + 2 ways combined = 5
            
        Ex: orig input "*122", same as above on i === 0
            // ALONE
            digit = input[0] = "*" // this can be interpreted 9 ways!
            substringToTheRight = "122" // interpreted 3 ways [1,2,2] [1,22] [12,2]
            NumberOfWaysToInterpretAlone = interpret digit 9 ways x interpret substring 3 ways = 27
            // COMBINED
            digitToTheRight = "1"
            combinedNumber = "*1" // this can be interpreted 2 ways [11] [21]
            remainingSubstring = "22" // interpreted 2 ways [2,2] [22]
            NumberOfWaysToInterpretCombined = interpret combination 2 way x interpret substring 2 ways = 4
            final answer for iteration i === 0 (also final for this entire subarray) = 27 ways alone + 4 ways combined = 31

        Ex: orig input "1*22", same as above on i === 0
            // ALONE
            digit = input[0] = "1" // this can be interpreted 1 way
            substringToTheRight = "*22" // this would have been calculated in the previous iteration as 20 ways. Some examples include [1,2,2] [8,2,2] [22,2] [12,2] [5,22] ...
            NumberOfWaysToInterpretAlone = interpret digit 1 way x interpret substring 20 ways = 20
            // COMBINED
            digitToTheRight = "*"
            combinedNumber = "1*" // this can be interpreted 9 ways [11] ... [19]
            remainingSubstring = "22" // interpreted 2 ways [2,2] [22]
            NumberOfWaysToInterpretCombined = interpret combination 9 ways x interpret substring 2 ways = 18
            final answer for iteration i === 0 (also final for this entire subarray) = 20 ways alone + 18 ways combined = 38
    */

    // Its imporant to keep track of the answer/number of ways for the last two interations
    // memo[0] === # ways to interpret s.substring(i-2)
    // memo[1] === # ways to interpret s.substring(i-1)
    let memo = [1, 1]
    let aloneWays = 0
    // start with smallest rightmost substring
    for (let i = s.length - 1; i >= 0; i--) {
        const c = s[i] // the current digit or character
        const r = s[i+1] // digit to the right
        /*
            TRICKY! if the digit to the right was combined with 0, to become "10" for example, 
            then the current digit cannot combine with it else you might have [21,0] but 0 is an invalid char code.
            aloneWays was set in previous iteration and tells us whether digit to the right could be interpreted alone.
            if it could not, then we cannot combine with it because it's alreay combined, 
            unless it is 0, then we must combine with it (and it is not alreay combined)
        */
        const rCanBeCombined = !!aloneWays || r === '0' 
        aloneWays = 0 // number of ways to interpret the subarray when c is considered a single digit
        let combinedWays = 0 // number of ways to interpret when c is combined with digit to its right
        if (c === '0') {
            // 0 cannot be considered alone or combined with the number to its right
            [memo[0], memo[1]] = [ memo[1], 0]
            continue
        }

        if (r !== '0') {
        // if digit to the right is not 0, then current digit can be interpreted alone
            if (c === '*') {
                /*
                    there are 9 ways to interpret the char '*' 
                    if its not followed by 0
                    so multiply 9 by the number of ways 
                    to interpret the substring to its right 
                */
                aloneWays = 9 * memo[1] 
            } else {
                /*
                    theres only one way to interpret a digit in [1-9]
                    if its not followed by 0
                    so the number of ways the substring can be interpreted
                    when the current digit is considered a stand alone digit 
                    doesn't change the answer.
                */
                aloneWays = memo[1]
            }
        }

        /*
            if the current digit/char is not the rightmost
            combine it with the digit to its right
            then calculate the number of ways it can be interpreted
        */
        if (i < s.length - 1 && rCanBeCombined) {
            /*
                if c is either "1" or "*" then interpret it as a 1 
                and combine it with the digit to its right.
                if r is "*" then there are 9 ways it can be interpreted [1-9], 
                else just one way, either way the combined "cr" is in the range [11-19].
                so we multiply the number of ways we can interpret this combination (either 9 ways or 1 way) 
                with the number of ways we can interpret the subarray that doesn't contain r.                
            */
            if (canBe1(c)) combinedWays += (r === '*' ? 9 : 1) * memo[0]
            /*
                same as above execept c is interpreted as 2, 
                meaning r must be in the range [1-6]
                so combined they are in the range [21-26].
            */
            if (canBe2(c) && canCombineWith2(r)) combinedWays += (r === '*' ? 6 : 1) * memo[0]
        }
        // move the previous answer to the front of the memo and add current answer to the end
        [memo[0], memo[1]] = [ memo[1], (aloneWays + combinedWays) % 1000000007] // TRICKY! dealing with large integers means we need to mod this chit
    }
    return memo[1];
};

function canCombineWith2(c) {
    if (c === '*') return true
    return 0 <= +c && +c <= 6
}

function canBe1(c) {
    return c === '1' || c === '*'
}

function canBe2(c) {
    return c === '2' || c === '*'
}
```
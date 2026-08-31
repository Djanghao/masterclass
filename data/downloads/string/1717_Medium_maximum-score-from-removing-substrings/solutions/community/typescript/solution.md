# Beats 100% in time

**Author:** Adarsh_Kuch
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-score-from-removing-substrings/solutions/5465352/](https://leetcode.com/problems/maximum-score-from-removing-substrings/solutions/5465352/)

---


# Approach
<!-- Describe your approach to solving the problem. -->
1. Initialization:

- We initialize the score variable to keep track of the total score.
We determine which substring ("ab" or "ba") should be removed first based on which one gives more points (x or y).
2. Removing Substrings:

- We define a helper function removeSubstring that takes a string and a substring to remove all instances of that substring. It returns the new string and the count of removals.
- We first remove all instances of the substring that gives the higher score.
- Then, we remove all instances of the substring that gives the lower score.
3. Calculation:

- We multiply the count of each removed substring by its respective score and add it to the total score.
4. Output:

- Finally, we return the total score.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$ 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function maximumGain(s: string, x: number, y: number): number {
     let score = 0;
    let first, second, firstScore, secondScore;

    if (x > y) {
        first = "ab";
        second = "ba";
        firstScore = x;
        secondScore = y;
    } else {
        first = "ba";
        second = "ab";
        firstScore = y;
        secondScore = x;
    }

    function removeSubstrings(str: string, sub: string, points: number): { newStr: string, gainedPoints: number } {
        let stack: string[] = [];
        let gainedPoints = 0;

        for (const char of str) {
            if (stack.length > 0 && stack[stack.length - 1] === sub[0] && char === sub[1]) {
                stack.pop();
                gainedPoints += points;
            } else {
                stack.push(char);
            }
        }

        return { newStr: stack.join(''), gainedPoints };
    }

    let result = removeSubstrings(s, first, firstScore);
    score += result.gainedPoints;

    result = removeSubstrings(result.newStr, second, secondScore);
    score += result.gainedPoints;

    return score;
};


```
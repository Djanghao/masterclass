# My mental gymnastics on finding a pattern for over 20 length efficient pattern

**Author:** Giyumtell
**Votes:** 2
**Link:** [https://leetcode.com/problems/strong-password-checker/solutions/3509101/](https://leetcode.com/problems/strong-password-checker/solutions/3509101/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
my initial approach was to solve it for 3 cases, less than 6, 6 to 20, and over 6
# Approach
<!-- Describe your approach to solving the problem. -->
The most important thing is if we are on first case we can use insert moves to fix both repeated patterns and if we need upper,lower or number we can also fix that by the same step.
for second case(6-20) preffered step is replacing so we can both fix repeating patterns and also basic requirements without the risk of passing the max length.
but for third case we need to first delete repeating paterns depend on how many we need to delete until we have all or (as much delete as we are allowed) some of them to the length of 3n+2 that means "aaaaa" for example has the length of 5. if we have "aaaaaaaaaaaaaaaaaaa" 19 'a's we need to delete 2 to get to 17 which is 3*5+2, then we use the rest of deletes on any of the fixed patterns 3 delete at a time to maintain the 3n+2 pattern, until we are left with less than 3 repaining deletes, then we just simply delete from where ever we want and fix the rest of repeating patterns with one replace each.
result of replace and delete moves are gonna be the most efficient count of steps.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(nLogn)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function strongPasswordChecker(password: string): number {
if (password.length < 3) { 
    return 6 - password.length; 
} 
let missingFixCount = 0; 
const numberIsMissing = !(new RegExp(/\\d+/).test(password)); 
const lowerCaseIsMissing = !(new RegExp(/([a-z])+/).test(password)); 
const upperCaseIsMissing = !(new RegExp(/([A-Z])+/).test(password)); 
missingFixCount += numberIsMissing ? 1 : 0; 
missingFixCount += lowerCaseIsMissing ? 1 : 0; 
missingFixCount += upperCaseIsMissing ? 1 : 0; 
const repeatingPatterns = password.match(/(.)\\1{2,}/g) ?? []; 
const repeatingPatternLengths = repeatingPatterns.map(item => item.length); 
if (password.length < 7) { 
    let steps = 0; 
    for (let pattern of repeatingPatterns) {
         steps += pattern.length / 3; 
    } 
    steps = Math.max(steps, missingFixCount); 
    let missingCharCount = 6 - password.length; 
    return Math.max(missingCharCount, steps); 
} 
if (password.length <= 20) { 
    let steps = 0;
    for (let pattern of repeatingPatterns) { 
        steps += pattern.length / 3; 
    } return Math.max(steps, missingFixCount); 
} 
let deleteSteps = 0; 
const excessLength = password.length - 20; 
for (let index = 0; index < repeatingPatternLengths.length && deleteSteps < excessLength; index++) { 
    let length = repeatingPatternLengths[index]; 
    let remainder = length % 3; 
    if (remainder === 0) { deleteSteps+=1; 
        repeatingPatternLengths[index] -=1; 
    } 
} for (let index = 0; index < repeatingPatternLengths.length && deleteSteps < excessLength; index++) { 
    let length = repeatingPatternLengths[index]; 
    let remainder = length % 3; 
    if (remainder === 1) { 
        deleteSteps+=2; 
        repeatingPatternLengths[index] -=2; 
    } 
} for (let index = 0; index < repeatingPatternLengths.length; index++) { 
    while (3 <= excessLength - deleteSteps && repeatingPatternLengths[index] > 2){ 
        deleteSteps+=3; repeatingPatternLengths[index] -= 3; 
    } 
} let replaceSteps = 0; 
repeatingPatternLengths.forEach((item)=> replaceSteps += Math.floor(item/3)); 
return Math.max(excessLength, deleteSteps) + Math.max(replaceSteps, missingFixCount);
};
```
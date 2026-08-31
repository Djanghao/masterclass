# Easy to understand Typescript solution

**Author:** ElieAtamech
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-moves-to-make-palindrome/solutions/4570844/](https://leetcode.com/problems/minimum-number-of-moves-to-make-palindrome/solutions/4570844/)

---

# Intuition
Greedy approcah and recursion.

# Approach
Divide the string S to form this structure
: [c1, X, c2] where c1 is the first character of S, c2 the last character of S and X the string in between.

Using greedy approach, make that [c1, X, c2] palindrome by:
- Swapping c1 with a character of X and calculate how many swaps that needs (leftSwapsCost)
- Swapping c2 with a character of X and calculate how many swaps that needs (rightSwapsCost)

Finally, whichever cost is the least we do it. So for ex if leftSwapsCost <= rightSwapsCost, we swap the first item of [c1, X, c2] with the character of index = rightSwapsCost we previously calculated.

And by recursively calling that function we repeat that process until X.length <= 1.

# Code
```
function minMovesToMakePalindrome(s: string) {
    if (s.length <= 1) return 0;
    if (s[0] === s[s.length - 1]) return minMovesToMakePalindrome(s.slice(1, s.length - 1))
    let leftSwapsCost = s.length;
    let rightSwapsCost = s.length;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[0]) {
            // we should swap with the last element
            rightSwapsCost = Math.min(rightSwapsCost, s.length - 1 - i)
        } else if (s[i] === s[s.length - 1]) {
            // we should swap with the first element
            leftSwapsCost = Math.min(leftSwapsCost, i)
        }
    }

    if (leftSwapsCost <= rightSwapsCost) {
        const newString = [s[leftSwapsCost], ...s.slice(0, leftSwapsCost), ...s.slice(leftSwapsCost + 1)].join('');
        return leftSwapsCost + minMovesToMakePalindrome(newString.slice(1, s.length - 1))
    } else {
        const newString = [...s.slice(0, s.length - 1 - rightSwapsCost), ...s.slice(s.length - rightSwapsCost), s[s.length - 1 - rightSwapsCost]].join('');
        return rightSwapsCost + minMovesToMakePalindrome(newString.slice(1, s.length - 1))
    }
};
```
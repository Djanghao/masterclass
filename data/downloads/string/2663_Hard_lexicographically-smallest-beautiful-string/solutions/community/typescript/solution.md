# Clean code with a thorough explanation

**Author:** aearlin
**Votes:** 0
**Link:** [https://leetcode.com/problems/lexicographically-smallest-beautiful-string/solutions/4769737/](https://leetcode.com/problems/lexicographically-smallest-beautiful-string/solutions/4769737/)

---

# Intuition
We need to find an index, starting from the end of the string, where we can increment the letter so that a) the letter is within the first k letters of the alphabet and b) it doesn't cause a palindrome. Then we need to fill in the rest of the string with the lowest value letters possible without causing a palindrome. We know, since the given string does not have any localized palindromes, that we only need to worry about the previous two letters when checking for a palindrome.

# Approach
First, for readability, I created three helper functions: ```value()```, which takes a letter and reduces it to a number representing which letter of the alphabet it is, ```letter()```, which takes that value and turns it back into a letter, and ```isPalindrome()```, which checks a letter against the previous two letters in the string to see if it causes a palindrome. I split ```s``` into an array for the result, so that I can modify the letters in place.

Going from the end of the string, I try to change the letter by incrementing its value one at a time until I find a letter that has a value less than ```k``` and that doesn't cause a palindrome. If I can't find such a letter at that position, I go to the previous position. If I find a position where I can increase the letter value, I change it in ```result```, I set ```idx``` to keep track of which letter I changed, and I break out of the loop. If I return out of the loop before I have set ```idx```, I know that the string cannot be changed, so I return an empty string.

Now I have to make the end of the string as lexigraphically small as possible. I only need the letters 'a', 'b', and 'c' to do that and not cause a palindrome (because we only have to test the previous two characters, we only need three to fill the end of the string). For each position after ```idx```, I find the smallest letter that doesn't cause a palindrome, then I go on to the next, until I have filled the rest of the string.

After that, I join the ```result``` array to return the string.

# Complexity
- Time complexity:
Worst case scenario, $$O(n*k)$$. Most cases will be around $$O(k)$$, since we don't have to change more than a few letters at the end of the string.

- Space complexity:
$$O(n)$$, for the ```result``` array.

# Code
```
function smallestBeautifulString(s: string, k: number): string {
    let result: string[] = s.split('');
    let idx: number = -1;

    const value = (letter: string): number => {
        return letter.charCodeAt(0) - 'a'.charCodeAt(0);
    }

    const letter = (value: number): string => {
        return String.fromCharCode(value + 'a'.charCodeAt(0));
    }

    const isPalindrome = (i: number, val: number): boolean => {
        if (i - 1 >= 0 && value(result[i - 1]) === val) return true;
        if (i - 2 >= 0 && value(result[i - 2]) === val) return true;
        return false;
    }

    for (let i = result.length - 1; i >= 0 && idx < 0; i--) {
        for (let testVal = value(result[i]) + 1; testVal < k && idx < 0; testVal++) {
            if (isPalindrome(i, testVal)) continue;
            result[i] = letter(testVal);
            idx = i;
        }
    }

    if (idx < 0 ) return '';

    for (let i = idx + 1; i < s.length; i++) {
        for (let j = 0; j < 3; j++) {
            if (isPalindrome(i, j)) continue;
            result[i] = letter(j);
            break;
        }
    }

    return result.join('');
};
```
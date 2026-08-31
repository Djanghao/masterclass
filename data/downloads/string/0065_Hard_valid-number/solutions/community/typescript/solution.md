# One-line regex solution

**Author:** AlfredoHeights
**Votes:** 3
**Link:** [https://leetcode.com/problems/valid-number/solutions/2912751/](https://leetcode.com/problems/valid-number/solutions/2912751/)

---

I wrote this in Typescript but it could easily be converted to any other language because it's just a regex.

# Intuition

This is a textbook use case for regular expressions. This is basically how computer science courses teach regular expressions, I remember doing something very close to this for college homework.

# Approach

I wrote some unit tests using the examples they provided, and ran them through until I could handle each individual case. I did this in my own code editor because there were more than 8 test cases I wanted to try, and Leetcode limits the test cases to 8. Submission passed on the first try.

I used a regex cheat sheet I found online, because it's unreasonable to expect anybody to remember how to write regexes.

# Code
```
function isNumber(s: string): boolean {
    return /^[+-]?((\\d+\\.\\d*)|(\\d*\\.?\\d+))([Ee][+-]?\\d+)?$/.test(s);
};
```
Now I'll break down what each part of the regex is, because regex is evil magic and inherently unreadable. I'm using normal groups, rather than non-capturing ones, because it's shorter, and because if we were to use this in real life, we'd probably want to capture that info anyway.

`^` is just the beginning of the string.

`[+-]?` is to allow a + or - sign at the beginning and only at the beginning. `[]` means anything inside this block.

`(\\d+\\.\\d*)` handles when there are one or more (`+`) digits before the period, and zero or more after (`*`).

`(\\d*\\.?\\d+)`, in contrast, handles the opposite. It also makes the . optional so we can handle integers.

`([Ee][+-]?\\d+)?` optionally check for scientific notation. E can be in upper or lowercase. `[+-]` is optional as before. `\\d+` ensures that if there is an E, it has numbers afterward. It also ensures that we don't use decimal numbers in the exponent here.

`$` is the end of the string.

Let me know if my explanation doesn't make sense.
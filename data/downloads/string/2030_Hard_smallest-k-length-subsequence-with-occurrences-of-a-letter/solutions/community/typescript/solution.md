# TypeScript: stack, explained. Faster than 100%

**Author:** mxdanni
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-k-length-subsequence-with-occurrences-of-a-letter/solutions/1903567/](https://leetcode.com/problems/smallest-k-length-subsequence-with-occurrences-of-a-letter/solutions/1903567/)

---

**Runtime**: 208 ms, faster than 100.00% of TypeScript
**Memory** Usage: 61.3 MB, less than 100.00% of TypeScript

**Phase 1.**

Iterate the given string first. Put values on the stack, pop if conditions are met. Here we keep track of several values:
1. How many targetted letters (`letter`) the initial string has - aka `letterRemains`,
2. How many targetted letters we have already taken - aka `letterIn`,
3. How many targetted letters are on the stack - aka `letterRemains + letterIn`
4. How many letters we have left on the string.

Now, loop through the given string. Watch out for the following, they **all** gotta be `true` to proceed.

1. Do we have anything on the stack? `stack.length`
2. If we were to remove this value from the stack, would we still have enough letters in the given string to meet the `k` (answer length) requirement? `stack.length + s.length - i - 1` Just checking yet, thus, the `-1`, do not remove the value but see if we possibly can.
3. Is the last letter on the stack lexicographically larger than the current one? `stack[stack.length - 1] > curr ` , e.g. _**n** is larger than **f**_
4. If the last value on the stack is not a targetted letter `stack[stack.length - 1] !== letter` **OR** if it **IS** a targetted letter **BUT** we have enough targetted letters left in the string to remove the one on the stack `letterRemains + letterIn - 1 >= repetition`. Here, again, the `-1` - do not remove the letter, just check that we can.

When all this is true - we can safely pop the letter off the stack. Keep in mind to decrease `letterIn` if the letter was a targetted letter.

Keep doing this while all is true.

Finish the current interation by pushing the current letter to the stack, if it's targetted update the `letterIn` and `letterRemains`

Iterate the given string.

**Phase 2**

We might have gotten too many letters on the stack. But if not (`stack.length === k`) quit here and return the joined stack.

We might end up in phase 2 when faced the following example: `aaabbcccccdd` where all letters come in order - it's just too many of them if the answer length should be small.

Thus, loop the stack, which is larger than `k` (target answer length).

- If it's a targetted letter AND we need more of those (mind `repetition`) - keep the letter for the answer and decrease repetition
- If it's not AND we still need any letters (`looseLetters = k - repetition`) - keep the letter for the answer and decrease looseLetters

Return what we got.

**Clean code:** (scroll down for commented examples)

```
function smallestSubsequence(s: string, k: number, letter: string, repetition: number): string {
    let letterRemains = s.split("").filter(item => item === letter).length
    let letterIn = 0
    
    let stack = []
    for (let i = 0; i < s.length; i++) {
        const curr = s.charAt(i)
        while (stack.length 
               && stack[stack.length - 1] > curr 
               && stack.length + s.length - i - 1 >= k
               && (stack[stack.length - 1] !== letter 
                || stack[stack.length - 1] === letter 
                   && letterRemains + letterIn - 1 >= repetition)) {
            if (stack[stack.length - 1] === letter) letterIn--
            stack.pop()    
        }
        
        stack.push(curr)
        if (curr === letter) { 
            letterIn++
            letterRemains--
        }
    }

    if (stack.length === k) return stack.join("")
    
    let looseLetters = k - repetition
    let answer = ''
    
    for (let i = 0; i < stack.length; i++) {
        if (repetition && stack[i] === letter) {
            answer += stack[i]
            repetition--
        }
        else if (looseLetters) {
            answer += stack[i]
            looseLetters--
        }
    }

    return answer
};
```

**Commented examples:**

```
function smallestSubsequence(s: string, k: number, letter: string, repetition: number): string {
    let letterRemains = s.split("").filter(item => item === letter).length
    let letterIn = 0
    
    let stack = []
    for (let i = 0; i < s.length; i++) {
        const curr = s.charAt(i)
        while (stack.length 
               && stack[stack.length - 1] > curr 
			   // with something like  "mmmxmxymmm" 
			   // we would end up with a letter less than the target (8) because "m"s after "xy" pop them off
			   // there's not enough "m"s => keep one other letter, here it's + "x" which we do not pop
               && stack.length + s.length - i - 1 >= k
               && (stack[stack.length - 1] !== letter 
                || stack[stack.length - 1] === letter 
                   && letterRemains + letterIn - 1 >= repetition)) {
            if (stack[stack.length - 1] === letter) letterIn--
            stack.pop()    
        }
        
        stack.push(curr)
        if (curr === letter) { 
            letterIn++
            letterRemains--
        }
    }

    if (stack.length === k) return stack.join("")
    
    let looseLetters = k - repetition
    let answer = ''
    
	// "aaabbbcccddd"
	// k = 3
	// letter = "b"
	// repetition = 2
	// okay by the letter order but not okay by length because we end up with the whole thing
	// if we just slice we loose targetted letters
    for (let i = 0; i < stack.length; i++) {
        if (repetition && stack[i] === letter) {
            answer += stack[i]
            repetition--
        }
        else if (looseLetters) {
            answer += stack[i]
            looseLetters--
        }
    }

    return answer
};
```

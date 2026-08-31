# Easy solution: Beats 97% of runtime

**Author:** elangoram1998
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/solutions/4352151/](https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/solutions/4352151/)

---


# Code
```
function countCharacters(words: string[], chars: string): number {
    return words.reduce((sum, word) => {
        const charsArray = chars.split("");
        let isValid = false;
        for(let i=0; i<word.length; i++) {
            const index = charsArray.indexOf(word.charAt(i));
            if(index !== -1) {
                charsArray.splice(index, 1);
                isValid = true;
            } else {
                isValid = false;
                break;
            }
        }
        sum = isValid ? sum += word.length : sum;
        return sum;
    }, 0);
};
```
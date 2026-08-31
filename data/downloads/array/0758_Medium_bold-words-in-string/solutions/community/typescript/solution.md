# Iterative Solution Typescript

**Author:** bajinatu1234
**Votes:** 0
**Link:** [https://leetcode.com/problems/bold-words-in-string/solutions/5829853/](https://leetcode.com/problems/bold-words-in-string/solutions/5829853/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```typescript []
function boldWords(words: string[], s: string): string {
    const array = new Array(s.length).fill(false);

    for(const word of words) {
        let found = s.indexOf(word);
        while(found !== -1) {
            for(let start = found; start < found + word.length; start++) {
                array[start] = true;
            }
            found = s.indexOf(word,found + 1);
        }
    }

    let result = "";

    const open = "<b>";
    const close = "</b>";

    for(let i = 0; i < array.length; i++) {
        if(array[i] && (i == 0 || !array[i-1])) {
            result += open;
        }
        result += s[i];

        if(array[i] && (i == array.length - 1 || !array[i+1])) {
            result += close;
        }
    }

    return result;
};
```
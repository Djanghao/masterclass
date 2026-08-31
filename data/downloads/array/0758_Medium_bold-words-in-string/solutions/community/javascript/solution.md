# Typescript: straightforward solution (Runtime beats 100%)

**Author:** alexgavrilov
**Votes:** 0
**Link:** [https://leetcode.com/problems/bold-words-in-string/solutions/4214444/](https://leetcode.com/problems/bold-words-in-string/solutions/4214444/)

---

# Complexity
- Time complexity:
O(N*M)

- Space complexity:
O(N)

# Code
```
enum TagsEnum {
    BOLD_OPEN = '<b>',
    BOLD_CLOSE = '</b>'
}

function boldWords(words: string[], s: string): string {
    const n: number = s.length;
    const mask: boolean[] = new Array(n).fill(false);

    for (const word of words) {
        let start: number = s.indexOf(word);
        while (start != -1) {
            for (let i = start; i < start + word.length; i++) {
                mask[i] = true;
            }
            start = s.indexOf(word, start + 1);
        }
    }

    const result: string[] = [];
    let j: number = 0;
    
    while (j < n) {
        if (mask[j]) {
            result.push(TagsEnum.BOLD_OPEN);
            while (j < n && mask[j]) {
                result.push(s[j++]);
            }
            result.push(TagsEnum.BOLD_CLOSE);
        } else {
            result.push(s[j++]);
        }
    }

    return result.join('');
};
```
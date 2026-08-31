# 5 Solutions | Time: O(N*2^N) | Space: O(N)

**Author:** rojas
**Votes:** 0
**Link:** [https://leetcode.com/problems/generalized-abbreviation/solutions/5677025/](https://leetcode.com/problems/generalized-abbreviation/solutions/5677025/)

---

[toc]

# Approach

## Insight 1

A substring can be replaced with its respective length. The smallest possible substring is a single character. So for every character, we have two choices: A) keep the character or B) replace with its length (i.e. 1).

If we have a word of N characters, we have to consider every combination of choices. When N = 1, there are 2 possibilities. When N = 2, there are $$2*2 = 4$$ possibilities. For any given N, there are $$2^N$$ possibilities.

## Insight 2

Let's look at the word "do". Since there are 2 letters, there are $$2^2 = 4$$ possibilities: 
>  do, 1o, d1, 11

But note that "11" is invalid; the description states only **non-adjacent** substrings can be replaced with their lengths. Since "d" and "o" are adjacent, they cannot both be replaced with "1" at the same time. However, the substring "do" *can* be replaced with it's length. So if there are two adjacent replacements, they should be combined (summed) together. This will give us:
> do, 1o, d1, 2

## Insight 3

Let's redo [Insight 2](#insight-2), but instead of looking at characters, we'll look at the combination of choices. Since the choice is binary, let's label the options with a zero or a one. For example, let's say `0` is when a character is kept and `1` is when it's replaced with its length. For a word with 2 letters, the 4 possibilities are: 
> 00, 01, 10, 11

Interestingly, we've just counted from 0 to 3 in binary. By checking out other word lengths, we can verify that, for a given word length N, we will count from 0 to `2^N - 1`. For each number, we can check out its bits to determine when a character is kept (bit is 0) and when it's replaced (bit is 1). If replaced, we combine (sum) adjacent replacements to make sure the output is valid. See [Bit Manipulation](#bit-manipulation) for a solution based off this.

# Solutions

## Constructive

- Time complexity: $$O(2^NN)$$

- Space complexity: $$O(2^NN)$$

```typescript []
function generateAbbreviations(word: string): string[] {
    const set: (string | number)[][] = [[""]];
    
    const N = word.length;
    for (let i = 0; i < N; ++i) {
        const M = set.length;
        for (let j = 0; j < M; ++j) {
            const sb = Array.from(set[j]);

            set[j].push(word[i]);
            set.push(sb);

            const len = sb[sb.length - 1];
            if (typeof len === "number") {
                sb[sb.length - 1] = len + 1;
            } else {
                sb.push(1);
            }
        }
    }

    const out: string[] = [];
    for (const sb of set) {
        out.push(sb.join(""));
    }

    return out;
};
```

```javascript []
/**
 * @param {string} word
 * @return {string[]}
 */
function generateAbbreviations(word) {
    const set = [[""]];
    
    const N = word.length;
    for (let i = 0; i < N; ++i) {
        const M = set.length;
        for (let j = 0; j < M; ++j) {
            const sb = Array.from(set[j]);

            set[j].push(word[i]);
            set.push(sb);

            const len = sb[sb.length - 1];
            if (typeof len === "number") {
                sb[sb.length - 1] = len + 1;
            } else {
                sb.push(1);
            }
        }
    }

    const out = [];
    for (const sb of set) {
        out.push(sb.join(""));
    }

    return out;
};
```

## Linked Lists

- Time complexity: $$O(2^NN)$$

- Space complexity: $$O(2^N)$$

```typescript []
class MyListNode<T> {
    constructor(public val: T, public next?: MyListNode<T>) {}
}

function generateAbbreviations(word: string): string[] {
    const leaves = [new MyListNode<string>("")];
    for (let i = word.length - 1; i >= 0; --i) {
        const M = leaves.length;
        for (let j = 0; j < M; ++j) {
            const leaf = leaves[j];
            leaves[j] = new MyListNode(word[i], leaf);
            leaves.push(new MyListNode("1", leaf));
        }
    }

    const out: string[] = [];
    for (let node of leaves) {
        const sb: string[] = [];
        let count = 0;
        do {
            if (node.val === "1") {
                ++count;
            } else {
                (count > 0) && sb.push(`${count}`);
                sb.push(node.val)
                count = 0;
            }
            node = node.next;
        } while (node != null);
        (count > 0) && sb.push(`${count}`);
        out.push(sb.join(""));
    }

    return out;
};
```

```javascript []
class MyListNode {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

/**
 * @param {string} word
 * @return {string[]}
 */
function generateAbbreviations(word) {
    const leaves = [new MyListNode("")];
    for (let i = word.length - 1; i >= 0; --i) {
        const M = leaves.length;
        for (let j = 0; j < M; ++j) {
            const leaf = leaves[j];
            leaves[j] = new MyListNode(word[i], leaf);
            leaves.push(new MyListNode("1", leaf));
        }
    }

    const out = [];
    for (let node of leaves) {
        const sb = [];
        let count = 0;
        do {
            if (node.val === "1") {
                ++count;
            } else {
                (count > 0) && sb.push(`${count}`);
                sb.push(node.val)
                count = 0;
            }
            node = node.next;
        } while (node != null);
        (count > 0) && sb.push(`${count}`);
        out.push(sb.join(""));
    }

    return out;
};
```

## Binary Tree Array

- Time complexity: $$O(2^NN)$$

- Space complexity: $$O(2^N)$$

```typescript []
function generateAbbreviations(word: string): string[] {
    const N = word.length;
    const array: string[] = new Array((2 << N) - 1);
    array[0] = "";

    let min = 0;
    let len = 1;
    for (let i = word.length - 1; i >= 0; --i) {
        const max = len;
        for (let j = min; j < max; ++j) {
            array[len++] = word[i];
            array[len++] = "1";
        }
        min = max;
    }

    const out: string[] = [];
    for (let i = min; i < len; ++i) {
        const sb: string[] = [];
        let count = 0;
        for (let j = i; j >= 0; j = (j - 1) >> 1) {
            if (array[j] === "1") {
                ++count;
            } else {
                (count > 0) && sb.push("" + count);
                sb.push(array[j]);
                count = 0;
            }
        }
        out.push(sb.join(""));
    }

    return out;
};
```

```javascript []
/**
 * @param {string} word
 * @return {string[]}
 */
function generateAbbreviations(word) {
    const N = word.length;
    const array = new Array((2 << N) - 1);
    array[0] = "";

    let min = 0;
    let len = 1;
    for (let i = word.length - 1; i >= 0; --i) {
        const max = len;
        for (let j = min; j < max; ++j) {
            array[len++] = word[i];
            array[len++] = "1";
        }
        min = max;
    }

    const out = [];
    for (let i = min; i < len; ++i) {
        const sb = [];
        let count = 0;
        for (let j = i; j >= 0; j = (j - 1) >> 1) {
            if (array[j] === "1") {
                ++count;
            } else {
                (count > 0) && sb.push("" + count);
                sb.push(array[j]);
                count = 0;
            }
        }
        out.push(sb.join(""));
    }

    return out;
};
```

## Backtracking

- Time complexity: $$O(2^NN)$$

- Space complexity: $$O(N)$$

```typescript []
function generateAbbreviations(word: string): string[] {
    const set: string[] = [];
    helper(word, 0, 0, [], set);
    return set;
};

function helper(word: string, i: number, len: number, curr: string[], set: string[]): void {
    const N = word.length;
    const size = curr.length;

    if (i >= N) {
        (len > 0) && curr.push(len.toString());
        set.push(curr.join(""));
        curr.length = size;
        return;
    }

    helper(word, i+1, len+1, curr, set);

    if (len == 0) {
        curr.push(word[i]);
        helper(word, i+1, 0, curr, set);
        curr.pop();
    } else if (len > 0) {
        curr.push(len.toString(), word[i]);
        helper(word, i+1, 0, curr, set);
        curr.length -= 2;
    }
}
```

```javascript []
/**
 * @param {string} word
 * @return {string[]}
 */
function generateAbbreviations(word) {
    const set = [];
    helper(word, 0, 0, [], set);
    return set;
};

function helper(word, i, len, curr, set) {
    const N = word.length;
    const size = curr.length;

    if (i >= N) {
        (len > 0) && curr.push(len.toString());
        set.push(curr.join(""));
        curr.length = size;
        return;
    }

    helper(word, i+1, len+1, curr, set);

    if (len == 0) {
        curr.push(word[i]);
        helper(word, i+1, 0, curr, set);
        curr.pop();
    } else if (len > 0) {
        curr.push(len.toString(), word[i]);
        helper(word, i+1, 0, curr, set);
        curr.length -= 2;
    }
}
```

## Bit Manipulation

- Time complexity: $$O(2^NN)$$

- Space complexity: $$O(N)$$

```typescript []
function generateAbbreviations(word: string): string[] {
    const N = word.length;
    const M = 1 << N;
    const set: string[] = new Array(M);

    let size = 0;
    for (let i = 0; i < M; ++i) {
        const sb: string[] = [];
        let count = 0;
        for (let b = 0; b < N; ++b) {
            if ((i >> b) & 1) {
                ++count;
            } else {
                (count > 0) && sb.push(`${count}`);
                sb.push(word[b]);
                count = 0;
            }
        }
        (count > 0) && sb.push(`${count}`);
        set[size++] = sb.join("");
    }

    return set;
};
```

```javascript []
function generateAbbreviations(word) {
    const N = word.length;
    const M = 1 << N;
    const set = new Array(M);

    let size = 0;
    for (let i = 0; i < M; ++i) {
        const sb = [];
        let count = 0;
        for (let b = 0; b < N; ++b) {
            if ((i >> b) & 1) {
                ++count;
            } else {
                (count > 0) && sb.push(`${count}`);
                sb.push(word[b]);
                count = 0;
            }
        }
        (count > 0) && sb.push(`${count}`);
        set[size++] = sb.join("");
    }

    return set;
};
```
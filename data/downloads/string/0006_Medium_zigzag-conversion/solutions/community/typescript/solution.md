# Simple O(n) solution in Typescript (98.89% / 99.33%)

**Author:** mr_capybara
**Votes:** 19
**Link:** [https://leetcode.com/problems/zigzag-conversion/solutions/2981941/](https://leetcode.com/problems/zigzag-conversion/solutions/2981941/)

---

# Intuition
The result is a merge of k strings, where k = numRows.
We are making those strings by oscilating from the top to the bottom and extending them with consecutive string element.

# Example
numRows = 3, string = PAYPALISHIRING

Step1: Create an array of size 3 with empty strings. `rows = ['', '', ''];`The functon result will be the merge of those array items.

Step2: Iterate and extend those strings in oscilating order with consecutive string element.

We will be extending strings using indexes: `0,1,2,1,0,1,2,1,0,1...` 

```
1) rows = ['P', '', ''];
2) rows = ['P', 'A', ''];
3) rows = ['P', 'A', 'Y'];
4) rows = ['P', 'AP', 'Y'];
5) rows = ['PA', 'AP', 'Y'];
6) rows = ['PA', 'APL', 'Y'];
7) rows = ['PA', 'APL', 'YI'];
8) rows = ['PA', 'APLS', 'YI'];
9) rows = ['PAH', 'APLS', 'YI'];
10) rows = ['PAH', 'APLSI', 'YI'];
11) rows = ['PAH', 'APLSI', 'YIR'];
12) rows = ['PAH', 'APLSII', 'YIR'];
13) rows = ['PAHN', 'APLSII', 'YIR'];
14) rows = ['PAHN', 'APLSIIG', 'YIR'];
```

Step 3: Return joined array elements - `PAHNAPLSIIGYIR`

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
function convert(s: string, numRows: number): string {
    if (numRows === 1) return s;

    const rows = new Array(numRows).fill('');

    let currRow = -1;
    let ascending = true;

    for (let i = 0; i < s.length; i++) {
        currRow += ascending ? 1 : -1;
        rows[currRow] += s[i];

        if (currRow === numRows - 1) {
            ascending = false;
        } else if (currRow === 0) {
            ascending = true;
        }
    }

    return rows.join('');
};
```
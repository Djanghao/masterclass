# Easy Typescript Solution

**Author:** bajinatu1234
**Votes:** 0
**Link:** [https://leetcode.com/problems/repeated-string-match/solutions/5804024/](https://leetcode.com/problems/repeated-string-match/solutions/5804024/)

---

# Intuition
Keep concatenating the string till it is greater than the string to be compared "b"

# Approach
- Keep concatenating "a" till it is grater than "b" while increasing the count of concatenating operations.

- if the concatenated string isn't sufficient to contain "b" as a substring, add a one more level of concatenation and return an increased count of "+1" if it contains "b" as a substring else return -1

# Complexity
- Time complexity:
O(n)

- Space complexity:
0(n)

# Code
```typescript []
function repeatedStringMatch(a: string, b: string): number {
    // let count = 0;
    // let str = "";
    // const seta = new Set<string>(...a.split(""));
    // const setb = new Set<string>(...b.split(""));

    // for (let value of setb) {
    //    if(!(seta.has(value)))  return -1;
    // }
    // console.log("here")

    // let inc = str.includes(b);
    // while(!inc) {
    //     str += a;
    //     count++;
    //     inc = str.includes(b);
    //     if(inc) return count;
    // }
    // return -1;

        let q = 1;
    let S = a;

    // Keep appending A to S until S's length is greater than or equal to B's length
    while (S.length < b.length) {
        S += a;
        q++;
    }

    // Check if B is now a substring of S
    if (S.indexOf(b) >= 0) return q;

    // Append A one more time and check again
    if ((S + a).indexOf(b) >= 0) return q + 1;

    return -1;
};
```
# [typescript/javascript] o(n) solution w/ detailed comments + explanation

**Author:** carti
**Votes:** 4
**Link:** [https://leetcode.com/problems/groups-of-special-equivalent-strings/solutions/860173/](https://leetcode.com/problems/groups-of-special-equivalent-strings/solutions/860173/)

---

Forget what the problem is asking for a second. I'll dumb it down. It took me too long and I overthought way too hard.
*Shout out to Fisher Coder (on youtube) for explaining the problem statement. He's a legendary beast.*

The problem is **simply** asking how many strings are distinct, given you can swap any even-indexed characters, and swap any odd-indexed characters.

Example: if you have **"axbycz"** and **"czbyax"**, these ARE specially EQUIVALENT. here is the reasoning: for odd index, we have counts {a: 1, b: 1, c:1} in both of them, and for even index we have {x: 1, y: 1, z: 1} for both of them.

**solution:**
```
function numSpecialEquivGroups(A: string[]): number {
    // set to keep track of unique special equivalents
    const set: Set<string> = new Set();
    // iterate thru A
    for (let i = 0; i < A.length; i++) {
        // even and odd char counts
        const counts = [new Uint8Array(26), new Uint8Array(26)];
        // iterate thru this string, and fill counts
        for (let j = 0; j < A[i].length; j++) {
            // fill count on whether even or odd (0 index is even 1 is odd)
            counts[j % 2][A[i].charCodeAt(j) - 97]++;
        }
        // add to set as concatenation of both counts arrays
        set.add(counts[0].join('') + counts[1].join(''));
    }

    // result is just size of set (number of unique special equivalents)
    return set.size;
}
```

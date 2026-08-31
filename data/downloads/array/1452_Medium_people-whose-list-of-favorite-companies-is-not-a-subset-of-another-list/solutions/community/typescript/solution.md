# fast bitwise solution

**Author:** bigicon
**Votes:** 0
**Link:** [https://leetcode.com/problems/people-whose-list-of-favorite-companies-is-not-a-subset-of-another-list/solutions/5782056/](https://leetcode.com/problems/people-whose-list-of-favorite-companies-is-not-a-subset-of-another-list/solutions/5782056/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
I initially tried a naive solution (compare each list of favorites to all other lists), and this worked fine. (Scroll to the bottom of this writeup to see a naive(slow) solution.)

But I knew there must be a faster solution. 

# Approach

Use bit comparisons.

1. **step 1** - Set up a key-value object `bits` such that each key is the company name, and each value is a number with each bit set to `0` or `1` depending on whether this company is in the person's favorites list.
2. **step 2** - For each person's favorites list, AND (`&`) the relevant companies' bits together. If the result of ANDing these all together is just a single bit, then we know that this person is the only one who has all of these companies in their favorites list.

**Why bigint** -- Since `favoriteCompanies.length` may be up to `100`, we use `bigint` for storing the bits so that each number is guaranteed to have enough space for up to `100` bits.

For more, see comments in code below.

# Complexity

### Time complexity: O(n)
  - `n` is the number of total liked companies, i.e. `favoriteCompanies.flat().length`

### Space complexity: O(n*m)
  - `n` is the number of distinct liked companies, i.e. `favoriteCompanies.flat().uniq().length` (yes I know `.uniq()` is not standard JS)
  - `m` is the number of people, i.e. `favoriteCompanies.length`; the `bits` object needs an extra bit per entry to store whether or not the given company is in each person's favorites list

# Final code
```typescript []
function peopleIndexes(favoriteCompanies: string[][]) : number[] {
    // step 1 - setup the bit object.
    // Example input:
    //   favoriteCompanies = [
    //     ["leetcode","google","facebook"], // index=0, bitId=0x00001
    //     ["google","microsoft"],           // index=1, bitId=0x00010
    //     ["google","facebook"],            // index=2, bitId=0x00100
    //     ["google"],                       // index=3, bitId=0x01000
    //     ["amazon"],                       // index=4, bitId=0x10000
    //   ]
    // Then:
    //   bits = {
    //     leetcode:  0x00001,  // 1
    //     google:    0x01111,  // 15
    //     facebook:  0x00101,  // 5
    //     microsoft: 0x00010,  // 2
    //     amazon:    0x10000,  // 16
    //   }
    const bits : Record<string,bigint> = {}
    for (let i = 0, myBitId = 1n;
         i < favoriteCompanies.length;
         i++, myBitId = myBitId << 1n)
    {
        const myFc = favoriteCompanies[i]
        for (let j = 0; j < myFc.length; j++) {
            const companyName = myFc[j]
            if (!bits[companyName]) {
                bits[companyName] = myBitId
            } else {
                bits[companyName] |= myBitId
            }
        }
    }

    // step 2 - iterate over each favorites array, then
    // bitwise-and (&) all of the relevant company bits together.
    // If myBitId is the only one that is set after `and`ing
    // the company bits together, then we know that no other person
    // includes this exact same set of companies as their favorites.
    const andInit = (1n << BigInt(favoriteCompanies.length)) - 1n // all the bits are 1
    const out = []

    outerLoop: 
    for (let i = 0, myBitId = 1n;
         i < favoriteCompanies.length;
         i++, myBitId = myBitId << 1n)
    {
        const myFc = favoriteCompanies[i]
        for (let j = 0, and = andInit; j < myFc.length; j++) {
            and &= bits[myFc[j]]
            if (and === myBitId) {
                // myBitId is the only one that remains! We know for sure
                // that no other person has all of my companies in their
                // list of favorites.
                out.push(i)
                continue outerLoop // short-circuit
            }
        }
    }

    return out
}
```

# Naive (slow) solution code

This is the initial (intuitive) solution. It works fine, but it's slow because it runs in n^2 time, plus it depends on constructing a new array and Set for each comparison.

```typescript
function peopleIndexesNaive(favoriteCompanies: string[][]): number[] {
    // runs in n^2 time.
    // WORKS! But it's slow.
    const out = []
    outer: for (let i = 0; i < favoriteCompanies.length; i++) {
        const myFc = favoriteCompanies[i]
        for (let j = 0; j < favoriteCompanies.length; j++) {
            if (i !== j) {
                const theirFc = favoriteCompanies[j]
                if (myFc.length <= theirFc.length) {
                    if (new Set( [ ... myFc, ... theirFc]).size === theirFc.length) {
                        // it IS a subset!
                        continue outer
                    } else {
                        // not a subset of theirs
                    }
                }
            }
        }

        // If we reach this code, we know ours is not a subset of anybody else's.
        out.push(i)
    }

    return out
};
```


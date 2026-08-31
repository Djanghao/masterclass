# Straightforward binary search

**Author:** TrueFirel
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-removable-characters/solutions/5922682/](https://leetcode.com/problems/maximum-number-of-removable-characters/solutions/5922682/)

---

# Intuition
Since our **k** can only be in range **0 <= k <= removable.length**, we can apply binary search to try possible k values.

# Approach
On each binary search step we are gonna check if the **p** is still substring of the **s** after removing first **k** indicies from the **removable** array. Just not to iterate through the **removable** array on each **isSubsequence** determenition step, we can store first **k** indicies within the **Set** collection.

So if the **p** is still a substring of the **s**, we can store current result and continue our search, shifting the **leftPointer** to the **k + 1**, since there are possibly more elements we can remove.

Otherwise if we determined that **p** is no longer a substring of the **s** - we should search for the lower **k** shifting the **rightPointer** to the **k - 1**.

# Complexity
- Time complexity:

O(log(n)*(n + m)), where n - removable.length, m - s.length

- Space complexity:

O(n) - since we are maintaining Set with n removable elements

# Code
```typescript []
const getRemovableIndiciesSet = (removable: number[], charactersToRemove: number) => {
    const removableIndiciesSet = new Set<number>();

    for (let i = 0; i < charactersToRemove; i++) {
        removableIndiciesSet.add(removable[i]);
    }

    return removableIndiciesSet;
}

const isSubsequence = (s: string, p: string, removableIndiciesSet: Set<number>) => {
    let pPointer = 0;

    for (let i = 0; i < s.length; i++) {
        if (!removableIndiciesSet.has(i)) {
            if (s[i] === p[pPointer]) {
                pPointer += 1;

                if (pPointer === p.length) {
                    return true;
                }
            }
        }
    }

    return false;
}

const maximumRemovals = (s: string, p: string, removable: number[]): number => {
    let result = 0;
    let leftPointer = 0;
    let rightPointer = removable.length;

    while (leftPointer <= rightPointer) {
        const charactersToRemove = leftPointer + Math.floor((rightPointer - leftPointer) / 2);
        const removableIndiciesSet = getRemovableIndiciesSet(removable, charactersToRemove);

        if (isSubsequence(s, p, removableIndiciesSet)) {
            result = charactersToRemove;
            leftPointer = charactersToRemove + 1;
        } else {
            rightPointer = charactersToRemove - 1;
        }
    }

    return result;
};
```
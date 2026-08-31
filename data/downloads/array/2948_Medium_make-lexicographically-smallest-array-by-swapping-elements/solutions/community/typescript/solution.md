# Window approach

**Author:** aearlin
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-lexicographically-smallest-array-by-swapping-elements/solutions/4942928/](https://leetcode.com/problems/make-lexicographically-smallest-array-by-swapping-elements/solutions/4942928/)

---

# Intuition
We begin by creating an array of the indexes, sorted by their value in `num`. Then we step through the indexes one be one, and determine which values remain in the window. When we reach the end of the window, we sort the indexes we've found (remember that the values are already sorted!), then step through the sorted indexes, adding the sorted values to their respective places in the `result` array.

# Approach
We start by creating `indexes`, which sorts the indexes from `nums` by their value in `nums`.

We then go through a loop until we've reached the end of the `indexes` array (each loop is one window).

In the loop, we create an array for the indexes in the window (`idxArr`), and one for the values in the window(`valArr`). We add the first index and value to the arrays (the start of the window) and go to the next index. While each value is <= `limit` greater than the value before it, we know that it's in the same window, so we add its index to `idxArr` and its value to `valArr` and move to the next index. At the end of the window, `idxArr` contains all of the indexes that can swap with each other, and `valArr` contains all of the values that can be swapped. `valArr` is already sorted (see the first step), so we sort `idxArr`. Now we go through the indexes one by one, adding the values from `valArr` at those indexes in the `result` array (so the smallest index = the smallest value). This is the end of the window, so we loop for the next one.

Once we've gone through all of the windows, the `result` array is full, so we can return it.

# Complexity
- Time complexity:
$$O(n * log(n))$$ We go through each of the values three times -- once to sort them, once to put them in `valArr`, and once to put them in the `result` array. Same for the indexes, with an additional sort.

- Space complexity:
$$O(n)$$ We have an `n` length array for the indexes and one for the results.

# Code
```
function lexicographicallySmallestArray(nums: number[], limit: number): number[] {
    const indexes: number[] = nums.map((_, idx) => idx)
        .sort((a, b) => nums[a] - nums[b]);

    const result: number[] = [];

    let i: number = 0;
    const n: number = indexes.length;
    while (i < n) {
        const idxArr: number[] = [];
        const valArr: number[] = [];
        idxArr.push(indexes[i]);
        valArr.push(nums[indexes[i]]);
        i++;

        while (i < n && nums[indexes[i]] - nums[indexes[i - 1]] <= limit) {
            idxArr.push(indexes[i]);
            valArr.push(nums[indexes[i]]);
            i++;
        }
        idxArr.sort((a, b) => a - b);

        for (let j = 0; j < idxArr.length; j++) {
            result[idxArr[j]] = valArr[j];
        }
    }

    return result;
}

```
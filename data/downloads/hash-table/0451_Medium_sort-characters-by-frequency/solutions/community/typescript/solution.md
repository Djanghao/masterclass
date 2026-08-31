# True O(n)! HashMap and array, No Sorting!

**Author:** omyasn
**Votes:** 2
**Link:** [https://leetcode.com/problems/sort-characters-by-frequency/solutions/4340308/](https://leetcode.com/problems/sort-characters-by-frequency/solutions/4340308/)

---

# Intuition
Use hashMap for store frequency. Map frequencies to array indexes to sort them. 

# Approach
Declare a hashMap and store a character as a key and a string of repeating character as a value(same count as a frequency, same count as it should appear in the result string). 

Now we need to sort all characters by frequency. But indexes of an array are already sorted! Let's use it. For every value in our hashMap get its length(frequency of the character). Use this length as an index in the array and assign the character string to it. If two characters have the same frequency they shouldn't override each other, so concatenate it.

Now just go from the end of the array to the beginning and concatenate all existing strings. 

# Complexity
- Time complexity: $$O(n)$$ (O(n) + O(n)(hashMap size <= n) + O(n)(max index of array <= n, as freqyency of any character can't be more then n))

- Space complexity: $$O(n)$$

# Code
```
function frequencySort(s: string): string {
    const fr = new Map<string, string>();

    for (let i = 0; i < s.length; i++) {
        fr.set(s[i], (fr.get(s[i])||'') + s[i]);
    }

    const arr = [];
    fr.forEach((val) => {
        const len = val.length;
        if (arr[len]) {
            arr[len] = arr[len] + val
        } else {
            arr[len] = val;
        }
    })

    let res = '';
    for (let j = arr.length - 1; j >= 0; j--) {
        if (arr[j]) {
            res += arr[j];
        }
    }

    return res;
};
```
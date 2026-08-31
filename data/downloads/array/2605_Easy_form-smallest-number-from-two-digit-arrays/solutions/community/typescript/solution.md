# The best memory solution

**Author:** ivan99ru
**Votes:** 1
**Link:** [https://leetcode.com/problems/form-smallest-number-from-two-digit-arrays/solutions/3674880/](https://leetcode.com/problems/form-smallest-number-from-two-digit-arrays/solutions/3674880/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
1. Let's sort the array 1
2. Using the for loop, we will find out if there is at least one minimum number of array 1 in array 2
3. If array 2 contains at least one minimum number from array 1, we will return it
4. Otherwise, we will find the minimum number of the second array
5. Finally we find the minimum number composed of the first element of the sorted array 1 and the minimum number of the array 2


# Code
```
function minNumber(nums1: number[], nums2: number[]): number {
    nums1.sort((a, b) => a - b);

    for (let i = 0; i < nums1.length; i++) {
        if (nums2.includes(nums1[i])) {
            return nums1[i];
        }
    }

    const firstChar = nums1[0];
    const secondChar = Math.min(...nums2);
    return Math.min(+`${firstChar}${secondChar}`, +`${secondChar}${firstChar}`)
};
```

![form-smallest-number-from-two-digit-arrays.png](./images/0.png)
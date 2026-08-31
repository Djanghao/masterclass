# Typescript | Clean and simple solution

**Author:** mihirbhende1201
**Votes:** 4
**Link:** [https://leetcode.com/problems/sort-array-by-increasing-frequency/solutions/1486646/](https://leetcode.com/problems/sort-array-by-increasing-frequency/solutions/1486646/)

---

```
function frequencySort(nums: number[]): number[] {
    
    const freq: Record<number, number> = {};
    
    nums.forEach(num => freq[num] = (freq[num] || 0) + 1);

    return nums.sort((a, b) => freq[a] != freq[b] ? freq[a] - freq[b] : b - a);
};
```
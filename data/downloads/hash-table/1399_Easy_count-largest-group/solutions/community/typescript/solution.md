# Count Largest Group of Digit Sum Frequencies

**Author:** traezeeofor
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-largest-group/solutions/5595215/](https://leetcode.com/problems/count-largest-group/solutions/5595215/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach

I approached the problem by first generating an array of digit sums for all numbers from n down to 1. Then, I created a set of unique digit sums and converted it back to an array. Next, I counted the frequency of each unique digit sum and stored it in another array. After that, I sorted the frequency array in descending order and filtered out the maximum frequency. Finally, I returned the count of maximum frequencies to find the largest group size. 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function countLargestGroup(n: number): number {
    let freq: number[] = [];
    let freq2: number[] = [];

    while (n > 0) {
      let str = n.toString().split('');
      let strSum = str.reduce((acc, curr) => acc + Number(curr), 0);
      freq.push(strSum);
      n--;
    }

    const uniq = new Set(freq);
    const valu = Array.from(uniq);
   
    for (let i = 0; i < valu.length; i++) {
      let numba = freq.filter(n => n === valu[i]).length
      freq2.push(numba);
    }

    freq2.sort((a,b) => b - a);
    return freq2.filter(n => n === freq2[0]).length;
};
```
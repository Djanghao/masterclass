# 2829. Determine the Minimum Sum of a k-avoiding Array

**Author:** Delioos
**Votes:** 1
**Link:** [https://leetcode.com/problems/determine-the-minimum-sum-of-a-k-avoiding-array/solutions/4548820/](https://leetcode.com/problems/determine-the-minimum-sum-of-a-k-avoiding-array/solutions/4548820/)

---

# Intuition
Searching a minimum = starting by the lowest numbers
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Initialised the k-avoiding array and an index before the search.
thought I could use n as a counter instead of taking space and incrementing smthg for nothing. 

Inside of my k-avoiders search loop, I simply compare all existing values in the arr and I check if there is an issue (one of the old numbers + the current index = k). I keep the result of this check in a boolean.
If no problem was found, I add the number to the list and I don t forget to decrement n (how many numbers I want to add in my list).

And finally I return the sum 
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 103ms

- Space complexity: 48.38 MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function minimumSum(n: number, k: number): number {
    let i: number = 1;
    let arr: number[] = [];
    while (n != 0) {
        let flag:boolean = false;
        arr.forEach(num =>{
            if (num + i == k) 
                flag = true;
        })
        if (!flag) {
            arr.push(i)
            n--;
        }
        i++
    }

    return arr.reduce((a,b) => a+b, 0);
};
```
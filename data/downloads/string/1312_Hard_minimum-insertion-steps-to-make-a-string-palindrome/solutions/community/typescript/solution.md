# Typescript top-down dynamic programming detailed solution. Beats 100%

**Author:** Adetomiwa
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/solutions/3443127/](https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/solutions/3443127/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
A Palindrome string is one that reads the same forward and backward. One way to determine if a string is palindromic is by using a **two-pointer algorithm**. In this case, we use two pointers, one at the start of the string and the other at the end of the string, and then we start comparing the characters at both pointers as we move the pointers.

We can use this same idea to determine the number of insertions required to make a string a palindrome.

# Approach
<!-- Describe your approach to solving the problem. -->
Our approach involves using two pointers, one on the first index `[i]` and the other on the last index `[j]`. We move the pointers based on the following rules:

- If the characters at both pointers are the same (i.e `s[i] === s[j]`), we move both pointers forward `(i++, j--)`, and no insertion operation is necessary.
- If the characters at both pointers are NOT the same (i.e `s[i] !== s[j]`), we have two options:

    - We move the first pointer and leave the second pointer `(i++, j)`, and increment the number of operations by 1. This operation is equivalent to inserting one character before index `j`(i.e `j+1`) that matches the one at index `i`.
    - We move the second pointer and leave the first pointer `(i, j--)`, and increment the number of operations by 1. This operation is equivalent to inserting one character before index `i` (i.e `i-1`) that matches the one at index `j`.


To implement this approach, we wrote a recursive function that keeps track of both pointers and a cache to optimize the solution by storing the results for all pointer pairs to avoid duplicate computations.


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n^2)$$
n = length of string (s.length)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n^2)$$

# Code
```
function minInsertions(s: string): number {
    const cache: number[][] = new Array(501);

    for(let i = 0; i < cache.length; i++){
        cache[i] = new Array(501).fill(-1);
    }

    return helper(0, s.length - 1);

    function helper(i: number, j: number): number {
        if(i >= j){
            return 0;
        }
        if(cache[i][j] !== -1){
            return cache[i][j];
        }

        let min: number = Number.MAX_VALUE;

        if(s[i] === s[j]){
            min = Math.min(min, helper(i+1, j-1));
        } else {
            min = Math.min(
                min,
                helper(i+1, j) + 1,
                helper(i, j-1) + 1
            );
        }

        cache[i][j] = min;
        return min;
    }
};
```
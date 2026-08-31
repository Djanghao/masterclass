# Easy Typescript Solution with Full Explanation

**Author:** chetannada
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings/solutions/4988667/](https://leetcode.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings/solutions/4988667/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$ where n is the length of the input string "seq". This is because the function iterates through each character of the input string once in a single for loop.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$ where n is the length of the input string "seq". This is because the function uses an array "arr" to store the output values for each character in the input string. The size of this array will be equal to the length of the input string.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function maxDepthAfterSplit(seq: string): number[] {

    // initialize n as length of seq
    // and level equal to 0
    // and arr equal to empty array
    let n: number = seq.length, level: number = 0, arr: number[] = [];

    // run for loop from index 0 to n
    for (let i = 0; i < n; i++) {

        // if ith character of seq is equal to "("
        if (seq[i] === "(") {

            // then do modulo of pre increment of level with 2 then push val to array
            let val = ++level % 2;
            arr.push(val);
        } else {

            // else do modulo of post decrement of level with 2 then pusj val to array
            let val = level-- % 2;
            arr.push(val);
        }
    }

    // return answer arr
    return arr;
};
```
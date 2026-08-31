# [TS] Simple solution (94.87% Runtime)

**Author:** tmythicator
**Votes:** 3
**Link:** [https://leetcode.com/problems/largest-odd-number-in-string/solutions/4374607/](https://leetcode.com/problems/largest-odd-number-in-string/solutions/4374607/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The largest odd number from the number subsequence would be the one, that has the last digit odd and with the latest index in the string.
# Approach
<!-- Describe your approach to solving the problem. -->
Just go over the input string, starting from the end to get better average results. As we only need to know the index of the latest odd number in the string.

Bad case would be -> the number is not odd, so we go through the whole string.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function largestOddNumber(num: string): string {
    for(let i=num.length-1;i>=0;i--){
        if(isDigitOdd(i, num)){
            return num.slice(0,i+1);
        }
    }
    return "";
};

const isDigitOdd = (index: number, num: string): boolean => {
    return Number(num[index]) % 2 !== 0;
};
```
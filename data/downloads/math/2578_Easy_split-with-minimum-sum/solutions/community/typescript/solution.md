# An easy and fast solution

**Author:** andreytmshnkv
**Votes:** 1
**Link:** [https://leetcode.com/problems/split-with-minimum-sum/solutions/4664440/](https://leetcode.com/problems/split-with-minimum-sum/solutions/4664440/)

---

# Intuition
It's quite clear from the start that we want to iterate through the num as an array, but since numbers are not iterable we should convert it to string. It's also important to keep in mind that it's best to add the lowest numbers to be the first digits of the two output numbers. 

# Approach
Once the initial num is a string that we can iterate through, we sort it in an ascending order. Then with a for loop we add digits one by one to the resulting numbers. Once we convert them back to numbers, we can return their sum as a result. 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function splitNum(num: number): number {
    let [num1, num2] = ['', ''];
    let arr = Array.from(String(num)).sort();
    for (let i = 0; i < arr.length; i++) {
      i % 2 === 0 ? num1 += arr[i] : num2 += arr[i]
    }
    return parseInt(num1) + parseInt(num2);
};
```
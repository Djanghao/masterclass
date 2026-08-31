# Step by step approach explained🔥

**Author:** SumitPokhriyal
**Votes:** 3
**Link:** [https://leetcode.com/problems/remove-k-digits/solutions/3671850/](https://leetcode.com/problems/remove-k-digits/solutions/3671850/)

---

# Intuition
The problem requires removing k digits from a given number num to form the smallest possible number.

# Approach
The given solution uses a stack-based approach to solve the problem. It iterates over each digit n in the input number num.

For each digit, it compares it with the top element of the stack. If the current digit n is smaller than the top element of the stack and there are remaining removals (rem is less than k), it pops elements from the stack until the condition is no longer satisfied or rem reaches k. This step ensures that the smallest digits are kept at the front of the stack.

After processing all digits, it checks if there are any remaining removals (rem is less than k). If so, it continues popping elements from the stack until rem reaches k.

Next, it removes any leading zeros from the stack by repeatedly shifting elements until the first element is not "0".

Finally, it returns the result by joining the elements of the stack into a string. If the stack is empty, it returns "0" to handle the case when all digits are removed.

# Complexity
- Time complexity: The algorithm iterates over each digit in the input number, resulting in a time complexity of O(n), where n is the length of the input number num.
- Space complexity: The algorithm uses a stack stk to store the digits, resulting in a space complexity of O(n), where n is the length of the input number num.

# Code
```
function removeKdigits(num: string, k: number): string {
    let stk = [] , rem = 0;
    for( let n of num ){
        while( stk.length && n < stk[stk.length - 1] && rem < k ){
            stk.pop();
            rem++;
        }
        stk.push(n);
    }
    while( rem < k ){
        stk.pop();
        rem++;
    }
    while( stk[0] === "0" ){
        stk.shift()
    }
    return stk.length ? stk.join('') : "0";
};
```
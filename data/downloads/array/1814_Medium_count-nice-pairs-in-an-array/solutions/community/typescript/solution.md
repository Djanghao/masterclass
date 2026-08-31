# TypeScript: 1814. Count Nice Pairs in an Array

**Author:** wadeamoment
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-nice-pairs-in-an-array/solutions/4296609/](https://leetcode.com/problems/count-nice-pairs-in-an-array/solutions/4296609/)

---

# Intuition

1. define rev
2. simplify the check for nice pairs
3. use a hashmap to go fast
4. format as % (10 ** 9 + 7)

# Approach


Let's first define a clean, well documented solution, then optimize.

Here's two examples of the rev function from the description:
```
rev(123) = 321;
rev(120) = 21;
```
One easy way to do this would be convert to string, convert to char array, reverse the array, convert back to string, and convert back to a number:
```
let rev = (num: number) => Number(num.toString().split('').reverse().join(''));
```
Pretty clean, but could be more performant if we can avoid casting through so many types. 

```
// num = 123 -> 3
let rightDigit = (num: number) => num % 10

// num = 3 -> 30
let leftShiftDigits = (num: number) => num * 10

// num = 123 -> 12
let dropRightDigit = (num: number) => Math.floor(num / 10)
```
Now we can loop through a number like '123' one digit at a time
```
let rev = (num: number): number => {
    let reversed = 0; // to store the final result
    while (num > 0) { // 123 > 12 > 1 > 0
        let onesDigit = rightDigit(num);
        reversed = leftShiftDigits(reversed) + onesDigit;
        num = Math.floor(num / 10);
    }
    return reversed;
}
```
Using substitution we get:
```
let rev = (num: number): number => {
    let reversed = 0;
    while (num > 0) {
        reversed = reversed * 10 + (num % 10);
        num = Math.floor(num / 10);
    }
    return reversed;
};
```


---

Index Math:
Given these two definitions, let's do some math:
`0 <= i < j < nums.length`
`nums[i] + rev(nums[j]) == nums[j] + rev(nums[i])`
The second expression can be written as:
`nums[i] - rev(nums[i]) == nums[j] - rev(nums[j])`

That means that we can map our array using the expression on the right, and look for matching values in the array

```
nums.map(num => {
        const numI = num - rev(num);
        // ...
}
```
Now let's do some histograms to calc the frequency and totals!

```
function countNicePairs(nums: number[]): number {
    const histogram = new Map<number, number>();
    let tot: number = 0;
    nums.map(num => {
        const numI = num - rev(num);
        let newVal = (histogram.get(numI) || 0) + 1;
        histogram.set(numI, newVal);
        tot += newVal-1
    });
    return tot % (10 ** 9 + 7)
};
```

---

# Complexity
- Time complexity:
```
O(N\u22C5logM)
```
- Space complexity:
```
O(N)
```

# Code
```
let rev = (num: number): number => {
  let reversed = 0;
  while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return reversed;
};

function countNicePairs(nums: number[]): number {
    const histogram = new Map<number, number>();
    let tot: number = 0;
    nums.map(num => {
        const numI = num - rev(num);
        let newVal = (histogram.get(numI) || 0) + 1;
        histogram.set(numI, newVal);
        tot += newVal-1
    });
    return tot % (10 ** 9 + 7)
};

```
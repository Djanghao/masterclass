# JavaScript: O(1) Space with Explanation

**Author:** garrowat
**Votes:** 44
**Link:** [https://leetcode.com/problems/increasing-triplet-subsequence/solutions/499176/](https://leetcode.com/problems/increasing-triplet-subsequence/solutions/499176/)

---

# Approach Summary:
**Constraints**
We are heavily constrained by O(1), O(n) space & time complexities, which means:
* **No trees or arrays**
* **No nesting loops** (unless the nested loop is constant size)

**A hint in the description**

There's a hint in the formal function definition:
* *Return true if there exists i, j, k
such that **arr[i] < arr[j] < arr[k]** given 0 \u2264 i < j < k \u2264 n-1 else return false.*

This can be reconfigured as arr[i] (`currentNumber`) > `arr[j]` (`secondNumber`) > `arr[k]` (`firstNumber`). Since we are already tracking `currentNumber` on each iteration, we only need to track two other numbers to get our (potential) triplet:
```
var increasingTriplet = function(nums) {
  let firstNumber = Infinity;
  let secondNumber = Infinity;
  
  for (let currentNumber of nums) {
```
We can start at `Infinity` for the two minimum numbers, since we'll want to grab the first two number we come accross.

**Success Condition**
We should be able to reach a state where `currentNumber` (set as `arr[i]` in our algorithm) is greater than the first and second-most minimum numbers.
```
if (currentNumber > secondNumber && currentNumber > firstNumber) {
  return true;
}
```
That is, if at any point in the loop, we find a number that is greater than our two stored numbers, then we automatically have a valid triplet. Thus, we can return true.

**Tracking Minimum Numbers**
We need to track two other numbers to make a subsequence with `currentNumber`. 
```
if (currentNumber > firstNumber) {
  secondNumber = currentNumber;
} else {
  firstNumber = currentNumber;
}
```
Basically, this conditional ensures that we always have the lowest number in the array stored as `firstNumber`. Then, each time we encounter a number that's larger than `firstNumber`, we store that number and continue. 

The reason this works is that if we ever find another number that's larger than `secondNumber`, then we have our triplet and our first conditional triggers and returns true for us.

By the end of all this, if we never find that third (or second!) increasing number, then it doesn't exist in our list and we return false.
# Solution Code:
```
var increasingTriplet = function(nums) {
  let firstNumber = Infinity;
  let secondNumber = Infinity;
  
  for (let currentNumber of nums) {
    if (currentNumber > secondNumber && currentNumber > firstNumber) {
      return true;
    }
    if (currentNumber > firstNumber) {
      secondNumber = currentNumber;
    } else {
      firstNumber = currentNumber;
    }
  }
  return false;
};
```
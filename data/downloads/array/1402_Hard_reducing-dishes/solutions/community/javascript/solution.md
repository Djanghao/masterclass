# Easy solution with detailed comments

**Author:** emmakuen
**Votes:** 14
**Link:** [https://leetcode.com/problems/reducing-dishes/solutions/3354463/](https://leetcode.com/problems/reducing-dishes/solutions/3354463/)

---

# JavaScript Code
```
var maxSatisfaction = function (satisfactions) {
  // Sort the satisfactions array in descending order, 
  // so that we process the highest satisfaction dishes first.
  satisfactions.sort((a, b) => b - a);

  // Initialize two variables to 0. 'max' holds 
  // the maximum satisfaction score we can obtain, 
  // and 'sum' holds the sum of the satisfaction scores of 
  // the dishes we have processed so far.
  let max = 0;
  let sum = 0;

  // Loop through the satisfactions array.
  for (const satisfaction of satisfactions) {
    // Add the satisfaction score of the current dish to the 'sum' variable.
    sum += satisfaction;

    // If the 'sum' variable becomes negative or zero, 
    // it means that the current dish and all the previous dishes 
    // cannot contribute to a positive satisfaction score, 
    // so we break out of the loop.
    if (sum <= 0) break;

    // If the 'sum' variable is positive, it means that 
    // the current dish and the previous dishes can contribute 
    // to a positive satisfaction score, so we update 'max' by 
    // adding the current value of 'sum' to it.
    max += sum;
  }

  // After the loop finishes, the final value of 'max' 
  // represents the maximum satisfaction score we can obtain 
  // from the given 'satisfactions' array.
  return max;
};

```
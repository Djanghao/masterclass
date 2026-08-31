# Construct Rectangle with Divisor-Based Dimensions

**Author:** traezeeofor
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-the-rectangle/solutions/5372694/](https://leetcode.com/problems/construct-the-rectangle/solutions/5372694/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
I first create an empty array list to hold the list of all possible divisors of the area. I then check if each number evenly divides the area, and if it does, I add it to the list of potential lengths. Once I have this list, I iterate through it in reverse order to find the first pair of divisors where the length is greater than or equal to the width. This ensures that the resulting rectangle has the minimum possible difference between length and width.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function constructRectangle(area: number): number[] {
    const lent = [];

    for (let i = area; i > 0; i--) {
      if (area % i === 0) {
        lent.push(i);
      }
    }

    for (let i = lent.length - 1; i >= 0; i--) {
      let j = area / lent[i];

      if (lent[i] >= j) {
        return [lent[i],j];
      }
    }

    return [-1,-1];
};
```
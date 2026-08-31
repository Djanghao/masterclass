# JavaScript divisors || Clean & simple || Faster than 100%

**Author:** shaun23
**Votes:** 1
**Link:** [https://leetcode.com/problems/four-divisors/solutions/2117202/](https://leetcode.com/problems/four-divisors/solutions/2117202/)

---

Intuition

- We are going to modify the basic "get divisors of a number" function (use trial division, count up to the sqrt of n).
- To minimize memory usage, let's calculate divisor sum and count on the fly, instead of keeping an array
- To reduce time, let's exit early if we found more than 4 divisors (this disqualifies num)

```
const getDivisorSum = (num) => {
  // keep track of the number and sum of divisors
  // note that divisors includes 1 and the number itself
  // we'll use the sqrt trick to cut down on time
  let divisorSum = 0;
  let divisorCount = 0;
  for (let i = 0; i * i <= num; i++) {
    if (num % i === 0) {
      // we found a divisor!
      divisorSum += i;
      divisorCount++;
      if (i !== num / i) {
        divisorSum += num / i;
        divisorCount++;
      }

      // we found too many divisors
      // let's break early
      if (divisorCount > 4) {
        return 0;
      }
    }
  }

  // we found exactly 4 divisors
  if (divisorCount === 4) {
    return divisorSum;
  }

  // we did not find enough divisors
  return 0;
};

const sumFourDivisors = (nums) => {
  return _.sumBy(nums, (num) => getDivisorSum(num));
};
```
# С++ / JavaScript / TypeScript fastest 🚀 and cleanest 🧼 solution🌚

**Author:** garryfreeman
**Votes:** 1
**Link:** [https://leetcode.com/problems/finding-3-digit-even-numbers/solutions/5817839/](https://leetcode.com/problems/finding-3-digit-even-numbers/solutions/5817839/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The goal is to find all possible 3-digit even numbers that can be formed using the digits from the input array. The key observations are:
- A 3-digit number cannot start with 0.
- The number must be even, so its last digit must be even.
- We only need to consider valid combinations of the available digits.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Count Digit Frequencies: First, we count how many times each digit appears in the input array to track availability.
2. Iterate Through Even Numbers: We iterate through all even numbers from 100 to 999 (since the number must be even) and for each number:
   - Extract the hundreds, tens, and ones digits.
   - Check if we have enough digits to form that number by decrementing the digit frequencies.
   - If we can form the number, we add it to the result list.
   - After checking a number, we restore the digit frequencies.

This approach guarantees that we only form valid even numbers using the available digits.

# Complexity
- Time complexity: $$O(1)$$ 
  - The loop iterates over a constant range of numbers (100 to 999), making the complexity effectively constant
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
  - The space used is limited to the digit frequency array and result list(?), both of which are independent of the input size
<!-- Add your space complexity here, e.g. $$O(n)$$ -->


> **Note**: This description was generated with the assistance of AI, as English is not my strong suit.,

# Code
```cpp []
class Solution {
public:
    vector<int> findEvenNumbers(vector<int>& digits) {
        vector<int> result;
        vector<int> repeats(10, 0);

        for (int digit : digits) {
            repeats[digit]++;
        }


        for (int number = 100; number <= 999; number += 2) {
            int hundreds = number / 100;
            int tens = (number % 100) / 10;
            int ones = number % 10;
            bool correct = true;

            if (--repeats[hundreds] < 0) {
                correct = false;
            }

            if (--repeats[tens] < 0) {
                correct = false;
            }

            if (--repeats[ones] < 0) {
                correct = false;
            }

            if (correct) {
                result.push_back(number);
            }

            repeats[hundreds]++;
            repeats[tens]++;
            repeats[ones]++;
        }

        return result;
    }
};
```

```typescript []
function findEvenNumbers(digits: number[]): number[] {
  const result = new Array<number>();
  const repeats = new Array<number>(10).fill(0);

  for (const digit of digits) {
    repeats[digit]++;
  }

  for (let i = 100; i <= 999; i+= 2) {
    const hundreds = Math.floor(i / 100);
    const tens = Math.floor((i % 100) / 10);
    const ones = i % 10;
    let correct = true;

    if (--repeats[hundreds] < 0) {
      correct = false;
    }

    if (--repeats[tens] < 0) {
      correct = false;
    }

    if (--repeats[ones] < 0) {
      correct = false;
    }

    if (correct) {
      result.push(i);
    }

    repeats[hundreds]++;
    repeats[tens]++;
    repeats[ones]++;
  }

  return result;
}
```

```javascript []
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
  const result = new Array();
  const repeats = new Array(10).fill(0);

  for (const digit of digits) {
    repeats[digit]++;
  }

  for (let i = 100; i <= 999; i += 2) {
    const hundreds = Math.floor(i / 100);
    const tens = Math.floor((i % 100) / 10);
    const ones = i % 10;
    let correct = true;

    if (--repeats[hundreds] < 0) {
      correct = false;
    }

    if (--repeats[tens] < 0) {
      correct = false;
    }

    if (--repeats[ones] < 0) {
      correct = false;
    }

    if (correct) {
      result.push(i);
    }

    repeats[hundreds]++;
    repeats[tens]++;
    repeats[ones]++;
  }

  return result;
};
```
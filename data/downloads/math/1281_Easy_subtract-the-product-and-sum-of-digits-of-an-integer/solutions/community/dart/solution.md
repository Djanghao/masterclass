# Integer Digit Extraction and Calculation

**Author:** adhilfouzi
**Votes:** 1
**Link:** [https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/solutions/4689921/](https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/solutions/4689921/)

---

# Intuition
The intuition here is to convert the given integer into a list of its digits so that we can easily calculate the product and sum of those digits. Once we have the product and sum, we can simply subtract the sum from the product to get the desired result.

# Approach
Our approach involves converting the integer `n` into a list of its digits. We then iterate through this list, calculating both the product and the sum of the digits. Finally, we return the difference between the product and the sum.

# Complexity
- Time complexity:
Converting the integer into a list of digits takes $$O(\\log_{10}n)$$ time, where $$n$$ is the value of the input integer. Then, iterating through the list takes $$O(d)$$ time, where $$d$$ is the number of digits in the integer. Therefore, the overall time complexity is $$O(\\log_{10}n + d)$$.

- Space complexity:
Converting the integer into a list of digits requires additional space to store the list, which takes $$O(d)$$ space, where $$d$$ is the number of digits in the integer. Therefore, the space complexity is $$O(d)$$, where $$d$$ is the number of digits in the integer.


# Code
```
class Solution {
  int subtractProductAndSum(int n) {
    // Convert the integer n into a list where each digit becomes an element
    List<int> dot = n.toString().split('').map((String digit) => int.parse(digit)).toList();

    // Initialize product and sum variables with the first digit
    int product = dot.first, sum = dot.first;

    // Loop through the remaining digits
    for(int i = 1; i < dot.length; i++) {
        // Get the current digit
        int number = dot[i];
        
        // Update product and sum
        product *= number;
        sum += number;

        // Print for debugging (optional)
        print('$product : $sum');
    }

    // Return the difference between product and sum
    return product - sum;
  }
}

```
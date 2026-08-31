# C# Greedy Solution

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-to-base-2/solutions/5486823/](https://leetcode.com/problems/convert-to-base-2/solutions/5486823/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->To solve this problem, we need to convert a given integer n into its representation in base -2. The key difference from standard base conversion is that the base here is negative.
___

# Approach
<!-- Describe your approach to solving the problem. -->//  Initial Check: If n is 0, return "0" since it's the only case where the result should be a single 0.
//  Loop Through Division: We repeatedly divide n by -2 and get the remainder. The division step (n / -2) 
//  gives the next quotient.
//  Adjust for Negative Remainder: If the remainder is negative (which can happen because the base is 
//  negative), we adjust the remainder by adding 2 and increment the quotient by 1 to balance the 
//  equation.
//  Building the Result: We use a StringBuilder to efficiently construct the result string. Insert each 
//  remainder at the beginning of the string.
//  Return Result: After the loop ends, convert the StringBuilder to a string and return it.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(log n). This is because in each iteration of the while loop, the magnitude of 'n' is reduced by at least half (since we are dividing by '-2'), leading to logarithmic behavior relative to the size of 'n'.
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->Also O(log n). This is because the number of digits required to represent 'n' in base '-2' is proportional to the number of iterations of the loop, which is logarithmic in the size of 'n'. Each digit is appended to the result string, resulting in space usage that grows logarithmically with 'n'.
___

# Code
```
public class Solution {
    public string BaseNeg2(int n) {
        if (n == 0) return "0";

        StringBuilder result = new StringBuilder();

        while (n != 0) {
            int remainder = n % -2;
            n = n / -2;

            // Adjust remainder and quotient for negative base
            if (remainder < 0) {
                remainder += 2;
                n += 1;
            }

            result.Insert(0, remainder);
        }

        return result.ToString();
    }
}
```
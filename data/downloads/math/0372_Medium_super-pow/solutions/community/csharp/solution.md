# ✅C# Solution

**Author:** alexvenmil
**Votes:** 0
**Link:** [https://leetcode.com/problems/super-pow/solutions/4457249/](https://leetcode.com/problems/super-pow/solutions/4457249/)

---

![image.png](./images/0.png)


# Code
```
public class Solution {
    private const int Modulo = 1337;

    public int SuperPow(int a, int[] b) {
        if (b.Length == 0) return 1;  // Base case: any number to the power of 0 is 1

        int lastDigit = b[b.Length - 1];
        Array.Resize(ref b, b.Length - 1);  // Remove the last digit

        int part1 = PowMod(a, lastDigit);
        int part2 = PowMod(SuperPow(a, b), 10);

        // Combine the results with modular multiplication
        return (part1 * part2) % Modulo;
    }

    private int PowMod(int baseNum, int exponent) {
        int result = 1;

        // Reduce the base modulo Modulo to avoid overflow
        baseNum %= Modulo;

        while (exponent > 0) {
            // If the current exponent is odd, multiply by the base (modulo Modulo)
            if (exponent % 2 == 1) {
                result = (result * baseNum) % Modulo;
            }

            // Square the base (modulo Modulo) and reduce the exponent by half
            baseNum = (baseNum * baseNum) % Modulo;
            exponent /= 2;
        }

        return result;
    }
}

```
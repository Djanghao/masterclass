# ✅94.21%🔥Easy Solution🔥With Explanation🔥

**Author:** MrAke
**Votes:** 160
**Link:** [https://leetcode.com/problems/fraction-addition-and-subtraction/solutions/5677041/](https://leetcode.com/problems/fraction-addition-and-subtraction/solutions/5677041/)

---

# Intuition \u2712\uFE0F
#### When we see the problem, the goal is to add and subtract fractions represented as a string expression. Since fractions have different denominators, we'll need to manage this by finding a common denominator when adding or subtracting them. We also need to simplify the result to ensure it's in its irreducible form.

---
# Approach \uD83D\uDE80
#### *`Extract the Fractions`*: First, we extract all the numerators and denominators from the string using regular expressions. This helps in breaking down the problem into smaller, manageable pieces.
#### *`Initialize the Result`*: Start with a fraction represented by a numerator of 0 and a denominator of 1, which effectively means 0/1.
#### *`Add/Subtract Fractions`*: Iterate over the extracted numerators and denominators, adding each fraction to the result using cross multiplication to handle the different denominators. This step effectively reduces multiple fraction operations to basic arithmetic.
#### *`Simplify the Result`*: After computing the final fraction, simplify it by dividing the numerator and denominator by their greatest common divisor (GCD).
#### *`Return the Fraction`*: Finally, return the result in the form of "numerator/denominator".


---



- # Time complexity:
#### The time complexity is $$O(n)$$, where $$n$$ is the length of the input string. This is because we are processing each character of the input string to extract numerators and denominators and then performing a fixed amount of work for each fraction.


- # Space complexity:
#### The space complexity is $$O(1)$$, excluding the input and output, since we're only using a fixed amount of extra space for the numerator, denominator, and a few variables for calculations. The space used by the regular expression for extracting numbers is proportional to the number of fractions but remains constant with respect to the length of the input.
---

# Code
```python []
class Solution:
    def fractionAddition(self, expression: str) -> str:
        nums = list(map(int, re.findall(r'[+-]?\\d+', expression)))
        numerator = 0
        denominator = 1
        
        for i in range(0, len(nums), 2):
            num, den = nums[i], nums[i + 1]
            numerator = numerator * den + num * denominator
            denominator *= den
        
        common_divisor = gcd(numerator, denominator)
        return f"{numerator // common_divisor}/{denominator // common_divisor}"
```
```C++ []
#include <string>
#include <vector>
class Solution {
public:
    string fractionAddition(string expression) {
        int numerator = 0, denominator = 1;
        int i = 0, n = expression.size();

        while (i < n) {
            int sign = 1;
            if (expression[i] == '+' || expression[i] == '-') {
                if (expression[i] == '-') sign = -1;
                i++;
            }

            int num = 0;
            while (i < n && isdigit(expression[i])) {
                num = num * 10 + (expression[i] - '0');
                i++;
            }
            num *= sign;

            i++;

            int den = 0;
            while (i < n && isdigit(expression[i])) {
                den = den * 10 + (expression[i] - '0');
                i++;
            }

            numerator = numerator * den + num * denominator;
            denominator *= den;

            int gcdVal = gcd(abs(numerator), denominator);
            numerator /= gcdVal;
            denominator /= gcdVal;
        }

        return to_string(numerator) + "/" + to_string(denominator);
    }
};

```
```javascript []
var fractionAddition = function(expression) {
    let numerator = 0, denominator = 1;

    const regex = /([+-]?\\d+)\\/(\\d+)/g;
    let match;

    while ((match = regex.exec(expression)) !== null) {
        let num = parseInt(match[1]);
        let den = parseInt(match[2]);

        numerator = numerator * den + num * denominator;
        denominator *= den;

        let gcdVal = gcd(Math.abs(numerator), denominator);
        numerator /= gcdVal;
        denominator /= gcdVal;
    }

    return numerator + "/" + denominator;
};

function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

```
```java []
class Solution {
    public String fractionAddition(String expression) {
        int numerator = 0, denominator = 1;
        
        Pattern pattern = Pattern.compile("([+-]?\\\\d+)/(\\\\d+)");
        Matcher matcher = pattern.matcher(expression);
        
        while (matcher.find()) {
            int num = Integer.parseInt(matcher.group(1));
            int den = Integer.parseInt(matcher.group(2));
            
            numerator = numerator * den + num * denominator;
            denominator *= den;
            
            int gcdVal = gcd(Math.abs(numerator), denominator);
            numerator /= gcdVal;
            denominator /= gcdVal;
        }
        
        return numerator + "/" + denominator;
    }
    
    private int gcd(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
}

```
```C# []
public class Solution {
    public string FractionAddition(string expression) {
        int numerator = 0, denominator = 1;

        Regex regex = new Regex(@"([+-]?\\d+)\\/(\\d+)");
        MatchCollection matches = regex.Matches(expression);

        foreach (Match match in matches) {
            int num = int.Parse(match.Groups[1].Value);
            int den = int.Parse(match.Groups[2].Value);

            numerator = numerator * den + num * denominator;
            denominator *= den;

            int gcdVal = GCD(Math.Abs(numerator), denominator);
            numerator /= gcdVal;
            denominator /= gcdVal;
        }

        return $"{numerator}/{denominator}";
    }

    private int GCD(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
}

```
---

![Screenshot 2023-08-20 065922.png](./images/0.png)


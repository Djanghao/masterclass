# Fast solution in Ruby (beats 100%)

**Author:** smakthe
**Votes:** 1
**Link:** [https://leetcode.com/problems/fraction-addition-and-subtraction/solutions/5677151/](https://leetcode.com/problems/fraction-addition-and-subtraction/solutions/5677151/)

---

# Intuition
First intuition was to use regular expression to split all the fractional expressions and evaluate them individually

# Approach
The `numers` array consists of numerators and the `denoms` array consists of denominators extracted from the fractions using regex. Then the denominators are to be multiplied to get the final denominator and the co-efficient for the numerators of each fraction will be the final denominator divided by the denominator of that fraction. After that the final numerator, i.e, sum of the numerators multiplied by their coefficient is calculated and the greatest common divisor (gcd) of the final numerator and the final denominator is calculated. The result will be in the form of (final numerator/gcd) / (final denominator/gcd)

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```ruby []
# @param {String} expression
# @return {String}
def fraction_addition(expression)
    fractions = expression.scan(/(\\D*\\d+\\/\\d+)/)
    numers = fractions.map{|frac| frac[0].match(/(\\D*\\d+)\\/(\\d+)/)[1] }.map(&:to_i)
    denoms = fractions.map{|frac| frac[0].match(/(\\D*\\d+)\\/(\\d+)/)[2] }.map(&:to_i)
    denominator = denoms.reduce(:*)
    num_coeff = denoms.map{|n| denominator/n }
    numerator = 0
    for i in 0...numers.length
        numerator += numers[i]*num_coeff[i]
    end
    return numerator.to_s + "/1" if numerator == 0
    gcd = numerator.gcd(denominator)
    (numerator/gcd).to_s + "/" + (denominator/gcd).to_s
end
```
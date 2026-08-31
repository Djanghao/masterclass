# Simple iteration beats most

**Author:** algoturtle
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/solutions/4154580/](https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/solutions/4154580/)

---


Loop through the digits in "number" and remove it if matches the specified "digit". Then, convert the remaining digits to integer and store them in the 'largest' variable if they are greater than the current largest value.

Need to clone the original "number" to a temp variable so that we don't manipulate the original accidentally.
# Code
```
# @param {String} number
# @param {Character} digit
# @return {String}
def remove_digit(number, digit)
    i = 0
    largest = nil

    while i < number.size
        if number[i] == digit
            tmp = number.clone
            tmp[i] = ""
            largest = tmp.to_i if largest.nil?
            largest = [largest, tmp.to_i].max
        end

        i += 1
    end

    largest.to_s
end

```
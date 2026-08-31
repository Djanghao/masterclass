# Easy to understand solution

**Author:** Masacr
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-adjacent-almost-equal-characters/solutions/5611570/](https://leetcode.com/problems/remove-adjacent-almost-equal-characters/solutions/5611570/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Intuition told me there was a pretty simple solution to this problem, and after thiking about it for a bit arrived at the conclusion that the amount of changes needed is gonna be the sum of the rounded down division of the size of each group of letters divided by 2. For example if we have a group of 3 similar letters (a,b,c) we only need to change b for the string to no longer have 3 similar letters in a row.

# Approach
<!-- Describe your approach to solving the problem. -->
Just thinking of an easy to implement and easy to read solution I decided on simply looping through the string once, storing the last char into a variable and comparing the last char with the current one, adding the number of almost equal letters to a counter and, whenever the chars are not almost equal or we finish the string, we add the counter / 2 to the total result.

# Complexity
- Time complexity: O(n) we loop only once the string, so n is the size of the string
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1) we only use the given string and 3 other variables
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn remove_almost_equal_characters(word: String) -> i32 {
        let mut last_char = ' ';
        let mut counter = 1;
        let mut total_result = 0;
        for char in word.chars() {
            if last_char.to_digit(36) != None && char.to_digit(36).unwrap().abs_diff(last_char.to_digit(36).unwrap()) <= 1{
                counter += 1;
            }else{
                if counter > 1{
                    total_result += counter / 2;
                }

                counter = 1;
            }
            last_char = char;
        }

        if counter > 1{
            total_result += counter / 2;
        }

        return total_result;
    }
}
```
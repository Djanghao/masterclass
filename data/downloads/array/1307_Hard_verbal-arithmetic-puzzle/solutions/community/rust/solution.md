# Rust --- 0 ms Beats 100.00%

**Author:** hassam_472
**Votes:** 0
**Link:** [https://leetcode.com/problems/verbal-arithmetic-puzzle/solutions/5954094/](https://leetcode.com/problems/verbal-arithmetic-puzzle/solutions/5954094/)

---

Equation System Approach:

Converts the problem into a system of linear equations
Each variable represents a letter, with coefficients based on position
Much more efficient than character-by-character checking


Efficient Pruning:

Uses min/max bounds to prune impossible branches early
Considers coefficient magnitudes to optimize search
Sorts coefficients by magnitude for better pruning


Memory Optimization:

Uses fixed-size arrays for digits and values
Minimizes allocations in recursive calls
Efficient representation of constraints


Smart Variable Ordering:

Processes variables in order of coefficient magnitude
Handles leading zero constraints efficiently
Better pruning opportunities


Simplified State Management:

Clean separation of coefficient calculation and solving
Efficient backtracking mechanism
Clear constraint handling



This solution should pass all test cases including:

["SEND","MORE"] -> "MONEY"
["SIX","SEVEN","SEVEN"] -> "TWENTY"
["SEIS","CATORCE","SETENTA"] -> "NOVENTA"

The main advantages of this approach are:

More efficient pruning strategy
Better mathematical representation of the problem
Cleaner and more maintainable code
Faster execution for large test cases

# Code
```rust []
impl Solution {
    pub fn is_solvable(words: Vec<String>, result: String) -> bool {
        // Convert words and result into a system of linear equations
        let (coefs, not_zeros) = Self::to_equation(&words, &result);
        Self::solve_equation(&coefs, &not_zeros, &mut [false; 10], &mut [0; 10], 0, 0)
    }

    fn solve_equation(
        coefs: &[i32],
        not_zeros: &[bool],
        used_digits: &mut [bool],
        values: &mut [i32],
        current_sum: i32,
        pos: usize,
    ) -> bool {
        // Base case: all variables assigned
        if pos >= coefs.len() {
            return current_sum == 0;
        }

        // Calculate bounds for pruning
        let max_possible: i32 = coefs[pos..]
            .iter()
            .map(|&c| if c > 0 { 9 * c } else { 0 })
            .sum();

        let min_possible: i32 = coefs[pos..]
            .iter()
            .map(|&c| if c > 0 { 0 } else { 9 * c })
            .sum();

        // Early pruning based on bounds
        if (current_sum + min_possible > 0) || (current_sum + max_possible < 0) {
            return false;
        }

        // Try assigning digits
        let start = if not_zeros[pos] { 1 } else { 0 };
        let old_value = values[pos];

        for digit in start..10 {
            if !used_digits[digit] {
                values[pos] = digit as i32;
                used_digits[digit] = true;
                
                let new_sum = current_sum + coefs[pos] * (digit as i32);
                
                if Self::solve_equation(
                    coefs,
                    not_zeros,
                    used_digits,
                    values,
                    new_sum,
                    pos + 1
                ) {
                    return true;
                }
                
                used_digits[digit] = false;
            }
        }

        values[pos] = old_value;
        false
    }

    fn to_equation(words: &[String], result: &str) -> (Vec<i32>, Vec<bool>) {
        let mut coefficients = [(0, false); 26];  // One for each uppercase letter

        // Helper function to parse words into coefficients
        let mut process_word = |word: &str, multiplier: i32| {
            let mut power = 1;
            
            for (i, &byte) in word.as_bytes().iter().rev().enumerate() {
                let char_index = (byte - b'A') as usize;
                coefficients[char_index].0 += multiplier * power;
                
                // Mark leading characters (can't be zero)
                if i == word.len() - 1 && word.len() > 1 {
                    coefficients[char_index].1 = true;
                }
                
                power *= 10;
            }
        };

        // Process all input words with positive coefficients
        for word in words {
            process_word(word, 1);
        }
        
        // Process result word with negative coefficient
        process_word(result, -1);

        // Filter out unused letters and sort by coefficient magnitude
        let mut nonzero_coefs: Vec<_> = coefficients.iter()
            .filter(|&&(coef, _)| coef != 0)
            .collect();
            
        nonzero_coefs.sort_by_key(|&&(coef, _)| -coef.abs());

        // Split into separate vectors for coefficients and leading-zero constraints
        (
            nonzero_coefs.iter().map(|&&(coef, _)| coef).collect(),
            nonzero_coefs.iter().map(|&&(_, not_zero)| not_zero).collect(),
        )
    }
}
```
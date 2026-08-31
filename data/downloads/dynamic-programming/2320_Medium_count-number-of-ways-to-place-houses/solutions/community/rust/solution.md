# ✅ [JS/Rust] Dynamic Programming Approach w/ explanation 🔥

**Author:** ad0x99
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-number-of-ways-to-place-houses/solutions/5192157/](https://leetcode.com/problems/count-number-of-ways-to-place-houses/solutions/5192157/)

---

**\uD83D\uDC4D In the event that you found my solution to be beneficial, I would be most grateful if you would consider upvoting it. This action would serve as a significant motivator for me to continue providing additional solutions in the future. \uD83D\uDE46\u200D\u2642\uFE0F**

---

# Dynamic Programming Approach

1. We initialize `mod` variable to store the modulo value to handle large numbers.

2. We initialize the number of ways to place houses such that the last plot is empty, and the number of ways to place houses such that the last plot has a house is `1n` (because, there's only one way where no house on the last plot or a house on the last plot).

3. We iterate over the number of plots from `2` to `n`. This is because we already considered the base cases for `n = 0` and `n = 1` in step 2 and we want to handle streets with at least `2` plots.

4. **Dynamic Programming**
    - 4.1: Imagine an array [`newEmpty, newHouse]` where `newEmpty` represents the updated number of ways with an empty last plot after considering the current plot and `newHouse` represents the updated number of ways with a house on the last plot.
    - 4.2: We calculate the new values for empty and house based on the previous values:
    - 4.2.1: `(house + empty) % mod`: This calculates the total number of ways to reach the current plot considering both possibilities (previous plot empty or having a house). The modulo operation ensures the result stays within the `mod` range. The `empty` value is simply copied over as it represents the scenario where the current plot remains empty (similar to the previous plot).
    - 4.2.2: The `empty` value is updated to the sum of the previous house and empty modulo mod, and the house value is updated to the previous empty.

5. After the loop finishes iterating through all plots, the `empty` and `house` variables hold the number of ways to end with an empty or house on the last plot, respectively.

6. The `oneSideCombination` variable combines these two possibilities `(empty + house)` using modulo. It represents the total number of valid ways to build houses on one side of the street (either all houses on the left or all on the right).

7. Since houses can be placed on either side of the street `independently`, We square the `oneSideCombination` to account for both sides. Think of it as multiplying the number of placements for one side by the number of placements for the other. Finally, we apply the modulo operation (`% mod`) one last time to ensure the final result stays within the defined modulo range.

```
For example: n = 3

- Initial state: empty = 1, house = 1

First Iteration (i = 2):

- empty: [1]     -> [1, 1] = 2
- house: [1]     -> [1]
- empty = 2, house = 1

Second Iteration (i = 3):

- empty: [1, 1]  -> [1, 1, 1] = 3
- house: [1, 1]  -> [1, 1]
- empty = 3, house = 2

Final Calculation:
- oneSideCombination = 3 + 2 = 5
- totalCombinations = 5 * 5 = 25
```


# Complexity
- Time complexity: `O(n)` - where `n` is the number of plots.

- Space complexity: `O(1)`

# Code
```javascript []
const countHousePlacements = (n) => {
  const mod = BigInt(10 ** 9 + 7);
  let empty = 1n; 
  let house = 1n; 

  for (let i = 2; i <= n; i++) {
    // Swap the house and empty plots positions
    [empty, house] = [(house + empty) % mod, empty];
  }

  // The total number of ways for one side of the street
  let oneSideCombination = (empty + house) % mod;
  return (oneSideCombination * oneSideCombination) % mod;
};
```
```rust []
impl Solution {
    pub fn count_house_placements(n: i32) -> i32 {
        let mod_val = 1_000_000_007i64;
        let mut empty = 1i64;
        let mut house = 1i64;

        for _ in 2..=n {
            // Swap the house and empty plots positions
            let new_empty = (house + empty) % mod_val;
            house = empty;
            empty = new_empty;
        }

        // The total number of ways for one side of the street
        let one_side_combination = (empty + house) % mod_val;
        ((one_side_combination * one_side_combination) % mod_val) as i32
    }
}

```

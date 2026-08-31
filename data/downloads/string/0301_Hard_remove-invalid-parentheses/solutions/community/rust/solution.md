# ✅ [JS/Rust] Recursion & Backtracking | DFS | BFS Approaches w/ explanation 🔥

**Author:** ad0x99
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-invalid-parentheses/solutions/5197872/](https://leetcode.com/problems/remove-invalid-parentheses/solutions/5197872/)

---

**\uD83D\uDC4D In the event that you found my solution to be beneficial, I would be most grateful if you would consider upvoting it. This action would serve as a significant motivator for me to continue providing additional solutions in the future. \uD83D\uDE46\u200D\u2642\uFE0F**

---


# Recursion with Depth-first Search & Backtracking Approach

1. We initialize the following variables:
    - 1.1: The `longestString` variable to -1 and will store the length of the longest valid string found so far.
    - 1.2: The `result` Set object is used to store the unique valid strings found during the search. Using a `Set` ensures we don't add `duplicate` strings.
    - 1.3: The `currentSolution` array will hold the current combination of parentheses (including letters) being explored during the search.
    - 1.4: The `openingCount` variable keeps track of the number of opening parentheses (() encountered so far.
    - 1.5: The `closingCount` variable keeps track of the number of closing parentheses ()) encountered so far.

2. **The base case**:
    - 2.1: If `currentIdx` reaches the end of the string, it means we've processed all characters.
    - 2.2: Inside the base case, if we found potentially valid parentheses combination.
    - 2.3: And if we found a new `longest valid string`, then we update `longestString` with the new length, clear the `result` set to remove previous entries (we only want the longest valid strings for a given length), and we add the current valid string to the result set.
    - 2.4: Otherwise, if the current valid string has the same length as the longest found so far, simply add it to the `result` set (we might have multiple longest strings).

3. **Recursive Exploration**: There are 3 scenarios where the current string is an `opening` or `closing` parenthesis, and a `letter`.

4. If the current character is an `opening parenthesis`:
    - 4.1: We add the `opening` parenthesis to the `currentSolution`.
    - 4.2: We make a recursive call to `dfs` with increased `currentIdx` to move to the next character, updated `currentSolution` with the added opening parenthesis, incremented `openingCount`, and unchanged `closingCount`.
    - 4.3: After the recursive call, we remove the `opening` parenthesis from `currentSolution` (backtracking).
    - 4.4: This explores the possibility of including the opening parenthesis in the valid combination.

5. If the current character is a `closing parenthesis`, there are two sub-cases to consider here are to `skip` or `include` the closing parenthesis.

6. If we choose to skip the closing parenthesis.
    - 6.1: We make a recursive call to `dfs` with, increased `currentIdx`, unchanged `currentSolution`, unchanged `openingCount`, and unchanged `closingCount`.
    - 6.2: This explores the possibility of excluding the closing parenthesis from the valid combination.

7. If we choose to include the closing parenthesis only if `openingCount > closingCount`. This check ensures we only include closing parentheses if there are enough opening parentheses before it. Otherwise, it wouldn't be a valid combination.
    - 7.1: We add the `closing` parenthesis to `currentSolution`
    - 7.2: We make a recursive call to `dfs` with increased `currentIdx`, updated `currentSolution` with the added closing parenthesis, unchanged `openingCount`, and incremented `closingCount`.
    - 7.3: After the recursive call, we remove the `closing` parenthesis from `currentSolution` (backtracking).
    - 7.4: This explores the possibility of including the `closing` parenthesis in the valid combination, but only if it's a valid placement.

8. If the current character is a `letter`:
    - 8.1. We simply add the `letter` to the `currentSolution` and make a recursive call to `dfs` with all parameters unchanged.
    - 8.2: After the recursive call, remove the letter from `currentSolution` (backtracking).
    - 8.3: This includes the letter in the current combination and continues exploring

# Complexity

- Time complexity: `O(2 ^ n)` - where `n` is the length of the input string. This is because in the worst case scenario, we are exploring all possible combinations of removing parentheses from the input string.

- Space complexity: `O(n)`

# Code
```javascript []
const removeInvalidParentheses = (s) => {
  let longestString = -1;
  let result = new Set(); // Using Set to avoid the duplicates result
  let currentSolution = [];
  let openingCount = 0;
  let closingCount = 0;

  const dfs = (string, currentIdx, currentSolution, openingCount, closingCount) => {
    // Base case
    if (currentIdx >= string.length) {
      // If we found a valid parentheses
      if (openingCount === closingCount) {
        if (currentSolution.length > longestString) {
          longestString = currentSolution.length;

          result = new Set();
          result.add(currentSolution.join(''));
        } else if (currentSolution.length === longestString) {
          result.add(currentSolution.join(''));
        }
      }
    } else {
      // Get the current character (parentheses or letter)
      let currentCharacter = string.charAt(currentIdx);

      // If the current character is a opening parenthesis
      if (currentCharacter === '(') {
        currentSolution.push(currentCharacter);
        dfs(string, currentIdx + 1, currentSolution, openingCount + 1, closingCount);
        currentSolution.pop();

        dfs(string, currentIdx + 1, currentSolution, openingCount, closingCount);
      } else if (currentCharacter === ')') {
        // If the current character is a closing parenthesis
        dfs(string, currentIdx + 1, currentSolution, openingCount, closingCount);

        // In case we can't take the current closing parenthesis
        if (openingCount > closingCount) {
          currentSolution.push(currentCharacter);
          dfs(
            string,
            currentIdx + 1,
            currentSolution,
            openingCount,
            closingCount + 1
          );
          currentSolution.pop();
        }
      } else {
        // If the current character is a letter
        currentSolution.push(currentCharacter);
        dfs(string, currentIdx + 1, currentSolution, openingCount, closingCount);
        currentSolution.pop();
      }
    }
  };

  dfs(s, 0, currentSolution, openingCount, closingCount);
  return Array.from(result);
};
```
```rust []
use std::collections::HashSet;

impl Solution {
    pub fn remove_invalid_parentheses(s: String) -> Vec<String> {
        let mut longest_string = -1;
        let mut result = HashSet::new();
        let mut current_solution = Vec::new();
        let mut opening_count = 0;
        let mut closing_count = 0;

        fn dfs(
            string: &str,
            longest_string: &mut i32,
            current_index: usize,
            current_solution: &mut Vec<char>,
            opening_count: i32,
            closing_count: i32,
            result: &mut HashSet<String>,
        ) {
            // Base case
            if current_index >= string.len() {
                if opening_count == closing_count {
                    if current_solution.len() as i32 > *longest_string {
                        *longest_string = current_solution.len() as i32;

                        result.clear();
                        result.insert(current_solution.iter().collect());
                    } else if current_solution.len() as i32 == *longest_string {
                        result.insert(current_solution.iter().collect());
                    }
                }
            } else {
                let current_character = string.chars().nth(current_index).unwrap();

                if current_character == '(' {
                    // In case we take the current opening parenthesis
                    current_solution.push(current_character);
                    dfs(
                        string,
                        longest_string,
                        current_index + 1,
                        current_solution,
                        opening_count + 1,
                        closing_count,
                        result,
                    );
                    current_solution.pop();

                    // // In case we don't take the current opening parenthesis
                    dfs(
                        string,
                        longest_string,
                        current_index + 1,
                        current_solution,
                        opening_count,
                        closing_count,
                        result,
                    );
                } else if current_character == ')' {
                    // In case we don't take the current closing parenthesis
                    dfs(
                        string,
                        longest_string,
                        current_index + 1,
                        current_solution,
                        opening_count,
                        closing_count,
                        result,
                    );

                    // In case we can't take the current closing parenthesis

                    if opening_count > closing_count {
                        current_solution.push(current_character);
                        dfs(
                            string,
                            longest_string,
                            current_index + 1,
                            current_solution,
                            opening_count,
                            closing_count + 1,
                            result,
                        );
                        current_solution.pop();
                    }
                } else {
                    // If the current character is a letter
                    // Just add it to the current solution
                    current_solution.push(current_character);
                    dfs(
                        string,
                        longest_string,
                        current_index + 1,
                        current_solution,
                        opening_count,
                        closing_count,
                        result,
                    );
                    current_solution.pop();
                }
            }
        }

        dfs(
            &s,
            &mut longest_string,
            0,
            &mut current_solution,
            opening_count,
            closing_count,
            &mut result,
        );
        result.into_iter().collect()
    }
}

```

---

**\uD83D\uDC4D In the event that you found my solution to be beneficial, I would be most grateful if you would consider upvoting it. This action would serve as a significant motivator for me to continue providing additional solutions in the future. \uD83D\uDE46\u200D\u2642\uFE0F**

---

# Recursion with Breadth-first Search & Backtracking Approach

1. We initialize a `result` Set object to store the unique valid strings found during the search. Using a `Set` ensures we don't add duplicate strings, a `queue` to store strings that will be explored in a Breadth-First Search (BFS) manner,and a `found` boolean flag to track if a valid string has been found in the current level of BFS exploration.

2. As long as there is element in the queue, we continue the loop

3. **Inside the loop**:
    - 3.1: We initialize `numberOfString` variable to store the number of strings in the current level (number of elements in the queue at the beginning of the loop).
    - 3.2: We initialize `seen` as a new Set object for each level to keep track of strings already explored within that level. This avoids revisiting the same string with a single character removed multiple times in the same level.

4. **Exploring Strings in a Level**: We iterate through each string (`currentString`) in the current level.
    - 4.1: The first string in the queue is removed.
    - 4.2: We check if the current string is valid (if the string has balanced parentheses), we add it to the `result` set and set `found` to `true` to indicate a valid string was found in this level.
    - 4.3: If `found` is `true`, we can `skip` the rest of the exploration for this level (optimization) because we're only interested in finding the shortest valid strings.

5. **Generating and Adding New Strings**: We iterate through each character (`j`) in the currentString.
    - 5.1: We will skip characters that are not opening or closing parentheses.
    - 5.2: We create a new string (`nextString`) by removing the character at index `j` from `currentString`.
    - 5.2: If the new string (`nextString`) hasn't been explored in the current level, we add the new string to the `seen` set to mark it as explored in this level and to the queue for exploration in the next level.

6. If found becomes `true` after processing a level, we `break` the loop. This is because we're only interested in the shortest valid strings, and finding one in a level guarantees no shorter strings will be found in later levels.

7. After the BFS exploration finishes, we convert the result set (containing unique valid strings) to an array and return it.

# Complexity
- Time complexity: `O(2^n)`, where `n` is the length of the input `string`. This is because in the worst case scenario, we are exploring all possible combinations of removing parentheses from the input string.

- Space complexity: `O(2^n)` because in the worst case scenario, the `queue` can contain all possible combinations of the input string after removing parentheses.

# Code
```javascript []
const removeInvalidParentheses = (s) => {
  let result = new Set();
  let queue = [s];
  let found = false;

  while (queue.length) {
    let numberOfString = queue.length;
    let seen = new Set();

    for (let i = 0; i < numberOfString; i++) {
      let currentString = queue.shift();

      if (isValid(currentString)) {
        result.add(currentString);
        found = true;
      }

      if (found) continue;

      for (let j = 0; j < currentString.length; j++) {
        if (currentString[j] !== '(' && currentString[j] !== ')') continue;

        let nextString = currentString.slice(0, j) + currentString.slice(j + 1);

        if (!seen.has(nextString)) {
          seen.add(nextString);
          queue.push(nextString);
        }
      }
    }

    if (found) break;
  }

  return Array.from(result);
};

const isValid = (s) => {
  let balance = 0;

  for (let char of s) {
    if (char === '(') balance++;
    if (char === ')') balance--;
    if (balance < 0) return false;
  }

  return balance === 0;
};
```
```rust []
use std::collections::{HashSet, VecDeque};

impl Solution {
    pub fn remove_invalid_parentheses(s: String) -> Vec<String> {
        let mut result = HashSet::new();
        let mut queue = VecDeque::new();
        queue.push_back(s.clone());
        let mut found = false;

        while !queue.is_empty() {
            let number_of_strings = queue.len();
            let mut seen = HashSet::new();

            for i in 0..number_of_strings {
                if let Some(current_string) = queue.pop_front() {
                    if (Self::is_valid_parentheses(&current_string)) {
                        result.insert(current_string.clone());
                        found = true
                    }

                    if found {
                        continue;
                    }

                    for j in 0..current_string.len() {
                        if current_string.chars().nth(j) != Some('(')
                            && current_string.chars().nth(j) != Some(')')
                        {
                            continue;
                        }

                        let next_string =
                            format!("{}{}", &current_string[0..j], &current_string[j + 1..]);

                        if !seen.contains(&next_string) {
                            seen.insert(next_string.clone());
                            queue.push_back(next_string);
                        }
                    }
                }
            }

            if found {
                break;
            }
        }

        result.into_iter().collect()
    }

    fn is_valid_parentheses(s: &str) -> bool {
        let mut balance = 0;

        for c in s.chars() {
            if c == '(' {
                balance += 1;
            }
            if c == ')' {
                balance -= 1;
            }
            if balance < 0 {
                return false;
            }
        }

        balance == 0
    }
}
```

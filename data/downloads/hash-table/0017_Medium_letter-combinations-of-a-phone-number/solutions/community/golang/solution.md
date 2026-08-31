# 📞 100% Backtracking & Iterative [VIDEO]  Letter Combinations of a Phone Number

**Author:** vanAmsen
**Votes:** 224
**Link:** [https://leetcode.com/problems/letter-combinations-of-a-phone-number/solutions/3855474/](https://leetcode.com/problems/letter-combinations-of-a-phone-number/solutions/3855474/)

---

# Intuition
Given a string containing digits from 2-9 inclusive, we need to return all possible letter combinations that the number could represent, just like on a telephone's buttons. To accomplish this, we present two different approaches:

1. **Backtracking Approach**: This approach leverages recursion to explore all possible combinations. We create a recursive function that takes the current combination and the next digits to explore. For each digit, we iterate through its corresponding letters and recursively explore the remaining digits. We append the combination when no more digits are left to explore.

2. **Iterative Approach**: This approach builds the combinations iteratively without using recursion. We start with an empty combination and iteratively add letters for each digit in the input string. For each existing combination, we append each corresponding letter for the current digit, building new combinations.

**Differences**:
- The backtracking approach relies on recursion to explore all possible combinations, whereas the iterative approach builds combinations step by step using loops.
- Both approaches have similar time complexity, but the iterative approach might save some function call overhead, leading to more efficient execution in some cases.

Detailed explanations of both approaches, along with their corresponding code, are provided below. By presenting both methods, we offer a comprehensive view of how to tackle this problem, allowing for flexibility and understanding of different programming paradigms.

https://youtu.be/Jobb9YUFUq0

# Approach - Backtracking
1. **Initialize a Mapping**: Create a dictionary that maps each digit from 2 to 9 to their corresponding letters on a telephone's buttons. For example, the digit '2' maps to "abc," '3' maps to "def," and so on.

2. **Base Case**: Check if the input string `digits` is empty. If it is, return an empty list, as there are no combinations to generate.

3. **Recursive Backtracking**:
   - **Define Recursive Function**: Create a recursive function, `backtrack`, that will be used to explore all possible combinations. It takes two parameters: `combination`, which holds the current combination of letters, and `next_digits`, which holds the remaining digits to be explored.
   - **Termination Condition**: If `next_digits` is empty, it means that all digits have been processed, so append the current `combination` to the result.
   - **Exploration**: If there are more digits to explore, take the first digit from `next_digits` and iterate over its corresponding letters in the mapping. For each letter, concatenate it to the current combination and recursively call the `backtrack` function with the new combination and the remaining digits.
   - **Example**: If the input is "23", the first recursive call explores all combinations starting with 'a', 'b', and 'c' (from '2'), and the next level of recursive calls explores combinations starting with 'd', 'e', 'f' (from '3'), building combinations like "ad," "ae," "af," "bd," "be," etc.

4. **Result**: Once the recursive exploration is complete, return the collected combinations as the final result. By using recursion, we ensure that all possible combinations are explored, and the result includes all valid letter combinations that the input digits can represent.

# Complexity
- Time complexity: \\( O(4^n) \\), where \\( n \\) is the length of the input string. In the worst case, each digit can represent 4 letters, so there will be 4 recursive calls for each digit.
- Space complexity: \\( O(n) \\), where \\( n \\) is the length of the input string. This accounts for the recursion stack space.

# Code - Backtracking
``` Python []
class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        if not digits:
            return []

        phone_map = {
            '2': 'abc',
            '3': 'def',
            '4': 'ghi',
            '5': 'jkl',
            '6': 'mno',
            '7': 'pqrs',
            '8': 'tuv',
            '9': 'wxyz'
        }

        def backtrack(combination, next_digits):
            if len(next_digits) == 0:
                output.append(combination)
            else:
                for letter in phone_map[next_digits[0]]:
                    backtrack(combination + letter, next_digits[1:])

        output = []
        backtrack("", digits)
        return output
```
``` C++ []
class Solution {
public:
    std::vector<std::string> letterCombinations(std::string digits) {
        if (digits.empty()) return {};

        std::string phone_map[] = {"abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};
        std::vector<std::string> output;
        backtrack("", digits, phone_map, output);
        return output;
    }

private:
    void backtrack(std::string combination, std::string next_digits, std::string phone_map[], std::vector<std::string>& output) {
        if (next_digits.empty()) {
            output.push_back(combination);
        } else {
            std::string letters = phone_map[next_digits[0] - '2'];
            for (char letter : letters) {
                backtrack(combination + letter, next_digits.substr(1), phone_map, output);
            }
        }
    }
};
```
``` Java []
class Solution {
    public List<String> letterCombinations(String digits) {
        if (digits.isEmpty()) return Collections.emptyList();

        String[] phone_map = {"abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};
        List<String> output = new ArrayList<>();
        backtrack("", digits, phone_map, output);
        return output;
    }

    private void backtrack(String combination, String next_digits, String[] phone_map, List<String> output) {
        if (next_digits.isEmpty()) {
            output.add(combination);
        } else {
            String letters = phone_map[next_digits.charAt(0) - '2'];
            for (char letter : letters.toCharArray()) {
                backtrack(combination + letter, next_digits.substring(1), phone_map, output);
            }
        }
    }
}
```
``` JavaSxript []
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) return [];

    const phone_map = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    const output = [];
    backtrack("", digits, phone_map, output);
    return output;

    function backtrack(combination, next_digits, phone_map, output) {
        if (next_digits.length === 0) {
            output.push(combination);
        } else {
            const letters = phone_map[next_digits[0] - '2'];
            for (const letter of letters) {
                backtrack(combination + letter, next_digits.slice(1), phone_map, output);
            }
        }
    }
};
```
``` C# []
public class Solution {
    public IList<string> LetterCombinations(string digits) {
        if (string.IsNullOrEmpty(digits)) return new List<string>();

        string[] phone_map = {"abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};
        List<string> output = new List<string>();
        Backtrack("", digits, phone_map, output);
        return output;
    }

    private void Backtrack(string combination, string next_digits, string[] phone_map, List<string> output) {
        if (next_digits.Length == 0) {
            output.Add(combination);
        } else {
            string letters = phone_map[next_digits[0] - '2'];
            foreach (char letter in letters) {
                Backtrack(combination + letter, next_digits.Substring(1), phone_map, output);
            }
        }
    }
}
```
``` Go []
func letterCombinations(digits string) []string {
	if digits == "" {
		return []string{}
	}

	phoneMap := []string{"abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"}
	var output []string

	var backtrack func(combination string, nextDigits string)
	backtrack = func(combination string, nextDigits string) {
		if nextDigits == "" {
			output = append(output, combination)
		} else {
			letters := phoneMap[nextDigits[0]-'2']
			for _, letter := range letters {
				backtrack(combination+string(letter), nextDigits[1:])
			}
		}
	}

	backtrack("", digits)
	return output
}
```
``` Rust []
impl Solution {
    pub fn letter_combinations(digits: String) -> Vec<String> {
        if digits.is_empty() {
            return vec![];
        }

        let phone_map = vec!["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
        let mut output = Vec::new();

        fn backtrack(combination: String, next_digits: &str, phone_map: &Vec<&str>, output: &mut Vec<String>) {
            if next_digits.is_empty() {
                output.push(combination);
            } else {
                let letters = phone_map[next_digits.chars().nth(0).unwrap() as usize - '2' as usize];
                for letter in letters.chars() {
                    let new_combination = combination.clone() + &letter.to_string();
                    backtrack(new_combination, &next_digits[1..], phone_map, output);
                }
            }
        }

        backtrack(String::new(), &digits, &phone_map, &mut output);
        output
    }
}
```
This code can handle any input string containing digits from 2 to 9 and will return the possible letter combinations in any order. The function `backtrack` is used to handle the recursive exploration of combinations, and `phone_map` contains the mapping between digits and letters.

## Performance - Backtracking

| Language    | Runtime (ms) | Beats (%) | Memory (MB) |
|-------------|--------------|-----------|-------------|
| C++         | 0            | 100.00    | 6.4         |
| Go          | 0            | 100.00    | 2.0         |
| Rust        | 1            | 82.50     | 2.1         |
| Java        | 5            | 50.30     | 41.6        |
| Swift       | 2            | 82.38     | 14.0        |
| Python3     | 34           | 96.91     | 16.3        |
| TypeScript  | 49           | 96.36     | 44.3        |
| JavaScript  | 58           | 55.17     | 42.2        |
| Ruby        | 58           | 97.98     | 211.1       |
| C#          | 136          | 89.14     | 43.9        |

# Video Iterative
https://youtu.be/43x3sg_nND8

# Approach - Iterative
1. **Initialize a Mapping**: Create a dictionary that maps each digit from 2 to 9 to their corresponding letters on a telephone's buttons.
2. **Base Case**: If the input string `digits` is empty, return an empty list.
3. **Iteratively Build Combinations**: Start with an empty combination in a list and iteratively build the combinations by processing each digit in the input string.
   - For each existing combination, append each corresponding letter for the current digit, building new combinations.
4. **Result**: Return the generated combinations as the final result.

# Complexity
- Time complexity: \\( O(4^n) \\), where \\( n \\) is the length of the input string. In the worst case, each digit can represent 4 letters.
- Space complexity: \\( O(n) \\), where \\( n \\) is the length of the input string.

# Code - Iterative
``` Python []
class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        if not digits:
            return []

        phone_map = {
            '2': 'abc',
            '3': 'def',
            '4': 'ghi',
            '5': 'jkl',
            '6': 'mno',
            '7': 'pqrs',
            '8': 'tuv',
            '9': 'wxyz'
        }
        combinations = [""]

        for digit in digits:
            new_combinations = []
            for combination in combinations:
                for letter in phone_map[digit]:
                    new_combinations.append(combination + letter)
            combinations = new_combinations

        return combinations
```
``` JavaScript []
function letterCombinations(digits) {
  if (!digits) {
    return [];
  }

  const phoneMap = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };

  let combinations = [''];

  for (const digit of digits) {
    const newCombinations = [];
    for (const combination of combinations) {
      for (const letter of phoneMap[digit]) {
        newCombinations.push(combination + letter);
      }
    }
    combinations = newCombinations;
  }

  return combinations;
}
```
``` C++ []
class Solution {
public:
    std::vector<std::string> letterCombinations(std::string digits) {
        if (digits.empty()) return {};

        std::string phone_map[] = {"abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};
        std::vector<std::string> combinations = {""};

        for (char digit : digits) {
            std::vector<std::string> new_combinations;
            for (std::string combination : combinations) {
                for (char letter : phone_map[digit - '2']) {
                    new_combinations.push_back(combination + letter);
                }
            }
            combinations = new_combinations;
        }

        return combinations;
    }
};
```
``` Go []
func letterCombinations(digits string) []string {
    if digits == "" {
        return []string{}
    }

    phoneMap := []string{"abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"}
    combinations := []string{""}

    for _, digit := range digits {
        newCombinations := []string{}
        for _, combination := range combinations {
            for _, letter := range phoneMap[digit-'2'] {
                newCombinations = append(newCombinations, combination+string(letter))
            }
        }
        combinations = newCombinations
    }

    return combinations
}
```


If you find the solution understandable and helpful, don't hesitate to give it an upvote. Engaging with the code across different languages might just lead you to discover new techniques and preferences! Happy coding! \uD83D\uDE80\uD83E\uDD80\uD83D\uDCDE

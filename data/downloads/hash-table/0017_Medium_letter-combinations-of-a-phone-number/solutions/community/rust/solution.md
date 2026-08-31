# 🚀 100% Letter Combinations of a Phone Number

**Author:** phistellar
**Votes:** 13
**Link:** [https://leetcode.com/problems/letter-combinations-of-a-phone-number/solutions/3855505/](https://leetcode.com/problems/letter-combinations-of-a-phone-number/solutions/3855505/)

---

# Intuition
The problem is to find all possible letter combinations that a given number could represent, as mapped on a telephone's buttons. Big thanks to vanAmsen for interacive video agood for inspiration [17. Letter Combinations of a Phone Number](https://youtu.be/Jobb9YUFUq0) The initial thought is to create a mapping between the digits and their corresponding letters and then use recursion to explore all possible combinations. 

# Approach
1. **Initialize a Mapping**: Create an array mapping the digits from 2 to 9 to their corresponding letters on a telephone's buttons.
2. **Base Case**: If the input string `digits` is empty, return an empty list.
3. **Define Recursive Function**: Utilize a recursive function `backtrack` that takes the current combination and the next digits to explore.
   - **Termination Condition**: If there are no more digits to explore, append the current combination to the result.
   - **Exploration**: Iterate through the corresponding letters of the next digit and recursively explore the remaining digits.
4. **Result**: Return the collected combinations as the final result.

# Complexity
- Time complexity: \\(O(4^n)\\), where \\(n\\) is the length of the input string. In the worst case, each digit can represent 4 letters, so there will be 4 recursive calls for each digit.
- Space complexity: \\(O(n)\\), where \\(n\\) is the length of the input string. This accounts for the recursion stack space.

# Code
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
``` TypeScript []
function letterCombinations(digits: string): string[] {
    if (digits.length === 0) return [];

    const phoneMap: string[] = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    const output: string[] = [];

    function backtrack(combination: string, nextDigits: string) {
        if (nextDigits.length === 0) {
            output.push(combination);
        } else {
            const letters: string = phoneMap[parseInt(nextDigits[0]) - 2];
            for (const letter of letters) {
                backtrack(combination + letter, nextDigits.slice(1));
            }
        }
    }

    backtrack("", digits);
    return output;
}
```
``` Ruby []
# @param {String} digits
# @return {String[]}
def letter_combinations(digits)
    return [] if digits.empty?

    phone_map = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]
    output = []

    def backtrack(combination, next_digits, phone_map, output)
        if next_digits.empty?
            output << combination
        else
            letters = phone_map[next_digits[0].to_i - 2]
            letters.each_char do |letter|
                backtrack(combination + letter, next_digits[1..], phone_map, output)
            end
        end
    end

    backtrack("", digits, phone_map, output)
    output
end
```
``` Swift []
class Solution {
    func letterCombinations(_ digits: String) -> [String] {
        if digits.isEmpty {
            return []
        }

        let phoneMap = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]
        var output: [String] = []

        func backtrack(_ combination: String, _ nextDigits: String) {
            if nextDigits.isEmpty {
                output.append(combination)
            } else {
                let letters = phoneMap[Int(String(nextDigits.first!))! - 2]
                for letter in letters {
                    backtrack(combination + String(letter), String(nextDigits.dropFirst()))
                }
            }
        }

        backtrack("", digits)
        return output
    }
}
```
This code follows the recursive backtracking approach to find all possible letter combinations, similar to the previous implementations in other languages, and adapts it to Go's syntax and constructs.
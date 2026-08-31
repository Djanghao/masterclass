# ☎️ [VIDEO] Dial in Your Skills: Solving 'Letter Combinations of a Phone Number' 🐍

**Author:** vanAmsen
**Votes:** 9
**Link:** [https://leetcode.com/problems/letter-combinations-of-a-phone-number/solutions/3785211/](https://leetcode.com/problems/letter-combinations-of-a-phone-number/solutions/3785211/)

---

# Intuition
When first reading this problem, it becomes clear that it requires generating all possible combinations of a given set of elements. My initial thoughts turned to the concept of 'Backtracking' - a very efficient approach when we're dealing with permutations or combinations. 

https://youtu.be/_bWwz_li_zA

# Approach
To solve this problem, I decided to create a mapping of digits to letters using a dictionary in Python. Then I created a recursive function, 'backtrack', which takes the current combination of letters and the remaining digits. The function is designed to add the combination to the output if there are no more digits to process. If there are still digits left, it appends each corresponding letter to the current combination and makes a recursive call to itself with the updated combination and the remaining digits. 

# Complexity
- Time complexity: The time complexity of this algorithm is O(4^n), where 'n' is the number of digits in the input. This is because, in the worst case scenario, each digit will correspond to 4 letters (like digit '7' or '9'), and we're generating all possible combinations.

- Space complexity: The space complexity is also O(4^n) as, in the worst case, that's the number of combinations we will store in the output list.

# Code
```Python []
class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        phone = { 
            '2': ['a', 'b', 'c'], 
            '3': ['d', 'e', 'f'], 
            '4': ['g', 'h', 'i'], 
            '5': ['j', 'k', 'l'], 
            '6': ['m', 'n', 'o'], 
            '7': ['p', 'q', 'r', 's'], 
            '8': ['t', 'u', 'v'], 
            '9': ['w', 'x', 'y', 'z'] 
        } 
        def backtrack(combination, next_digits): 
            if len(next_digits) == 0: 
                output.append(combination) 
            else: 
                for letter in phone[next_digits[0]]: 
                    backtrack(combination + letter, next_digits[1:]) 
        output = [] 
        if digits: 
            backtrack("", digits) 
        return output
```
``` JavaScript []
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const phone = { 
    '2': ['a', 'b', 'c'], 
    '3': ['d', 'e', 'f'], 
    '4': ['g', 'h', 'i'], 
    '5': ['j', 'k', 'l'], 
    '6': ['m', 'n', 'o'], 
    '7': ['p', 'q', 'r', 's'], 
    '8': ['t', 'u', 'v'], 
    '9': ['w', 'x', 'y', 'z'] 
    } 
    function backtrack(combination, nextDigits) { 
        if (nextDigits.length === 0) { 
            output.push(combination); 
        } else { 
            for (let letter of phone[nextDigits[0]]) { 
                backtrack(combination + letter, nextDigits.slice(1)); 
            } 
        } 
    } 
    let output = []; 
    if (digits) { 
        backtrack("", digits); 
    } 
    return output;    
};
```
``` C++ []
class Solution {
public:
    vector<string> letterCombinations(string digits) {
        unordered_map<char, string> phone = {
            {'2', "abc"}, {'3', "def"}, {'4', "ghi"}, {'5', "jkl"}, 
            {'6', "mno"}, {'7', "pqrs"}, {'8', "tuv"}, {'9', "wxyz"}};

        vector<string> result;
        if (digits.empty()) return result;
        search("", digits, 0, phone, result);
        return result;
    }

private:
    void search(string combination, string& digits, int index, unordered_map<char, string>& phone, vector<string>& result) {
        if (index == digits.size()) {
            result.push_back(combination);
            return;
        }
        string letters = phone[digits[index]];
        for (auto letter : letters) {
            search(combination + letter, digits, index + 1, phone, result);
        }
    }
};

```
``` Java []
class Solution {
    public List<String> letterCombinations(String digits) {
        HashMap<Character, String> phone = new HashMap<Character, String>() {{
            put('2', "abc"); put('3', "def"); put('4', "ghi");
            put('5', "jkl"); put('6', "mno"); put('7', "pqrs");
            put('8', "tuv"); put('9', "wxyz");
        }};
        
        List<String> result = new ArrayList<>();
        if (digits.isEmpty()) return result;
        search("", digits, 0, phone, result);
        return result;
    }

    private void search(String combination, String digits, int index, HashMap<Character, String> phone, List<String> result) {
        if (index == digits.length()) {
            result.add(combination);
            return;
        }
        String letters = phone.get(digits.charAt(index));
        for (char letter : letters.toCharArray()) {
            search(combination + letter, digits, index + 1, phone, result);
        }
    }
}

```
``` C# []
public class Solution {
    public IList<string> LetterCombinations(string digits) {
        Dictionary<char, string> phone = new Dictionary<char, string> {
            {'2', "abc"}, {'3', "def"}, {'4', "ghi"}, {'5', "jkl"},
            {'6', "mno"}, {'7', "pqrs"}, {'8', "tuv"}, {'9', "wxyz"}
        };
        
        List<string> result = new List<string>();
        if (digits.Length == 0) return result;
        Search("", digits, 0, phone, result);
        return result;
    }

    private void Search(string combination, string digits, int index, Dictionary<char, string> phone, List<string> result) {
        if (index == digits.Length) {
            result.Add(combination);
            return;
        }
        string letters = phone[digits[index]];
        foreach (char letter in letters) {
            Search(combination + letter, digits, index + 1, phone, result);
        }
    }
}

```

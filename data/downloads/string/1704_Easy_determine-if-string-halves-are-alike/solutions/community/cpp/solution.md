# ✅98.45%🔥Easy Solution🔥With Explanation🔥

**Author:** MrAke
**Votes:** 77
**Link:** [https://leetcode.com/problems/determine-if-string-halves-are-alike/solutions/4549094/](https://leetcode.com/problems/determine-if-string-halves-are-alike/solutions/4549094/)

---

# Intuition
#### The problem involves counting the number of vowels in two halves of a string. A straightforward approach is to iterate through each character in both halves and count the vowels. Afterward, compare the counts to determine if the halves are alike.
---

# Approach
#### 1. Define a helper function `count_vowels` to count the number of vowels in a given string.
#### 2. Compute the length of the input string and find the midpoint.
#### 3. Split the string into two halves: the first half (`first_half`) and the second half (`second_half`).
#### 4. Use the `count_vowels` function to count the vowels in both halves.
#### 5. Compare the counts of vowels in both halves. If they are equal, return `True`; otherwise, return `False`.
---

# Complexity
- ## Time complexity:
#### $$O(n)$$, where $$n$$ is the length of the input string. The function iterates through each character in the two halves to count the vowels.
- ## Space complexity:
#### $$O(1)$$, as the additional space used is constant, regardless of the input size.
---
# Code
```python []
class Solution:
    def halvesAreAlike(self, s: str) -> bool:
        def count_vowels(string):
            vowels = set('aeiouAEIOU')
            return sum(1 for char in string if char in vowels)

        length = len(s)
        mid_point = length // 2

        first_half = s[:mid_point]
        second_half = s[mid_point:]

        return count_vowels(first_half) == count_vowels(second_half)
```
```C++ []
class Solution {
public:
    bool halvesAreAlike(string s) {
        auto countVowels = [](const string& str) {
            unordered_set<char> vowels{'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'};
            int count = 0;
            for (char c : str) {
                if (vowels.count(c) > 0) {
                    count++;
                }
            }
            return count;
        };

        int length = s.length();
        int midPoint = length / 2;

        string firstHalf = s.substr(0, midPoint);
        string secondHalf = s.substr(midPoint);

        return countVowels(firstHalf) == countVowels(secondHalf);
    }
};
```
```java []
public class Solution {
    public boolean halvesAreAlike(String s) {
        Set<Character> vowels = new HashSet<>();
        vowels.add('a'); vowels.add('e'); vowels.add('i'); vowels.add('o'); vowels.add('u');
        vowels.add('A'); vowels.add('E'); vowels.add('I'); vowels.add('O'); vowels.add('U');

        int length = s.length();
        int midPoint = length / 2;

        String firstHalf = s.substring(0, midPoint);
        String secondHalf = s.substring(midPoint);

        return countVowels(firstHalf, vowels) == countVowels(secondHalf, vowels);
    }

    private int countVowels(String str, Set<Character> vowels) {
        int count = 0;
        for (char c : str.toCharArray()) {
            if (vowels.contains(c)) {
                count++;
            }
        }
        return count;
    }
}
```
```javascript []
var halvesAreAlike = function(s) {
    const countVowels = (str) => {
        const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
        return Array.from(str).filter(char => vowels.has(char)).length;
    };

    const length = s.length;
    const midPoint = length / 2;

    const firstHalf = s.substring(0, midPoint);
    const secondHalf = s.substring(midPoint);

    return countVowels(firstHalf) === countVowels(secondHalf);
};
```
```C# []
public class Solution {
    public bool HalvesAreAlike(string s) {
        int CountVowels(string str) {
            HashSet<char> vowels = new HashSet<char> { 'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U' };
            int count = 0;
            foreach (char c in str) {
                if (vowels.Contains(c)) {
                    count++;
                }
            }
            return count;
        }

        int length = s.Length;
        int midPoint = length / 2;

        string firstHalf = s.Substring(0, midPoint);
        string secondHalf = s.Substring(midPoint);

        return CountVowels(firstHalf) == CountVowels(secondHalf);
    }
}
```
```PHP []
class Solution {
    function countVowels($str) {
        $vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
        $count = 0;
        foreach (str_split($str) as $char) {
            if (in_array($char, $vowels)) {
                $count++;
            }
        }
        return $count;
    }

    function halvesAreAlike($s) {
        $length = strlen($s);
        $midPoint = $length / 2;

        $firstHalf = substr($s, 0, $midPoint);
        $secondHalf = substr($s, $midPoint);

        return $this->countVowels($firstHalf) === $this->countVowels($secondHalf);
    }
}
```
---
![Screenshot 2023-08-20 065922.png](./images/0.png)






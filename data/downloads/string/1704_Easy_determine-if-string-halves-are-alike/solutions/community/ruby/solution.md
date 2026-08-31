# 🚀🚀🚀 FRiENDLY SOLUTiON 🔥 BEATS 100% coders | EXPLAiNED ✅✅✅

**Author:** prodonik
**Votes:** 5
**Link:** [https://leetcode.com/problems/determine-if-string-halves-are-alike/solutions/4549119/](https://leetcode.com/problems/determine-if-string-halves-are-alike/solutions/4549119/)

---

# Intuition
The provided code appears to be a Java solution to a problem related to checking if the number of vowels in the first half of a given string is equal to the number of vowels in the second half.

# Approach
The code defines a `Solution` class with a method `halvesAreAlike`. This method takes a string `s` as input and calculates the number of vowels in the first half and the second half of the string using the `numberOfWovels` method. The result is then compared, and the method returns a boolean indicating whether the counts are equal.

# Complexity
- **Time complexity:** O(n), where n is the length of the input string `s`. This is because the code iterates through the string once to count the vowels.
- **Space complexity:** O(1), as the set of vowels has a constant size.

# UPVOTE iF iT WAS HELPFUL )

# Code
```java []
class Solution {
    Set<Character> vowels = new HashSet<>(Set.of(
        'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'
    ));
    
    public boolean halvesAreAlike(String s) {
        int num1 = numberOfWovels(s, s.length() / 2, 0);
        int num2 = numberOfWovels(s, s.length(), s.length() / 2);
        return num1 == num2;
    }
    
    private int numberOfWovels(String s, int index, int start) {
        int count = 0;
        for (int i = start; i < index; i++) {
            if (vowels.contains(s.charAt(i))) {
                count++;
            }
        }
        return count;
    }
}
```
```C++ []
class Solution {
public:
    bool halvesAreAlike(std::string s) {
        std::unordered_set<char> vowels = {'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'};
        
        int num1 = numberOfVowels(s, s.length() / 2, 0, vowels);
        int num2 = numberOfVowels(s, s.length(), s.length() / 2, vowels);
        
        return num1 == num2;
    }

private:
    int numberOfVowels(const std::string& s, int index, int start, const std::unordered_set<char>& vowels) {
        int count = 0;
        for (int i = start; i < index; i++) {
            if (vowels.count(s[i]) > 0) {
                count++;
            }
        }
        return count;
    }
};
```
```Python []
class Solution:
    def halvesAreAlike(self, s: str) -> bool:
        vowels = {'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'}
        
        num1 = self.number_of_vowels(s, len(s) // 2, 0, vowels)
        num2 = self.number_of_vowels(s, len(s), len(s) // 2, vowels)
        
        return num1 == num2

    def number_of_vowels(self, s: str, index: int, start: int, vowels: set) -> int:
        count = 0
        for i in range(start, index):
            if s[i] in vowels:
                count += 1
        return count
```
```JavaScript []
class Solution {
    constructor() {
        this.vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    }

    halvesAreAlike(s) {
        const num1 = this.numberOfVowels(s, Math.floor(s.length / 2), 0);
        const num2 = this.numberOfVowels(s, s.length, Math.floor(s.length / 2));
        return num1 === num2;
    }

    numberOfVowels(s, index, start) {
        let count = 0;
        for (let i = start; i < index; i++) {
            if (this.vowels.has(s.charAt(i))) {
                count++;
            }
        }
        return count;
    }
}

```
```C# []
public class Solution {
    public bool HalvesAreAlike(string s) {
        HashSet<char> vowels = new HashSet<char> {'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'};
        
        int num1 = NumberOfVowels(s, s.Length / 2, 0, vowels);
        int num2 = NumberOfVowels(s, s.Length, s.Length / 2, vowels);
        
        return num1 == num2;
    }

    private int NumberOfVowels(string s, int index, int start, HashSet<char> vowels) {
        int count = 0;
        for (int i = start; i < index; i++) {
            if (vowels.Contains(s[i])) {
                count++;
            }
        }
        return count;
    }
}
```
```Go []
func (s *Solution) HalvesAreAlike(input string) bool {
	vowels := map[rune]bool{'a': true, 'e': true, 'i': true, 'o': true, 'u': true, 'A': true, 'E': true, 'I': true, 'O': true, 'U': true}

	num1 := s.numberOfVowels(input, len(input)/2, 0, vowels)
	num2 := s.numberOfVowels(input, len(input), len(input)/2, vowels)

	return num1 == num2
}

func (s *Solution) numberOfVowels(input string, index int, start int, vowels map[rune]bool) int {
	count := 0
	for _, char := range input[start:index] {
		if vowels[char] {
			count++
		}
	}
	return count
}
```
```Ruby []
class Solution
  def halves_are_alike(s)
    vowels = Set.new(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
    
    num1 = number_of_vowels(s, s.length / 2, 0, vowels)
    num2 = number_of_vowels(s, s.length, s.length / 2, vowels)
    
    num1 == num2
  end

  private

  def number_of_vowels(s, index, start, vowels)
    count = 0
    (start...index).each do |i|
      count += 1 if vowels.include?(s[i])
    end
    count
  end
end
```
![image.png](./images/0.png)

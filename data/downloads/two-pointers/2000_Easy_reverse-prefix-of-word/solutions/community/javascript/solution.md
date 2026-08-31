# 100% Faster || Easy to Understand || Shortest || C++ | Java | Python | JS.

**Author:** gameboey
**Votes:** 15
**Link:** [https://leetcode.com/problems/reverse-prefix-of-word/solutions/5098156/](https://leetcode.com/problems/reverse-prefix-of-word/solutions/5098156/)

---

# Intuition
Find the first occurrence of the special character, then cleverly reverse the characters before it, leaving the rest untouched - a surgical strike of rearrangement!

# Approach
Certainly, Nico Robin would break it down with numbered steps and a dry run example like this:

"Dareshishishi... Let's go through this puzzle step-by-step, shall we?

1. First, we need to locate the position of our special character within the word. It's like searching for a hidden treasure, but instead of an 'X' marking the spot, we're looking for a specific letter. Our coder friend uses the handy `find` function to scan through the word until they encounter the character we seek.

2. If the character is nowhere to be found, our coder friend simply returns the original word, untouched. No need to stir up trouble where there is none, just like how I know when to keep my powers dormant.

3. However, if the character is present, the real fun begins. Our coder friend focuses their attention on the part of the word before the special character, like a skilled explorer zeroing in on the treasure they've been seeking.

4. Using the `reverse` function, they ingeniously rearrange the characters in this prefix, flipping them around like a magician performing a sleight of hand trick. It's akin to how I can sprout arms and hands from any surface, manipulating the world around me with effortless grace.

5. The rest of the word remains unchanged, like a carefully guarded secret, much like how I selectively reveal my abilities to those I trust.

6. And just like that, our coder friend has crafted a new word, with the prefix reversed and the rest of the word intact. It's like uncovering a hidden message within a larger puzzle, revealing the true nature of the word itself.

Dareshishishi... Let's see this in action with an example. Let's say the input `word` is "abcdefd" and the special character `ch` is "d".

1. Our coder friend uses `find` to locate the first occurrence of "d" in "abcdefd". It's found at index 3.

2. Since "d" is present, we proceed to step 3.

3. Our focus is now on the prefix "abcd" before the "d".

4. Using `reverse`, our coder friend flips this prefix to become "dcba".

5. The rest of the word, "efd", remains unchanged.

6. The resulting word, with the prefix reversed, is "dcbaefd".

Dareshishishi... Isn't it fascinating how a simple task can be approached with such cleverness and precision? Our coder friend truly understands the art of manipulation, much like how I wield my powers with careful calculation."

# Complexity
- Time complexity: O(n)

- Space complexity: O(1)


```C++ []
class Solution {
public:
    string reversePrefix(string word, char ch) {
        int idx = word.find(ch);
        if(idx == -1) {
            return word;
        }

        reverse(begin(word), begin(word) + idx + 1);
        return word;
    }
};
```
```java []
class Solution {
    public String reversePrefix(String word, char ch) {
        int idx = word.indexOf(ch);
        if(idx == -1) {
            return word;
        }

        StringBuilder res = new StringBuilder(word.substring(0, idx + 1)).reverse();
        if(idx < word.length()) {
            res.append(word.substring(idx + 1));
        }

        return res.toString();
    }
}
```
```python []
class Solution:
    def reversePrefix(self, word: str, ch: str) -> str:
        idx = word.find(ch)
        if idx == -1 :
            return word

        return word[:idx + 1][::-1] + word[idx + 1:]
```
```C []
char* reversePrefix(char* word, char ch) {
    char* first_occurrence = strchr(word, ch);
    if (first_occurrence == NULL) {
        return word;
    }

    int first_index = first_occurrence - word;
    for (int i = 0; i <= first_index / 2; ++i) {
        char temp = word[i];
        word[i] = word[first_index - i];
        word[first_index - i] = temp;
    }

    return word;
}
```
```C# []
public class Solution {
    public string ReversePrefix(string word, char ch) {
        int idx = word.IndexOf(ch);
        if (idx == -1) {
            return word;
        }

        string prefix = word.Substring(0, idx + 1);
        char[] prefixChars = prefix.ToCharArray();
        Array.Reverse(prefixChars);
        string reversedPrefix = new string(prefixChars);
        return reversedPrefix + word.Substring(idx + 1);
    }
}
```
```javascript []
/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    const idx = word.indexOf(ch);
    if (idx === -1) {
        return word;
    }

    const prefix = word.substring(0, idx + 1);
    const reversedPrefix = prefix.split('').reverse().join('');
    return reversedPrefix + word.substring(idx + 1);
};

```
```Dart []
class Solution {
  String reversePrefix(String word, String ch) {
    int idx = word.indexOf(ch);
    if (idx == -1) {
      return word;
    }

    String prefix = word.substring(0, idx + 1);
    String reversedPrefix = prefix.split('').reversed.join('');
    return reversedPrefix + word.substring(idx + 1);
  }
}
```
```Go []
func reversePrefix(word string, ch byte) string {
	idx := strings.IndexByte(word, ch)
	if idx == -1 {
		return word
	}

	prefix := word[:idx + 1]
	reversed := reverseString(prefix)
	return reversed + word[idx + 1:]
}

func reverseString(s string) string {
	runes := []rune(s)
	for i, j := 0, len(runes)-1; i < j; i, j = i + 1, j - 1 {
		runes[i], runes[j] = runes[j], runes[i]
	}
	return string(runes)
}
```
```Scala []
object Solution {
    def reversePrefix(word: String, ch: Char): String = {
        val idx = word.indexOf(ch)
        if (idx == -1) {
            word
        } else {
            val prefix = word.substring(0, idx + 1)
            val reversedPrefix = prefix.reverse
            reversedPrefix + word.substring(idx + 1)
        }
    }
}
```
![NicoRobin.jpg](./images/0.jpeg)



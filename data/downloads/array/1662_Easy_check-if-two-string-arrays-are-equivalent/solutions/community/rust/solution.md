# ✅✅|| ONE LINE || EASY PEASY || Java, Python, C#, Rust, Ruby || 🔥🔥🔥

**Author:** ilxamovic
**Votes:** 42
**Link:** [https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/solutions/4348495/](https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/solutions/4348495/)

---

# Description

## Intuition
The problem seems to be about comparing two lists of strings and checking if the concatenation of strings in each list results in equal strings. The provided code uses the `join` method to concatenate the strings in both lists and then compares the resulting strings.

## Approach
The approach taken in the code is straightforward. It joins the strings in both lists and checks if the resulting strings are equal. If they are equal, the function returns `True`; otherwise, it returns `False`.

## Complexity
- **Time complexity:** The time complexity is dominated by the `join` operation, which is linear in the total length of the strings in the input lists. Let's denote the total length of all strings in `word1` as \\(m\\) and in `word2` as \\(n\\). Therefore, the time complexity is \\(O(m + n)\\).
- **Space complexity:** The space complexity is also \\(O(m + n)\\) as the `join` method creates new strings that are the concatenation of the input strings.

## Performance
| Language | Execution Time (ms) | Memory Usage (MB) |
| :--- | :---:| :---: | 
Java | 1 | 40.6 |
Python3 | 43 | 16.3 |
C# | 87 | 40.9 |
Rust | 1 | 2.1 |
Ruby | 55 | 210.9 |

## Code
```python []
class Solution:
    def arrayStringsAreEqual(self, word1: List[str], word2: List[str]) -> bool:
        return "".join(word1) == "".join(word2)
```
```Java []
class Solution {
    public boolean arrayStringsAreEqual(String[] word1, String[] word2) {
        return String.join("", word1).equals(String.join("", word2));
    }
}
```
``` C# []
public class Solution {
    public bool ArrayStringsAreEqual(string[] word1, string[] word2) {
        return string.Concat(word1) == string.Concat(word2);
    }
}
```
``` Ruby []
def array_strings_are_equal(word1, word2)
    word1.join == word2.join
end
```
``` Rust []
impl Solution {
    pub fn array_strings_are_equal(word1: Vec<String>, word2: Vec<String>) -> bool {
        word1.concat() == word2.concat()
    }
}
```
![image name](https://i.imgur.com/JdL5kBI.gif)

- Please upvote me !!!

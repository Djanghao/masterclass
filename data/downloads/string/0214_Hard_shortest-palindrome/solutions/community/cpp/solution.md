# Beats 100%🔥Beginner Friendly | Python3 🐍 | Java ☕ | C++ 💻 | C# 🎯 | Ruby 💎 | Go 🦅 | JavaScript✨

**Author:** naruto11110000
**Votes:** 63
**Link:** [https://leetcode.com/problems/shortest-palindrome/solutions/5810352/](https://leetcode.com/problems/shortest-palindrome/solutions/5810352/)

---

### \uD83E\uDDE0 **Intuition**:
The goal is to make the given string `s` a palindrome by adding the fewest characters to the front. To do this efficiently, we should find the largest part of `s` that is already a palindrome starting from the beginning, then just append the necessary characters to the front from the remaining part of `s`. 

By reversing the string, we can check how much of the reversed string matches the original, helping us identify the minimum characters needed.

---

### \uD83D\uDD0D **Approach**:
1. **KMP Algorithm to the Rescue**:  
   We use the **Knuth-Morris-Pratt (KMP)** algorithm, which helps us find the longest prefix of the string that matches the suffix of its reverse. This is key to minimizing the characters we need to add.
   
2. **Reversing the String**:  
   First, reverse the string and concatenate it with the original using a special separator (`#`). The idea is to check the overlap between the string and its reverse.

3. **Prefix Array (Pi Array)**:  
   The KMP algorithm constructs a prefix array (pi array) that tells us the length of the longest prefix in the original string that matches the start of the reversed string. This gives us the part of the original string that doesn't need extra characters.

4. **Final Step**:  
   Using the information from the pi array, we append the minimal necessary characters in front of the original string to make it a palindrome.

---

### \u23F3 **Time and Space Complexity**:
- **Time Complexity**: `O(n)`  
   The KMP algorithm runs in linear time, where `n` is the length of the string. Both the construction of the pi array and the final string manipulation take linear time.

- **Space Complexity**: `O(n)`  
   We use extra space for the pi array and the concatenated string, so the space complexity is also linear.

---

# Code
```python3 []
class Solution:
    def shortestPalindrome(self, s: str) -> str:
        count = self.kmp(s[::-1], s)
        return s[count:][::-1] + s
    def kmp(self, txt: str, patt: str) -> int:
        new_string = patt + '#' + txt
        pi = [0] * len(new_string)
        i = 1
        k = 0
        while i < len(new_string):
            if new_string[i] == new_string[k]:
                k += 1
                pi[i] = k
                i += 1
            else:
                if k > 0:
                    k = pi[k - 1]
                else:
                    pi[i] = 0
                    i += 1
        return pi[-1]
```

```java []
class Solution {
    public String shortestPalindrome(String s) {
        int count = kmp(new StringBuilder(s).reverse().toString(), s);
        return new StringBuilder(s.substring(count)).reverse().toString() + s;
    }

    private int kmp(String txt, String patt) {
        String newString = patt + '#' + txt;
        int[] pi = new int[newString.length()];
        int i = 1, k = 0;
        while (i < newString.length()) {
            if (newString.charAt(i) == newString.charAt(k)) {
                k++;
                pi[i] = k;
                i++;
            } else {
                if (k > 0) {
                    k = pi[k - 1];
                } else {
                    pi[i] = 0;
                    i++;
                }
            }
        }
        return pi[newString.length() - 1];
    }
}

```

```C++ []
class Solution {
public:
    string shortestPalindrome(string s) {
        int count = kmp(string(s.rbegin(), s.rend()), s);
        return string(s.rbegin(), s.rend()).substr(0, s.length() - count) + s;
    }

private:
    int kmp(const string &txt, const string &patt) {
        string newString = patt + '#' + txt;
        vector<int> pi(newString.length(), 0);
        int i = 1, k = 0;
        while (i < newString.length()) {
            if (newString[i] == newString[k]) {
                k++;
                pi[i] = k;
                i++;
            } else {
                if (k > 0) {
                    k = pi[k - 1];
                } else {
                    pi[i] = 0;
                    i++;
                }
            }
        }
        return pi.back();
    }
};

```

```C# []
public class Solution {
    public string ShortestPalindrome(string s) {
        int count = Kmp(new string(s.Reverse().ToArray()), s);
        return new string(s.Substring(count).Reverse().ToArray()) + s;
    }

    private int Kmp(string txt, string patt) {
        string newString = patt + '#' + txt;
        int[] pi = new int[newString.Length];
        int i = 1, k = 0;
        while (i < newString.Length) {
            if (newString[i] == newString[k]) {
                k++;
                pi[i] = k;
                i++;
            } else {
                if (k > 0) {
                    k = pi[k - 1];
                } else {
                    pi[i] = 0;
                    i++;
                }
            }
        }
        return pi[newString.Length - 1];
    }
}


```

```JavaScript []
var shortestPalindrome = function(s) {
    let count = kmp(s.split('').reverse().join(''), s);
    return s.slice(count).split('').reverse().join('') + s;
};

var kmp = function(txt, patt) {
    let newString = patt + '#' + txt;
    let pi = new Array(newString.length).fill(0);
    let i = 1, k = 0;
    while (i < newString.length) {
        if (newString[i] === newString[k]) {
            k++;
            pi[i] = k;
            i++;
        } else {
            if (k > 0) {
                k = pi[k - 1];
            } else {
                pi[i] = 0;
                i++;
            }
        }
    }
    return pi[newString.length - 1];
};

```

```Go []
func shortestPalindrome(s string) string {
    count := kmp(reverse(s), s)
    return reverse(s[count:]) + s
}

func kmp(txt, patt string) int {
    newString := patt + "#" + txt
    pi := make([]int, len(newString))
    i, k := 1, 0
    for i < len(newString) {
        if newString[i] == newString[k] {
            k++
            pi[i] = k
            i++
        } else {
            if k > 0 {
                k = pi[k-1]
            } else {
                pi[i] = 0
                i++
            }
        }
    }
    return pi[len(newString)-1]
}

func reverse(s string) string {
    runes := []rune(s)
    for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
        runes[i], runes[j] = runes[j], runes[i]
    }
    return string(runes)
}

```

```Ruby []
# @param {String} s
# @return {String}
def shortest_palindrome(s)
  count = kmp(s.reverse, s)
  s[count..-1].reverse + s
end

def kmp(txt, patt)
  new_string = patt + '#' + txt
  pi = Array.new(new_string.length, 0)
  i = 1
  k = 0
  while i < new_string.length
    if new_string[i] == new_string[k]
      k += 1
      pi[i] = k
      i += 1
    else
      if k > 0
        k = pi[k - 1]
      else
        i += 1
      end
    end
  end
  pi[-1]
end

```
```One_Note []

I originally solved using python... but I will be honest I just wanted to post with many more langs cause I thought it might help others so I used chatgpt to convert my code into other languages.

BTW, Not gonna lie, today's qn was medium not much hard jst TLE was an issue after test case # 120

... :3 one upvote plz?

```
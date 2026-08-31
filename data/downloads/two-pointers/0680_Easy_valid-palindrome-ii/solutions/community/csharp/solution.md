# 🚀 Video Solution | Short and Simple

**Author:** Piotr_Maminski
**Votes:** 12
**Link:** [https://leetcode.com/problems/valid-palindrome-ii/solutions/6049559/](https://leetcode.com/problems/valid-palindrome-ii/solutions/6049559/)

---

https://youtu.be/JrxRYBwG6EI?si=mrg2zrl9D7dU42JZ


# #1 Two Pointers: easiest (from video)

```python3 [PyShort]
class Solution:
    def validPalindrome(self, s: str) -> bool:
        l, r = 0, len(s) - 1

        while l < r:
            if s[l] != s[r]:
                skipL, skipR = s[l + 1:r + 1], s[l:r]
                return (skipL == skipL[::-1] or skipR == skipR[::-1])
            l, r = l + 1, r - 1
        return True
```
```python3 []
# more correct form (IMO) for an interview with helper function

class Solution:
    def validPalindrome(self, s: str) -> bool:
        def is_palindrome(left: int, right: int) -> bool:
            while left < right:
                if s[left] != s[right]:
                    return False
                left += 1
                right -= 1
            return True
        
        left, right = 0, len(s) - 1
        
        while left < right:
            if s[left] != s[right]:
                return is_palindrome(left + 1, right) or is_palindrome(left, right - 1)
            left += 1
            right -= 1
            
        return True
```
```cpp []
class Solution {
public:
    bool validPalindrome(string s) {
        int l = 0;
        int r = s.length() - 1;
        
        while (l < r) {
            if (s[l] != s[r]) {
                return isPalindrome(s, l + 1, r) || isPalindrome(s, l, r - 1);
            }
            l++;
            r--;
        }
        return true;
    }
    
private:
    bool isPalindrome(const string& s, int left, int right) {
        while (left < right) {
            if (s[left] != s[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
};
```
```java []
class Solution {
    public boolean validPalindrome(String s) {
        int left = 0;
        int right = s.length() - 1;
        
        while (left < right) {
            if (s.charAt(left) != s.charAt(right)) {
                return isPalindrome(s, left + 1, right) || 
                       isPalindrome(s, left, right - 1);
            }
            left++;
            right--;
        }
        return true;
    }
    
    private boolean isPalindrome(String s, int left, int right) {
        while (left < right) {
            if (s.charAt(left) != s.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}
```
```csharp []
public class Solution {
    public bool ValidPalindrome(string s) {
        int l = 0, r = s.Length - 1;
        
        while (l < r) {
            if (s[l] != s[r]) {
                return IsPalindrome(s, l + 1, r) || IsPalindrome(s, l, r - 1);
            }
            l++;
            r--;
        }
        return true;
    }
    
    private bool IsPalindrome(string s, int l, int r) {
        while (l < r) {
            if (s[l] != s[r]) return false;
            l++;
            r--;
        }
        return true;
    }
}
```
```golang []
func validPalindrome(s string) bool {
    l, r := 0, len(s)-1
    
    for l < r {
        if s[l] != s[r] {
            return isPalindrome(s, l+1, r) || isPalindrome(s, l, r-1)
        }
        l++
        r--
    }
    return true
}

func isPalindrome(s string, l, r int) bool {
    for l < r {
        if s[l] != s[r] {
            return false
        }
        l++
        r--
    }
    return true
}
```
```swift []
class Solution {
    func validPalindrome(_ s: String) -> Bool {
        let chars = Array(s)
        var l = 0
        var r = chars.count - 1
        
        while l < r {
            if chars[l] != chars[r] {
                return isPalindrome(chars, l + 1, r) || isPalindrome(chars, l, r - 1)
            }
            l += 1
            r -= 1
        }
        return true
    }
    
    private func isPalindrome(_ chars: [Character], _ l: Int, _ r: Int) -> Bool {
        var left = l
        var right = r
        while left < right {
            if chars[left] != chars[right] {
                return false
            }
            left += 1
            right -= 1
        }
        return true
    }
}
```
```javascript [JS]
// JavaScript

var validPalindrome = function(s) {
    let l = 0;
    let r = s.length - 1;
    
    while (l < r) {
        if (s[l] !== s[r]) {
            return isPalindrome(s, l + 1, r) || isPalindrome(s, l, r - 1);
        }
        l++;
        r--;
    }
    return true;
};

function isPalindrome(s, l, r) {
    while (l < r) {
        if (s[l] !== s[r]) return false;
        l++;
        r--;
    }
    return true;
}
```
```typescript [TS]
// TypeScript

function validPalindrome(s: string): boolean {
    let l = 0;
    let r = s.length - 1;
    
    while (l < r) {
        if (s[l] !== s[r]) {
            return isPalindrome(s, l + 1, r) || isPalindrome(s, l, r - 1);
        }
        l++;
        r--;
    }
    return true;
}

function isPalindrome(s: string, l: number, r: number): boolean {
    while (l < r) {
        if (s[l] !== s[r]) return false;
        l++;
        r--;
    }
    return true;
}
```
```rust []
impl Solution {
    pub fn valid_palindrome(s: String) -> bool {
        let bytes = s.as_bytes();
        let l = bytes.len();
        
        let is_palindrome = |l: usize, r: usize| {
            (l..=r).all(|i| bytes[i] == bytes[r - (i - l)])
        };
        
        for i in 0..l/2 {
            if bytes[i] != bytes[l - 1 - i] {
                return is_palindrome(i + 1, l - 1 - i) || 
                       is_palindrome(i, l - 2 - i);
            }
        }
        true
    }
}
```
```ruby []
def valid_palindrome(s)
    l, r = 0, s.length - 1
    
    while l < r
        if s[l] != s[r]
            skip_l = s[(l + 1)..r]
            skip_r = s[l..(r - 1)]
            return skip_l == skip_l.reverse || skip_r == skip_r.reverse
        end
        l += 1
        r -= 1
    end
    true
end
```







# #2 Half String (clean code)




```python3 []
class Solution:
    def validPalindrome(self, text: str) -> bool:
        midpoint = len(text)//2 + 1
        reversed_half = text[-midpoint:][::-1]

        if text[:midpoint] == reversed_half:
            return True
            
        for position in range(0, midpoint):
            if text[position] != reversed_half[position]:
                left_removed = text[position+1:midpoint] == reversed_half[position:midpoint-1]
                right_removed = text[position:midpoint-1] == reversed_half[position+1:]
                return left_removed or right_removed
                
        return True

```
```cpp []
class Solution {
public:
    bool validPalindrome(string text) {
        int midpoint = text.length() / 2 + 1;
        string reversed_half = text.substr(text.length() - midpoint);
        reverse(reversed_half.begin(), reversed_half.end());
        
        if (text.substr(0, midpoint) == reversed_half) {
            return true;
        }
        
        for (int position = 0; position < midpoint; position++) {
            if (text[position] != reversed_half[position]) {
                string left_text = text.substr(position + 1, midpoint - position - 1);
                string left_rev = reversed_half.substr(position, midpoint - position - 1);
                
                string right_text = text.substr(position, midpoint - position - 1);
                string right_rev = reversed_half.substr(position + 1, midpoint - position - 1);
                
                bool left_removed = (left_text == left_rev);
                bool right_removed = (right_text == right_rev);
                
                return left_removed || right_removed;
            }
        }
        
        return true;
    }
};
```


Premium: [[Valid Palindrome III]](https://leetcode.com/problems/valid-palindrome-iii/), [[Valid Palindrome IV]](https://leetcode.com/problems/valid-palindrome-iv/)

# Valid Palindrome III & IV 

[SOLUTION IN PROGRESS]


---



![string.png](./images/0.png)



# Most common String Interview Problems
List based on my research (interviews, reddit, github) Probably not 100% accurate but very close to my recruitments. Leetcode Premium is probably more accurate [I don't have]

**Easy:** [[20. Valid Parentheses]](https://leetcode.com/problems/valid-parentheses/solutions/6013115/solution) [[28. Find the Index of the First Occurrence in a String]](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string) [[13. Roman to Integer]](https://leetcode.com/problems/roman-to-integer/solutions/6021029/beats-100-explained-step-by-step-list-most-common-string-interview-problems/) [[125. Valid Palindrome]](https://leetcode.com/problems/valid-palindrome/solutions/6051745/video-solution-short-and-simple) [[680. Valid Palindrome II]](https://leetcode.com/problems/valid-palindrome-ii/solutions/6049559/short) [[67. Add Binary]](https://leetcode.com/problems/add-binary)




**Medium/Hard:** [[8. String to Integer (atoi)]](https://leetcode.com/problems/string-to-integer-atoi/solutions/6013112/solution/) [[3. Longest Substring Without Repeating Characters]](https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/6013106/solutions/) [[5. Longest Palindromic Substring]](https://leetcode.com/problems/longest-palindromic-substring/solutions/6013111/solution/) [[937. Reorder Data in Log Files]](https://leetcode.com/problems/reorder-data-in-log-files) [[68. Text Justification]](https://leetcode.com/problems/text-justification) [[32. Longest Valid Parentheses]](https://leetcode.com/problems/longest-valid-parentheses) [[12. Integer to Roman]](https://leetcode.com/problems/integer-to-roman/solutions/6023402/solutions) [[22. Generate Parentheses]](https://leetcode.com/problems/generate-parentheses) [[65. Valid Number]](https://leetcode.com/problems/valid-number) [[49. Group Anagrams]](https://leetcode.com/problems/group-anagrams)


![image.png](./images/1.png)
![image.png](./images/2.png)

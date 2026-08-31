# ✅ Video | Short & Simple | List Most Common String Problems

**Author:** Piotr_Maminski
**Votes:** 16
**Link:** [https://leetcode.com/problems/adding-spaces-to-a-string/solutions/6106815/](https://leetcode.com/problems/adding-spaces-to-a-string/solutions/6106815/)

---

https://youtu.be/jziDtPZJ4fw?si=lUK9-Yq-dU3YRv19

# #1 Two Pointers

```python3 [PyShort]
class Solution:
    def addSpaces(self, s: str, spaces: List[int]) -> str:
        i, res = 0, []
        for space in spaces:
            res.append(s[i : space])
            i = space
        res.append(s[i :])
        return " ".join(res)
```
```python3 []
class Solution:
    def addSpaces(self, s: str, spaces: List[int]) -> str:
        result = [''] * (len(s) + len(spaces))
        write_pos = 0
        read_pos = 0
        
        for space_pos in spaces:
            while read_pos < space_pos:
                result[write_pos] = s[read_pos]
                write_pos += 1
                read_pos += 1
            result[write_pos] = ' '
            write_pos += 1
            
        while read_pos < len(s):
            result[write_pos] = s[read_pos]
            write_pos += 1
            read_pos += 1
            
        return ''.join(result)
```
```cpp []
class Solution {
public:
    string addSpaces(string s, vector<int>& spaces) {
        string result(s.length() + spaces.size(), 0);
        int writePos = 0;
        int readPos = 0;
        
        for (int spacePos : spaces) {
            while (readPos < spacePos) {
                result[writePos++] = s[readPos++];
            }
            result[writePos++] = ' ';
        }
        while (readPos < s.length()) {
            result[writePos++] = s[readPos++];
        }
        return result;
    }
};
```
```java []
class Solution {
    public String addSpaces(String s, int[] spaces) {
        char[] result = new char[s.length() + spaces.length];
        int writePos = 0;
        int readPos = 0;
        
        for (int spacePos : spaces) {
            while (readPos < spacePos) {
                result[writePos++] = s.charAt(readPos++);
            }
            result[writePos++] = ' ';
        }
        
        while (readPos < s.length()) {
            result[writePos++] = s.charAt(readPos++);
        }
        
        return new String(result);
    }
}
```
```csharp []
public class Solution {
    public string AddSpaces(string s, int[] spaces) {
        char[] result = new char[s.Length + spaces.Length];
        int writePos = 0;
        int readPos = 0;
        
        foreach (int spacePos in spaces) {
            while (readPos < spacePos) {
                result[writePos++] = s[readPos++];
            }
            result[writePos++] = ' ';
        }
        
        while (readPos < s.Length) {
            result[writePos++] = s[readPos++];
        }
        
        return new string(result);
    }
}


```
```golang []
func addSpaces(s string, spaces []int) string {
    result := make([]byte, len(s)+len(spaces))
    writePos := 0
    readPos := 0
    
    for _, spacePos := range spaces {
        for readPos < spacePos {
            result[writePos] = s[readPos]
            writePos++
            readPos++
        }
        result[writePos] = ' '
        writePos++
    }
    
    for readPos < len(s) {
        result[writePos] = s[readPos]
        writePos++
        readPos++
    }
    
    return string(result)
}
```
```swift []
class Solution {
    func addSpaces(_ s: String, _ spaces: [Int]) -> String {
        let m = spaces.count
        let n = s.count
        var t = Array(repeating: " ", count: n + m)
        var j = 0
        
        let sArray = Array(s)
        for i in 0..<n {
            if j < m && i == spaces[j] {
                j += 1
            }
            t[i + j] = String(sArray[i])
        }
        
        return t.joined()
    }
}
```
```javascript [JS]
// JavaScript

var addSpaces = function(s, spaces) {
    const result = new Array(s.length + spaces.length);
    let writePos = 0;
    let readPos = 0;
    
    for (const spacePos of spaces) {
        while (readPos < spacePos) {
            result[writePos++] = s[readPos++];
        }
        result[writePos++] = ' ';
    }
    
    while (readPos < s.length) {
        result[writePos++] = s[readPos++];
    }
    
    return result.join('');
};
```
```typescript [TS]
// TypeScript

function addSpaces(s: string, spaces: number[]): string {
    const result: string[] = new Array(s.length + spaces.length);
    let writePos: number = 0;
    let readPos: number = 0;
    
    for (const spacePos of spaces) {
        while (readPos < spacePos) {
            result[writePos++] = s[readPos++];
        }
        result[writePos++] = ' ';
    }
    
    while (readPos < s.length) {
        result[writePos++] = s[readPos++];
    }
    
    return result.join('');
}
```
```rust []
impl Solution {
    pub fn add_spaces(s: String, spaces: Vec<i32>) -> String {
        let mut result = vec![0u8; s.len() + spaces.len()];
        let mut write_pos = 0;
        let mut read_pos = 0;
        let s_bytes = s.as_bytes();
        
        for space_pos in spaces {
            while read_pos < space_pos as usize {
                result[write_pos] = s_bytes[read_pos];
                write_pos += 1;
                read_pos += 1;
            }
            result[write_pos] = b' ';
            write_pos += 1;
        }
        
        while read_pos < s.len() {
            result[write_pos] = s_bytes[read_pos];
            write_pos += 1;
            read_pos += 1;
        }
        
        String::from_utf8(result).unwrap()
    }
}
```
```ruby []
def add_spaces(s, spaces)
    result = Array.new(s.length + spaces.length)
    write_pos = 0
    read_pos = 0
    
    spaces.each do |space_pos|
        while read_pos < space_pos
            result[write_pos] = s[read_pos]
            write_pos += 1
            read_pos += 1
        end
        result[write_pos] = ' '
        write_pos += 1
    end
    
    while read_pos < s.length
        result[write_pos] = s[read_pos]
        write_pos += 1
        read_pos += 1
    end
    
    result.join
end
```





# #2 Two Pointers (from video)

```python3 []
class Solution:
    def addSpaces(self, s: str, spaces: List[int]) -> str:
        i, j = 0, 0
        res = []

        while i < len(s) and j < len(spaces):
            if i < spaces[j]:
                res.append(s[i])
                i += 1
            else:
                res.append(" ")
                j += 1

        if i < len(s):
            res.append(s[i:])
```
```cpp []
class Solution {
public:
    string addSpaces(string s, vector<int>& spaces) {
        int i = 0, j = 0;
        string res;
        res.reserve(s.length() + spaces.size());
        
        while (i < s.length() && j < spaces.size()) {
            if (i < spaces[j]) {
                res += s[i];
                i++;
            } else {
                res += ' ';
                j++;
            }
        }
        
        if (i < s.length()) {
            res += s.substr(i);
        }
        
        return res;
    }
};
```
```java []
class Solution {
    public String addSpaces(String s, int[] spaces) {
        int i = 0, j = 0;
        StringBuilder res = new StringBuilder();
        
        while (i < s.length() && j < spaces.length) {
            if (i < spaces[j]) {
                res.append(s.charAt(i));
                i++;
            } else {
                res.append(' ');
                j++;
            }
        }
        
        if (i < s.length()) {
            res.append(s.substring(i));
        }
        
        return res.toString();
    }
}
```
```csharp []
public class Solution {
    public string AddSpaces(string s, int[] spaces) {
        int i = 0, j = 0;
        StringBuilder res = new StringBuilder();
        
        while (i < s.Length && j < spaces.Length) {
            if (i < spaces[j]) {
                res.Append(s[i]);
                i++;
            } else {
                res.Append(' ');
                j++;
            }
        }
        
        if (i < s.Length) {
            res.Append(s.Substring(i));
        }
        
        return res.ToString();
    }
}
```
```golang []
func addSpaces(s string, spaces []int) string {
    var res strings.Builder
    res.Grow(len(s) + len(spaces))
    
    i, j := 0, 0
    for i < len(s) && j < len(spaces) {
        if i < spaces[j] {
            res.WriteByte(s[i])
            i++
        } else {
            res.WriteByte(' ')
            j++
        }
    }
    
    if i < len(s) {
        res.WriteString(s[i:])
    }
    
    return res.String()
}
```
```swift []
class Solution {
    func addSpaces(_ s: String, _ spaces: [Int]) -> String {
        let m = spaces.count
        let n = s.count
        var t = Array(repeating: " ", count: n + m)
        var j = 0
        
        let sArray = Array(s)
        for i in 0..<n {
            if j < m && i == spaces[j] {
                j += 1
            }
            t[i + j] = String(sArray[i])
        }
        
        return t.joined()
    }
}
```
```javascript [JS]
// JavaScript

var addSpaces = function(s, spaces) {
    let i = 0, j = 0;
    let res = [];
    
    while (i < s.length && j < spaces.length) {
        if (i < spaces[j]) {
            res.push(s[i]);
            i++;
        } else {
            res.push(" ");
            j++;
        }
    }
    
    if (i < s.length) {
        res.push(s.slice(i));
    }
    
    return res.join("");
};


```
```typescript [TS]
// TypeScript

function addSpaces(s: string, spaces: number[]): string {
    let i = 0, j = 0;
    const res: string[] = [];
    
    while (i < s.length && j < spaces.length) {
        if (i < spaces[j]) {
            res.push(s[i]);
            i++;
        } else {
            res.push(" ");
            j++;
        }
    }
    
    if (i < s.length) {
        res.push(s.slice(i));
    }
    
    return res.join("");
}
```
```rust []
impl Solution {
    pub fn add_spaces(s: String, spaces: Vec<i32>) -> String {
        let mut i = 0;
        let mut j = 0;
        let mut res = Vec::new();
        let s_chars: Vec<char> = s.chars().collect();
        
        while i < s.len() && j < spaces.len() {
            if i < spaces[j] as usize {
                res.push(s_chars[i]);
                i += 1;
            } else {
                res.push(' ');
                j += 1;
            }
        }
        
        if i < s.len() {
            res.extend(&s_chars[i..]);
        }
        
        res.into_iter().collect()
    }
}
```
```ruby []
def add_spaces(s, spaces)
    i = 0
    j = 0
    res = []
    
    while i < s.length && j < spaces.length
        if i < spaces[j]
            res.push(s[i])
            i += 1
        else
            res.push(" ")
            j += 1
        end
    end
    
    res.push(s[i..-1]) if i < s.length
    
    res.join
end
```

- Complexity: Time O(n) & Space O(n)




---









![string.png](./images/0.png)




# Most common String Interview Problems
List based on my research (interviews, reddit, github) Probably not 100% accurate but very close to my recruitments. Leetcode Premium is probably more accurate [I don't have]

**Easy:** [[20. Valid Parentheses]](https://leetcode.com/problems/valid-parentheses/solutions/6013115/solution) [[28. Find the Index of the First Occurrence in a String]](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string) [[13. Roman to Integer]](https://leetcode.com/problems/roman-to-integer/solutions/6021029/beats-100-explained-step-by-step-list-most-common-string-interview-problems/) [[125. Valid Palindrome]](https://leetcode.com/problems/valid-palindrome) [[680. Valid Palindrome II]](https://leetcode.com/problems/valid-palindrome-ii) [[67. Add Binary]](https://leetcode.com/problems/add-binary)




**Medium/Hard:** [[8. String to Integer (atoi)]](https://leetcode.com/problems/string-to-integer-atoi/solutions/6013112/solution/) [[3. Longest Substring Without Repeating Characters]](https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/6013106/solutions/) [[5. Longest Palindromic Substring]](https://leetcode.com/problems/longest-palindromic-substring/solutions/6013111/solution/) [[937. Reorder Data in Log Files]](https://leetcode.com/problems/reorder-data-in-log-files) [[68. Text Justification]](https://leetcode.com/problems/text-justification) [[32. Longest Valid Parentheses]](https://leetcode.com/problems/longest-valid-parentheses) [[12. Integer to Roman]](https://leetcode.com/problems/integer-to-roman/solutions/6023402/solutions) [[22. Generate Parentheses]](https://leetcode.com/problems/generate-parentheses) [[65. Valid Number]](https://leetcode.com/problems/valid-number) [[49. Group Anagrams]](https://leetcode.com/problems/group-anagrams)



---



![array2.png](./images/1.png)


# Most common Array Interview Problems

**Easy:** [[1. Two Sum]](https://leetcode.com/problems/two-sum/solutions/5999466/beats-100-explained-step-by-step-list-most-common-array-inverview) **(common warm-up)** [[121. Best Time to Buy and Sell Stock]](https://leetcode.com/discuss/topic/6027720/solution/) [[88. Merge Sorted Array]](https://leetcode.com/problems/merge-sorted-array/solutions/6031394/beats-100-explained-step-by-step-list-most-common-string-interview-problems) [[27. Remove Element]](https://leetcode.com/problems/remove-element/solutions/6031528/beats-100-explained-step-by-step-list-most-common-array-interview-problems) [[929. Unique Email Addresses]](https://leetcode.com/problems/unique-email-addresses/solutions/6031687/explained-step-by-step-video-list-most-common-array-interview-problems) 

**Medium/Hard:** [[15. 3Sum]](https://leetcode.com/problems/3sum/description/) [[42. Trapping Rain Water]](https://leetcode.com/problems/trapping-rain-water/?envType=problem-list-v2&envId=atbyk0mj) [[56. Merge Intervals]](https://leetcode.com/problems/merge-intervals/description/) [[57. Insert Interval]](https://leetcode.com/problems/insert-interval/description/) [[46. Permutations]](https://leetcode.com/problems/permutations/description/) [[53. Maximum Subarray]](https://leetcode.com/problems/maximum-subarray/description/) [[73. Set Matrix Zeroes]](https://leetcode.com/problems/set-matrix-zeroes/description/) [[284. Peeking Iterator]](https://leetcode.com/problems/peeking-iterator/description/)










####  [Interview Questions and Answers Repository](https://github.com/RooTinfinite/Interview-questions-and-answers)


![image.png](./images/2.png)

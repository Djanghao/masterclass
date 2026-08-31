# 🔥🔥🔥 EASIEST EXPLANATiON ✅ EFFICiENCY ✅ * EXPLAiNED* ✅ 🚀🚀🚀

**Author:** prodonik
**Votes:** 57
**Link:** [https://leetcode.com/problems/custom-sort-string/solutions/4856620/](https://leetcode.com/problems/custom-sort-string/solutions/4856620/)

---

# Intuition
When presented with the task of custom sorting a string `s` based on the order specified in another string `order`, the immediate intuition is to prioritize the characters in `s` according to their occurrence in `order`. Characters not present in `order` should retain their relative positions but appear after the ordered characters. This suggests a need for a counting approach to keep track of how many times each character appears in `s`, and then reconstructing the string based on `order`.

# Approach
The approach involves a few straightforward steps:
1. Count the occurrences of each character in `s` using a frequency array, where each index corresponds to a letter in the alphabet.
2. Iterate through the `order` string, appending each character to the result as many times as it appears in `s` (as recorded in our frequency array). Once appended, the character's count is set to 0 to indicate it's been fully processed.
3. Finally, append the remaining characters (those not in `order` but present in `s`) to the result. These characters are identified as still having a non-zero count in the frequency array.

# Complexity
- **Time complexity:** $$O(n + m)$$, where $$n$$ is the length of the string `s` and `m`is the length of the string `order`. This is because we iterate through each string exactly once. The final iteration through the 26 possible characters is constant time, $$O(1)$$, in the context of this problem's constraints.
- **Space complexity:** $$O(1)$$, since the frequency array `map` uses constant space, irrespective of the input size. The size of the `StringBuilder` does not count towards space complexity as it is required for the output. 

![image.png](./images/0.png)

## WORTH TO LEAVE AN UPVOTE ?

# Code
```java []
class Solution {
    public String customSortString(String order, String s) {
        int [] map = new int [26];
        for (int i = 0; i < s.length(); i ++) {
            map[s.charAt(i) - 'a'] ++;
        }
        StringBuilder result = new StringBuilder();

        for (int i = 0; i < order.length(); i ++) {
            for (int j = 0; j < map[order.charAt(i) - 'a']; j ++) {
                result.append(order.charAt(i));
            }
            map[order.charAt(i) - 'a'] = 0;
        }

        for (int i = 0; i < 26; i++) {
            for (int j = 0; j < map[i]; j++) {
                result.append((char) ('a' + i));
            }
        }
        //UPVOTE :)
        return result.toString();
    }
}

```
```C++ []
class Solution {
public:
    string customSortString(string order, string s) {
        vector<int> map(26, 0);
        for (char c : s) {
            map[c - 'a']++;
        }
        string result;

        for (char c : order) {
            result.append(map[c - 'a'], c);
            map[c - 'a'] = 0;
        }

        for (int i = 0; i < 26; ++i) {
            result.append(map[i], 'a' + i);
        }
        // UPVOTE :)
        return result;
    }
};
```
```Python []
class Solution:
    def customSortString(self, order: str, s: str) -> str:
        count = collections.Counter(s)
        result = []

        for char in order:
            result.append(char * count.pop(char, 0))
            
        for char, cnt in count.items():
            result.append(char * cnt)
        # UPVOTE :)
        return ''.join(result)

```
```C# []
public class Solution {
    public string CustomSortString(string order, string s) {
        int[] map = new int[26];
        foreach (char c in s) {
            map[c - 'a']++;
        }

        var result = new System.Text.StringBuilder();

        foreach (char c in order) {
            result.Append(new string(c, map[c - 'a']));
            map[c - 'a'] = 0;
        }

        for (int i = 0; i < 26; i++) {
            result.Append(new string((char)('a' + i), map[i]));
        }
        // UPVOTE :)
        return result.ToString();
    }
}

```
```Ruby []
class Solution
    def custom_sort_string(order, s)
        map = Array.new(26, 0)
        s.each_char { |c| map[c.ord - 'a'.ord] += 1 }
        result = ""

        order.each_char do |c|
            result += c * map[c.ord - 'a'.ord]
            map[c.ord - 'a'.ord] = 0
        end

        map.each_with_index do |count, index|
            result += (index + 'a'.ord).chr * count if count > 0
        end
        # UPVOTE :)
        result
    end
end

```
```Go []
func customSortString(order string, s string) string {
    count := make([]int, 26)

    for _, c := range s {
        count[c-'a']++
    }

    var result strings.Builder

    for _, c := range order {
        result.WriteString(strings.Repeat(string(c), count[c-'a']))
        count[c-'a'] = 0
    }

    for i := 0; i < 26; i++ {
        result.WriteString(strings.Repeat(string('a'+i), count[i]))
    }
    // UPVOTE :)
    return result.String()
}


```
```Js []
class Solution {
    customSortString(order, s) {
        const map = Array(26).fill(0);
        for (let c of s) {
            map[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        let result = '';

        for (let c of order) {
            result += c.repeat(map[c.charCodeAt(0) - 'a'.charCodeAt(0)]);
            map[c.charCodeAt(0) - 'a'.charCodeAt(0)] = 0;
        }

        for (let i = 0; i < 26; i++) {
            result += String.fromCharCode('a'.charCodeAt(0) + i).repeat(map[i]);
        }
        // UPVOTE :)
        return result;
    }
}
```
![image.png](./images/1.png)

# 100% Beats | | Hash Table | | Easy Explanation | | C++ | | Java | | Python | | ✅✅✅

**Author:** Hunter_0718
**Votes:** 74
**Link:** [https://leetcode.com/problems/custom-sort-string/solutions/4856371/](https://leetcode.com/problems/custom-sort-string/solutions/4856371/)

---

![image.png](./images/0.png)

To solve this problem, let's first understand the problem statement. We are given two strings: `order` and `s`. The characters in `order` represent the desired order in which the characters of string `s` should appear. However, it's important to note that some characters in `s` might not be present in `order`. Our goal is to permute the characters of `s` so that they match the desired order specified in `order`.

**Intuition:**

When looking at the problem, we can observe that we need to rearrange the characters of `s` based on the order specified in `order`. To achieve this, we can utilize a hashmap to count the occurrences of each character in `s`. Then, we can iterate through the characters in `order`, appending the characters to the result string based on their count in `s`. Finally, we append any remaining characters from `s` to the result.

**Approach:**

1. Create a hashmap to count the occurrences of each character in `s`.
2. Iterate through the characters in `order`. For each character:
   - If the character exists in `s`, append it to the result string the same number of times it appears in `s`, and then erase it from the hashmap.
3. After iterating through `order`, append any remaining characters from the hashmap to the result string.
4. Return the result string.

**Complexity Analysis:**

**- Time complexity:** Since we iterate through `order` and `s` once, the time complexity is **O(n)**, where n is the length of the string `s`.
**- Space complexity:** We utilize extra space for the hashmap and the result string. The space complexity is **O(n)** due to the hashmap and the result string.


```C++ []
class Solution {
public:
    string customSortString(string order, string s) {
        string result = "";
        unordered_map<int,int>mp;
        for(auto &it : s){
            mp[it]++;
        }
        for(auto &it : order){
            if(mp.find(it) != mp.end())
                result.append(mp[it], it);
                mp.erase(it);
        }
        for(auto &it : mp){
            result.append(it.second,it.first);
        }
        return result;
    }
};
```
```Java []
import java.util.HashMap;

class Solution {
    public String customSortString(String order, String s) {
        StringBuilder result = new StringBuilder();
        HashMap<Character, Integer> mp = new HashMap<>();
        for (char c : s.toCharArray()) {
            mp.put(c, mp.getOrDefault(c, 0) + 1);
        }
        for (char c : order.toCharArray()) {
            if (mp.containsKey(c)) {
                result.append(String.valueOf(c).repeat(Math.max(0, mp.get(c))));
                mp.remove(c);
            }
        }
        for (char c : mp.keySet()) {
            result.append(String.valueOf(c).repeat(Math.max(0, mp.get(c))));
        }
        return result.toString();
    }
}

```
```Python3 []
class Solution:
    def customSortString(self, order: str, s: str) -> str:
        result = ""
        mp = {}
        for char in s:
            mp[char] = mp.get(char, 0) + 1
        for char in order:
            if char in mp:
                result += char * mp[char]
                del mp[char]
        for char, count in mp.items():
            result += char * count
        return result

```
```Kotlin []
class Solution {
    fun customSortString(order: String, s: String): String {
        val result = StringBuilder()
        val mp = HashMap<Char, Int>()
        for (char in s) {
            mp[char] = mp.getOrDefault(char, 0) + 1
        }
        for (char in order) {
            if (mp.containsKey(char)) {
                result.append(char.toString().repeat(mp[char] ?: 0))
                mp.remove(char)
            }
        }
        for ((char, count) in mp) {
            result.append(char.toString().repeat(count))
        }
        return result.toString()
    }
}

```
```JavaScript []
var customSortString = function(order, s) {
    let result = '';
    let mp = new Map();
    for (let char of s) {
        mp.set(char, (mp.get(char) || 0) + 1);
    }
    for (let char of order) {
        if (mp.has(char)) {
            result += char.repeat(mp.get(char));
            mp.delete(char);
        }
    }
    for (let [char, count] of mp.entries()) {
        result += char.repeat(count);
    }
    return result;
};

```


**Dry Run:**

Let's dry run the code with the provided test case `order = "bcafg", s = "abcd"`:

1. Initialize `mp` as an empty hashmap.
2. Iterate through `s = "abcd"` and count the occurrences of each character in `s`. The hashmap becomes `{'a': 1, 'b': 1, 'c': 1, 'd': 1}`.
3. Iterate through `order = "bcafg"`.
   - For `'b'`: Append `'b'` once to the result string and erase `'b'` from the hashmap. Result: `result = "b"`, `mp = {'a': 1, 'c': 1, 'd': 1}`.
   - For `'c'`: Append `'c'` once to the result string and erase `'c'` from the hashmap. Result: `result = "bc"`, `mp = {'a': 1, 'd': 1}`.
   - For `'a'`: Append `'a'` once to the result string and erase `'a'` from the hashmap. Result: `result = "bca"`, `mp = {'d': 1}`.
   - `'f'` and `'g'` are not in `s`, so we skip them.
4. After iterating through `order`, append any remaining characters from the hashmap to the result string. Append `'d'` once. Result: `result = "bcad"`.
5. Return `"bcad"` as the final output.

**Note : -**

**Explanation:** The characters "b", "c", and "a" from order dictate the order for the characters in s. The character "d" in s does not appear in order, so its position is flexible.

Following the order of appearance in order, "b", "c", and "a" from s should be arranged as "b", "c", "a". "d" can be placed at any position since it's not in order. The output "bcad" correctly follows this rule. Other arrangements like "bacd" or "bcda" would also be valid, as long as "b", "c", "a" maintain their order.

The final output matches the expected output, so the implementation is correct.
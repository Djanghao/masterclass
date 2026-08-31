# Sorting||HashMap||🔥 🚀 easy explanation || beats 100%|| TC:O(n) SC:O(n)

**Author:** dineshd7
**Votes:** 8
**Link:** [https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-ii/solutions/4600976/](https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-ii/solutions/4600976/)

---

# Intuition
1. collect frequences (freq[i][0]) in array with letters stored below (freq[i][1])
2. sort them
3. use hashmap for values of(first 8, then after 8, 8, 2)
4. count the values for each letter in word
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
This is Optimal solution.
Brute force : (without duplicates)
[https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-i/description/]()

<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 
- O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
- O(n+n) = O(n)

<!-- Add your space complexity here, e.g. $$O(n)$$ -->
![upvote.jpeg](./images/0.jpeg)

```java []
import java.util.*;
class Solution {
    public int minimumPushes(String word) {
        int[][] freq = new int[26][2];
        for(int i = 0;i<26; i++)    //
            freq[i][1] = i;         // initialize letters 
        for(int i = 0; i<word.length(); i++){
            int ch = word.charAt(i) - 'a';
            freq[ch][0]++; // count frequencey
        }
        //sort according to frequency 
         Arrays.sort(freq, (a, b) -> {
            if (a[0] == b[0]) {
                return Integer.compare(a[1], b[1]);
            }
            return Integer.compare(b[0], a[0]);
        });
        //for first(8->1) ((9-16)->2) ((17-24)->3) ((25 - 26)->4)
        HashMap<Integer, Integer> m = new HashMap<>();
        for(int i = 0; i<26; i++){
            if(freq[i][0] <= 0)
                continue;
            if(i<8){ 
                int ch = freq[i][1]; 
                m.put(ch, 1);
            }
            else if(i<16){
                int ch = freq[i][1]; 
                m.put(ch, 2);
            }
            else if(i<24){
                int ch = freq[i][1]; 
                m.put(ch, 3);
            }
            else if(i>=24){
                int ch = freq[i][1]; 
                m.put(ch, 4);
            }
        }
        int ans = 0;
        //calculate answers 
        for(int i = 0; i<word.length(); i++){
            int c = word.charAt(i) - 'a' ;
            if(m.containsKey(c) )
            ans += m.get(c);
        }
        return ans;
    }
   
}
```
```python3 []
class Solution:
    def minimumPushes(self, word: str) -> int:
        freq = [[0, i] for i in range(26)]
        for i in range(len(word)):
            ch = ord(word[i]) - ord('a')
            freq[ch][0] += 1
        
        freq.sort(key=lambda x: (-x[0], x[1]))
        
        m = {}
        for i in range(26):
            if freq[i][0] <= 0:
                continue
            if i < 8:
                ch = freq[i][1]
                m[ch] = 1
            elif i < 16:
                ch = freq[i][1]
                m[ch] = 2
            elif i < 24:
                ch = freq[i][1]
                m[ch] = 3
            elif i >= 24:
                ch = freq[i][1]
                m[ch] = 4
        
        ans = 0
        for i in range(len(word)):
            c = ord(word[i]) - ord('a')
            if c in m:
                ans += m[c]
        
        return ans



```
```C++ []
class Solution {
public:
    int minimumPushes(string word) {
        vector<vector<int>> freq(26, vector<int>(2));
        for (int i = 0; i < 26; i++)
            freq[i][1] = i;
        for (int i = 0; i < word.length(); i++) {
            int ch = word[i] - 'a';
            freq[ch][0]++;
        }

        sort(freq.begin(), freq.end(), [](const vector<int>& a, const vector<int>& b) {
            if (a[0] == b[0]) {
                return a[1] < b[1];
            }
            return a[0] > b[0];
        });

        unordered_map<int, int> m;
        for (int i = 0; i < 26; i++) {
            if (freq[i][0] <= 0)
                continue;
            if (i < 8) {
                int ch = freq[i][1];
                m[ch] = 1;
            }
            else if (i < 16) {
                int ch = freq[i][1];
                m[ch] = 2;
            }
            else if (i < 24) {
                int ch = freq[i][1];
                m[ch] = 3;
            }
            else if (i >= 24) {
                int ch = freq[i][1];
                m[ch] = 4;
            }
        }
        int ans = 0;

        for (int i = 0; i < word.length(); i++) {
            int c = word[i] - 'a';
            if (m.count(c))
                ans += m[c];
        }
        return ans;
    }
};
```
```ruby []
# @param {String} word
# @return {Integer}
def minimum_pushes(word)
        freq = Array.new(26) { Array.new(2, 0) }
        (0..25).each do |i|
            freq[i][1] = i
        end
        (0...word.length).each do |i|
            ch = word[i].ord - 'a'.ord
            freq[ch][0] += 1
        end
        
        freq.sort! { |a, b|
            if a[0] == b[0]
                a[1] <=> b[1]
            else
                b[0] <=> a[0]
            end
        }
        
        m = {}
        (0..25).each do |i|
            if freq[i][0] <= 0
                next
            end
            if i < 8
                ch = freq[i][1]
                m[ch] = 1
            elsif i < 16
                ch = freq[i][1]
                m[ch] = 2
            elsif i < 24
                ch = freq[i][1]
                m[ch] = 3
            elsif i >= 24
                ch = freq[i][1]
                m[ch] = 4
            end
        end
        ans = 0
        
        (0...word.length).each do |i|
            c = word[i].ord - 'a'.ord
            if m.key?(c)
                ans += m[c]
            end
        end
        return ans 
end
```
```c# []
public class Solution {
    public int MinimumPushes(string word) {
        int[][] freq = new int[26][];
        for (int i = 0; i < 26; i++) {
            freq[i] = new int[2];
            freq[i][1] = i;
        }
        
        foreach (char c in word) {
            int ch = c - 'a';
            freq[ch][0]++;
        }
        
        Array.Sort(freq, (a, b) => {
            if (a[0] == b[0]) {
                return a[1].CompareTo(b[1]);
            }
            return b[0].CompareTo(a[0]);
        });
        
        Dictionary<int, int> m = new Dictionary<int, int>();
        for (int i = 0; i < 26; i++) {
            if (freq[i][0] <= 0) {
                continue;
            }
            if (i < 8) {
                int ch = freq[i][1];
                m[ch] = 1;
            }
            else if (i < 16) {
                int ch = freq[i][1];
                m[ch] = 2;
            }
            else if (i < 24) {
                int ch = freq[i][1];
                m[ch] = 3;
            }
            else if (i >= 24) {
                int ch = freq[i][1];
                m[ch] = 4;
            }
        }
        
        int ans = 0;
        foreach (char c in word) {
            int ch = c - 'a';
            if (m.ContainsKey(ch)) {
                ans += m[ch];
            }
        }
        
        return ans;
    }
}
```
```kotlin []
class Solution {
    fun minimumPushes(word: String): Int {
        val freq = Array(26) { IntArray(2) }
        for (i in 0 until 26) {
            freq[i][1] = i
        }
        for (i in 0 until word.length) {
            val ch = word[i] - 'a'
            freq[ch][0]++
        }

        freq.sortWith { a, b ->
            if (a[0] == b[0]) {
                a[1].compareTo(b[1])
            } else {
                b[0].compareTo(a[0])
            }
        }

        val m = HashMap<Int, Int>()
        for (i in 0 until 26) {
            if (freq[i][0] <= 0) {
                continue
            }
            if (i < 8) {
                val ch = freq[i][1]
                m[ch] = 1
            } else if (i < 16) {
                val ch = freq[i][1]
                m[ch] = 2
            } else if (i < 24) {
                val ch = freq[i][1]
                m[ch] = 3
            } else if (i >= 24) {
                val ch = freq[i][1]
                m[ch] = 4
            }
        }
        var ans = 0

        for (i in 0 until word.length) {
            val c = word[i] - 'a'
            if (m.containsKey(c)) {
                ans += m[c]!!
            }
        }
        return ans
    }
}
```

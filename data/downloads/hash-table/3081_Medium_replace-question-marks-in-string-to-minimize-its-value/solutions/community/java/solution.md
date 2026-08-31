# ✅ ⬆️ | Check Frequency & sort | Intuitive | 🔥🔥  Step by Step [Java]

**Author:** sandeepk97
**Votes:** 10
**Link:** [https://leetcode.com/problems/replace-question-marks-in-string-to-minimize-its-value/solutions/4884088/](https://leetcode.com/problems/replace-question-marks-in-string-to-minimize-its-value/solutions/4884088/)

---

```
class Solution {
    public String minimizeStringValue(String s) {
        // Initialize a map to store the frequencies of characters
        Map<Character, Integer> charFreq = new HashMap<>();
        
        // Initialize a list to store the positions of '?'
        List<Integer> pos = new ArrayList<>();
        
        // Iterate over the input string to determine character frequencies and positions of '?'
        for (char ch : s.toCharArray()) {
            if (ch != '?')  {
                charFreq.put(ch, charFreq.getOrDefault(ch, 0) + 1);
            }
        }
        
        // Initialize a list to store the characters to replace '?'
        List<Character> ans = new ArrayList<>();
        
        // Find the positions of '?' and store them in the 'pos' list
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == '?') {
                pos.add(i);
            }
        }
        
        // Iterate over the positions of '?' to find the lexicographically smallest character
        for (int i = 0; i < pos.size(); i++) {
            int freq = Integer.MAX_VALUE;
            for (char c = 'a'; c <= 'z'; c++) {
                freq = Math.min(charFreq.getOrDefault(c, 0), freq);
            }
            for (char c = 'a'; c <= 'z'; c++) {
                if (freq == charFreq.getOrDefault(c, 0)) {
                    ans.add(c);
                    charFreq.put(c, charFreq.getOrDefault(c, 0) + 1);
                    break;
                }
            }
        }
        
        // Sort the characters to replace '?' lexicographically
        Collections.sort(ans);
        
        // Replace '?' characters with the characters from 'ans' list
        int j = 0;
        StringBuilder sb = new StringBuilder(s);
        for (int i : pos) {
            sb.setCharAt(i, ans.get(j++));
        }
        
        // Return the modified string
        return sb.toString();
    }
}
```

**Explanation:**
Initialize a map charFreq to store the frequencies of characters, and a list pos to store the positions of '?'.
Iterate over the input string s to determine character frequencies and positions of '?'.
Initialize a list ans to store the characters to replace '?'.
Find the positions of '?' and store them in the pos list.
Iterate over the positions of '?' to find the lexicographically smallest character.
Replace '?' characters with the characters from the ans list.
Return the modified string.

![image](./images/0.png)

**Please Upvote**

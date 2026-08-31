# Cursor count

**Author:** ItsLoki
**Votes:** 0
**Link:** [https://leetcode.com/problems/sentence-screen-fitting/solutions/5137440/](https://leetcode.com/problems/sentence-screen-fitting/solutions/5137440/)

---

# Complexity
- Time complexity: O(n + rows)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int WordsTyping(string[] sentence, int rows, int cols) {
        var sb = new StringBuilder();
        foreach(var str in sentence){
            sb.Append(str).Append(" ");
        }

        var cursor = 0;
        int n = sb.Length;
        for(int i = 0; i < rows; i++){
            cursor += cols;
            while(cursor % n >= 0 && sb[cursor % n] != ' '){
                cursor--;
            }

            cursor++;
        }

        return cursor / n;
    }
}
```
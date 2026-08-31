# C#, recursive backtracking O(2^n) solution

**Author:** edevyatkin
**Votes:** 2
**Link:** [https://leetcode.com/problems/letter-case-permutation/solutions/724388/](https://leetcode.com/problems/letter-case-permutation/solutions/724388/)

---

```
public class Solution {
    public IList<string> LetterCasePermutation(string S) {
        IList<string> result = new List<string>();
        StringBuilder sb = new StringBuilder();
        LetterCasePermutation(S, 0, sb, result);
        return result;        
    }
    
    private void LetterCasePermutation(string s, int index, StringBuilder sb, IList<string> result) {
        if (sb.Length == s.Length) {
            result.Add(sb.ToString());
            return;
        }
        for (int i = index; i < s.Length; i++) {
            sb.Append(s[i]);
            LetterCasePermutation(s, i+1, sb, result);
            sb.Remove(sb.Length-1, 1);
            if (char.IsLetter(s[i])) {
                sb.Append(char.IsLower(s[i]) ? char.ToUpper(s[i]) : char.ToLower(s[i]));
                LetterCasePermutation(s, i+1, sb, result);
                sb.Remove(sb.Length-1, 1);
            }
        }
    }
}
```
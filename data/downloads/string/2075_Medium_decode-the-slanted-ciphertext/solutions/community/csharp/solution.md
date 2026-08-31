# easy c# solution!!!

**Author:** Nejatsztomi
**Votes:** 0
**Link:** [https://leetcode.com/problems/decode-the-slanted-ciphertext/solutions/5954279/](https://leetcode.com/problems/decode-the-slanted-ciphertext/solutions/5954279/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
using System.Text.RegularExpressions;
public class Solution {
    public string DecodeCiphertext(string encodedText, int rows) {
     if (rows == 1) return encodedText;
        
        int length = encodedText.Length;
        int cols = length / rows;
        StringBuilder decrypted = new StringBuilder();

        
        for (int i = 0; i < cols; i++) {
            for (int j = i; j < length; j += cols + 1) {
                decrypted.Append(encodedText[j]);
            }
        }

        
        int lastNonSpaceIndex = decrypted.Length - 1;
        while (lastNonSpaceIndex >= 0 && decrypted[lastNonSpaceIndex] == ' ') {
            lastNonSpaceIndex--;
        }

        return decrypted.ToString(0, lastNonSpaceIndex + 1);
    }
}
```
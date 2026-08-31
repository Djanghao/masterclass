# Simple solution on Dart | O(N)

**Author:** _DREDD_
**Votes:** 0
**Link:** [https://leetcode.com/problems/html-entity-parser/solutions/5847372/](https://leetcode.com/problems/html-entity-parser/solutions/5847372/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```dart []
class Solution {
  String entityParser(String text) {
    Map<String, String> mapHTMLTag = {
        '&quot;': '"',
        '&apos;': '\\'',
        '&amp;': '&',
        '&gt;': '>',
        '&lt;': '<',
        '&frasl;': '/',
    };

    int firstSymbol = text.indexOf('&');

    if (firstSymbol == -1) {
        return text;
    }

    for (int i = firstSymbol; i < text.length; i++) {
        String str = '';

        if (text[i] == '&') {
            for (int j = i; j < text.length; j++) {
                if (text[j] == ';') {
                    str += ';';
                    break;
                }
                str += text[j];
            }
        }

        if (mapHTMLTag.containsKey(str)) {
            text = '${text.substring(0, i)}${mapHTMLTag[str]}${text.substring(i + str.length, text.length)}';
        }
    }

    return text;
  }
}
```
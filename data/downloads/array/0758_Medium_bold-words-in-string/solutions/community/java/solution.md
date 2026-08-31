# Java faster than 100% : Range Tracking and Merging

**Author:** anuraganand789
**Votes:** 0
**Link:** [https://leetcode.com/problems/bold-words-in-string/solutions/5994015/](https://leetcode.com/problems/bold-words-in-string/solutions/5994015/)

---

# Code
```java []
class Solution {
    public String boldWords(String[] words, String s) {
        final int sLength = s.length();
        final boolean[] makeItBold = new boolean[sLength];

        for(final String word : words) {
            final int wordLength = word.length();
            int offset = 0;

            while(offset < sLength) {
                int presentAt = s.indexOf(word, offset);
                if(presentAt < 0) break;
                int endIndex = presentAt + wordLength;

                int i = presentAt;
                while(i < endIndex) makeItBold[i++] = true;
                offset = presentAt + 1;
            }
        }

        final StringBuilder sb = new StringBuilder();
        for(int index = 0; index < sLength;) {
            if(!makeItBold[index]) {
                sb.append(s.charAt(index));
                ++index;
                continue;
            }
            sb.append("<b>");
            int boldIndex = index;
            while(boldIndex < sLength && makeItBold[boldIndex]) ++boldIndex;
            sb.append(s.substring(index, boldIndex));
            sb.append("</b>");
            index = boldIndex;
        }

        return sb.toString();
    }
}
```
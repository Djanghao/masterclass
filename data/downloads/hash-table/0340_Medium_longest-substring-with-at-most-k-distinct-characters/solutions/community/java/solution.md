# 15 lines java solution using slide window

**Author:** jiangbowei2010
**Votes:** 150
**Link:** [https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/solutions/80047/](https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/solutions/80047/)

---

feel it is not a new question, just use num to track the number of distinct characters within the slide window

    public class Solution {
        public int lengthOfLongestSubstringKDistinct(String s, int k) {
            int[] count = new int[256];
            int num = 0, i = 0, res = 0;
            for (int j = 0; j < s.length(); j++) {
                if (count[s.charAt(j)]++ == 0) num++;
                if (num > k) {
                    while (--count[s.charAt(i++)] > 0);
                    num--;
                }
                res = Math.max(res, j - i + 1);
            }
            return res;
        }
    }
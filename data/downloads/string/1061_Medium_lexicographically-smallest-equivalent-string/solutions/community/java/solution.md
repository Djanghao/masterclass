# 2 Solutions (1ms & 4ms) 🔥🔥 || With Explanation✅|| Java😊

**Author:** N7_BLACKHAT
**Votes:** 24
**Link:** [https://leetcode.com/problems/lexicographically-smallest-equivalent-string/solutions/3047979/](https://leetcode.com/problems/lexicographically-smallest-equivalent-string/solutions/3047979/)

---

# Explaination for Approach 1 :
Use two maps to store each letter with its group and each group with  the letters in the group, respectively. Initially, all letters have different groups, and each group has only one letter, which is the letter itself.

Loop over A and B and merge each pair of letters into one group. When merging into one group, only remain the group that is lexicographically smallest. All the letters from both previous groups are mapped to the remaining group, and the remaining group is mapped to all the letters from both previous groups.

After the mappings are done, loop over S and obtain the group for each letter and replace the letter in S. Finally, return the new string.
# Request \uD83D\uDE0A :
If you find these solutions easy to understand and helpful, then . Please Upvote\uD83D\uDC4D\uD83D\uDC4D (Scroll Down for fastest [1 ms] approach).
# Approach 1 : 4 ms Solution
```
class Solution {
    public String smallestEquivalentString(String A, String B, String S) {
        Map<Character, Character> letterGroupMap = new HashMap<Character, Character>();
        Map<Character, Set<Character>> groupLettersMap = new HashMap<Character, Set<Character>>();
        for (char c = 'a'; c <= 'z'; c++) {
            letterGroupMap.put(c, c);
            Set<Character> set = new HashSet<Character>();
            set.add(c);
            groupLettersMap.put(c, set);
        }
        int length = A.length();
        for (int i = 0; i < length; i++) {
            char c1 = A.charAt(i), c2 = B.charAt(i);
            char group1 = letterGroupMap.get(c1), group2 = letterGroupMap.get(c2);
            if (group1 != group2) {
                Set<Character> set1 = groupLettersMap.get(group1);
                Set<Character> set2 = groupLettersMap.get(group2);
                if (group1 < group2) {
                    for (char c : set2)
                        letterGroupMap.put(c, group1);
                    set1.addAll(set2);
                    groupLettersMap.put(group1, set1);
                    groupLettersMap.remove(group2);
                } else {
                    for (char c : set1)
                        letterGroupMap.put(c, group2);
                    set2.addAll(set1);
                    groupLettersMap.put(group2, set2);
                    groupLettersMap.remove(group1);
                }
            }
        }
        char[] array = S.toCharArray();
        int strLength = array.length;
        for (int i = 0; i < strLength; i++) {
            char c = array[i];
            char group = letterGroupMap.get(c);
            array[i] = group;
        }
        return new String(array);
    }
}
```

# Approach 2 : 1 ms Solution [Fastest]
```
class Solution {
    private int[] p;

    public String smallestEquivalentString(String s1, String s2, String baseStr) {
        p = new int[26];
        for (int i = 0; i < 26; ++i) {
            p[i] = i;
        }
        for (int i = 0; i < s1.length(); ++i) {
            int a = s1.charAt(i) - 'a', b = s2.charAt(i) - 'a';
            int pa = find(a), pb = find(b);
            if (pa < pb) {
                p[pb] = pa;
            } else {
                p[pa] = pb;
            }
        }
        StringBuilder sb = new StringBuilder();
        for (char a : baseStr.toCharArray()) {
            char b = (char) (find(a - 'a') + 'a');
            sb.append(b);
        }
        return sb.toString();
    }

    private int find(int x) {
        if (p[x] != x) {
            p[x] = find(p[x]);
        }
        return p[x];
    }
}
```

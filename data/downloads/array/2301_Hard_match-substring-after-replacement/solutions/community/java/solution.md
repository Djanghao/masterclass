# [Java] Problems with the KMP approach | O(MN) solution

**Author:** tangj1905
**Votes:** 12
**Link:** [https://leetcode.com/problems/match-substring-after-replacement/solutions/2140523/](https://leetcode.com/problems/match-substring-after-replacement/solutions/2140523/)

---

I've seen a handful of posts using the [KMP string matching algorithm](https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm) to attempt this problem. If you're not familiar with the algorithm, I suggest you read into it - it's a really nice algorithm that can match a substring in linear time. I don't think using KMP for this problem is necessarily impossible, but there are a few important issues regarding how you would implement it. (I personally gave it a go for a few hours, but I couldn't come up with a modification to KMP that I could prove was correct.)

The difficulty lies in this bit: *how do you generate the longest-prefix-suffix table?*

Normally in KMP, you can just do a bit of backtracking to generate the table. Since we're not concerned with optional replacements, we know precisely which indices you can continue your iteration over, and the article linked above has a good breakdown on how to do this. In this problem, however, you have to think about where the substitutions could possibly take place\u2014ignoring this will cause your program to jump over indices where a potential match could be.

Here's a simple example of this:
``s = "1x23"``
``sub = "123"``
``mapping = [['1', 'x'], ['2', 'x']] ``

Here, KMP will correctly match the `1`s. Using the given mappings, it will confidently match the `2` with the `x`, but then fail on the next character because `3` and `2` cannot match with each other. We want KMP to resume its search at `x`, but the normal implementation would have no way of knowing how to do that! In essence, we need to be able to communicate the fact that, given the mappings, `1 -> x` and `2 -> x`, the characters `1` and `2` are "indistinguishable" if the character in the original string is `x`, and the generated longest-prefix-suffix table needs to be able to take this into account. This is a complicated case that the KMP algorithm will not handle on its own.

Practically, one way you *might* be able to implement this is to weaken the problem a bit and to consider two characters to match if *there exists* a mapping that they share together. Or, in other words, characters `a` and `b` match if either `a == b` or there exists mappings `a -> x` and `b -> x` for some `x`. (Note that `a -> b` and `b -> a` also meet these criteria, since a character implicitly maps to itself.)

Then, the problem of whether two characters match boils down to whether they have any mappings in common, which can be solved efficiently using a [union find](https://en.wikipedia.org/wiki/Disjoint-set_data_structure) data structure. However, this scheme no longer guarantees the optimality of the longest-prefix-suffix table that is generated; consequently, there's a good chance you won't even have a linear time complexity anymore.

Even if you managed to implement this, I feel that the added complexity would negate any of the speedups. I think the brute-force method is likely the best one to use.
On that note, here's the code I have in Java. Besides using a 2d boolean matrix as a makeshift multiset, there isn't anything really special about the implementation.

```java
class Solution {
    public boolean matchReplacement(String s, String sub, char[][] mappings) {
        int m = sub.length(), n = s.length();
        final int RANGE = 'z' - '0' + 1;
        
        boolean[][] multiMap = new boolean[RANGE][RANGE];
        for (char[] map : mappings) {
            char from = map[0], to = map[1];
            multiMap[from - '0'][to - '0'] = true;
        }
        // Now, we use a naive string matching algorithm
        // This will run in O(mn) time.
        for (int i = 0; i < n - m + 1; i++) {
            int j = 0;
            while (j < m) {
                char sc = s.charAt(i + j), subc = sub.charAt(j);
                if (sc != subc && !multiMap[subc - '0'][sc - '0'])
                    break;
                j++;
            }
            // Went the whole length of substring, return true:
            if (j == m)
                return true;
        }
        return false;
    }
}
```
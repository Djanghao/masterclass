# Palindrome Rearrangement Queries - Java | DP and logic | Explained approach

**Author:** eisimonov
**Votes:** 5
**Link:** [https://leetcode.com/problems/palindrome-rearrangement-queries/solutions/4481382/](https://leetcode.com/problems/palindrome-rearrangement-queries/solutions/4481382/)

---

# Approach
1. First, should check whether it is possible to create a palindrome from the left and right halves of the string. If this is not possible, then don\u2019t have to check any queries
2. We will perform each request separately
2.1. We go through each letter of the left half of the string and the corresponding character of the right half
2.2. If both characters are included in the intervals, we simply increase the character counters in the left and right halves
2.3. If neither the letter from the left interval nor the letter from the right interval are included in the query intervals, we should check they are equal
2.4. If only the left/right letter is included in its interval, we should increment the left/right letter counter and decrement the right/left letter counter
3. Since `s.length <= 10^5` and `queries.length <= 10^5`, cache for already performed queries should be used

# Complexity
Let's say n \u2013 length of ```s``` and m \u2013 number of ```queries```
- Time complexity:
$$O(n * m)$$ 

- Space complexity:
$$O(m)$$ since only lowercase English letters are used, the number of keys in the map can only be 26 (all letters from 'a' to 'z') 

# Code
```
class Solution {
    
    private Map<List<Integer>, Boolean> cache;

    public boolean[] canMakePalindromeQueries(String s, int[][] queries) {
        cache = new HashMap<>();
        int n = s.length();
        int m = queries.length;
        boolean[] result = new boolean[m];
        Map<Character, Integer> letterAmount = new HashMap<>();
        for (int i = 0; i < n / 2; i++) {
            letterAmount.merge(s.charAt(i), 1, Integer::sum);
            letterAmount.merge(s.charAt(i + n / 2), -1, Integer::sum);
        }
        for (Map.Entry<Character, Integer> entry : letterAmount.entrySet()) {
            if (entry.getValue() != 0) {
                return result;
            }
        }

        for (int i = 0; i < m; i++) {
            result[i] = performQuery(s, queries[i]);
        }
        return result;
    }

    private boolean performQuery(String s, int[] query) {
        List<Integer> key = List.of(query[0], query[1], query[2], query[3]);
        if (cache.containsKey(key)) {
            return cache.get(key);
        }

        int n = s.length();
        int half = s.length() / 2;
        Map<Character, Integer> left = new HashMap<>();
        Map<Character, Integer> right = new HashMap<>();
        Set<Character> letters = new HashSet<>();
        for (int l = 0; l < half; l++) {
            int r = n - l - 1;
            boolean inLeftInterval = l >= query[0] && l <= query[1];
            boolean inRightInterval = r >= query[2] && r <= query[3];
            if (inLeftInterval && inRightInterval) {
                left.merge(s.charAt(l), 1, Integer::sum);
                right.merge(s.charAt(r), 1, Integer::sum);
            } else if (!inLeftInterval && !inRightInterval) {
                if (s.charAt(l) != s.charAt(r)) {
                    cache.put(key, false);
                    return false;
                }
            } else if (inLeftInterval) {
                left.merge(s.charAt(l), 1, Integer::sum);
                left.merge(s.charAt(r), -1, Integer::sum);
            } else {
                right.merge(s.charAt(l), -1, Integer::sum);
                right.merge(s.charAt(r), 1, Integer::sum);
            }
            letters.add(s.charAt(l));
            letters.add(s.charAt(r));
        }

        for (Character letter : letters) {
            int l = left.getOrDefault(letter, 0);
            int r = right.getOrDefault(letter, 0);
            if (l < 0 || r < 0 || l != r) {
                cache.put(key, false);
                return false;
            }
        }
        cache.put(key, true);
        return true;
    }
}
```
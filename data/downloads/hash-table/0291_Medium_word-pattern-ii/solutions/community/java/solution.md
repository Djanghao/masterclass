# Share my Java backtracking solution

**Author:** jeantimex
**Votes:** 369
**Link:** [https://leetcode.com/problems/word-pattern-ii/solutions/73664/](https://leetcode.com/problems/word-pattern-ii/solutions/73664/)

---

We can solve this problem using backtracking, we just have to keep trying to use a character in the pattern to match different length of substrings in the input string, keep trying till we go through the input string and the pattern.

For example, input string is `"redblueredblue"`, and the pattern is `"abab"`, first let's use `'a'` to match `"r"`, `'b'` to match `"e"`, then we find that `'a'` does not match `"d"`, so we do backtracking, use `'b'` to match `"ed"`, so on and so forth ...

When we do the recursion, if the pattern character exists in the hash map already, we just have to see if we can use it to match the same length of the string. For example, let's say we have the following map:

`'a': "red"`

`'b': "blue"`

now when we see `'a'` again, we know that it should match `"red"`, the length is `3`, then let's see if `str[i ... i+3]` matches `'a'`, where `i` is the current index of the input string. Thanks to [StefanPochmann][1]'s suggestion, in Java we can elegantly use `str.startsWith(s, i)` to do the check.

Also thanks to [i-tikhonov][2]'s suggestion, we can use a hash set to avoid duplicate matches, if character `a` matches string `"red"`, then character `b` cannot be used to match `"red"`. In my opinion though, we can say apple (pattern `'a'`) is "fruit", orange (pattern `'o'`) is "fruit", so they can match the same string, anyhow, I guess it really depends on how the problem states.

The following code should pass OJ now, if we don't need to worry about the duplicate matches, just remove the code that associates with the hash set.

    public class Solution {
      
      public boolean wordPatternMatch(String pattern, String str) {
        Map<Character, String> map = new HashMap<>();
        Set<String> set = new HashSet<>();
        
        return isMatch(str, 0, pattern, 0, map, set);
      }
      
      boolean isMatch(String str, int i, String pat, int j, Map<Character, String> map, Set<String> set) {
        // base case
        if (i == str.length() && j == pat.length()) return true;
        if (i == str.length() || j == pat.length()) return false;
        
        // get current pattern character
        char c = pat.charAt(j);
        
        // if the pattern character exists
        if (map.containsKey(c)) {
          String s = map.get(c);
          
          // then check if we can use it to match str[i...i+s.length()]
          if (!str.startsWith(s, i)) {
            return false;
          }
          
          // if it can match, great, continue to match the rest
          return isMatch(str, i + s.length(), pat, j + 1, map, set);
        }
        
        // pattern character does not exist in the map
        for (int k = i; k < str.length(); k++) {
          String p = str.substring(i, k + 1);

          if (set.contains(p)) {
            continue;
          }

          // create or update it
          map.put(c, p);
          set.add(p);
          
          // continue to match the rest
          if (isMatch(str, k + 1, pat, j + 1, map, set)) {
            return true;
          }

          // backtracking
          map.remove(c);
          set.remove(p);
        }
        
        // we've tried our best but still no luck
        return false;
      }
      
    }


  [1]: https://leetcode.com/discuss/user/StefanPochmann
  [2]: https://leetcode.com/discuss/user/i-tikhonov
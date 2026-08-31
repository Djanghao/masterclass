# 🚀🚀🚀 BEATS 100% || EXPLAiNED ✅✅✅ || ANY LANGUAGE ✅✅✅ || 🚀🚀🚀 by PRODONiK

**Author:** prodonik
**Votes:** 340
**Link:** [https://leetcode.com/problems/minimum-window-substring/solutions/4673541/](https://leetcode.com/problems/minimum-window-substring/solutions/4673541/)

---

![image.png](./images/0.png)

# Intuition
The goal is to find the minimum window in string `s` that contains all characters from string `t`. The intuition is to use a sliding window approach with two pointers.

# Approach
- Initialize a character array `map` of size 128 to store the frequency of characters in string `t`.
- Initialize variables `count`, `start`, `end`, `minLen`, and `startIndex`.
- Iterate through each character in string `t` and update the character frequency in the `map`.
- Use two pointers (`start` and `end`) to slide the window and find the minimum window that contains all characters from string `t`.
  - Increment `end` and decrease the frequency in `map` for each character encountered until all characters from `t` are present in the window.
  - When all characters from `t` are present, update `minLen` and `startIndex` based on the current window size and starting index.
  - Increment `start` and increase the frequency in `map` until the window no longer contains all characters from `t`.
- After the iteration, the minimum window is found, and the result is a substring of `s` starting from `startIndex` with length `minLen`.

# Complexity
- Time complexity: $$O(n)$$, where n is the length of string `s`.
- Space complexity: $$O(1)$$, as the `map` array has a constant size (128).

![image.png](./images/1.png)

# UPVOTE iF iT WAS HELPFUL :)
# Code
```java []
class Solution {
    public String minWindow(String s, String t) {
        if (s == null || t == null || s.length() == 0 || t.length() == 0 ||
                s.length() < t.length()) {
            return new String();
        }
        int[] map = new int[128];
        int count = t.length();
        int start = 0, end = 0, minLen = Integer.MAX_VALUE, startIndex = 0;
        /// UPVOTE !
        for (char c : t.toCharArray()) {
            map[c]++;
        }

        char[] chS = s.toCharArray();

        while (end < chS.length) {
            if (map[chS[end++]]-- > 0) {
                count--;
            }
            while (count == 0) {
                if (end - start < minLen) {
                    startIndex = start;
                    minLen = end - start;
                }
                if (map[chS[start++]]++ == 0) {
                    count++;
                }
            }
        }

        return minLen == Integer.MAX_VALUE ? new String() :
                new String(chS, startIndex, minLen);
    }
}
```
```C++ []
class Solution {
public:
    std::string minWindow(std::string s, std::string t) {
        if (s.empty() || t.empty() || s.length() < t.length()) {
            return "";
        }

        std::vector<int> map(128, 0);
        int count = t.length();
        int start = 0, end = 0, minLen = INT_MAX, startIndex = 0;
        /// UPVOTE !
        for (char c : t) {
            map[c]++;
        }

        while (end < s.length()) {
            if (map[s[end++]]-- > 0) {
                count--;
            }

            while (count == 0) {
                if (end - start < minLen) {
                    startIndex = start;
                    minLen = end - start;
                }

                if (map[s[start++]]++ == 0) {
                    count++;
                }
            }
        }

        return minLen == INT_MAX ? "" : s.substr(startIndex, minLen);
    }
};
```
```Python []
class Solution:
    def minWindow(self, s: str, t: str) -> str:
        if not s or not t or len(s) < len(t):
            return ""

        map = [0] * 128
        count = len(t)
        start = 0
        end = 0
        min_len = float('inf')
        start_index = 0
        # UPVOTE !
        for char in t:
            map[ord(char)] += 1

        while end < len(s):
            if map[ord(s[end])] > 0:
                count -= 1
            map[ord(s[end])] -= 1
            end += 1

            while count == 0:
                if end - start < min_len:
                    start_index = start
                    min_len = end - start

                if map[ord(s[start])] == 0:
                    count += 1
                map[ord(s[start])] += 1
                start += 1

        return "" if min_len == float('inf') else s[start_index:start_index + min_len]
```
```C# []
public class Solution {
    public string MinWindow(string s, string t) {
        if (string.IsNullOrEmpty(s) || string.IsNullOrEmpty(t) || s.Length < t.Length) {
            return "";
        }

        int[] map = new int[128];
        int count = t.Length;
        int start = 0, end = 0, minLen = int.MaxValue, startIndex = 0;
        /// UPVOTE !
        foreach (char c in t) {
            map[c]++;
        }

        char[] chS = s.ToCharArray();

        while (end < chS.Length) {
            if (map[chS[end++]]-- > 0) {
                count--;
            }

            while (count == 0) {
                if (end - start < minLen) {
                    startIndex = start;
                    minLen = end - start;
                }

                if (map[chS[start++]]++ == 0) {
                    count++;
                }
            }
        }

        return minLen == int.MaxValue ? "" : new string(chS, startIndex, minLen);
    }
}
```
```Go []
func minWindow(s string, t string) string {
	if len(s) == 0 || len(t) == 0 || len(s) < len(t) {
		return ""
	}

	mapS := make([]int, 128)
	count := len(t)
	start, end := 0, 0
	minLen, startIndex := int(^uint(0)>>1), 0
    /// UPVOTE !
	for _, char := range t {
		mapS[char]++
	}

	for end < len(s) {
		if mapS[s[end]] > 0 {
			count--
		}
		mapS[s[end]]--
		end++

		for count == 0 {
			if end-start < minLen {
				startIndex = start
				minLen = end - start
			}

			if mapS[s[start]] == 0 {
				count++
			}
			mapS[s[start]]++
			start++
		}
	}

	if minLen == int(^uint(0)>>1) {
		return ""
	}

	return s[startIndex : startIndex+minLen]
}
```
```Ruby []
class Solution
  def min_window(s, t)
    return "" if s.empty? || t.empty? || s.length < t.length

    map = Array.new(128, 0)
    count = t.length
    start = 0
    end_ = 0
    min_len = Float::INFINITY
    start_index = 0
    # UPVOTE !
    t.each_char { |char| map[char.ord] += 1 }

    while end_ < s.length
      if map[s[end_].ord] > 0
        count -= 1
      end
      map[s[end_].ord] -= 1
      end_ += 1

      while count == 0
        if end_ - start < min_len
          start_index = start
          min_len = end_ - start
        end

        if map[s[start].ord] == 0
          count += 1
        end
        map[s[start].ord] += 1
        start += 1
      end
    end

    min_len == Float::INFINITY ? "" : s[start_index, min_len]
  end
end
```
![image.png](./images/2.png)

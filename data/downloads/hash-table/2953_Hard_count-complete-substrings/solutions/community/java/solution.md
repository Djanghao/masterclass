# 🥇 C++ | PYTHON | JAVA  ; ] ✅

**Author:** karan_8082
**Votes:** 26
**Link:** [https://leetcode.com/problems/count-complete-substrings/solutions/4356147/](https://leetcode.com/problems/count-complete-substrings/solutions/4356147/)

---


- Segment the string into parts ensuring that no two adjacent characters have a difference of more than 2. For each segmented part, Calculate the solution and aggregate them into the final result.

- The process of calculating the solution for each part involves counting substrings where each character appears exactly `k` times. Since the string is composed of only 26 unique characters, the length of the substring should be k times the number of unique characters `j`.

- Iterate through all possible substring lengths from `1 * k` to `26 * k`. For a substring of length `j * k`, I use a frequency array to verify that there are `j` characters with a frequency of `k`. The sliding window technique is employed to examine substrings of each length, starting from `1 * k`.

``` C++ []
import java.util.HashMap;
import java.util.Map;

class Solution {
    public int countCompleteSubstrings(String word, int k) {
        // Define the calc function as a nested function
        // This is possible only in Java 11 and later
        var calc = (String s) -> {
            int res = 0;
            int v = s.length();
            for (int i = 1; i <= 26; ++i) {
                if (i * k > v) break;
                int l = i * k;

                Map<Character, Integer> cnt = new HashMap<>();
                for (int j = 0; j < l; ++j) {
                    cnt.put(s.charAt(j), cnt.getOrDefault(s.charAt(j), 0) + 1);
                }

                Map<Integer, Integer> freq = new HashMap<>();
                for (int count : cnt.values()) {
                    freq.put(count, freq.getOrDefault(count, 0) + 1);
                }

                if (freq.getOrDefault(k, 0) == i) res++;

                for (int idx = 0; idx < v - l; ++idx) {
                    int oldCount = cnt.get(s.charAt(idx));
                    freq.put(oldCount, freq.get(oldCount) - 1);
                    cnt.put(s.charAt(idx), oldCount - 1);
                    freq.put(cnt.get(s.charAt(idx)), freq.getOrDefault(cnt.get(s.charAt(idx)), 0) + 1);

                    int newCount = cnt.get(s.charAt(idx + l));
                    freq.put(newCount, freq.get(newCount) - 1);
                    cnt.put(s.charAt(idx + l), newCount + 1);
                    freq.put(cnt.get(s.charAt(idx + l)), freq.getOrDefault(cnt.get(s.charAt(idx + l)), 0) + 1);

                    if (freq.getOrDefault(k, 0) == i) res++;
                }
            }
            return res;
        };

        int idx = 0;
        int ans = 0;
        int n = word.length();
        for (int i = 1; i < n; ++i) {
            if (Math.abs(word.charAt(i) - word.charAt(i - 1)) > 2) {
                ans += calc.apply(word.substring(idx, i));
                idx = i;
            }
        }
        ans += calc.apply(word.substring(idx));
        return ans;
    }
}

```

``` Python []
class Solution:
    def countCompleteSubstrings(self, w: str, k: int) -> int:
        def calc(s):
            res = 0
            v = len(s)
            for i in range(1, 27):
                if i * k > v: break
                l = i * k
                cnt = Counter(s[:l])
                freq = Counter(cnt.values())
                
                if freq[k] == i: res += 1
                
                for idx in range(v - l):
                    freq[cnt[s[idx]]] -= 1
                    cnt[s[idx]] -= 1
                    freq[cnt[s[idx]]] += 1

                    freq[cnt[s[idx+l]]] -= 1
                    cnt[s[idx+l]] += 1
                    freq[cnt[s[idx+l]]] += 1

                    if freq[k] == i: res += 1
            return res
        
        idx = 0
        ans = 0
        n = len(w)
        for i in range(1, n):
            if abs(ord(w[i]) - ord(w[i-1])) > 2:
                ans += calc(w[idx:i])
                idx = i
        ans += calc(w[idx:])
        return ans
```

``` JAVA []
class Solution {

	public int countCompleteSubstrings(String word, int k) {
		int count = 0;
		for (int i = 1; i <= 26; i++) {
			count += countCompleteSubstrings(word, k, 0, i * k);
		}
		return count;
	}

	private int countCompleteSubstrings(String word, int k, int start, int length) {
		if (word.length() - start < length) {
			return 0;
		}
		int map[] = new int[26], count = 0, sum = 0;
		for (int i = start; i < word.length(); i++) {
			if (i > start && Math.abs(word.charAt(i) - word.charAt(i - 1)) > 2) {
				return sum + countCompleteSubstrings(word, k, i, length);
			}
			count += map[word.charAt(i) - 'a'] == k - 1 ? 1 : 0;
			count -= map[word.charAt(i) - 'a']++ == k ? 1 : 0;
			if (i >= start + length - 1) {
				sum += count == length / k ? 1 : 0;
				count += map[word.charAt(i - length + 1) - 'a'] == k + 1 ? 1 : 0;
				count -= map[word.charAt(i - length + 1) - 'a']-- == k ? 1 : 0;
			}
		}
		return sum;
	}
}
```

![IMG_3726.JPG](./images/0.jpeg)

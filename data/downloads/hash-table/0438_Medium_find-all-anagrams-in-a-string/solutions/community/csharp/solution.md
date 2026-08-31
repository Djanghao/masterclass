# Beats 100% 🚀➡️In depth Analysis💯 ➡️[Java/C++/Python3/JavaScript/Go/C3]

**Author:** Shivansu_7
**Votes:** 10
**Link:** [https://leetcode.com/problems/find-all-anagrams-in-a-string/solutions/4663814/](https://leetcode.com/problems/find-all-anagrams-in-a-string/solutions/4663814/)

---

# Approach
1. **Initialization:**
    - Initialize an empty list list to store the starting indices of anagrams.
    - Initialize two arrays `freqS` and `freqP`, each of size 26, to keep track of the frequency of characters in strings s and p respectively.
2. **Check Length:**
    - If the length of string `s` is less than the length of string `p`, return an `empty list` because `s` cannot contain any anagrams of `p`.
3. **Counting Frequencies:**
    - Iterate through string `p` and count the frequency of each character, storing the counts in array `freqP`.
    - Also, iterate through the first `p.length()` characters of string `s` and count the frequency of each character, storing the counts in array `freqS`.
4. **Initial Anagram Check:**
    - If the counts of characters in s (represented by freqS) are equal to the counts of characters in p (represented by freqP), it means the first window of size p in s is an anagram of p. Add the starting index 0 to the result list.
5. **Sliding Window Technique:**
    - Initialize two pointers `start` and `end` to define the current window in `s`. `start` points to the beginning of the window, and `end` points to the end of the window (initially, `end is p.length()`).
    - Slide the window to the right one character at a time.
At each step, update `freqS` and `freqP` to reflect the frequency of characters in the current window.
    - If the updated `freqS` is equal to `freqP`, it means the current window is an anagram of `p`. Add the starting index of the current window (`start+1`) to the result `list`.
    - Move both pointers start and end one step to the right.
Repeat the sliding window process until the end pointer end reaches the end of string `s.
6. **Return Result:**
    - After iterating through all possible windows in s, return the list containing the starting indices of all found anagrams of p.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Java []
class Solution {
    public List<Integer> findAnagrams(String s, String p) {
        List<Integer> list = new ArrayList<>();
        if(s.length() < p.length()) {
            return list;
        }

        int[] freqS = new int[26];
        int[] freqP = new int[26];


        for(int i=0; i<p.length(); i++) {
            freqS[s.charAt(i)-'a']++;
            freqP[p.charAt(i)-'a']++;
        }

        if(Arrays.equals(freqS, freqP)) {
            list.add(0);
        }

        int start = 0;
        int end = p.length();

        while(end < s.length()) {

            freqS[s.charAt(start)-'a']--;
            freqS[s.charAt(end)-'a']++;

            if(Arrays.equals(freqS, freqP)) {
                list.add(start+1);
            }
            end++;
            start++;
        }
        return list;
    }
}
```
```C++ []
class Solution {
public:
    vector<int> findAnagrams(string s, string p) {
        vector<int> list;
        int freqS[26] = {0};
        int freqP[26] = {0};

        if(s.length() < p.length()) {
            return list;
        }

        for(int i = 0; i < p.length(); i++) {
            freqS[s[i] - 'a']++;
            freqP[p[i] - 'a']++;
        }

        int start = 0;
        int end = p.length();

        if(equal(freqS, freqS + 26, freqP)) {
            list.push_back(start);
        }

        while(end < s.length()) {
            freqS[s[start] - 'a']--;
            freqS[s[end] - 'a']++;

            if(equal(freqS, freqS + 26, freqP)) {
                list.push_back(start + 1);
            }

            start++;
            end++;
        }
        return list;
    }
};
```
```Python3 []
class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        list = []
        freqS = [0] * 26
        freqP = [0] * 26

        if len(s) < len(p):
            return list

        for i in range(len(p)):
            freqS[ord(s[i]) - ord('a')] += 1
            freqP[ord(p[i]) - ord('a')] += 1

        start = 0
        end = len(p)

        if freqS == freqP:
            list.append(start)

        while end < len(s):
            freqS[ord(s[start]) - ord('a')] -= 1
            freqS[ord(s[end]) - ord('a')] += 1

            if freqS == freqP:
                list.append(start + 1)

            start += 1
            end += 1

        return list
```
```JavaScript []
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let list = [];
    let freqS = new Array(26).fill(0);
    let freqP = new Array(26).fill(0);

    if (s.length < p.length) {
        return list;
    }

    for (let i = 0; i < p.length; i++) {
        freqS[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        freqP[p.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    let start = 0;
    let end = p.length;

    if (freqS.join('') === freqP.join('')) {
        list.push(start);
    }

    while (end < s.length) {
        freqS[s.charCodeAt(start) - 'a'.charCodeAt(0)]--;
        freqS[s.charCodeAt(end) - 'a'.charCodeAt(0)]++;

        if (freqS.join('') === freqP.join('')) {
            list.push(start + 1);
        }

        start++;
        end++;
    }
    
    return list;
};
```
```Go []
func findAnagrams(s string, p string) []int {
	var list []int
	freqS := make([]int, 26)
	freqP := make([]int, 26)

	if len(s) < len(p) {
		return list
	}

	for i := 0; i < len(p); i++ {
		freqS[int(s[i]-'a')]++
		freqP[int(p[i]-'a')]++
	}

	start := 0
	end := len(p)

	if fmt.Sprint(freqS) == fmt.Sprint(freqP) {
		list = append(list, start)
	}

	for end < len(s) {
		freqS[int(s[start]-'a')]--
		freqS[int(s[end]-'a')]++

		if fmt.Sprint(freqS) == fmt.Sprint(freqP) {
			list = append(list, start+1)
		}

		start++
		end++
	}

	return list
}
```
```C# []
public class Solution {
    public IList<int> FindAnagrams(string s, string p) {
        List<int> list = new List<int>();
        int[] freqS = new int[26];
        int[] freqP = new int[26];

        if (s.Length < p.Length) {
            return list;
        }

        for (int i = 0; i < p.Length; i++) {
            freqS[s[i] - 'a']++;
            freqP[p[i] - 'a']++;
        }

        int start = 0;
        int end = p.Length;

        if (ArraysEquals(freqS, freqP)) {
            list.Add(start);
        }

        while (end < s.Length) {
            freqS[s[start] - 'a']--;
            freqS[s[end] - 'a']++;

            if (ArraysEquals(freqS, freqP)) {
                list.Add(start + 1);
            }

            start++;
            end++;
        }
        return list;
    }
```

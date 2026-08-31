# 🔥 🔥 🔥 Fastest (97.53%) | Video Explanation | Easy to understand | In 4 languages 🔥 🔥 🔥

**Author:** bhanu_bhakta
**Votes:** 27
**Link:** [https://leetcode.com/problems/palindrome-partitioning/solutions/5191472/](https://leetcode.com/problems/palindrome-partitioning/solutions/5191472/)

---

**Very Easy Video Explanation with detail approach**

https://www.youtube.com/watch?v=trHOnpryl0I


![Screenshot 2024-05-21 at 9.53.07\u202FPM.png](./images/0.png)

# Intuition
**Palindromic Substrings:** We need to partition the string into substrings where each substring is a palindrome.

**Backtracking:** Use a recursive backtracking approach to explore all possible partitions, ensuring each partition is valid by checking palindromic substrings.

**Exhaustive Search:** Efficiently explore all combinations by dynamically adding and removing substrings, storing partitions when we reach the end of the string.

# Approach
**Backtracking:**

- We use a backtracking approach to explore all possible partitions of the string.
= The idea is to generate substrings starting from each index and checking if the substring is a palindrome.
- If the substring is a palindrome, we recursively explore further partitions from the end of the current substring.
Recursive Function:

- Define a helper function explore(index, curr) where index is the starting point for generating substrings, and curr is the current list of substrings.
- If index reaches the end of the string (index >= lenS), it means we have a valid partition, so we append a copy of curr to the result list.
- For each possible ending index i starting from index, generate the substring s[index:i+1].
- Check if the substring is a palindrome (subStr == subStr[::-1]).
- If it is, add the substring to curr, recursively call explore(i + 1, curr), and then backtrack by removing the last substring added to curr.

**Base Case and Recursive Case:**

- **Base Case:** When index is equal to the length of the string, we have considered all characters, so we add the current partition (curr) to the result.
- **Recursive Case:** Iterate through possible substrings, check if they are palindromes, and recursively partition the rest of the string.

# Complexity
- Time complexity:
O(2^N)

- Space complexity:
O(2^N)

# Code
```Python []
class Solution:
    def partition(self, s: str) -> List[List[str]]:
        # s = "aab|"
        # a, ab -> No
        # a, b, c -> Yes
        # aa, b -> Yes
        # aab -> No
        # [[a, b, c], [aa, b]] -> Output
        # SOLUTION
        # TC: 2^N
        # SC: 2^N

        result = []
        lenS = len(s)

        def explore(index, curr):
            if index >= lenS:
                result.append(curr.copy())

            for i in range(index, lenS):
                subStr = s[index:i + 1]
                if subStr == subStr[::-1]:
                    curr.append(subStr)
                    explore(i + 1, curr)
                    curr.pop()

        explore(0, [])
        return result

```
```C++ []
class Solution {
public:
    vector<vector<string>> partition(string s) {
        vector<vector<string>> result;
        vector<string> curr;
        int lenS = s.length();

        function<void(int)> explore = [&](int index) {
            if (index >= lenS) {
                result.push_back(curr);
                return;
            }

            for (int i = index; i < lenS; ++i) {
                string subStr = s.substr(index, i - index + 1);
                if (isPalindrome(subStr)) {
                    curr.push_back(subStr);
                    explore(i + 1);
                    curr.pop_back();
                }
            }
        };

        explore(0);
        return result;
    }

private:
    bool isPalindrome(const string& s) {
        int left = 0, right = s.length() - 1;
        while (left < right) {
            if (s[left] != s[right])
                return false;
            ++left;
            --right;
        }
        return true;
    }
};
```
```Java []
class Solution {
    public List<List<String>> partition(String s) {
        List<List<String>> result = new ArrayList<>();
        List<String> curr = new ArrayList<>();
        int lenS = s.length();

        explore(0, s, curr, result, lenS);
        return result;
    }

    private void explore(int index, String s, List<String> curr, List<List<String>> result, int lenS) {
        if (index >= lenS) {
            result.add(new ArrayList<>(curr));
            return;
        }

        for (int i = index; i < lenS; ++i) {
            String subStr = s.substring(index, i + 1);
            if (isPalindrome(subStr)) {
                curr.add(subStr);
                explore(i + 1, s, curr, result, lenS);
                curr.remove(curr.size() - 1);
            }
        }
    }

    private boolean isPalindrome(String s) {
        int left = 0, right = s.length() - 1;
        while (left < right) {
            if (s.charAt(left) != s.charAt(right))
                return false;
            left++;
            right--;
        }
        return true;
    }
}
```
```Go []
func partition(s string) [][]string {
	var result [][]string
	var curr []string
	lenS := len(s)

	var explore func(index int)
	explore = func(index int) {
		if index >= lenS {
			result = append(result, append([]string(nil), curr...))
			return
		}

		for i := index; i < lenS; i++ {
			subStr := s[index : i+1]
			if isPalindrome(subStr) {
				curr = append(curr, subStr)
				explore(i + 1)
				curr = curr[:len(curr)-1]
			}
		}
	}

	explore(0)
	return result
}

func isPalindrome(s string) bool {
	left, right := 0, len(s)-1
	for left < right {
		if s[left] != s[right] {
			return false
		}
		left++
		right--
	}
	return true
}
```
```Kotlin []
class Solution {
    fun partition(s: String): List<List<String>> {
        val result = mutableListOf<List<String>>()
        val curr = mutableListOf<String>()
        val lenS = s.length

        fun explore(index: Int) {
            if (index >= lenS) {
                result.add(curr.toList())
                return
            }

            for (i in index until lenS) {
                val subStr = s.substring(index, i + 1)
                if (isPalindrome(subStr)) {
                    curr.add(subStr)
                    explore(i + 1)
                    curr.removeAt(curr.size - 1)
                }
            }
        }

        explore(0)
        return result
    }

    private fun isPalindrome(s: String): Boolean {
        var left = 0
        var right = s.length - 1
        while (left < right) {
            if (s[left] != s[right]) return false
            left++
            right--
        }
        return true
    }
}
```

# **Please Upvote**
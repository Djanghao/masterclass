# [C++ / Go] Check all possible substrings

**Author:** mikazuki4712
**Votes:** 1
**Link:** [https://leetcode.com/problems/shortest-uncommon-substring-in-an-array/solutions/4854718/](https://leetcode.com/problems/shortest-uncommon-substring-in-an-array/solutions/4854718/)

---

# Approach
- For each string in `arr`, check all possible substrings of it.
- For each substring, check its occurence in other strings.
    - Start from checking shorter substring.
    - For valid substrings with same length, get the lexicographically smallest one.
    - If found a valid substring in all possible substrings of same length, then break.


# Code
```C++ []
class Solution {
public:
    vector<string> shortestSubstrings(vector<string>& arr) {
        int n = arr.size();
        vector<string> res(n);

        for (int i = 0; i < n; i++) {
            for (int len = 1; len <= arr[i].length(); len++) {
                for (int start = 0; start + len - 1 < arr[i].length(); start++) {
                    string s = arr[i].substr(start, len);
                    bool flag = false;

                    for (int j = 0; j < n; ++j) {
                        if (i == j) continue;
                        if (arr[j].find(s) != string::npos) {
                            flag = true;
                            break;
                        }
                    }                        
                    
                    if (!flag && (res[i].empty() || res[i] > s)) {
                        res[i] = s;
                    }
                }

                if (!res[i].empty())
                    break;
            }
        }

        return res;
    }
};
```
```Go []
func shortestSubstrings(arr []string) []string {
    n := len(arr)
	res := make([]string, n)

	for i := 0; i < n; i++ {
		for j := 1; j <= len(arr[i]); j++ {
			for start := 0; start + j <= len(arr[i]); start++ {
				s := arr[i][start : start + j]
				flag := false

				for k := 0; k < n; k++ {
					if i == k {
						continue
					}

					if strings.Contains(arr[k], s) {
						flag = true
						break
					}
				}

				if !flag && (res[i] == "" || res[i] > s) {
					res[i] = s
				}
			}

			if res[i] != "" {
				break
			}
		}
	}

	return res
}
```

# Complexity
- Time complexity: $O(n ^ 2 * L ^ 3)$
    - Iterate through `n` strings.
    - For each string, consider all its $L^2$ substrings.
    - For each substring, check its occurence in other `n` strings, each check can take $O(L)$
- Space complexity: $O(n)$
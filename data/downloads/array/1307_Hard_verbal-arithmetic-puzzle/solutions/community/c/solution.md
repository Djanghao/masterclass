# C++ 12ms DFS & Backtracking & Prunning Strategy

**Author:** jiah
**Votes:** 42
**Link:** [https://leetcode.com/problems/verbal-arithmetic-puzzle/solutions/463916/](https://leetcode.com/problems/verbal-arithmetic-puzzle/solutions/463916/)

---

Idea:
- dfs & backtracking, then it is all about early prunning.
- mimic the process we do addition from least significant digit to most significant digit. so that we can compute sum of `words` on each digit position, and compare it with that of `result`, prune if conflict.
- also prune if there are leading zeros in words or `result`.

The following code runs about 236ms. @ZhiwenLuo also shared a polished version which runs 12ms, you can find it in the comments. 

Thanks to @YUBO2017 for pointing out a new test case and how to fix. 
```cpp
class Solution {
    // chracter to digit mapping, and the inverse
	// (if you want better performance: use array instead of unordered_map)
    unordered_map<char, int> c2i;
    unordered_map<int, char> i2c;
	// limit: length of result
    int limit = 0;
	// digit: index of digit in a word, widx: index of a word in word list, sum: summation of all word[digit]  
    bool helper(vector<string>& words, string& result, int digit, int widx, int sum) { 
        if (digit == limit) {
            return sum == 0;
        }
		// if summation at digit position complete, validate it with result[digit].
        if (widx == words.size()) {
            if (c2i.count(result[digit]) == 0 && i2c.count(sum%10) == 0) {
                if (sum%10 == 0 && digit+1 == limit) // Avoid leading zero in result
                    return false;
                c2i[result[digit]] = sum % 10;
                i2c[sum%10] = result[digit];
                bool tmp = helper(words, result, digit+1, 0, sum/10);
                c2i.erase(result[digit]);
                i2c.erase(sum%10);
                return tmp;
            } else if (c2i.count(result[digit]) && c2i[result[digit]] == sum % 10){
			    if (digit + 1 == limit && 0 == c2i[result[digit]]) {
                    return false;
                }
                return helper(words, result, digit+1, 0, sum/10);
            } else {
                return false;
            }
        }
		// if word[widx] length less than digit, ignore and go to next word
        if (digit >= words[widx].length()) {
            return helper(words, result, digit, widx+1, sum);
        }
		// if word[widx][digit] already mapped to a value
        if (c2i.count(words[widx][digit])) {
            if (digit+1 == words[widx].length() && words[widx].length() > 1 && c2i[words[widx][digit]] == 0) 
                return false;
            return helper(words, result, digit, widx+1, sum+c2i[words[widx][digit]]);
        }
		// if word[widx][digit] not mapped to a value yet
        for (int i = 0; i < 10; i++) {
            if (digit+1 == words[widx].length() && i == 0 && words[widx].length() > 1) continue;
            if (i2c.count(i)) continue;
            c2i[words[widx][digit]] = i;
            i2c[i] = words[widx][digit];
            bool tmp = helper(words, result, digit, widx+1, sum+i);
            c2i.erase(words[widx][digit]);
            i2c.erase(i);
            if (tmp) return true;
        }
        return false;
    }
public:
    bool isSolvable(vector<string>& words, string result) {
        limit = result.length();
        for (auto &w: words) 
            if (w.length() > limit) 
				return false;
        for (auto&w:words) 
            reverse(w.begin(), w.end());
        reverse(result.begin(), result.end());
        return helper(words, result, 0, 0, 0);
    }
};
```
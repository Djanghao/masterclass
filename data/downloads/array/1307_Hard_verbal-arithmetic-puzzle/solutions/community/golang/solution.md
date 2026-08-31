# C++, Go | DFS/backtrack, preprocessing, pruning explained

**Author:** WRMA6
**Votes:** 1
**Link:** [https://leetcode.com/problems/verbal-arithmetic-puzzle/solutions/1631741/](https://leetcode.com/problems/verbal-arithmetic-puzzle/solutions/1631741/)

---

One key observation is we can always reduce the problem to just working with the (max) ten distinct characters in the words (number of distinct digits). My approach was to map each digit to the sum of its "base" values across all the words. For example, if we have words = ["abc", "ab"] and result = "acd", we can turn this into a map with {"a" : 10, "b" : 11, "c" : -9, "d":  -1}. Since "b" is in the tens decimal place in "abc" and the ones decimal place in "ab", we give it a value of 11. This means that whatever digit we assign to b in the end, its "contribution" to the final result is that digit times 11. Notice that when we process the string result, we count the contributions of its characters as negative. This is why character "a" has value 10: its value is 100 + 10 - 100, since it is in the hundreds place in "abc", tens place in "ab", and hundreds place in "acd".

Each characters maps to a unique digit, so we try all possible combinations. If the sum of each digit*base for a given combination is zero, we know that we have the answer. Using Example 1 from the question: words = ["send", "more"] with result = "money". The map will be {"D":1, "E":91, "M":-9000, "N":-90, "O":-900, "R":10, "S":1000, "Y":-1}. The answer is given in the example, and we can see that if we multiply each digit by its correponding base (1 times 7 for D, 91 times 5 for E, etc.), the sum is 0. This is why we count characters from words as positive and characters from result as negative: we know a combination works if the "contributions" from words and result balance out to 0.

Zeroes cannot be the first digit, except when it is the only digit in the number. So keep a second map that keeps track of which letters are the first ones in any word, meaning that they cannot be 0.

To efficiently check all valid combinations, we turn the first map into an array (chars[]) of just the mapped "bases". We only care about which digit maps to which base; the characters are just symbols anyways. From, there, it is a pretty standard depth-first search/backtrack where we try matching each index of the array with a unique digit. Used digits at each stage in DFS are recorded using a bit mask (we set bit n to 1 if digit n is already used). Also, we put all the characters that can't be zero first, so whenever we are considering the digit 0 in the DFS, we can simply check if we are in the right part of the array.

In order to prune (important for run time), we use a suffix sum array (sums[i] means the sum of *chars[i], chars[i + 1], ..., chars[chars.length - 1]*, times 9). This represents a bound on the max possible value we can generate with the values remaining in the array (9 is the biggest digit, so we can't generate a value greater than 9 times all the values that are left). For each DFS call, we check if the curSum variable is greater than sums[curIndex]. If so, we can just return false because we are looking to make curSum = 0, and no matter what happens we can no longer reach 0 with the values left in the array. The pruning is helped by sorting the chars array (we sort the two parts: the non-zero and the zero parts), to stack as many negative values as possible first to hopefully detect an impossible path earlier.

**C++**
```
class Solution {
public:
    bool isSolvable(vector<string>& words, string result) {
        // charMap maps each unique char to sum of base values
        // firstChars keeps tracks if a char can't be 0 (ie. used as first char in a word)
        unordered_map<char, int> charMap;
        unordered_map<char, bool> firstChars;
        for (auto &word : words) {
            int base = 1;
            for (int i = word.length() - 1; i >= 0; i--) {
                charMap[word[i]] += base;
                base *= 10;
            }    
            // special case: if word is length first char can be 0
            if (word.length() > 1) firstChars[word[0]] = true;
        }
        int base = 1;
        for (int i = result.length() - 1; i >= 0; i--) {
            charMap[result[i]] -= base;
            base *= 10;
        }
        if (result.length() > 1) firstChars[result[0]] = true;

        // turn into map into array: each index represents a character
        // separate "zeroable" chars in the array so it is easy to check during DFS
        vector<int> chars(charMap.size());
        int nonZeroInds = 0;
        int zeroInds = charMap.size() - 1;

        for (auto &p : charMap) {
            if (firstChars[p.first]) chars[nonZeroInds++] = p.second;
            else chars[zeroInds--] = p.second;
        }
        sort(chars.begin(), chars.begin() + nonZeroInds);
        sort(chars.begin() + nonZeroInds, chars.end());

        // keep a sums suffix array for pruning
        vector<int> sums = vector<int>(1, 0);
        for (int i = chars.size() - 1; i >= 0; i--) sums.push_back(abs(chars[i])*9 + sums.back());
        reverse(sums.begin(), sums.end());

        // since we separated the nonZeroChars, we can just pass in the index at which
        // "zeroable" characters start
        return dfs(chars, nonZeroInds, 0, 0, 0, sums);
    }
    
    bool dfs(vector<int> &chars, int zeroInd, int ind, int used, int curSum, vector<int>& sums) {
        // whenever we reach end, check if curSum is zero (ie. if answer to problem is true)
        if (ind == chars.size()) return curSum == 0;
        
        // if at any point, our current sum exceeds the maximum value we could generate
        // with the characters that are unused, return false
        else if (abs(curSum) > sums[ind]) return false;

        for (int i = 0; i < 10; i++) {
            // if used or we are not allowed to use zero, continue
            if (((used >> i) & 1) == 1 || (i == 0 && ind < zeroInd)) continue;
            // assign char using bit mask, add to curSum
            if (dfs(chars, zeroInd, ind + 1, used | (1 << i), curSum + chars[ind]*i, sums)) return true;
        }
        return false;
    }
};
```

**Go**
```
func abs(x int) int {
    if x < 0 {
        return -x
    } else {
        return x
    }
}

func isSolvable(words []string, result string) bool {
    // charMap maps each unique char to sum of base values
    // firstChars keeps tracks if a char can't be 0 (ie. used as first char in a word)
    charMap := make(map[byte]int)
    firstChars := make(map[byte]bool)
    for _, word := range words {
        base := 1
        for i := len(word) - 1; i >= 0; i-- {
            charMap[word[i]] += base
            base *= 10
        }
        // special case: if word is length first char can be 0
        if len(word) > 1 {
            firstChars[word[0]] = true
        }
    }
    base := 1
    for i := len(result) - 1; i >= 0; i-- {
        charMap[result[i]] -= base
        base *= 10
    }
    if len(result) > 1 {
        firstChars[result[0]] = true
    }
    
    // turn into map into array: each index represents a character
    // separate "zeroable" chars in the array so it is easy to check during DFS
    nonZeroChars := make([]int, 0)
    zeroChars := make([]int, 0)
    sort.Ints(nonZeroChars)
    sort.Ints(zeroChars)
    
    for k, v := range charMap {
        if firstChars[k] == true {
            nonZeroChars = append(nonZeroChars, v)
        } else {
            zeroChars = append(zeroChars, v)
        }
    }
    chars := append(nonZeroChars, zeroChars...)
    
    // keep a sums suffix array for pruning
    sums := make([]int, 1)
    for i := len(chars) - 1; i >= 0; i-- {
        sums = append([]int{abs(chars[i])*9 + sums[0]}, sums...)
    }
    
    // since we separated the nonZeroChars, we can just pass in the index at which
    // "zeroable" characters start
    return dfs(chars, len(nonZeroChars), 0, 0, 0, sums)
}

// used is a bitmask to quickly tell if we have used an array index of not
func dfs(chars []int, zeroInd int, ind int, used int, curSum int, sums []int) bool {
    // whenever we reach end, check if curSum is zero (ie. if answer to problem is true)
    if ind == len(chars) {
        return curSum == 0
    // if at any point, our current sum exceeds the maximum value we could generate
    // with the characters that are unused, return false
    } else if abs(curSum) > sums[ind] {
        return false
    }
    
    for i := 0; i < 10; i++ {
        // if used or we are not allowed to use zero, continue
        if ((used >> i) & 1) == 1 || (i == 0 && ind < zeroInd) {
            continue
        }
        // assign char using bit mask, add to curSum
        if dfs(chars, zeroInd, ind + 1, used | (1 << i), curSum + chars[ind]*i, sums) {
            return true
        }
    }
    return false
}
```
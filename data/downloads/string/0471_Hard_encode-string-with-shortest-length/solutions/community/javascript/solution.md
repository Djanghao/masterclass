# DP top down with detailed explanation (Python, JS, Go)

**Author:** usr25
**Votes:** 9
**Link:** [https://leetcode.com/problems/encode-string-with-shortest-length/solutions/956223/](https://leetcode.com/problems/encode-string-with-shortest-length/solutions/956223/)

---

- Realise that for any given substring x in s, we have 3 choices:
    1. Do not encode it.
    2. Encode the consecutive repetitive characters in it.
    3. Split the substring into 2 parts and try to encode each part.
- Top down: if s can be encoded into a smaller string, that means parts of s will be encoded following the 3 choices above.
- Base cases: Empty current string or current string length < 5, don't encode.
- Use memoization to improve run time. Map: key = substring; value = shortest encoded string can be formed with that substring.
- Iterate i from 1 to mid + 1. Mid + 1 because to get a pattern s[:i], and look for its repetition in s[i:], the pattern's length has to be at most half of the original string's length. As i increases, the pattern's length is shortened from n/2 to 1.
- In each iteration:
    - Find the repetition of the left half in the right half (prefix and suffix), if prefix is a substring in suffix, then we encode it and encode the remaining of suffix. 
    - Note: encoded str = count + 1 because we only counted the repetition of prefix inside suffix so we need to add prefix itself to the total count.
    - Get the encoded partition string if we choose to just split the current string and encode each part, then compare its length with the string that has (if any) consecutive repetitive characters in it.
    - Check the min length we get and update the chosen string.
- Save the shortest string we found in the hash map.
Time: O(n^3) where n = len(s)
- Number of subproblems: O(n^2)
- Time to solve each subproblem:
    - Split string: O(n)
    - Find prefix's repetition in suffix: O(n)
    - Recursive calls take at most O(4n) because we only go deep down the height of the tree (at most n) the first time. Any other time we get the pre-computed results from the hash map.
    - Other operations take O(1)
    -> O(5n) remove constant = O(n)
- Total: O(n^3)
Space: O(n^2) because: 
- O(n^2) for the hash map
- O(n) for the calls on on the call stack 
-> O(n^2 + n) = O(n(n+1)) remove constant = O(n^2)

Python
```python
class Solution:
    
    def encode(self, s: str) -> str:
        memo = {}
        return self._get_encoded_str(s, memo)
    
    def _get_encoded_str(self, s, memo):
        if s == "" or len(s) < 5:
            return s
        if s in memo:
            return memo[s]
        chosen_str = s
        min_len = len(s)
        for i in range(1, len(s)//2 + 1):
            encoded_str = s
            prefix = s[:i]
            suffix = s[i:]
            prefix_count = self._get_prefix_count(prefix, suffix)
            encoded_prefix = self._get_encoded_str(prefix, memo)
            encoded_suffix = self._get_encoded_str(suffix, memo)
            if prefix_count > 0:
                k = prefix_count * len(prefix)
                encoded_suffix_from_k = self._get_encoded_str(suffix[k:], memo)
                encoded_str = str(prefix_count + 1) + "[" + encoded_prefix + "]" + encoded_suffix_from_k
            encoded_part_str = encoded_prefix + encoded_suffix 
            if len(encoded_str) > len(encoded_part_str):
                encoded_str = encoded_part_str
            if min_len > len(encoded_str):
                chosen_str = encoded_str
                min_len = len(encoded_str)
        memo[s] = chosen_str
        return chosen_str

    """
    Helper method finds the count of prefix in suffix.
    """
    def _get_prefix_count(self, prefix, suffix):
        count = 0
        i = 0
        while i < len(suffix):
            j = suffix.find(prefix, i)
            if i != j:
                break
            count += 1
            i = j + len(prefix)
        return count
```

JavaScript
```javascript
var encode = function(s) {
    const memo = new Map();
    return getEncodedStr(s, memo);
};

function getEncodedStr(s, memo) {
    if (s === "" || s.length < 5) {
        return s;
    }
    if (memo.has(s)) {
        return memo.get(s);
    }
    let chosenStr = s;
    let minLen = s.length;
    for (let i = 1; i < Math.floor(s.length/2)+1; i++) {
        let encodedStr = s;
        const prefix = s.slice(0, i);
        const suffix = s.slice(i, s.length + 1);
        const encodedPrefix = getEncodedStr(prefix, memo);
        const encodedSuffix = getEncodedStr(suffix, memo)
        const prefixCount = getPrefixCount(prefix, suffix);
        if (prefixCount > 0) {
            const k = prefixCount * prefix.length;
            const encodedSuffixFromK = getEncodedStr(suffix.slice(k, suffix.length + 1), memo);
            encodedStr = prefixCount + 1 + "[" + encodedPrefix + "]" + encodedSuffixFromK;
        }
        const encodedPartStr = encodedPrefix + encodedSuffix;
        if (encodedStr.length > encodedPartStr.length) {
            encodedStr = encodedPartStr;
        }
        if (minLen > encodedStr.length) {
            chosenStr = encodedStr;
            minLen = encodedStr.length;
        }
    }
    memo.set(s, chosenStr);
    return chosenStr;
}

function getPrefixCount(prefix, suffix) {
    let count = 0;
    let i = 0;
    while (i < suffix.length) {
        let j = suffix.indexOf(prefix, i);
        if (i !== j) {
            break;
        }
        count++;
        i = j + prefix.length;
    }
    return count;
}
```

GoLang
```go
func encode(s string) string {
    memo := map[string]string{}
	return getEncodedStr(s, memo)
}

func getEncodedStr(s string, memo map[string]string) string {
	if s == "" || len(s) < 5 {
		return s
	}
	if val, ok := memo[s]; ok {
		return val
	}
	chosenStr := s
	minLen := len(s)
	for i := 1; i < len(s)/2+1; i++ {
		encodedStr := s
		prefix := s[:i]
		suffix := s[i:]
		encodedPrefix := getEncodedStr(prefix, memo)
		encodedSuffix := getEncodedStr(suffix, memo)
		prefixCount := getPrefixCount(prefix, suffix)
		if prefixCount > 0 {
			k := prefixCount * len(prefix)
			encodedSuffixFromK := getEncodedStr(suffix[k:], memo)
			encodedStr = strconv.Itoa(prefixCount+1) + "[" + encodedPrefix + "]" + encodedSuffixFromK
		}
		encodedPartStr := encodedPrefix + encodedSuffix
		if len(encodedStr) > len(encodedPartStr) {
			encodedStr = encodedPartStr
		}
		if minLen > len(encodedStr) {
			chosenStr = encodedStr
			minLen = len(encodedStr)
		}
	}
	memo[s] = chosenStr
	return chosenStr
}

func getPrefixCount(prefix, suffix string) int {
	count := 0
	i := 0
	for i < len(suffix) {
		j := indexOf(prefix, suffix, i)
		if i != j {
			break
		}
		count++
		i = j + len(prefix)
	}
	return count
}

func indexOf(prefix, suffix string, idx int) int {
	i := 0
	j := idx
	firstIdx := -1
	for j < len(suffix) {
		if prefix[i] == suffix[j] {
			firstIdx = j
			break
		}
		j++
	}
	for i < len(prefix) && j < len(suffix) {
		if prefix[i] != suffix[j] {
			break
		}
		i++
		j++
	}
	if i == len(prefix) {
		return firstIdx
	}
	return -1
}
```
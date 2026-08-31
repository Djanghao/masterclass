# ✅ [JavaScript] [PHP] 6 Solutions With Explanation. 💯 Understandable 🚀

**Author:** akunopaka
**Votes:** 86
**Link:** [https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/solutions/3253654/](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/solutions/3253654/)

---

# Approach
#### Solution #1 - Built-in function strpos()
Use the strpos() Built-in function to find the position of the substring in the string. If the substring is not found, return -1.
#### Solution #2 - Find Substring Position with Regex
Create a pattern based on the needle and use preg_match() function to compare the haystack and needle and return the index position. If the substring is not found, return -1.
#### Solution #3 - Brute Force
Loop through the haystack. For each character, loop through the needle and compare. If they are all equal, return the index of the haystack
#### Solution #4 - Brute Force Substring Search
Create a loop to iterate through the haystack and compare the substrings of the haystack and needle using the substr() function. Return the index position of the needle or -1 if not found.
#### Solution #5 - Tracking Loop Search - Time: O(N), Space: O(1)
Loop through the haystack string and compare each character of the substring to the corresponding character in the haystack. If all characters match, the index is returned. If the substring is not found, return -1.
#### Solution #6 - KMP - Time: O(N+M) | KMP - Knuth-Morris-Pratt String Matching Algorithm
Preprocess the needle to form an array to store the occurs before.
Loop through the haystack and compare with needle. If mismatch occurs, move the haystack index by the occurs before array. 

# Complexity
- Time complexity: O(n)
- Space complexity: O(1)


# Solution #1 - Built-in function
```javascript []
/**
 * Solution #1 - Built-in function
 *
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    return haystack.indexOf(needle);
};
```
```php []
class Solution
{
    /**
     * Solution 1 - Built-in function strpos()
     * 
     * @param String $haystack
     * @param String $needle
     * @return Integer
     */
    function strStr(string $haystack, string $needle): int {
        $pos = strpos($haystack, $needle);
        return $pos === false ? -1 : $pos;
    }
}
```
# Solution #2 - Find Position with Regex
```javascript []
/**
 * Solution #2 - RegExp
 *
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    const regex = new RegExp(needle);
    return haystack.search(regex);
};
```
```php []
class Solution
{
    /**
     * Solution #2 - Regular Expression
     * 
     * @param String $haystack
     * @param String $needle
     * @return Integer
     */
    function strStr(string $haystack, string $needle): int {
        $pattern = '/' . $needle . '/';
        $result = preg_match($pattern, $haystack, $matches, PREG_OFFSET_CAPTURE);
        return $result ? $matches[0][1] : -1;
    }
}
```




# Solution #3 - Brute Force Time: O(N*M)
```javascript []
/**
 * Solution #3 - Brute Force - Time: O(N*M), Space: O(1)
 * Loop through the haystack. For each character, loop through the needle and compare.
 * If they are all equal, return the index of the haystack
 *
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (!needle) return 0;
    for (let i = 0; i < haystack.length; i++) {
        let isMatch = true;
        for (let j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                isMatch = false;
                break;
            }
        }
        if (isMatch) return i;
    }
    return -1;
};
```


# Solution #4 - Loop through haystack and compare substrings
```javascript []
/**
 * Solution #4 - Loop through haystack and compare substrings - Time: O(N), Space: O(1)
 * Loop through the haystack. For each character, loop through the needle and compare.
 * If they are all equal, return the index of the haystack
 *
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let haystackLength = haystack.length;
    let needleLength = needle.length;
    if (haystackLength < needleLength) return -1;

    for (let i = 0; i <= haystackLength - needleLength; i++) {
        if (haystack.substr(i, needleLength) === needle) return i;
    }
    return -1;
};
```
```php []
class Solution
{
    /**
     * Solution #4 - Loop through haystack and compare substrings
     * 
     * @param String $haystack
     * @param String $needle
     * @return Integer
     */
    function strStr(string $haystack, string $needle): int {
        $haystackLength = strlen($haystack);
        $needleLength = strlen($needle);
        if ($haystackLength < $needleLength) return -1;

        for ($i = 0; $i <= $haystackLength - $needleLength; $i++) {
            if (substr($haystack, $i, $needleLength) == $needle) return $i;
        }
        return -1;
    }
}
```



# Solution #5 - Tracking Loop Search
```javascript []
/**
 * Solution #5 - Loop through haystack and compare characters one by one - Time: O(N), Space: O(1)
 * Loop through the haystack string and compare each character of the substring to the corresponding character in the haystack. If all characters match, the index is returned. If the substring is not found, return -1.
 *
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let haystackLength = haystack.length;
    let needleLength = needle.length;
    if (haystackLength < needleLength) return -1;

    let matchingIndex = 0;
    for (let i = 0; i < haystackLength; i++) {
        if (needle[i - matchingIndex] !== haystack[i]) {
            i = matchingIndex;
            matchingIndex = i + 1;
        } else if (i - matchingIndex == needleLength - 1) {
            return matchingIndex;
        }
    }
    return -1;
};
```
```php []
class Solution
{
    /**
     * Solution #5 - Loop through haystack and compare characters one by one - no substr or strpos used
     * 
     * @param String $haystack
     * @param String $needle
     * @return Integer
     */
    function strStr(string $haystack, string $needle): int {
        $haystackLength = strlen($haystack);
        $needleLength = strlen($needle);
        if ($haystackLength < $needleLength) return -1;

        $matchingIndex = 0;
        for ($i = 0; $i < $haystackLength; $i++) {
            if ($needle[$i - $matchingIndex] != $haystack[$i]) {
                $i = $matchingIndex;
                $matchingIndex = $i + 1;
            } elseif (($i - $matchingIndex) == ($needleLength - 1)) {
                return $matchingIndex;
            }
        }
        return -1;
    }
}
```

# Solution #6 - KMP - Time: O(N+M) | KMP - Knuth-Morris-Pratt String Matching Algorithm

```javascript []
/**
 * Solution #6 - KMP - Time: O(N+M) | KMP - Knuth-Morris-Pratt String Matching Algorithm
 * Preprocess the needle to form an array to store the occurs before.
 * Loop through the haystack and compare with needle.
 * If mismatch occurs, move the haystack index by the occurs before array.
 *
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    const needleLength = needle.length;
    let i = 0, j = -1;

    // LPS - Longest Prefix Suffix / Prefix table 
    const lps = [-1];
    while (i < needleLength - 1) {
        if (j === -1 || needle[i] === needle[j]) {
            i++;
            j++;
            lps[i] = j;
        } else {
            j = lps[j];
        }
    }

    i = 0, j = 0;
    while (i < haystack.length && j < needleLength) {
        if (haystack[i] === needle[j]) {
            i++;
            j++;
        } else {
            j = lps[j];
            if (j < 0) {
                i++;
                j++;
            }
        }
    }
    if (j === needleLength) {
        return i - j;
    }
    return -1;
}
```
```php []
class Solution
{
    /**
     * Solution #6 -- KMP - Knuth-Morris-Pratt String Matching Algorithm
     * 
     * @param String $haystack
     * @param String $needle
     * @return Integer
     */
    $haystackLength = strlen($haystack);
    $needleLength = strlen($needle);
    if ($needleLength == 0) return 0;
    if ($haystackLength < $needleLength) return -1;

    // LPS - Longest Prefix Suffix / Prefix table 
    $lps = array_fill(0, $needleLength, 0);
    $prevLPS = 0;
    $i = 1;
    while ($i < $needleLength) {
        if ($needle[$i] == $needle[$prevLPS]) {
            $lps[$i] = $prevLPS + 1;
            $prevLPS++;
            $i++;
        } elseif ($prevLPS == 0) {
            $lps[$i] = 0;
            $i++;
        } else {
            $prevLPS = $lps[$prevLPS - 1];
        }
    }

    $i = 0; // for haystack
    $j = 0; // for needle
    while ($i < $haystackLength) {
        if ($haystack[$i] == $needle[$j]) {
            $i++;
            $j++;
        } else {
            if ($j == 0) {
                $i++;
            } else {
                $j = $lps[$j - 1];
            }
        }
        if ($j == $needleLength) {
            return $i - $needleLength;
        }
    }
    return -1;
    }
}
```

**If my work was useful for you, please upvote!**

\uD83D\uDC4D\uD83D\uDC4D\uD83D\uDC4D
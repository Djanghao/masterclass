# Brute force it with bits of optimization

**Author:** not_null
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-nice-substring/solutions/6112552/](https://leetcode.com/problems/longest-nice-substring/solutions/6112552/)

---

# Intuition
Brute force 

# Approach
0. impelement the `isNice()` function
1. find all candidate substrings 
2. sort them by length and return longest if exists
3. place bits of optimization here and there

# Complexity
- Time complexity:
~$$O(n^2/2)$$

- Space complexity:
~$$O(n/2)$$

# Code
```php []
class Solution {

    /**
     * @param String $s
     * @return String
     */
    function longestNiceSubstring($s) {
        return solution($s);
    }
}

function isNice(string $ss): bool {
    $chars = array_unique(str_split($ss));
    // if uniq char count is not even then string is not nice
    if (count($chars) % 2 !== 0) {
        return false;
    }
    // check each char presence in both upper and lower case
    foreach ($chars as $ch) {
        if (in_array(strtolower($ch), $chars) && in_array(strtoupper($ch), $chars)) {
            continue;
        }
        return false;
    }
    return true;
}

function solution(string $string): string {
    $len = strlen($string);
    $arr = [];
    // find all candidate substrings
    for ($i = 0; $i < $len; $i++) {
        // check substrings gradually reducing it length from the end
        for ($j = 0; $len - ($i + $j) > 1; $j++) {
            $candidate = substr($string, $i, $len - ($i +$j));

             if (isNice($candidate)) {
                 $arr[] = $candidate;
                 // if found then it longest in current outer loop
                 // no need to look for shorter candidates
                 break; 
             }
        }
    }

    // sort by length descending
    usort($arr, fn ($a, $b) => strlen($a) < strlen($b));

    // return longest if exists else empty string
    return $arr[0] ?? '';
}
```
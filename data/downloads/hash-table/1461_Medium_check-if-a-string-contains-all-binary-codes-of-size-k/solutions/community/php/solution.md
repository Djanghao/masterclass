# Check If a String Contains All Binary Codes of Size K

**Author:** JhenilCode
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/solutions/5668044/](https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/solutions/5668044/)

---


# Code
```php []
class Solution {

function hasAllCodes($s, $k) {
    $n = strlen($s);
    
    // Total number of unique binary codes of length k
    $totalCodes = 1 << $k; // This is 2^k
    
    // Set to store unique substrings
    $seen = array();
    
    // Traverse the string with a sliding window
    for ($i = 0; $i <= $n - $k; $i++) {
        $substring = substr($s, $i, $k);
        $seen[$substring] = true;
    }
    
    // Check if the number of unique substrings is equal to 2^k
    return count($seen) === $totalCodes;
}
}
```
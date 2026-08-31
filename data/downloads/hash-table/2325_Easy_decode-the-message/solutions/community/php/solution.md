# Simple php solution, beats 100%

**Author:** spone12
**Votes:** 0
**Link:** [https://leetcode.com/problems/decode-the-message/solutions/5975599/](https://leetcode.com/problems/decode-the-message/solutions/5975599/)

---


# Complexity
- Time complexity: 1ms, $$O(n)$$

- Space complexity: 20.1mb

# Code
```php []
class Solution {

    /**
     * @param String $key
     * @param String $message
     * @return String
     */
    function decodeMessage($key, $message) {

        $decodedMessage = '';
        $keys = [];
        for ($i = 0; $i < strlen($key); $i++) {
            $char = $key[$i];
            if ($char != ' ' && !in_array($char, $keys)) {
                $keys[] = $char;
            }

            if (count($keys) == 26) {
                break;
            }
        }

        $alphabet = array_combine($keys, range('a', 'z'));
        $alphabet[' '] = ' ';
        
        for ($i = 0; $i < strlen($message); $i++) {
            $decodedMessage .= $alphabet[$message[$i]];
        }

        return $decodedMessage;
    }
}
```
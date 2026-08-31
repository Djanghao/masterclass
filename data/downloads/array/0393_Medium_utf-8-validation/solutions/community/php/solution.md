# PHP Simple Solution

**Author:** boikomyk
**Votes:** 0
**Link:** [https://leetcode.com/problems/utf-8-validation/solutions/4126836/](https://leetcode.com/problems/utf-8-validation/solutions/4126836/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    function convertDecToBinStr(int $dec, bool $only_last_8_bits = true) {
        $bin_str = str_pad(decbin($dec), 8, "0", STR_PAD_LEFT);
        return $only_last_8_bits ? substr($bin_str, -8) : $bin_str;
    }

    /**
     * @param Integer[] $data
     * @return Boolean
     */
    function validUtf8($data) {
        // given:
        // - each integer represents only 1 byte of data
        // - valid UTF 8 character from 1 to 4 bytes long
        $data_length = count($data);
        if ($data_length == 0) {
            return false;
        }

        // declare help vars before the loop
        $idx = 0;
        while ($idx < $data_length) {
            // process a complete UTF-8 character in one iteration
            $first_byte_str = $this->convertDecToBinStr($data[$idx++]);
            $first_zero_pos = stripos($first_byte_str, '0');

            if (
                // check it against the UTF-8 format validation rules
                $first_zero_pos === false ||
                $first_zero_pos === 1 ||
                $first_zero_pos > 4 ||
                ($idx + $first_zero_pos - 1) > $data_length

            ) {
                return false;
            }

            $first_zero_pos--; // cuz first byte is already processed
            while ($first_zero_pos > 0) {
                if (!str_starts_with($this->convertDecToBinStr($data[$idx++]), '10')) {
                    return false;
                }
                $first_zero_pos--;
            }
        }
        return true;
    }
}
```
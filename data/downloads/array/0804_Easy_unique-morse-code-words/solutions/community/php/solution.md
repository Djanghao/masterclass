# php solution 1ms runtime

**Author:** dexterbagtang
**Votes:** 0
**Link:** [https://leetcode.com/problems/unique-morse-code-words/solutions/6083500/](https://leetcode.com/problems/unique-morse-code-words/solutions/6083500/)

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
```php []
class Solution {

    /**
     * @param String[] $words
     * @return Integer
     */
function uniqueMorseRepresentations($words) {
    $alphabets = [
        'a' => ".-",
        'b' => "-...",
        'c' => "-.-.",
        'd' => "-..",
        'e' => ".",
        'f' => "..-.",
        'g' => "--.",
        'h' => "....",
        'i' => "..",
        'j' => ".---",
        'k' => "-.-",
        'l' => ".-..",
        'm' => "--",
        'n' => "-.",
        'o' => "---",
        'p' => ".--.",
        'q' => "--.-",
        'r' => ".-.",
        's' => "...",
        't' => "-",
        'u' => "..-",
        'v' => "...-",
        'w' => ".--",
        'x' => "-..-",
        'y' => "-.--",
        'z' => "--.."
    ];

    $map = [];

    foreach ($words as $word) {
        $transformation = '';
        for ($i = 0; $i < strlen($word); $i++){
            $transformation .= $alphabets[$word[$i]];
        }

        if (!isset($map[$transformation])){
            $map[$transformation] = $word;
        }

    }

    return count($map);

}
}
```
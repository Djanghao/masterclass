# PHP

**Author:** stuu
**Votes:** 1
**Link:** [https://leetcode.com/problems/keyboard-row/solutions/1913431/](https://leetcode.com/problems/keyboard-row/solutions/1913431/)

---

```
class Solution
{

    public function __construct()
    {
        $this->rows = [
            str_split("qwertyuiop"),
            str_split("asdfghjkl"),
            str_split("zxcvbnm"),
        ];
    }

    /**
     * @param String[] $words
     * @return String[]
     */
    function findWords($words)
    {
        $ans = [];
        foreach ($words as $k => $word) {

            $w_parts = str_split(strtolower($word));
            foreach ($this->rows as $key_row) {
                if (count(array_diff($w_parts, $key_row)) === 0) {
                    $ans[] = $word;
                    break 1;
                };
            }
        }
        return $ans;
    }
}
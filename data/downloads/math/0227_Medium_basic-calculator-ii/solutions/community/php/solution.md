# [PHP] Simple solution

**Author:** rozinko
**Votes:** 1
**Link:** [https://leetcode.com/problems/basic-calculator-ii/solutions/948012/](https://leetcode.com/problems/basic-calculator-ii/solutions/948012/)

---

```
function calculate($s)
    {
        $options = [
            [
                'pattern' => '/(\\d+|\\d+\\.\\d+)(\\*|\\/)(\\d+|\\d+\\.\\d+)/',
                'callable' => function ($s, $match) {
                    $result = $match[2] == '*' ? ($match[1] * $match[3]) : ($match[1] / $match[3]);
                    return substr_replace($s, floor($result), strpos($s, $match[0]), strlen($match[0]));
                }
            ],
            [
                'pattern' => '/^(\\-?\\d+|\\d+\\.\\d+)(\\-|\\+)(\\d+|\\d+\\.\\d+)/',
                'callable' => function ($s, $match) {
                    $result = $match[2] == '+' ? $match[1] + $match[3] : $match[1] - $match[3];
                    return substr_replace($s, floor($result), strpos($s, $match[0]), strlen($match[0]));
                }
            ],
        ];

        $s = str_replace(' ', '', $s);

        foreach ($options as $option)
            while (preg_match($option['pattern'], $s, $match))
                $s = $option['callable']($s, $match);

        return floor($s);
    }
	```
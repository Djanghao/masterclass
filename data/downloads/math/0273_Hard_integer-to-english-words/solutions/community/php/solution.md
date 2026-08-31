# Divide and rule

**Author:** georgynet
**Votes:** 2
**Link:** [https://leetcode.com/problems/integer-to-english-words/solutions/5606311/](https://leetcode.com/problems/integer-to-english-words/solutions/5606311/)

---

# Intuition
Divide and rule

# Approach
Implement common pattern and concate the parts.

# Code
```
class Solution
{
    private const NUM_TO_TEXT = [
        1 => 'One',
        2 => 'Two',
        3 => 'Three',
        4 => 'Four',
        5 => 'Five',
        6 => 'Six',
        7 => 'Seven',
        8 => 'Eight',
        9 => 'Nine',

        10 => 'Ten',
        11 => 'Eleven',
        12 => 'Twelve',
        13 => 'Thirteen',
        15 => 'Fifteen',
        18 => 'Eighteen',

        20 => 'Twenty',
        30 => 'Thirty',
        40 => 'Forty',
        50 => 'Fifty',
        60 => 'Sixty',
        70 => 'Seventy',
        80 => 'Eighty',
        90 => 'Ninety',
    ];

    public function numberToWords(int $num): string
    {
        if ($num === 0) {
            return 'Zero';
        }

        $ans = [];

        if ($num < 1_000_000_000_000 && $num >= 1_000_000_000) {
            $billions = (int)(($num % 1_000_000_000_000) / 1_000_000_000);
            $ans[] = $this->convertToWords($billions) . ' Billion';
            $num -= ($billions * 1_000_000_000);
        }

        if ($num < 1_000_000_000 && $num >= 1_000_000) {
            $millions = (int)(($num % 1_000_000_000) / 1_000_000);
            $ans[] = $this->convertToWords($millions) . ' Million';
            $num -= ($millions * 1_000_000);
        }

        if ($num < 1_000_000 && $num >= 1000) {
            $thousands = (int)(($num % 1_000_000) / 1000);
            $ans[] = $this->convertToWords($thousands) . ' Thousand';
            $num -= ($thousands * 1000);
        }

        if ($num < 1000) {
            $ans[] = $this->convertToWords($num);
        }

        return trim(implode(' ', $ans));
    }

    private function convertToWords(int $num): string
    {
        $hundreds = (int)($num / 100);

        $answer = [];
        if ($hundreds !== 0) {
            $answer[] = $this->convertNumPartToWord($hundreds) . ' Hundred';
        }

        $units = 0;
        $tens = $num % 100;
        if ($tens > 19) {
            $units = $num % 10;
            $tens -= $units;
        }

        if ($tens !== 0) {
            $answer[] = $this->convertNumPartToWord($tens);
        }

        if ($units !== 0) {
            $answer[] = $this->convertNumPartToWord($units);
        }

        return trim(implode(' ', $answer));
    }

    private function convertNumPartToWord(int $num): string
    {
        if ($num === 0) {
            return '';
        }

        if ($num < 20) {
            return self::NUM_TO_TEXT[$num] ?? self::NUM_TO_TEXT[$num - 10] . 'teen';
        }

        return self::NUM_TO_TEXT[$num];
    }
}
```
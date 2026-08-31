# [PHP] Solution using "123456789" and substring

**Author:** rozinko
**Votes:** 2
**Link:** [https://leetcode.com/problems/sequential-digits/solutions/854531/](https://leetcode.com/problems/sequential-digits/solutions/854531/)

---

```
function sequentialDigits($low, $high) {
        $nums = [];
        $s = '123456789';
        
        for($digits = strlen($low); $digits <= strlen($high); $digits++)
            for($start = 0; ($start+$digits) <= 9; $start++) {
                $num = (int)substr($s, $start, $digits);
                if($num > $high) return $nums;
                if($num >= $low) $nums[] = $num;
            }
        
        return $nums;
    }
```
	
Runtime: 8 ms, faster than 100.00% of PHP online submissions for Sequential Digits. 
Memory Usage: 14.9 MB, less than 100.00% of PHP online submissions for Sequential Digits.

if you like solution, upvote please!
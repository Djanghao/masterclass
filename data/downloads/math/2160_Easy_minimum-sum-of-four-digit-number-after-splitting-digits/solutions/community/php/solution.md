# Easy to understand PHP solution with comment

**Author:** Vlados117
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/solutions/5557385/](https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/solutions/5557385/)

---

Upvote if it helps to you
Have a nice day, champion!!!

# Code
```
class Solution {

    /**
     * @param Integer $num
     * @return Integer
     */
    function minimumSum($num) {
        //We must check only double digit integers, because, for example in case
        //1999 91 and 99 is better than 199 and 9

        //first of all exploude our integer to digits
        $array_nums = [];

        for ($i=0; $i<=3; $i++) {
            $array_nums[] = $num % 10;
            $num =  intval($num / 10);
        }

        //sort our array 1 9 9 9
        sort($array_nums);
        
        //reserve two vars to collect our numbers
        $string1 = $string2 = '';

        //We will repeatedly pick the smallest available digit and alternately place it into one of two numbers. 
        //This way, our numbers will start with the smallest digits and end with the largest ones.
        $marker = 0;

        foreach ($array_nums as $value) {
            if ($marker == 0) {
                $string1 .= $value;
                $marker = 1;
                continue;
            }
            $string2 .= $value;
            $marker = 0;
        }

        return intval($string2) + intval($string1);
    }
}
```
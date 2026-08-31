# Fast php one line solution

**Author:** NickHuijgen
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-complement/solutions/1632700/](https://leetcode.com/problems/number-complement/solutions/1632700/)

---

class Solution {

    /**
     * @param Integer $num
     * @return Integer
     */
    function findComplement($num) {
	//Convert the number to binary, replace all 1's with 2's first so the code can replace all 0's with 1's
	//then replace all of the 2's with 0's  and finally convert the string back to an integer
	//This solution skips the converting to array and replaces the numbers inside of the string instead
        return bindec(str_replace('2', '0', str_replace('0', '1', str_replace('1', '2', decbin($num)))));
    }
}
# Runtime: 315 ms (100% faster) |  Memory Usage: 30 MB (100% less) | with explanation

**Author:** fuchko
**Votes:** 0
**Link:** [https://leetcode.com/problems/push-dominoes/solutions/2631130/](https://leetcode.com/problems/push-dominoes/solutions/2631130/)

---

* First of all we need to get vector for sum of right and left forses
* So lets calculate right forses:
	* Alghoritm:
		* N = is the lenght of the string
		* Go from left to right by one letter in string
			* If letter == R
				* Force = N
			* else if letter == L
				* Force = 0
			* else if Force > 0
				* decrease Forse by 1
	* Example:
		* "RR.L"
		* [4, 4, 3, 0]
* Now we need to calculate forses for left
	* The same as befor but reverse
		* Go from right to left by one letter in string
			* If letter == L
				* Force = -N (negative N)
			* else if letter == R
				* Force = 0
			* else if Force > 0
				* increase Forse by 1
	* Example
		* "RR.L"
		* [0, 0, -3, -4]
* Now we need to get it's vector (summ of forces array)
	* [4, 4, 3, 0] + [0, 0, -3, -4] = [4, 4, 0 ,-4]
* For finding result we just can run through this vector
	* For each number in vector
		* if number > 0
			* result = R
		* else if number < 0
			* result = L
		* else 
			* result = .
	* Example:
		* [4, 4, 0 ,-4]
		* "RR.L"
```
class Solution {

    /**
     * @param String $dominoes
     * @return String
     */
    function pushDominoes($dominoes) {
        $len = strlen($dominoes);
        
        // calculate right force
        $rn = 0;
        $r = [];
        for($i = 0; $i < $len; $i++) {
            $dom = $dominoes[$i];
            if ($dom == 'R') {
                $rn = $len;
            } else if ($dom == 'L') {
                $rn = 0;
            } else if ($rn > 0) {
                $rn--;
            }
            $r[$i] = $rn;
        }
        
        // calculate left forse
        $ln = 0;
        $l = [];
        for($i = $len - 1; $i >= 0; $i--) {
            $dom = $dominoes[$i];
            if ($dom == 'L') {
                $ln = -$len;
            } else if ($dom == 'R') {
                $ln = 0;
            } else if ($ln < 0) {
                $ln++;
            }
            $l[$i] = $ln;
        }
        
        // get vector and result
        $str = '';
        for ($i = 0; $i < count($r); $i++) {
            $fi = $r[$i] + $l[$i];
            if ($fi > 0) {
                $str .= 'R';
            } else if ($fi < 0) {
                $str .= 'L';
            } else {
                $str .= '.';
            }
        }
        return $str;
    }
}
```
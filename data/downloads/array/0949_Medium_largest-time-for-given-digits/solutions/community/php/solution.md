# [PHP] Solution

**Author:** dragon13
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-time-for-given-digits/solutions/823873/](https://leetcode.com/problems/largest-time-for-given-digits/solutions/823873/)

---

Trying to find the highest time by digit for digit looking if the highest possible value is in the array of available numbers left:
* Loop from 2 to 0 for the high-digit of the hour. If the value isn't in the array continue.
* Otherwise remove on a copy of the array the digit which is actual tested.
* Loop from 3 if first value is 2 otherwise from 9 to 0 for the low part of the hours.  If the value isn't in the array continue.
* Otherwise remove on a copy of the array the digit which is actual tested.
* If minimum of left 2 numbers is higher as 5 then continue (no minutes 00-59 possible)
* Build from the last 2 digits the maximum minutes and build the complete time and return it because it's maximum.
* If loop ends then there isn't any solution so return empty string.
```
function largestTimeFromDigits($A) {
	for($i=2; $i>=0; $i--) {
		if (($ind=array_search($i,$A))===false) continue;
		$B = $A;
		array_splice($B,$ind,1);
		for ($j=($i===2)?3:9; $j>=0; $j--) {
			if (($ind=array_search($j,$B))===false) continue;
			$C = $B;
			array_splice($C,$ind,1);
			if (min($C)>5) continue;
			if ($C[0]>5 || ($C[0]<$C[1]) && $C[1]<6){
				return $i . $j . ':' . $C[1] . $C[0];
			} else
				return $i . $j . ':' . $C[0] . $C[1];
		}
	}
	return "";
}

```

# [PHP] Simple solution with explanations

**Author:** rozinko
**Votes:** 2
**Link:** [https://leetcode.com/problems/reformat-phone-number/solutions/978601/](https://leetcode.com/problems/reformat-phone-number/solutions/978601/)

---

```
function reformatNumber($number) {
    // replace all "-" and " "
	$number = str_replace(['-', ' '], '', $number);
	
	// split number by 3 digits
	$array = str_split($number, 3);
	
	if (strlen($array[count($array) - 1]) < 2 && count($array) > 1) {
	    // if there is only 1 digit at the end, 
		// then we will transfer there another one from the previous
		$array[count($array) - 1] = substr($array[count($array) - 2], -1) . $array[count($array) - 1];
		$array[count($array) - 2] = substr($array[count($array) - 2], 0, 2);
	}
	// collect into a string with "-" separator
	return implode('-', $array);
}
```
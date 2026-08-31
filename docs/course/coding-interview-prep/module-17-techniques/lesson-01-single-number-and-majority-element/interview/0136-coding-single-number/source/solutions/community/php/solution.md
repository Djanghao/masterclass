# PHP 1-line beats 100% time and space

**Author:** domthedeveloper
**Votes:** 8
**Link:** [https://leetcode.com/problems/single-number/solutions/428189/](https://leetcode.com/problems/single-number/solutions/428189/)

---

Independent bitwise xor function:

	function singleNumber($A) {
		function bitwise_xor($x, $y){
			return $x ^ $y;
		}
        return array_reduce($A, "bitwise_xor");
    }

In-line anonymous function:

	function singleNumber($A) {
        return array_reduce($A, function($x, $y){ return $x ^ $y; });
    }
# Repeated DNA Sequences | PHP-Solution | Faster then 100% + memory less 100%

**Author:** dragon13
**Votes:** 1
**Link:** [https://leetcode.com/problems/repeated-dna-sequences/solutions/899121/](https://leetcode.com/problems/repeated-dna-sequences/solutions/899121/)

---

**Repeated DNA Sequences**
 * For this using an object with for all chars (at this position) a property (with name of the char, e.g. A). There are up to 4 possibile properties for one object: A, C, G and T.
  *  For the next char creating a new object which will be the value of the property from the char before.
  *  Building up this way all 10 chars from the substring to the tree.
  *  If a property exists already just go on with this.
  * If for one substring there is no need to create any new property then this is a double, so add it to the result.

   ```
 function findRepeatedDnaSequences($s) {
		$res = [];
		$end = strlen($s) - 10;
		$head = (object) null;
		for ($i=0; $i<=$end; $i++) {
			$node = $head;
			$end2 = $i+10;
			$ok = true;
			for ($j=$i; $j<$end2; $j++) {
				if ( !isset($node->{$s[$j]}) ) {
					$ok = false;
					$node->{$s[$j]} = (object)null;
				}
				$node = $node->{$s[$j]};
			}
			if ($ok && (array_search(($t=substr($s,$i, 10)),$res) === false))
				$res[] = $t;
		}
		return $res;
	}
```

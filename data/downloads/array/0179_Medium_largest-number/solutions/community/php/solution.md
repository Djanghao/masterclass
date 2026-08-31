# [PHP] Solution | Beats 100% speed | 4 ms

**Author:** dragon13
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-number/solutions/864562/](https://leetcode.com/problems/largest-number/solutions/864562/)

---

Runtime: 4 ms, faster than 100.00% of PHP online submissions for Largest Number.

	function largestNumber($nums)
	{
		$sort = array_fill(0, 10, []);

		foreach ($nums as $num) {
			$num = strval($num);
			$sort[$num[0]][] = $num;
		}

		$res = '';
		$sort = array_map(function ($s) {
			usort($s, function ($a, $b) {
				if ((strlen($a)===1 || intval($a[1])<intval($a[0])) && (strlen($b)===1 || intval($b[1])<intval($b[0]))) {
					if (strlen($a)===strlen($b)) {
						return intval($b) <=> intval($a);
					} elseif (strlen($a)===1) {
						return -1;
					} elseif (strlen($b)===1) {
						return 1;
					} else {
						$min = min(strlen($a), strlen($b));
						for ($i=0; $i<$min; $i++) {
							if (intval($a[$i])<intval($b[$i])) return 1;
							elseif (intval($a[$i])>intval($b[$i])) return -1;
						}
						return strlen($a)<strlen($b) ? (intval($b[$min])<intval($b[0]) ? -1 : 1) : (intval($a[$min])<intval($a[0]) ? 1 : -1);
					}
				} else {
					if (strlen($a)===strlen($b)) {
						return intval($b) <=> intval($a);
					} else {
						$min = min(strlen($a), strlen($b));
						for ($i=1; $i<$min; $i++) {
							if (intval($a[$i])<intval($b[$i])) return 1;
							elseif (intval($a[$i])>intval($b[$i])) return -1;
						}
						return strlen($a)<strlen($b) ? (intval($b)<=intval(str_pad($a,strlen($b),$b[0])) ? -1 : 1) : (intval($a)<=intval(str_pad($b,strlen($a),$a[0])) ? 1 : -1);
					}
				}
			});
			return $s;
		}, $sort);

		for ($i=9; $i>=1; $i--) {
			$res .=  join($sort[$i]);
		}
		if (count($sort[0])) {
			if (strlen(($res))) {
				$res .= str_pad('', count($sort[0]), '0');
			} else {
				return '0';
			}
		}
		return $res;
	}
# [PHP] Solution | 0ms | Beats 100% speed | Beats 100% space

**Author:** dragon13
**Votes:** 1
**Link:** [https://leetcode.com/problems/evaluate-division/solutions/868054/](https://leetcode.com/problems/evaluate-division/solutions/868054/)

---

Runtime: 0 ms, faster than 100.00% of PHP online submissions for Evaluate Division.
Memory Usage: 15.6 MB, less than 100.00% of PHP online submissions for Evaluate Division.

	function calcEquation($equations, $values, $queries)
	{
		$len = count($equations);
		for ($i=0; $i<$len; $i++) {
			$equi[$equations[$i][0]][$equations[$i][1]] = $values[$i];
			$equi[$equations[$i][1]][$equations[$i][0]] = 1/$values[$i];
		}
		$res = [];
		foreach ($queries as $q) {
			if ($q[0]===$q[1] && isset($equi[$q[0]])) {
				$res[] = sprintf("%1.5f",1);
			} else {
				$e = $equi;
				$res[] = sprintf("%1.5f", $this->search($e, $q));
			}
		}
		return $res;
	}

	function search($e, $q) {
		if (!isset($e[$q[0]]) || !count($e[$q[0]]) || !count($e[$q[0]])) return -1;
		if (isset($e[$q[0]][$q[1]])) return $e[$q[0]][$q[1]];
		foreach ($e[$q[0]] as $key => $val) {
			unset($e[$q[0]][$key]);
			unset($e[$key][$q[0]]);
			if (($res = $this->search($e, [$key, $q[1]]))!==-1) return $res*$val;
		}
		return -1;
	}
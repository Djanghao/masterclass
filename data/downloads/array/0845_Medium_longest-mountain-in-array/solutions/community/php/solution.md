# Longest Mountain in Array | PHP beats 100% time + 100% space | O(n)

**Author:** dragon13
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-mountain-in-array/solutions/938305/](https://leetcode.com/problems/longest-mountain-in-array/solutions/938305/)

---

Runtime: 44 ms, faster than 100.00% of PHP online submissions for Longest Mountain in Array.
Memory Usage: 16.9 MB, less than 100.00% of PHP online submissions for Longest Mountain in Array.

	function longestMountain($A) {
		if (count($A)<3) return 0;
		$last = -INF;
		$max=0;
		$up=true;
		$lenUp=0;
		foreach ($A as $el) {
			if ($up) {
				if ($el>$last) {
					$lenUp++;
				} elseif ($el===$last) {
					$lenUp=1;
				} else {
					$lenDown = 2;
					$up=false;
				}
			} elseif ($el<$last) {
				$lenDown++;
			} else {
				if (($temp=$lenDown+$lenUp-1)>$max && $lenUp>=2) {
					$max = $temp;
				}
				$lenUp = 1 + ($el!==$last);
				$up=true;
			}
			$last=$el;
		}
		if (!$up) {
			if (($temp=$lenDown+$lenUp-1)>$max && $lenUp>=2) {
				$max = $temp;
			}
		}
		return $max>=2 ? $max : 0;
	}
# [PHP] Solution | 100% faster | 100% memory

**Author:** dragon13
**Votes:** 1
**Link:** [https://leetcode.com/problems/unique-paths-iii/solutions/856539/](https://leetcode.com/problems/unique-paths-iii/solutions/856539/)

---

Runtime: 16 ms
Memory Usage: 14.5 MB

* Flat the array for one-dimensional calculations.
* Count the values. If there isn't any start/endpoint return.
* Remember the length of all elements and of the 2 dimensions of the grid.
* Check for all 4 directions if increment/decrement by 1 or $len2 it will be in the same grid-element. If so, increment the results by result of the check of this position.
* If all zeros had been visited and it's the endpoint then return with a hit.
* Else look if at the testposition is a zero and there is at least one zero to visit.
* If so set this position in the grid to be visited (-1) and call the algorithm recursiv with new grid and zeros decrement by 1.
* Otherwise return no hit.

**Note:** I use some additional parameters for the (recursive algorithm) which initial are not filled, so I set defaults to it. At the start I calculate these values and for further I use them as parameter for the next step. The init-value is only at beginning unset, later it's allways false, so this step is skipped.


	function uniquePathsIII($grid, $init=true, $start=null, $zeros=null, $len=null, $len1=null, $len2=null) {
		$res = 0;
		if ($init) {
			$len1 = count($grid);
			$len2 = count($grid[0]);
			$len = $len1 * $len2;
			$grid = array_merge(...$grid);
			$countValues = array_count_values($grid);
			$zeros = $countValues[0] ?? 0;
			$end = $countValues[2] ?? 0;
			$start = array_search(1, $grid);
			if (!$end || $start===false)
				return 0;
		}
		if (($start + 1) %$len2) {
			$res += $this->testPos($grid, $start + 1, $zeros, $len, $len1, $len2);
		}

		if ($start %$len2) {
			$res += $this->testPos($grid, $start - 1, $zeros, $len, $len1, $len2);
		}

		if (intdiv($start, $len2) + 1 !== $len1) {
			$res += $this->testPos($grid, $start + $len2, $zeros, $len, $len1, $len2);
		}

		if (intdiv($start, $len2)) {
			$res += $this->testPos($grid, $start - $len2, $zeros, $len, $len1, $len2);
		}
		return $res;
	}
	function testPos($grid, $pos, $zeros, $len, $len1, $len2)
	{
		if (!$zeros && $grid[$pos] === 2) {
			return 1;
		} elseif ($zeros && $grid[$pos]===0) {
			$grid[$pos] = -1;
			return $this->uniquePathsIII($grid,false, $pos,$zeros-1, $len, $len1, $len2);
		} else {
			return 0;
		}
	}

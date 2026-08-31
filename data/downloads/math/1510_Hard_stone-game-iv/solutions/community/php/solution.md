# Stone Game IV | PHP | Beats 100% time + 100% memory

**Author:** dragon13
**Votes:** 0
**Link:** [https://leetcode.com/problems/stone-game-iv/solutions/910162/](https://leetcode.com/problems/stone-game-iv/solutions/910162/)

---

Runtime: 252 ms, faster than 100.00% of PHP online submissions for Stone Game IV.
Memory Usage: 19.2 MB, less than 100.00% of PHP online submissions for Stone Game IV.


	function winnerSquareGame($n) {
		if (isset($this->win[$n])) return $this->win[$n];
		if ($n > $this->sqr[($this->s)-1]) {
			do {
				$t = $this->sqr[] = pow(++$this->s,2);
				$this->win[$t] = true;
			} while ($t < $n);
		}
		$pos = [];
		foreach ($this->sqr as $m=>$v) {
			if ($n<$v) break;
			$t = $pos[] = $n -$v;
			if (isset($this->win[$t])) {
				if (!$this->win[$t]) return $this->win[$n] = true;
			}
		}
		for ($i=count($pos)-1; $i>=0; $i--) {
			if (!$this->winnerSquareGame($pos[$i])) return $this->win[$n] = true;
		}
		return $this->win[$n] = false;
	}
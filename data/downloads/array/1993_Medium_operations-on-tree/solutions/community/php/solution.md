# ✔️ PHP Operations on Tree solution

**Author:** alex-i07
**Votes:** 0
**Link:** [https://leetcode.com/problems/operations-on-tree/solutions/4375819/](https://leetcode.com/problems/operations-on-tree/solutions/4375819/)

---

# Code
```
<?php

class LockingTree {

	/**
	 * @var array
	 */
	private array $lockedNodes;

	/**
	 * @var array
	 */
	private array $parents;

	/**
	 * @var array
	 */
	private array $children;

	/**
	 * @param array $parent
	 */
	public function __construct(array $parent) {
		$this->lockedNodes = [];
		$this->parents[0] = - 1;
		for ($i = 1; $i < count($parent); $i ++) {
			$this->parents[$i] = $parent[$i];
			$this->children[$parent[$i]][] = $i;
		}
	}

	/**
	 * @param int $num
	 * @param int $user
	 *
	 * @return bool
	 */
	public function lock(int $num, int $user): bool {
		if (empty($this->lockedNodes[$num])) {
			$this->lockedNodes[$num] = $user;

			return true;
		}

		return false;
	}

	/**
	 * @param int $num
	 * @param int $user
	 *
	 * @return bool
	 */
	public function unlock(int $num, int $user): bool {
		if ($this->lockedNodes[$num] == $user) {
			unset($this->lockedNodes[$num]);

			return true;
		}

		return false;
	}

	/**
	 * @param int $num
	 * @param int $user
	 *
	 * @return bool
	 */
	public function upgrade(int $num, int $user): bool {
		$hasLockedDescendant = $this->hasLockedDescendant($num, $user);
		$hasLockedAncestors = $this->hasLockedAncestor($num);
		if ($hasLockedDescendant && !$hasLockedAncestors) {
			$this->lockedNodes[$num] = $user;
			$this->unlockAllDescendant($num);

			return true;
		}

		return false;
	}

	/**
	 * @param int $num
	 *
	 * @return bool
	 */
	private function hasLockedAncestor(int $num): bool {
		$current = $num;
		while ($current != - 1) {
			if (isset($this->lockedNodes[$current])) {
				return true;
			}
			$current = $this->parents[$current];
		}

		return false;
	}

	/**
	 * @param int $num
	 *
	 * @return bool
	 */
	private function hasLockedDescendant(int $num): bool {
		$queue[] = $num;
		while (!empty($queue)) {
			for ($i = 0; $i < count($queue); $i ++) {
				$current = array_shift($queue);
				if (isset($this->lockedNodes[$current])) {
					return true;
				} else {
					foreach ($this->children[$current] as $value) {
						$queue[] = $value;
					}
				}
			}
		}

		return false;
	}

	/**
	 * @param int $num
	 */
	private function unlockAllDescendant(int $num): void {
		$queue[] = $num;
		$j = 0;
		while (!empty($queue)) {
			for ($i = 0; $i < count($queue); $i ++) {
				$current = array_shift($queue);
				if ($j > 0) {
					unset($this->lockedNodes[$current]);
				}
				foreach ($this->children[$current] as $value) {
					$queue[] = $value;
				}
				$j ++;
			}
		}
	}
}

/**
 * Your LockingTree object will be instantiated and called as such:
 * $obj = LockingTree($parent);
 * $ret_1 = $obj->lock($num, $user);
 * $ret_2 = $obj->unlock($num, $user);
 * $ret_3 = $obj->upgrade($num, $user);
 */
```
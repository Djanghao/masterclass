# Recursive parse and format and beats 100.00% of users with PHP by time and memory

**Author:** elektrovenik
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-atoms/solutions/5477688/](https://leetcode.com/problems/number-of-atoms/solutions/5477688/)

---

# Intuition
Parse string and use recursion when found '(' sign.

# Approach
1. Parse string by one character
2. Use recursion when found '(' sign. Return lenght of parsed string as '_' element. After recursion skip length and continue.
3. Format result atoms as one string.


# Code
```
class Solution {

	/**
	 * @param String $formula
	 * @return String
	 */
	function countOfAtoms($formula) {

		$atoms = $this->atoms($formula);

		ksort($atoms);

		unset($atoms['_']);

		$rr = [];
		foreach ($atoms as $element => $n)
			$rr[] = $element.(($n > 1) ? $n : '');

		return implode('', $rr);
	}

	private function atoms(string $formula)
	{
		$atoms = $subatoms = [];
		$start = -1;
		$start_digit = null;
		$strlen = strlen($formula);

		for ($i = 0; $i <= $strlen; $i++)
		{
			if (($i === $strlen) || ($formula[$i] === '(') || $formula[$i] === ')' || ctype_upper($formula[$i]))
			{
				if ($start >= 0)
				{
					$n = ($start_digit !== null) ? substr($formula, $start_digit, $i - $start_digit) : 1;

					if (!empty($subatoms))
					{
						foreach ($subatoms as $element => $na)
							$atoms[$element] = ($atoms[$element] ?? 0) + $n * $na;

						$subatoms = [];
					}
					else
					{
						$element = substr($formula, $start, (($start_digit ?? $i) - $start));
						$atoms[$element] = ($atoms[$element] ?? 0) + $n;
					}
				}

				$start = $i;
				$start_digit = null;
			}
			elseif (ctype_digit($formula[$i]))
			{
				$start_digit = $start_digit ?? $i;
			}

			if ($formula[$i] === '(')
			{
				// inner parentheses
				$substr = substr($formula, $i + 1);
				$subatoms = $this->atoms($substr);
				$i += $subatoms['_'] + 1;
			}
			elseif ($formula[$i] === ')')
			{
				$strlen = $i;
				break;
			}
		}
		$atoms['_'] = $strlen;

		return $atoms;
	}
}

```
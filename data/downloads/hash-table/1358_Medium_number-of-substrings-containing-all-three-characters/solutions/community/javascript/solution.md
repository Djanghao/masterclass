# ↪️ Window Sliding O(N) ↩️ Simple JavaScript Solution [EASY - UNDERSTANDING]]

**Author:** Singh1997
**Votes:** 7
**Link:** [https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/solutions/2210877/](https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/solutions/2210877/)

---

		var numberOfSubstrings = function (s) {
			let a = 0, b = 0, c = 0, result = 0;

			for (let i = 0, j = 0; i < s.length; i++) {

				if (s[i] == 'a') a++;
				if (s[i] == 'b') b++;
				if (s[i] == 'c') c++;

				while (a && b && c) {
					result += s.length - i;

					if (s[j] === 'a') a--;
					if (s[j] === 'b') b--;
					if (s[j] === 'c') c--;
					j++;
				}
			}
			return result;
		};
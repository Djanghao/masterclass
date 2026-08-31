# WEEB DOES PYTHON

**Author:** Skywalker5423
**Votes:** 2
**Link:** [https://leetcode.com/problems/simplified-fractions/solutions/1231687/](https://leetcode.com/problems/simplified-fractions/solutions/1231687/)

---


	from math import gcd
	class Solution:
		def simplifiedFractions(self, n: int) -> List[str]:
			result, denominator = [], 2
			visited = set()
			while denominator <= n:
				for numerator in range(1, denominator):
					fraction = numerator/denominator

					# gcd(numerator, denominator) == 1 means simplified cuz no value except 1 can divide both numbers to give integers
					# we can't have "0.5/1.2" as a simplified fraction right? So thats why gcd comes in handy
					if gcd(numerator, denominator) == 1 and fraction not in visited: 
						result += [str(numerator) + "/" + str(denominator)]
						visited.add(fraction)

				denominator += 1 

			return result

Time for some anime recommendations
Try watching **Sorigerisu(Orange)**

# Episodes: 13 + 1 Movie
# Genres: Drama, Romance, School, Sci-Fi, Shoujo

Sad yet meaningful anime
Go check it out; you won't regret it
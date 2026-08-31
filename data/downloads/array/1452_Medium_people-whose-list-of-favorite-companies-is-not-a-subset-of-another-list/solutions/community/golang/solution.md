# Easy to understand solution, with comments. Not the most efficient one, beats 66%

**Author:** bengtrj
**Votes:** 0
**Link:** [https://leetcode.com/problems/people-whose-list-of-favorite-companies-is-not-a-subset-of-another-list/solutions/5088162/](https://leetcode.com/problems/people-whose-list-of-favorite-companies-is-not-a-subset-of-another-list/solutions/5088162/)

---

# Intuition
It's easier to find people which favorite companies $$are$$ subsets of others. Then we just need an extra loop on $$all$$ people to check which ones don't and add to the result.

Then we need to sort it as there's no guarantee in the order.

# Approach
It's not a super-optimised solution, but works well enough as a good starting point to understand the problem.

# Code
```
func peopleIndexes(favoriteCompanies [][]string) []int {

	personIndex := make(map[int]map[string]bool)

    for person := range favoriteCompanies {
		personIndex[person] = make(map[string]bool)
        for _, company := range favoriteCompanies[person] {
			personIndex[person][company] = true
        }
    }

    hasSubset := make(map[int]bool)

    for person := range personIndex {
        for otherPerson := range personIndex {
			personCompanies := personIndex[person]
			otherPersonCompanies := personIndex[otherPerson]
			if person != otherPerson && len(personCompanies) <= len(otherPersonCompanies) {
				if containsAll(personCompanies, otherPersonCompanies) {
					hasSubset[person] = true
				}
			}
		}
    }
		
	result := make([]int, 0)
	for person := range personIndex {
		if !hasSubset[person] {
			result = append(result, person)
		}
	}

    sort.Ints(result)

    return result
}

func containsAll(person, otherPerson map[string]bool) bool {
	for company := range person {
		if !otherPerson[company] {
			return false
		}
	}
	return true
}
```
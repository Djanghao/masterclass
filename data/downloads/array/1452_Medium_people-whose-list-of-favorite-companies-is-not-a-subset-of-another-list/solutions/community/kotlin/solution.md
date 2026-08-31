# I❤️Kotlin | The Clean and Short Solution

**Author:** user3488KQ
**Votes:** 0
**Link:** [https://leetcode.com/problems/people-whose-list-of-favorite-companies-is-not-a-subset-of-another-list/solutions/3398939/](https://leetcode.com/problems/people-whose-list-of-favorite-companies-is-not-a-subset-of-another-list/solutions/3398939/)

---

# First Attempt: Brute-Force
The idea behind the brute-force approach is pretty simple: we take every person's list of companies and compare with every list of other persons.

```
class Solution {
    // Warning: this code DOESN'T pass all tests
    fun peopleIndexes(favoriteCompanies: List<List<String>>): List<Int> =
        favoriteCompanies.withIndex()
            .filterNot { (_, needles) -> favoriteCompanies.any { heyStack -> needles !== heyStack && heyStack.containsAll(needles) } }
            .map { it.index }
}
```
This code fails with `Time Limit Exceeded` error. So some changes are required.

# Second Attempt: Minimal Optimization
The main cause why the first version is not fast enough to pass the tests is that 
`List.containsAll(List)` operation is pretty slow, it has a time complexity of $$O(m*n)$$. That means, if we replace lists with sets the time complexity will be reduced to $$O(n)$$, which is good enough.
```
class Solution {
    fun peopleIndexes(favoriteCompanies: List<List<String>>): List<Int> =
        favoriteCompanies
            // Convert each List<String> to Set<String>
            .map { it.toSet() } 
            .let { sets ->
                // Instead of values we're going to use (index, value) pairs
                sets.withIndex() 
                    // Filter out all sets that has subsets in any other set
                    .filterNot { (_, needles) -> 
                        // Look for ANY set in the sets which contains needles as a subset.
                        sets.any { haystack ->
                            // Check that haystack and needles have different references.
                            // So we use "!==" for comparison instead of "!=".
                            needles !== haystack &&
                                    // True, if all needles can be found in the haystack.
                                    haystack.containsAll(needles)
                        }
                    }.map { it.index } // Map (index, value) to index only.
            }
}
```
With this change you'll be already able to pass the test.
# Python solution using set, easy_to_understand to pythonic

**Author:** theSlayer
**Votes:** 2
**Link:** [https://leetcode.com/problems/people-whose-list-of-favorite-companies-is-not-a-subset-of-another-list/solutions/636458/](https://leetcode.com/problems/people-whose-list-of-favorite-companies-is-not-a-subset-of-another-list/solutions/636458/)

---

Basic idea is to create each list into a set and check if a set is subset of any other set. If it is, exclude it from the result.

```
    def peopleIndexes(self, favoriteCompanies: List[List[str]]) -> List[int]:
        array_of_sets = [set(company) for company in favoriteCompanies]
        result = []
        for i in range(len(favoriteCompanies)):
            add = True
            for j in range(len(favoriteCompanies)):
                if i != j:
                    if array_of_sets[i] < array_of_sets[j]:
                        add = False
                        break
            if add:
                result.append(i)
        return result
```

```
    def peopleIndexes(self, favoriteCompanies: List[List[str]]) -> List[int]:
        array_of_sets = [set(company) for company in favoriteCompanies]
        result = set(range(0, len(favoriteCompanies)))
        for i in range(len(favoriteCompanies)):
            if any(i != j and array_of_sets[i] < array_of_sets[j] for j in range(len(favoriteCompanies))):
                result.remove(i)
        return result
```


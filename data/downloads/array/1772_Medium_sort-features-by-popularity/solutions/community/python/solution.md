# Python | 3 Lines | Counter | Explanation

**Author:** domthedeveloper
**Votes:** 1
**Link:** [https://leetcode.com/problems/sort-features-by-popularity/solutions/1928277/](https://leetcode.com/problems/sort-features-by-popularity/solutions/1928277/)

---

**Idea**:
* Begin a frequency counter of the features, starting with the value `1` for each feature.
* For each response: split the sentence, use `set` to have only unique words, and `&` against the feature set to have only featured words for that response.
* Apply `Counter` against the result, and add the results to the main counter.
* Return the most common features.

**Solution**:
```
class Solution:
    def sortFeatures(self, features, responses):
        c, f = Counter(features), set(features)
        for r in responses: c += Counter(set(r.split()) & f)
        return (n for n, i in c.most_common())
```

**Solution - using Map / Reduce**:
```
class Solution:
    def sortFeatures(self, features, responses):
        c, f = Counter(features), set(features)
        c += reduce(add, (map(lambda r : Counter(set(r.split()) & f), responses)))
        return (n for n, i in c.most_common())
```

**Solution - using List Comprehension**:
```
class Solution:
    def sortFeatures(self, features, responses):
        c, f = Counter(features), set(features)
        c += reduce(add, (Counter(set(r.split()) & f) for r in responses))
        return (n for n, i in c.most_common())
```
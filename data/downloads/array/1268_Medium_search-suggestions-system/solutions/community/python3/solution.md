# [Python] A simple approach without using Trie

**Author:** crosserclaws
**Votes:** 47
**Link:** [https://leetcode.com/problems/search-suggestions-system/solutions/436564/](https://leetcode.com/problems/search-suggestions-system/solutions/436564/)

---

# Solution

Use sort and list comprehension.

```python
class Solution:
    def suggestedProducts(self, products: List[str], searchWord: str) -> List[List[str]]:
        list_ = []
        products.sort()
        for i, c in enumerate(searchWord):
            products = [ p for p in products if len(p) > i and p[i] == c ]
            list_.append(products[:3])
        return list_
```

Use sort and filter.

```python
class Solution:
    def suggestedProducts(self, products: List[str], searchWord: str) -> List[List[str]]:
        list_ = []
        products.sort()
        for i, c in enumerate(searchWord):
            products = list(filter(lambda p: p[i] == c if len(p) > i else False, products))
            list_.append(products[:3])
        return list_
```


---



# Explanation

(This section is the same as the reply below.)

The problem asks us to return a list of lists of suggested products, which means the list at index i contains products that have the same common prefix. So, we can generate results by filtering products based on the typing of the user in each iteration. For example

```python
products =  ["mobile","moneypot","monitor","mouse","mousepad"] # Sorted
searchWord = "mouse"

# After typing \u2018m\u2019 (i=0, c=\u2018m\u2019)
products =  ["mobile","moneypot","monitor","mouse","mousepad"]  # Common prefix = \u2018m\u2019
list_[0]=["mobile","moneypot","monitor"]

# After typing \u2018o\u2019 (i=1, c=\u2018o\u2019)
products =  ["mobile","moneypot","monitor","mouse","mousepad"]  # Common prefix = \u2018mo\u2019
list_[1]=["mobile","moneypot","monitor"]

# After typing \u2018u\u2019 (i=2, c=\u2018u\u2019)
products =  ["mouse","mousepad"]  # Common prefix = \u2018mou\u2019
list_[2]=["mouse","mousepad"]

# After typing \u2018s\u2019 (i=3, c=\u2018s\u2019)
products =  ["mouse","mousepad"] # Common prefix = \u2018mous\u2019
list_[3]=["mouse","mousepad"]

# After typing \u2018e\u2019 (i=4, c=\u2018e\u2019)
products =  ["mouse","mousepad"] # Common prefix = \u2018mouse\u2019
list_[4]=["mouse","mousepad"]
```


---



# Complexity

## Definition
- `N` is the number of products.
- `M` is the average length of product names.
- `L` is the length of the search word.

## Constraint
- `N`: 1 <= products.length <= 1000
- `M`: 1 <= products[i].length <= 3000
- `L`: 1 <= searchWord.length <= 1000

## Time
- Sorting: `O(MN logN)`. (String comparison is `O(M)`.)
- Loop and filter: `O(LN)`. Loop L times in the outer loop(i.e. for-loop) and N times in the inner loop(i.e. list comprehension). Every filter condition completes in `O(1)`.

The N times loop occurs when all products share the same prefixes of the search word. In this worst case, the 2-pointers approach can reduce the inner loop complexity. However, please notice that the time complexity of the sorting dominates the loop and filter.

## Space
- Sorting: `O(MN)`. Python's built-in sort is Timsort.
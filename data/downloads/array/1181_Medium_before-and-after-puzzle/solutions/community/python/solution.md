# Python dictionary solution with explanation

**Author:** MinionJosh
**Votes:** 2
**Link:** [https://leetcode.com/problems/before-and-after-puzzle/solutions/454000/](https://leetcode.com/problems/before-and-after-puzzle/solutions/454000/)

---

idea:
1. loop through phrases to save " head: [i] + rest " pair in a dict (str: list[list]), a: [[3, "quick", "bite", "to", "eat"], ...] for exmaple
2. loop through phrases again to find whether the last word is in the dict, if yes, concatenate both phrases

note:
1. dict values also contain index, the first values, to makse sure pharses[i] != pharses[j]
2. to prevent from ['a','b','a'] case which results in two "a" ,["a","a"], use set to eliminate duplicates.   


```
def beforeAndAfterPuzzles(self, phrases):
    """
    :type phrases: List[str]
    :rtype: List[str]
    """

    dic = collections.defaultdict(list)
    for i,p in enumerate(phrases):
        p = p.split()
        head, rest = p[0], p[1:]
        dic[head].append( [i]+rest )

    res = []
    for i,p in enumerate(phrases):
        p = p.split()
        rest, tail = p[:-1], p[-1]
        if tail in dic:
            res += [' '.join(p+i_words[1:]) for i_words in dic[tail] if i_words[0] != i]

    return sorted(set(res))
```
# Swift Union Find

**Author:** talnoside
**Votes:** 1
**Link:** [https://leetcode.com/problems/sentence-similarity-ii/solutions/607637/](https://leetcode.com/problems/sentence-similarity-ii/solutions/607637/)

---

We have two array of words: `words1` and `words2`. Each word may or may not belong to a similarity set. We want to find each pair of `words1` and `words2` share the same set. 

We can treat each the pair in the `pairs` are an edge connects two words. Imagine these individual pairs are little branches and the two words are leaves. By following the leaves, it could lead us to explore the whole forest. During the exploration, we have one mission: find the other leaf in `words2`.

I like to have the visualized intuition before I come up with an algorithm. The above image naturally lead me to use `union find`.

We first need to define the group for the forest, a `map`. Then a `find()` function to find the head of the individual forest and simply unify them when its possible. 

```
private var map = [String: String]()
    func areSentencesSimilarTwo(_ words1: [String], _ words2: [String], _ pairs: [[String]]) -> Bool {
        guard words1.count == words2.count else { return false }
        for p in pairs {
            map[find(p[0])] = find(p[1])
        }
        for i in 0..<words1.count where find(words1[i]) != find(words2[i]) {
            return false
        }
        return true
    }
    
    func find(_ word: String) -> String {
        if let val = map[word] {
            return val == word ? val : find(val)
        } else {
            map[word] = word
            return word
        }
    }

	
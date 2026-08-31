# Yet another Python solution

**Author:** tapanvaishnav17
**Votes:** 3
**Link:** [https://leetcode.com/problems/shortest-word-distance-ii/solutions/752317/](https://leetcode.com/problems/shortest-word-distance-ii/solutions/752317/)

---

```
class WordDistance(object):

    def __init__(self, words):
        """
        :type words: List[str]
        """
        self.d=defaultdict(list)
        for i,word in enumerate(words):
            self.d[word].append(i)
        #print(self.d)

    def shortest(self, word1, word2):
        """
        :type word1: str
        :type word2: str
        :rtype: int
        """
        indexes1 = self.d[word1]
        indexes2 = self.d[word2]

        i, j, dist = 0, 0, float("inf")
        while i < len(indexes1) and j < len(indexes2):
            dist = min(dist, abs(indexes1[i] - indexes2[j]))
            if indexes1[i] < indexes2[j]:
                i += 1
            else:
                j += 1

        return dist

# Your WordDistance object will be instantiated and called as such:
# obj = WordDistance(words)
# param_1 = obj.shortest(word1,word2)
```
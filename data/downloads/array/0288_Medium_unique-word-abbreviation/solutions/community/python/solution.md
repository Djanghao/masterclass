# Python short solution using defaultdict with comments.

**Author:** OldCodingFarmer
**Votes:** 19
**Link:** [https://leetcode.com/problems/unique-word-abbreviation/solutions/73145/](https://leetcode.com/problems/unique-word-abbreviation/solutions/73145/)

---

        
    def __init__(self, dictionary):
        self.dic = collections.defaultdict(set)
        for s in dictionary:
            val = s
            if len(s) > 2:
                s = s[0]+str(len(s)-2)+s[-1]
            self.dic[s].add(val)

    def isUnique(self, word):
        val = word 
        if len(word) > 2:
            word = word[0]+str(len(word)-2)+word[-1]
        # if word abbreviation not in the dictionary, or word itself in the dictionary (word itself may 
        # appear multiple times in the dictionary, so it's better using set instead of list)
        return len(self.dic[word]) == 0 or (len(self.dic[word]) == 1 and val == list(self.dic[word])[0])
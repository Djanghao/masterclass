# Concise python solution, 10 lines.

**Author:** sherlock321
**Votes:** 617
**Link:** [https://leetcode.com/problems/text-justification/solutions/24891/](https://leetcode.com/problems/text-justification/solutions/24891/)

---

--------------------------------------------

    def fullJustify(self, words, maxWidth):
        res, cur, num_of_letters = [], [], 0
        for w in words:
            if num_of_letters + len(w) + len(cur) > maxWidth:
                for i in range(maxWidth - num_of_letters):
                    cur[i%(len(cur)-1 or 1)] += ' '
                res.append(''.join(cur))
                cur, num_of_letters = [], 0
            cur += [w]
            num_of_letters += len(w)
        return res + [' '.join(cur).ljust(maxWidth)]

How does it work? Well in the question statement, the sentence "Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line do not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right" was just a really long and awkward way to say *round robin*. The following line implements the round robin logic: 

    for i in range(maxWidth - num_of_letters):
                    cur[i%(len(cur)-1 or 1)] += ' '

What does this line do? Once you determine that there are only k words that can fit on a given line, you know what the total length of those words is num_of_letters. Then the rest are spaces, and there are (maxWidth - num_of_letters) of spaces. The "or 1" part is for dealing with the edge case len(cur) == 1.

###### Note: I found that this problem & solution is directly being used in the "Elements of Programming Interviews in Python" book. Cool I guess, but the book should include an acknowledgement or link to this source.
--------------------------------------------

The following is my older solution for reference, longer and less clear. The idea is the same, but I did not figure out the nice way to distribute the space at the time.

    def fullJustify(self, words, maxWidth):
        res, cur, num_of_letters = [], [], 0
        for w in words:
            if num_of_letters + len(w) + len(cur) > maxWidth:
                if len(cur) == 1:
                    res.append( cur[0] + ' '*(maxWidth - num_of_letters) )
                else:
                    num_spaces = maxWidth - num_of_letters
                    space_between_words, num_extra_spaces = divmod( num_spaces, len(cur)-1)
                    for i in range(num_extra_spaces):
                        cur[i] += ' '
                    res.append( (' '*space_between_words).join(cur) )
                cur, num_of_letters = [], 0
            cur += [w]
            num_of_letters += len(w)
        res.append( ' '.join(cur) + ' '*(maxWidth - num_of_letters - len(cur) + 1) )
        return res
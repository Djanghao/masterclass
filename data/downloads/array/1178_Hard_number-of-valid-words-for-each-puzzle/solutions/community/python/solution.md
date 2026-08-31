# [Python] Bit manipulation detailed explanation

**Author:** dpgil
**Votes:** 136
**Link:** [https://leetcode.com/problems/number-of-valid-words-for-each-puzzle/solutions/372145/](https://leetcode.com/problems/number-of-valid-words-for-each-puzzle/solutions/372145/)

---

The idea behind this puzzle is to generate a set of the characters in every word, and for every puzzle, count how many words' sets are strict subsets of the puzzle's set.

To do so, we have to generate a way to represent the unique set of a given word. One way to do so is to create a bit mask, where the i-th bit being 1 means the i-th character in the alphabet is in the given word (implemented at [1]). For example, because the word 'apple' is composed of the characters a, e, l, p, it would  have a key as follows:
```
0 0 0 0 0 0 0 0 0 0 1 0 0 0 1 0 0 0 0 0 0 1 0 0 0 1
z y x w v u t s r q p o n m l k j i h g f e d c b a
```
The alphabet is to show the mapping between characters and their position in the bit mask. In this example, the words 'appppppple' and 'pale' would have the same bit mask.

Then in [2] we create a mapping from a bit mask to the count of words that generate that bit mask.

Next, for every puzzle, we need to see what words are composed of characters that only exist in puzzle. So if puzzle is 'abd', then 'ba' would count but 'bc' would not because 'c' is not in 'abd'. To do so, we want to generate every possible set of characters that is a strict subset of the characters in puzzle. In the previous example, this would be [a], [b], [d], [a,b], [a,d], [b,d], [a,b,d]. In bitwise terms, this means we need to generate every "submask", s, where the bits in s are also in puzzle's mask. For example, the puzzle 'abd' would have the bitmask 1011, and every submask would be 0000, 0001, 0010, 1000, 1001, 1010, 0011, 1011. We generate every submask by taking advantage of subtracting by 1, which in base 2 flips the lowest bit to 0, and flips all bits to the right of that to 1. By subtracting by 1 and bitwise and-ing with the original mask, we turn off every bit one-by-one. For puzzle with mask 1011, this would go as follows:
```
subMask = originalMask = 1011 // [d, b, a]
(subMask - 1) & originalMask = (1011 - 1) & 1011 = 1010 & 1011 = 1010 // [d, b]
(subMask - 1) & originalMask = (1010 - 1) & 1011 = 1001 & 1011 = 1001 // [d, a]
(subMask - 1) & originalMask = (1001 - 1) & 1011 = 1000 & 1011 = 1000 // [d]
(subMask - 1) & originalMask = (1000 - 1) & 1011 = 0111 & 1011 = 0011 // [b, a]
(subMask - 1) & originalMask = (0011 - 1) & 1011 = 0010 & 1011 = 0010 // [b]
(subMask - 1) & originalMask = (0010 - 1) & 1011 = 0001 & 1011 = 0001 // [a]
(subMask - 1) & originalMask = (0001 - 1) & 1011 = 0000 & 1011 = 0000 // []
```

We implement generating every submask in [3].

Finally, for every submask, we also have to ensure that the first letter in the puzzle is in the word. To accomplish this, if the puzzle's first letter is the i-th character in the alphabet, we check if the submask has its i-th bit flipped [4]. If it contains it, it's a valid word and we add the count of words corresponding to that bit mask to our total for this puzzle.

Once we've added the total number of words that correspond to every submask for a puzzle, we have the solution for that puzzle. We then repeat the task for every puzzle and we have the solution. The solution implemented in Python is as follows:

```
class Solution:
    # [1]
	# Generates a bit mask given a word, where the i-th bit being 1 mean
	# the word contains the i-th letter of the alphabet.
	# For example the word 'acf' -> 100101 because a, c, f are the 1st, 3rd,
	# and 6th letters of the alphabet, so those corresponding bits are 1.
    def getBitMask(self, word: str) -> int:
        mask = 0
        for c in word:
		    # Maps 'a' -> 0, 'b' -> 1, 'c' -> 2, ...
            i = ord(c) - ord('a')
			# Sets the i-th bit to 1.
            mask |= 1 << i
        return mask

    def findNumOfValidWords(self, words: List[str], puzzles: List[str]) -> List[int]:
	    # [2]
		# Maps the bit mask for every word to the count of words with that same bit mask.
		# For example 'abd' and 'baddd' would have the same mask because they are composed
		# of the same set of characters.
        letterFrequencies = {}
        for word in words:
            mask = self.getBitMask(word)
            letterFrequencies[mask] = letterFrequencies.get(mask, 0) + 1
        
        solution = [0] * len(puzzles)
        
        for i in range(len(puzzles)):
            puzzle = puzzles[i]
            mask = self.getBitMask(puzzle)
            subMask = mask
            total = 0
			
			# The index of the first bit in the puzzle. We need this to check if the
			# submasks we generate are of valid words.
            firstBitIndex = ord(puzzle[0]) - ord('a')

			# [3]
            # In this while loop we want to go through all possible "submasks" of the bit
			# mask for the current puzzle. If our puzzle bit mask is 1011, for example, we
			# would generate 1011, 1010, 1001, 1000, 0011, 0010, 0001, 0000
            while True:
				# [4]
			    # If this submask contains the first letter of the puzzle, it's a valid word. Here
				# we add to the number of words we've seen with this mask to our total.
                if subMask >> firstBitIndex & 1:
                    total += letterFrequencies.get(subMask, 0)
				# We've exhausted all possible submasks.
                if subMask == 0:
                    break
				# Get rid of the right-most bit, and restore any bits to the right of it that were
				# originally in the mask. If the original mask was '01011' current submask is '01000',
				# then submask - 1 = '00111' and (submask - 1) & mask = '00011'.
                subMask = (subMask - 1) & mask
            solution[i] = total
        
        return solution
```
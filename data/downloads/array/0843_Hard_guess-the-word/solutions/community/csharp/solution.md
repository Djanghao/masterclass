# C# solution without Randomization

**Author:** axelkossek
**Votes:** 1
**Link:** [https://leetcode.com/problems/guess-the-word/solutions/2915929/](https://leetcode.com/problems/guess-the-word/solutions/2915929/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
I need to minimize pool of data that I should choose from. Each iteration MUST get me closer to the solution. I will count ammount of retries on each run to verify how close I am. 

# Approach
<!-- Describe your approach to solving the problem. -->
Matching values tell me 3 things:
- if attempted guess word "matching" is > 0 then i should remove all words that do not have at least "matching" ammount of letters with my current word.
- if attempted guess word "matching" is 0 then this tells me I should remove all words that have matching letters with attempted guess word
- lastly I should choose one of words that are at most "matching" with my attempted guess word because if "matching" is better then I have letters that should not be in secret (secret has "matching" ammount of letters with attempted guess word)

It will not work with stupid test cases like:

"aaaaaa"
"bbbbbb"
"cccccc"
...

because this would require at least 26 retries, choosing at random would create possibility to find match but random and hoping for best is not "the way".


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
26 attempts (scenario above is worst case scenario) * 3 loops with entire word array on each iteration (removing only attempted guess word itself).
$$O(n * a * l)$$
Where $$n$$ is ammount of words in word list, $$a$$ is ammount of retries of guess word, and $$l$$ is length of words.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
HashSet with words.
$$O(n)$$

# Code
```
/**
 * // This is the Master's API interface.
 * // You should not implement it, or speculate about its implementation
 * class Master {
 *     public int Guess(string word);
 * }
 */
class Solution {
    const int wordsLength = 6;

    public int MatchingLetters(string one, string two)
    {
        int counter = 0;
        for (int i = 0; i < wordsLength; i++)
        {
            if (one[i] == two[i])
                counter++;
        }
        return counter;
    }

    public void FindSecretWord(string[] words, Master master) {
        var wordsSet = words.ToHashSet();
        string guessWord = words[0];

        int attemptCounter = 0;
        while (true)
        {
            attemptCounter++;
            int matching = master.guess(guessWord);
            if (matching == 6)
            {
                Console.WriteLine($"Done in {attemptCounter} tries.");
                break;
            }
            
            // Remove less matching values
            if (matching != 0)
            {
                foreach (var word in wordsSet)
                {
                    if (MatchingLetters(guessWord, word) < matching)
                        wordsSet.Remove(word);
                }
            }
            else // if no matching characters remove all words that have same
            {
                foreach (var word in wordsSet)
                {
                    for (int i = 0; i < wordsLength; i++)
                    {
                        if (word[i] == guessWord[i])
                        {
                            wordsSet.Remove(word);
                            break;
                        }
                    }
                }
            }
            wordsSet.Remove(guessWord);

            // choose next guess word that has no more than matching
            string nextGuessWord = "";
            foreach (var word in wordsSet)
            {
                if (MatchingLetters(guessWord, word) == matching)
                {
                    nextGuessWord = word;
                }
            }

            guessWord = nextGuessWord;
        }
    }
}
```
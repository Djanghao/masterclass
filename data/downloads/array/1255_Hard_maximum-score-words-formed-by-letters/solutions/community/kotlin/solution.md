# 🔥 🔥 🔥 Fastest || Detailed Explanation || Easy to understand 🔥 🔥 🔥

**Author:** bhanu_bhakta
**Votes:** 40
**Link:** [https://leetcode.com/problems/maximum-score-words-formed-by-letters/solutions/5199351/](https://leetcode.com/problems/maximum-score-words-formed-by-letters/solutions/5199351/)

---

# Intuition
**Recursive Exploration:**
- The problem can be broken down into smaller subproblems where at each step, you decide whether to include a particular word in the current combination or not.

**Backtracking:**
- If including a word results in an invalid combination (i.e., not enough letters), backtrack and try the next word.

**Maximizing Score:**
- Keep track of the highest score obtained during the exploration.

# Approach

Initialization:

- Count each letter in letters

- Initialize totalScore to keep track of the maximum score found.

Define the Recursive Function:

- The function explore takes the current index, letter counts, and current score.
- Update totalScore with the current score if it's higher.
- If all words have been considered, return.

Check Each Word:

- For each word starting from the current index:
  - Make a copy of the current letter counts.
  - Check if the word can be formed with the available letters.
  - If it can be formed, update the letter counts and add the word's score to the current score.
  - Recursively call the explore function to continue exploring with the updated state.

Return the Maximum Score:

- After exploring all possibilities, return the totalScore.

# Complexity
- Time complexity:
**O(2 ^ N * N * L), where L is the average length of the word**

- Space complexity:
**O(N)**

# Explanation with Example

**Words:** ["dog", "cat", "dad", "good"]
**Letters:** ["a", "a", "c", "d", "d", "d", "g", "o", "o"]
**Score:** [1, 0, 9, 5, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

# Recursive Exploration

**Initialization:**

Count of letters: {'a': 2, 'c': 1, 'd': 3, 'g': 1, 'o': 2}
Total score initialized to 0

**Recursive Function explore:**

Start at index 0 with the initial letter counts and score 0.

```

                           (0, {}, 0)
                             |
   -----------------------------------------------------
  |         |         |         |                      |
(dog, (1, 1, 0), 11) (cat, (0, -1, 0), 11)  (dad, (2, 0, 10), 21)  (good, (0, 0, 0), 27)
```




For each word, we check if it can be formed with the available letters and recursively explore further.

Let's go through the tree:


# Step-by-Step Exploration

**Index 0 (Word: "dog"):**

"dog" can be formed using {'d': 1, 'o': 1, 'g': 1}.
Score: 5 + 0 + 3 = 8.
New state: {'a': 2, 'c': 1, 'd': 2, 'g': 0, 'o': 1} and score 8.

**Index 1 (Word: "cat"):**

"cat" cannot be formed (not enough 'c').
Skip and move to the next word.

**Index 2 (Word: "dad"):**

"dad" can be formed using {'d': 2, 'a': 1}.
Score: 5 + 1 + 5 = 11.
New state: {'a': 1, 'c': 1, 'd': 1, 'g': 1, 'o': 2} and score 11.

**Index 3 (Word: "good"):**

"good" can be formed using {'g': 1, 'o': 2, 'd': 1}.
Score: 3 + 0 + 0 + 3 = 6.
New state: {'a': 2, 'c': 1, 'd': 2, 'g': 0, 'o': 0} and score 6.

**Recursive Depth:**
From "dog":

"cat" cannot be formed.
"dad" and "good" can be formed, explore further with updated scores.

**From "dad":**

Remaining letters: {'a': 1, 'c': 1, 'd': 1, 'g': 1, 'o': 2}.
Explore "dog" (already used), "cat" (not enough 'c'), "good" (new score 21).

**From "good":**

Remaining letters: {'a': 2, 'c': 1, 'd': 2, 'g': 0, 'o': 0}.
Explore "dog" (already used), "cat" (not enough 'c'), "dad" (new score 27).


                Initial State: (index=0, score=0)
                            |
            -------------------------------------------------
            |         |         |          |              |
         dog       cat       dad         good           Skip
         8         -1        11          6
         |                    |            |
      dog+dad              dad+good       good+dog
       (21)                 (21)           (27)


**Explanation:**

- Skip Cat: Cannot form "cat" due to insufficient 'c'.
- Form "dog": Explore further with remaining letters.
- Form "dad": Explore with updated state.
- Form "good": Update the score and check other words.
- Max Score: Max of all possible paths is 27.
- This recursive tree exploration ensures all combinations are checked, and the highest score is found.

**Recursive Tree:**

# Code
```Python []
class Solution:
    def maxScoreWords(
        self, words: List[str], letters: List[str], score: List[int]
    ) -> int:
        lettersCounter = Counter(letters)
        totalScore = 0

        def explore(index, letterCounter, currScore):
            nonlocal totalScore

            totalScore = max(totalScore, currScore)
            if index == len(words):
                return

            for i in range(index, len(words)):
                tmpCounter = copy.deepcopy(letterCounter)
                word = words[i]
                wordScore = 0
                isValid = True

                for ch in word:
                    if ch in tmpCounter and tmpCounter[ch] > 0:
                        tmpCounter[ch] -= 1
                        wordScore += score[ord(ch) - ord("a")]
                    else:
                        isValid = False
                        break
                if isValid:
                    explore(i + 1, tmpCounter, currScore + wordScore)

        explore(0, lettersCounter, 0)
        return totalScore

```
```C++ []
class Solution {
public:
    int maxScoreWords(vector<string>& words, vector<char>& letters,
                      vector<int>& score) {
        unordered_map<char, int> lettersCounter;
        for (char letter : letters) {
            lettersCounter[letter]++;
        }

        int totalScore = 0;

        function<void(int, unordered_map<char, int>, int)> explore =
            [&](int index, unordered_map<char, int> letterCounter,
                int currScore) {
                totalScore = max(totalScore, currScore);
                if (index == words.size())
                    return;

                for (int i = index; i < words.size(); ++i) {
                    unordered_map<char, int> tmpCounter = letterCounter;
                    string word = words[i];
                    int wordScore = 0;
                    bool isValid = true;

                    for (char ch : word) {
                        if (tmpCounter[ch] > 0) {
                            tmpCounter[ch]--;
                            wordScore += score[ch - 'a'];
                        } else {
                            isValid = false;
                            break;
                        }
                    }

                    if (isValid) {
                        explore(i + 1, tmpCounter, currScore + wordScore);
                    }
                }
            };

        explore(0, lettersCounter, 0);
        return totalScore;
    }
};
```
```Java []
class Solution {
    public int maxScoreWords(String[] words, char[] letters, int[] score) {
        // Step 1: Count the available letters
        Map<Character, Integer> lettersCounter = new HashMap<>();
        for (char letter : letters) {
            lettersCounter.put(letter, lettersCounter.getOrDefault(letter, 0) + 1);
        }

        // Step 2: Initialize the totalScore
        int[] totalScore = new int[1];

        // Step 3: Define the recursive function to explore all combinations
        explore(words, lettersCounter, score, 0, 0, totalScore);

        // Step 4: Return the maximum score found
        return totalScore[0];
    }

    private void explore(String[] words, Map<Character, Integer> letterCounter, int[] score, int index, int currScore,
            int[] totalScore) {
        // Update the total score with the current score if it's higher
        totalScore[0] = Math.max(totalScore[0], currScore);

        // Base case: if all words have been considered, return
        if (index == words.length) {
            return;
        }

        // Step 3: Try each word starting from the current index
        for (int i = index; i < words.length; i++) {
            Map<Character, Integer> tmpCounter = new HashMap<>(letterCounter);
            String word = words[i];
            int wordScore = 0;
            boolean isValid = true;

            // Check if the word can be formed with the available letters
            for (char ch : word.toCharArray()) {
                if (tmpCounter.getOrDefault(ch, 0) > 0) {
                    tmpCounter.put(ch, tmpCounter.get(ch) - 1);
                    wordScore += score[ch - 'a'];
                } else {
                    isValid = false;
                    break;
                }
            }

            // If the word can be formed, explore further with the updated state
            if (isValid) {
                explore(words, tmpCounter, score, i + 1, currScore + wordScore, totalScore);
            }
        }
    }
}
```
```Go []
func maxScoreWords(words []string, letters []byte, score []int) int {
	// Step 1: Count the available letters
	lettersCounter := make(map[byte]int)
	for _, letter := range letters {
		lettersCounter[letter]++
	}

	// Step 2: Initialize the totalScore
	totalScore := 0

	// Step 3: Define the recursive function to explore all combinations
	var explore func(index int, letterCounter map[byte]int, currScore int)
	explore = func(index int, letterCounter map[byte]int, currScore int) {
		// Update the total score with the current score if it's higher
		if currScore > totalScore {
			totalScore = currScore
		}

		// Base case: if all words have been considered, return
		if index == len(words) {
			return
		}

		// Step 3: Try each word starting from the current index
		for i := index; i < len(words); i++ {
			tmpCounter := make(map[byte]int)
			for k, v := range letterCounter {
				tmpCounter[k] = v
			}
			word := words[i]
			wordScore := 0
			isValid := true

			// Check if the word can be formed with the available letters
			for j := 0; j < len(word); j++ {
				ch := word[j]
				if tmpCounter[ch] > 0 {
					tmpCounter[ch]--
					wordScore += score[ch-'a']
				} else {
					isValid = false
					break
				}
			}

			// If the word can be formed, explore further with the updated state
			if isValid {
				explore(i+1, tmpCounter, currScore+wordScore)
			}
		}
	}

	// Start the exploration from index 0 with the initial letter counts and score 0
	explore(0, lettersCounter, 0)

	// Step 4: Return the maximum score found
	return totalScore
}
```
```Kotlin []
class Solution {
    fun maxScoreWords(words: Array<String>, letters: CharArray, score: IntArray): Int {
         // Step 1: Count the available letters
        val lettersCounter = mutableMapOf<Char, Int>()
        for (letter in letters) {
            lettersCounter[letter] = lettersCounter.getOrDefault(letter, 0) + 1
        }

        // Step 2: Initialize the totalScore
        var totalScore = 0

        // Step 3: Define the recursive function to explore all combinations
        fun explore(index: Int, letterCounter: MutableMap<Char, Int>, currScore: Int) {
            // Update the total score with the current score if it's higher
            totalScore = maxOf(totalScore, currScore)

            // Base case: if all words have been considered, return
            if (index == words.size) return

            // Step 3: Try each word starting from the current index
            for (i in index until words.size) {
                val tmpCounter = letterCounter.toMutableMap()
                val word = words[i]
                var wordScore = 0
                var isValid = true

                // Check if the word can be formed with the available letters
                for (ch in word) {
                    if (tmpCounter.getOrDefault(ch, 0) > 0) {
                        tmpCounter[ch] = tmpCounter.getOrDefault(ch, 0) - 1
                        wordScore += score[ch - 'a']
                    } else {
                        isValid = false
                        break
                    }
                }

                // If the word can be formed, explore further with the updated state
                if (isValid) {
                    explore(i + 1, tmpCounter, currScore + wordScore)
                }
            }
        }

        // Start the exploration from index 0 with the initial letter counts and score 0
        explore(0, lettersCounter, 0)

        // Step 4: Return the maximum score found
        return totalScore
    }
}
```
```C []
int maxScoreWords(char** words, int wordsSize, char* letters, int lettersSize,
                  int* score, int scoreSize) {
    // Step 1: Count the available letters
    int lettersCounter[26] = {0};
    for (int i = 0; i < lettersSize; i++) {
        lettersCounter[letters[i] - 'a']++;
    }

    int totalScore = 0;

    // Step 3: Define the recursive function to explore all combinations
    void explore(int index, int* letterCounter, int currScore) {
        // Update the total score with the current score if it's higher
        if (currScore > totalScore) {
            totalScore = currScore;
        }

        // Base case: if all words have been considered, return
        if (index == wordsSize)
            return;

        // Step 3: Try each word starting from the current index
        for (int i = index; i < wordsSize; i++) {
            int tmpCounter[26];
            memcpy(tmpCounter, letterCounter, 26 * sizeof(int));
            char* word = words[i];
            int wordScore = 0;
            bool isValid = true;

            // Check if the word can be formed with the available letters
            for (int j = 0; word[j] != '\\0'; j++) {
                char ch = word[j];
                if (tmpCounter[ch - 'a'] > 0) {
                    tmpCounter[ch - 'a']--;
                    wordScore += score[ch - 'a'];
                } else {
                    isValid = false;
                    break;
                }
            }

            // If the word can be formed, explore further with the updated state
            if (isValid) {
                explore(i + 1, tmpCounter, currScore + wordScore);
            }
        }
    }

    // Start the exploration from index 0 with the initial letter counts and
    // score 0
    explore(0, lettersCounter, 0);

    // Step 4: Return the maximum score found
    return totalScore;
}
```

**Please Upvote**

![DALL\xB7E 2024-05-22 20.34.12 - A vibrant and colorful illustration of an upvote icon. The icon is a bold, upward-pointing arrow with a slight 3D effect, giving it a sense of depth. .webp](./images/0.webp)

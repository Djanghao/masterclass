# Java&JS&TS Solution (JW)

**Author:** specter01wj
**Votes:** 0
**Link:** [https://leetcode.com/problems/index-pairs-of-a-string/solutions/5572401/](https://leetcode.com/problems/index-pairs-of-a-string/solutions/5572401/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Java[]
public int[][] indexPairs(String text, String[] words) {
    List<int[]> result = new ArrayList<>();

    // Iterate through each position in the text
    for (int i = 0; i < text.length(); i++) {
        // Check each word in the words array
        for (String word : words) {
            if (text.startsWith(word, i)) {
                // If the word matches the substring starting from index i, add the pair
                result.add(new int[]{i, i + word.length() - 1});
            }
        }
    }

    // Convert list to array
    int[][] pairsArray = result.toArray(new int[result.size()][]);

    // Sort the result array
    Arrays.sort(pairsArray, (a, b) -> {
        if (a[0] == b[0]) {
            return Integer.compare(a[1], b[1]);
        } else {
            return Integer.compare(a[0], b[0]);
        }
    });

    return pairsArray;
}
```
```Javascript []
var indexPairs = function(text, words) {
    let result = [];

    // Iterate through each position in the text
    for (let i = 0; i < text.length; i++) {
        // Check each word in the words array
        for (let word of words) {
            if (text.startsWith(word, i)) {
                // If the word matches the substring starting from index i, add the pair
                result.push([i, i + word.length - 1]);
            }
        }
    }

    // Sort the result array
    result.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1];
        } else {
            return a[0] - b[0];
        }
    });

    return result;
};
```
```Typescript []
function indexPairs(text: string, words: string[]): number[][] {
    let result: number[][] = [];

    // Iterate through each position in the text
    for (let i = 0; i < text.length; i++) {
        // Check each word in the words array
        for (let word of words) {
            if (text.startsWith(word, i)) {
                // If the word matches the substring starting from index i, add the pair
                result.push([i, i + word.length - 1]);
            }
        }
    }

    // Sort the result array
    result.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1];
        } else {
            return a[0] - b[0];
        }
    });

    return result;
};
```
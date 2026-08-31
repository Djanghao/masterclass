# Java ✅|| Simple Solution 💯 || Runtime - 100% beats ✈️ || Memory - 99% beats ⭐️ || Fully Explained💯

**Author:** akobirswe
**Votes:** 4
**Link:** [https://leetcode.com/problems/keyboard-row/solutions/3871283/](https://leetcode.com/problems/keyboard-row/solutions/3871283/)

---

# Approach
To solve this problem, we need to check whether each word can be typed using letters from only one row of the American keyboard. We can achieve this by iterating through each word and checking if all its characters belong to the same row.

**Logic:**
1. Create three sets to store the characters of each row in the American keyboard: `firstRow`, `secondRow`, and `thirdRow`. Initialize them with the corresponding characters.
2. Initialize an empty list `res` to store the words that can be typed using only one row.
3. Loop through each word in the input array `words`.
4. For each word, convert it to lowercase (to handle both uppercase and lowercase characters).
5. Check if all characters of the word belong to the same row:
   - Create a boolean variable `canBeTyped` and set it to `true`.
   - For each character in the word, check if it belongs to the first row (`firstRow.indexOf(c) != -1`). If not, set `canBeTyped` to `false` and break the loop.
   - If `canBeTyped` is still `true` after checking all characters, it means the word can be typed using the first row. Add the word to the `res` list and continue to the next word.
   - Repeat the above steps for the second and third rows, adding the word to the `res` list if it can be typed using any of these rows.
6. Convert the `res` list to the final result array `ans`.
7. Return the `ans` array containing words that can be typed using only one row.

**Step-by-Step Example:**
Let's take an example to understand the approach better:
Input: words = ["Hello", "Alaska", "Dad", "Peace"]

1. Initialize three sets: `firstRow = {"q", "w", "e", "r", "t", "y", "u", "i", "o", "p"}`, `secondRow = {"a", "s", "d", "f", "g", "h", "j", "k", "l"}`, `thirdRow = {"z", "x", "c", "v", "b", "n", "m"}`.
2. Initialize an empty list `res`.
3. For the first word "Hello":
   - Convert it to lowercase: "hello".
   - Check each character: 'h', 'e', 'l', 'l', 'o'.
   - All characters are in the second row (`secondRow.indexOf('h') != -1` is true), so `canBeTyped = true`.
   - Add "Hello" to `res` and continue to the next word.
4. For the second word "Alaska":
   - Convert it to lowercase: "alaska".
   - Check each character: 'a', 'l', 'a', 's', 'k', 'a'.
   - First character 'a' is in the second row, but the second character 'l' is in the third row, so `canBeTyped = false`.
   - Move to the next row: check if all characters belong to the third row.
   - All characters are in the third row (`thirdRow.indexOf('a') != -1`, `thirdRow.indexOf('l') != -1`, etc.), so `canBeTyped = true`.
   - Add "Alaska" to `res` and continue to the next word.
5. For the third word "Dad":
   - Convert it to lowercase: "dad".
   - Check each character: 'd', 'a', 'd'.
   - All characters are in the second row, so `canBeTyped = true`.
   - Add "Dad" to `res` and continue to the next word.
6. For the fourth word "Peace":
   - Convert it to lowercase: "peace".
   - Check each character: 'p', 'e', 'a', 'c', 'e'.
   - First character 'p' is in the first row, but the second character 'e' is in the second row, so `canBeTyped = false`.
   - Move to the next row: check if all characters belong to the second row.
   - All characters are in the second row (`secondRow.indexOf('p') != -1`, `secondRow.indexOf('e') != -1`, etc.), so `canBeTyped = true`.
   - Add "Peace" to `res` and continue to the next word.

7. Convert the `res` list to the final result array `ans`: `ans = ["Alaska", "Dad"]`.
8. Return the `ans` array as the final output.

# Complexity    
- Time complexity: $$O(n * m)$$

- Space complexity: $$O(n)$$

# Code
```
class Solution {
    public String[] findWords(String[] words) {
        List<String> res = new ArrayList<>();
        String firstRow = "qwertyuiop";
        String secondRow = "asdfghjkl";
        String thirdRow = "zxcvbnm";

        loop:
        for(String word : words) {
            char[] chars = word.toLowerCase().toCharArray();

            boolean canBeTyped = true;
            for(char c : chars) {
                int idx = firstRow.indexOf(c);
                if(idx == -1) {
                    canBeTyped = false;
                    break;
                }
            }
            if(canBeTyped) {
                res.add(word);
                continue loop;
            }

            canBeTyped = true;
            for(char c : chars) {
                int idx = secondRow.indexOf(c);
                if(idx == -1) {
                    canBeTyped = false;
                    break;
                }
            }
            if(canBeTyped) {
                res.add(word);
                continue loop;
            }

            canBeTyped = true;
            for(char c : chars) {
                int idx = thirdRow.indexOf(c);
                if(idx == -1) {
                    canBeTyped = false;
                    break;
                }
            }
            if(canBeTyped) {
                res.add(word);
                continue loop;
            }
        }
        
        String[] ans = new String[res.size()];
        int i = 0;
        for(String word : res) {
            ans[i++] = word;
        }

        return ans;
    }
}
```

***Optimized Version:***
```
class Solution {
    public String[] findWords(String[] words) {
        List<String> res = new ArrayList<>();

        loop:
        for (String word : words) {
            char[] chars = word.toLowerCase().toCharArray();
            if (canBeTypedUsingRow(chars, "qwertyuiop") || canBeTypedUsingRow(chars, "asdfghjkl") || canBeTypedUsingRow(chars, "zxcvbnm")) {
                res.add(word);
            }
        }

        String[] ans = new String[res.size()];
        int i = 0;
        for (String word : res) {
            ans[i++] = word;
        }

        return ans;
    }

    private boolean canBeTypedUsingRow(char[] chars, String row) {
        for (char c : chars) {
            if (row.indexOf(c) == -1) {
                return false;
            }
        }
        return true;
    }
}
```
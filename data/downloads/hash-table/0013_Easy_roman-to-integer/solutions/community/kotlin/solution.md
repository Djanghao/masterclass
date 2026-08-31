# 0ms • 1LINER • 100% • Fastest Solution Explained • O(n) Time Complexity • O(n) Space Complexity

**Author:** darian-catalin-cucer
**Votes:** 62
**Link:** [https://leetcode.com/problems/roman-to-integer/solutions/2057336/](https://leetcode.com/problems/roman-to-integer/solutions/2057336/)

---

# 0ms \u2022 Beats 100% Time Complexity \u2022 Beats 100% Space Complexity

### Kotlin
```
class Solution {
    fun romanToInt(s: String): Int {
        // 1. Create a Map for Roman Numeral Values
        val translations = mapOf(
            "I" to 1,
            "V" to 5,
            "X" to 10,
            "L" to 50,
            "C" to 100,
            "D" to 500,
            "M" to 1000
        )

        // 2. Preprocess the Input String (Subtractive Notation Handling)
        var modifiedString = s 
            .replace("IV", "IIII")
            .replace("IX", "VIIII")
            .replace("XL", "XXXX")
            .replace("XC", "LXXXX")
            .replace("CD", "CCCC")
            .replace("CM", "DCCCC")

        // 3. Initialize the Result Variable
        var number = 0

        // 4. Iterate Through the String and Sum Values
        for (char in modifiedString) {
            number += translations.getValue(char.toString()) // Get value from map and add to total
        }

        // 5. Return the Final Result
        return number
    }
}
```

### Java
```
class Solution {
    public int romanToInt(String s) {
        // 1. Create a Map for Roman Numeral Values
        Map<String, Integer> translations = new HashMap<>();
        translations.put("I", 1);
        translations.put("V", 5);
        translations.put("X", 10);
        translations.put("L", 50);
        translations.put("C", 100);
        translations.put("D", 500);
        translations.put("M", 1000);

        // 2. Preprocess the Input String (Subtractive Notation Handling)
        s = s.replace("IV", "IIII").replace("IX", "VIIII");
        s = s.replace("XL", "XXXX").replace("XC", "LXXXX");
        s = s.replace("CD", "CCCC").replace("CM", "DCCCC");

        // 3. Initialize the Result Variable
        int number = 0;

        // 4. Iterate Through the String and Sum Values
        for (int i = 0; i < s.length(); i++) {
            String currentSymbol = String.valueOf(s.charAt(i));  
            number += translations.get(currentSymbol); 
        }

        // 5. Return the Final Result
        return number;
    }
}
```

### Python / Python3
```
class Solution:
    def romanToInt(self, s: str) -> int:
        # 1. Create a Dictionary for Roman Numeral Values
        # This dictionary maps each Roman numeral symbol to its corresponding integer value.
        translations = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000
        }

        # 2. Preprocess the Input String (Subtractive Notation Handling)
        # Replace the special cases of subtractive notation ("IV", "IX", "XL", etc.) 
        # with their equivalent additive forms to simplify the conversion later.
        s = s.replace("IV", "IIII").replace("IX", "VIIII")
        s = s.replace("XL", "XXXX").replace("XC", "LXXXX")
        s = s.replace("CD", "CCCC").replace("CM", "DCCCC")

        # 3. Initialize the Result Variable
        # Start with a total of zero, which will be accumulated as we process the numerals.
        number = 0

        # 4. Iterate Through the String and Sum Values
        # Loop over each character (Roman numeral) in the preprocessed string.
        for char in s:
            # Look up the integer value of the current character in the 'translations' dictionary.
            # Add this value to the 'number' variable to build the total.
            number += translations[char]

        # 5. Return the Final Result
        # After processing all characters, return the accumulated integer value.
        return number
```
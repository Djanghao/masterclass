# 100% Optimized Space and Time Complexity in 12 programming languages

**Author:** d_sushkov
**Votes:** 0
**Link:** [https://leetcode.com/problems/better-compression-of-string/solutions/5228504/](https://leetcode.com/problems/better-compression-of-string/solutions/5228504/)

---

# Intuition
The goal of this problem is to optimize the compression of a string that is already in a compressed format. Each character in the input string is followed by its frequency, e.g., "a3b1a1c2" represents "aaabacc". The challenge is to further compress this string such that each character appears only once with its total frequency, and the characters are in alphabetical order.

The key insight is to use an array to store the frequencies of each character instead of a more complex data structure like a map or dictionary. This allows us to achieve O(n) time complexity and O(1) space complexity relative to the number of unique characters.
# Approach
- Initialize an Array for Frequencies:
Use an array of size 26 to store the frequency of each character ('a' to 'z').
- Parse the Compressed String:
Iterate through the input string and for each character, extract the frequency.
Convert the extracted frequency from string to integer and add it to the respective position in the frequency array.
- Construct the Resulting String:
Iterate over the frequency array, and for each non-zero frequency, append the character and its frequency to the result string.

This approach ensures that we process the string in a single pass and maintain an array of fixed size, resulting in optimal time and space complexity.
# Complexity
- Time Complexity: O(n), where n is the length of the input string. We iterate through the string once to calculate frequencies and once more to construct the result.

- Space Complexity: O(1), relative to the number of unique characters (26 lowercase English letters). The frequency array has a fixed size of 26, which is constant space.
# Code
**C++:**
```
public:
    string betterCompression(string compressed) {
        std::vector<int> frequency(26, 0);
        int length = compressed.length();
        int i = 0;

        while (i < length) {
            char character = compressed[i++];
            int start = i;

            while (i < length && isdigit(compressed[i])) {
                i++;
            }

            int frequencyValue = std::stoi(compressed.substr(start, i - start));
            frequency[character - 'a'] += frequencyValue;
        }

        std::string result;
        for (int j = 0; j < 26; j++) {
            if (frequency[j] > 0) {
                result += (char) ('a' + j) + std::to_string(frequency[j]);
            }
        }

        return result;
    }
};
```
**Java:**
```
    public String betterCompression(String compressed) {
        // Array to store frequencies for each character
        int[] frequency = new int[26];
        
        int length = compressed.length();
        int i = 0;
        
        // Iterate through the compressed string
        while (i < length) {
            char character = compressed.charAt(i++);
            int start = i;
            
            // Read the frequency number
            while (i < length && Character.isDigit(compressed.charAt(i))) {
                i++;
            }
            
            int frequencyValue = Integer.parseInt(compressed.substring(start, i));
            frequency[character - 'a'] += frequencyValue;
        }
        
        // Construct the resulting string
        StringBuilder result = new StringBuilder();
        for (int j = 0; j < 26; j++) {
            if (frequency[j] > 0) {
                result.append((char) ('a' + j)).append(frequency[j]);
            }
        }
        
        return result.toString();
    }
}
```
**Python / Python3**
```
    def betterCompression(self, compressed: str) -> str:        
        frequency = [0] * 26
        i = 0
        length = len(compressed)

        while i < length:
            character = compressed[i]
            i += 1
            start = i

            while i < length and compressed[i].isdigit():
                i += 1

            frequencyValue = int(compressed[start:i])
            frequency[ord(character) - ord('a')] += frequencyValue

        result = []
        for j in range(26):
            if frequency[j] > 0:
                result.append(chr(j + ord('a')) + str(frequency[j]))

        return ''.join(result)
```
**C#**
```
    public string BetterCompression(string compressed) {
        int[] frequency = new int[26];
        int length = compressed.Length;
        int i = 0;

        while (i < length) {
            char character = compressed[i++];
            int start = i;

            while (i < length && char.IsDigit(compressed[i])) {
                i++;
            }

            int frequencyValue = int.Parse(compressed.Substring(start, i - start));
            frequency[character - 'a'] += frequencyValue;
        }

        StringBuilder result = new StringBuilder();
        for (int j = 0; j < 26; j++) {
            if (frequency[j] > 0) {
                result.Append((char)('a' + j)).Append(frequency[j]);
            }
        }

        return result.ToString();
    }
}
```
**JavaScript**
```
var betterCompression = function(compressed) {
    const frequency = new Array(26).fill(0);
    const length = compressed.length;
    let i = 0;

    while (i < length) {
        const character = compressed[i++];
        const start = i;

        while (i < length && /\\d/.test(compressed[i])) {
            i++;
        }

        const frequencyValue = parseInt(compressed.slice(start, i), 10);
        frequency[character.charCodeAt(0) - 'a'.charCodeAt(0)] += frequencyValue;
    }

    let result = '';
    for (let j = 0; j < 26; j++) {
        if (frequency[j] > 0) {
            result += String.fromCharCode('a'.charCodeAt(0) + j) + frequency[j];
        }
    }

    return result;
};
```
**TypeScript**
```
function betterCompression(compressed: string): string {
    const frequency = new Array(26).fill(0);
    const length = compressed.length;
    let i = 0;

    while (i < length) {
        const character = compressed[i++];
        const start = i;

        while (i < length && /\\d/.test(compressed[i])) {
            i++;
        }

        const frequencyValue = parseInt(compressed.slice(start, i), 10);
        frequency[character.charCodeAt(0) - 'a'.charCodeAt(0)] += frequencyValue;
    }

    let result = '';
    for (let j = 0; j < 26; j++) {
        if (frequency[j] > 0) {
            result += String.fromCharCode('a'.charCodeAt(0) + j) + frequency[j];
        }
    }

    return result;
};
```
**PHP**
```
    function betterCompression($compressed) {
        $frequency = array_fill(0, 26, 0);
        $length = strlen($compressed);
        $i = 0;

        while ($i < $length) {
            $character = $compressed[$i++];
            $start = $i;

            while ($i < $length && is_numeric($compressed[$i])) {
                $i++;
            }

            $frequencyValue = (int)substr($compressed, $start, $i - $start);
            $frequency[ord($character) - ord('a')] += $frequencyValue;
        }

        $result = '';
        for ($j = 0; $j < 26; $j++) {
            if ($frequency[$j] > 0) {
                $result .= chr($j + ord('a')) . $frequency[$j];
            }
        }

        return $result;
    }
}
```
**Swift**
```
    func betterCompression(_ compressed: String) -> String {
        var frequency = [Int](repeating: 0, count: 26)
        let length = compressed.count
        var i = compressed.startIndex

        while i < compressed.endIndex {
            let character = compressed[i]
            i = compressed.index(after: i)
            var start = i

            while i < compressed.endIndex && compressed[i].isNumber {
                i = compressed.index(after: i)
            }

            let frequencyValue = Int(compressed[start..<i])!
            frequency[Int(character.asciiValue! - Character("a").asciiValue!)] += frequencyValue
        }

        var result = ""
        for j in 0..<26 {
            if frequency[j] > 0 {
                result.append(Character(UnicodeScalar(j + Int(Character("a").asciiValue!))!))
                result.append(String(frequency[j]))
            }
        }

        return result
    }
}
```
**Kotlin**
```
    fun betterCompression(compressed: String): String {
        val frequency = IntArray(26)
        val length = compressed.length
        var i = 0

        while (i < length) {
            val character = compressed[i++]
            val start = i

            while (i < length && compressed[i].isDigit()) {
                i++
            }

            val frequencyValue = compressed.substring(start, i).toInt()
            frequency[character - 'a'] += frequencyValue
        }

        val result = StringBuilder()
        for (j in 0..25) {
            if (frequency[j] > 0) {
                result.append(('a' + j)).append(frequency[j])
            }
        }

        return result.toString()
    }
}
```
**Go**
```
func betterCompression(compressed string) string {
    frequency := make([]int, 26)
    length := len(compressed)
    i := 0

    for i < length {
        character := compressed[i]
        i++
        start := i

        for i < length && compressed[i] >= '0' && compressed[i] <= '9' {
            i++
        }

        frequencyValue, _ := strconv.Atoi(compressed[start:i])
        frequency[character-'a'] += frequencyValue
    }

    var result strings.Builder
    for j := 0; j < 26; j++ {
        if frequency[j] > 0 {
            result.WriteByte(byte('a' + j))
            result.WriteString(strconv.Itoa(frequency[j]))
        }
    }

    return result.String()
}
```
**Dart**
```
  String betterCompression(String compressed) {
    List<int> frequency = List.filled(26, 0);
    int length = compressed.length;
    int i = 0;

    while (i < length) {
      String character = compressed[i++];
      int start = i;

      while (i < length && compressed[i].contains(RegExp(r'\\d'))) {
        i++;
      }

      int frequencyValue = int.parse(compressed.substring(start, i));
      frequency[character.codeUnitAt(0) - 'a'.codeUnitAt(0)] += frequencyValue;
    }

    StringBuffer result = StringBuffer();
    for (int j = 0; j < 26; j++) {
      if (frequency[j] > 0) {
        result.write(String.fromCharCode('a'.codeUnitAt(0) + j));
        result.write(frequency[j]);
      }
    }

    return result.toString();
  }
}
```
**Scala**
```
    def betterCompression(compressed: String): String = {
      val frequency = Array.fill(26)(0)
      val length = compressed.length
      var i = 0

      while (i < length) {
        val character = compressed(i)
        i += 1
        val start = i

        while (i < length && compressed(i).isDigit) {
          i += 1
        }

        val frequencyValue = compressed.substring(start, i).toInt
        frequency(character - 'a') += frequencyValue
      }

      val result = new StringBuilder
      for (j <- 0 until 26) {
        if (frequency(j) > 0) {
          result.append((j + 'a').toChar).append(frequency(j))
        }
      }

      result.toString
   }
}
```
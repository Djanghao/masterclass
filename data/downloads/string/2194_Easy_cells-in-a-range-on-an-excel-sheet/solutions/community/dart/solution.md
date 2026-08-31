# Beats 100.00%

**Author:** mohamedmostafaBig
**Votes:** 0
**Link:** [https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/solutions/6052525/](https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/solutions/6052525/)

---

---

# Intuition
The problem requires generating a list of spreadsheet-style cell references given a range, formatted as "start:end" (e.g., "A1:C3"). The first idea is to iterate through the range of rows (letters) and columns (numbers) to generate all valid cell references.

The key is to:
1. Identify the starting and ending letters (rows) and numbers (columns).
2. Use nested loops to generate the cells.

# Approach
1. **Split the Input**: Split the input string at the colon (`:`) to separate the starting and ending cells.
2. **Determine Ranges**:
   - Extract the row (letter) and column (number) for both the start and end points.
   - Use the indices of the letters in a predefined list of alphabetic characters to determine the range of rows.
   - Parse the numeric parts to find the column range.
3. **Generate Cells**:
   - Loop through each letter in the row range.
   - For each row, loop through each number in the column range.
   - Concatenate the row letter and column number to form a cell reference and add it to the result list.
4. **Return the Result**: Return the list of generated cell references.

# Complexity
- **Time Complexity**: 
  - The complexity depends on the number of rows and columns in the range.
  - Assuming \\( r \\) is the number of rows (letters) and \\( c \\) is the number of columns (numbers):
    - $$O(r \\cdot c)$$ for generating the cells.
  - The lookup for letter indices is \\( O(1) \\) since it's a fixed-size array.
- **Space Complexity**:
  - The space used is proportional to the number of cells generated:
    - $$O(r \\cdot c)$$.

# Code
```dart
class Solution {
  // Alphabetic characters list for easy lookup of letter ranges.
  final List<String> alphabetList = const [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
    'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
    'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];

  // Generates cell ranges based on the input range string.
  List<String> generateCellsInRange(String range) {
    final List<String> cells = [];
    final splitRange = range.split(":");
    int maxRowIndex = 0;
    int maxColNumber = 0;
    final startRowIndex = alphabetList.indexOf(splitRange.first[0]);
    final int startColNumber = int.parse(splitRange.first[1]);

    for (final cell in splitRange) {
      final cellParts = cell.split('');
      final int colNumber = int.parse(cellParts[1]);
      final int rowIndex = alphabetList.indexOf(cellParts.first);
      if (rowIndex > maxRowIndex) maxRowIndex = rowIndex;
      if (colNumber > maxColNumber) maxColNumber = colNumber;
    }

    final rowsInRange = alphabetList.sublist(startRowIndex, maxRowIndex + 1);
    for (final row in rowsInRange) {
      for (int col = startColNumber; col <= maxColNumber; col++) {
        cells.add("$row$col");
      }
    }

    return cells;
  }
}

```

# Example
### Input:
```dart
Solution solution = Solution();
print(solution.cellsInRange("A1:C3"));
```

### Output:
```dart
["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"]
```

### Explanation:
- The range is from row "A" to "C" and column 1 to 3.
- All combinations of rows and columns are generated.

---
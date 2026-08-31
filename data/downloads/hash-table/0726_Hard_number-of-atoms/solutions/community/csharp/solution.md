# C# Solution for Number of Atoms Problem

**Author:** Aman_Raj_Sinha
**Votes:** 4
**Link:** [https://leetcode.com/problems/number-of-atoms/solutions/5474449/](https://leetcode.com/problems/number-of-atoms/solutions/5474449/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The goal is to parse a chemical formula string, count the occurrences of each atom, and return the counts in a specific sorted format. The formula can include nested parentheses, which introduce multiplicative factors for the atoms inside them. Handling these nested structures correctly is the main challenge.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Use a Stack for Nested Parentheses:
	\u2022	Use a stack to manage the nested structure of the formula. When encountering an opening parenthesis (, push the current count map onto the stack and start a new map. When encountering a closing parenthesis ), pop the map from the stack, multiply its counts by the following multiplicity, and merge it back into the current map.
2.	Parse Elements and Counts:
	\u2022	Traverse the string to parse elements, which start with an uppercase letter and may be followed by lowercase letters.
	\u2022	Parse the count of the element, which follows the element and may be a multi-digit number. If no count is specified, it defaults to 1.
3.	Merge Counts:
	\u2022	When merging counts from nested maps, ensure that the counts are correctly multiplied by the specified multiplicity before adding them to the current map.
4.	Sort and Format the Result:
	\u2022	Use a SortedDictionary to automatically sort the elements by their names.
	\u2022	Construct the result string based on the sorted elements and their counts.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
\u2022	Parsing the String: Each character in the formula is processed at most once, resulting in O(n) time complexity, where n is the length of the formula.
\u2022	Merging Maps: In the worst case, each element within nested parentheses needs to be processed. The merging process is efficient due to the use of a stack, so the overall complexity remains linear relative to the number of characters.
\u2022	Sorting the Elements: Sorting the elements using a SortedDictionary takes O(m log m) time, where m is the number of unique elements.

Thus, the overall time complexity is O(n + m log m).

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
\u2022	Stack: The stack depth corresponds to the maximum nesting level of parentheses, which can be up to O(n) in the worst case.
\u2022	Maps: We maintain maps for counting elements, and the space required for the maps is proportional to the number of unique elements, O(m).
\u2022	SortedDictionary: The space for the SortedDictionary is also O(m) due to storing unique elements and their counts.

Thus, the overall space complexity is O(n + m).

# Code
```
public class Solution {
    public string CountOfAtoms(string formula) {
        int n = formula.Length;
        Stack<Dictionary<string, int>> stack = new Stack<Dictionary<string, int>>();
        Dictionary<string, int> map = new Dictionary<string, int>();
        int i = 0;
        
        while (i < n) {
            char ch = formula[i];
            
            if (ch == '(') {
                // Push current map to stack and start a new map
                stack.Push(map);
                map = new Dictionary<string, int>();
                i++;
            } else if (ch == ')') {
                // Pop map from stack and merge with current map
                i++;
                int start = i;
                int multiplicity = 1;
                if (i < n && Char.IsDigit(formula[i])) {
                    while (i < n && Char.IsDigit(formula[i])) i++;
                    multiplicity = int.Parse(formula.Substring(start, i - start));
                }
                
                if (stack.Count > 0) {
                    Dictionary<string, int> tempMap = map;
                    map = stack.Pop();
                    foreach (var key in tempMap.Keys) {
                        if (map.ContainsKey(key)) {
                            map[key] += tempMap[key] * multiplicity;
                        } else {
                            map[key] = tempMap[key] * multiplicity;
                        }
                    }
                }
            } else {
                int start = i;
                i++;
                while (i < n && Char.IsLower(formula[i])) i++;
                string element = formula.Substring(start, i - start);
                start = i;
                while (i < n && Char.IsDigit(formula[i])) i++;
                int count = start < i ? int.Parse(formula.Substring(start, i - start)) : 1;
                if (map.ContainsKey(element)) {
                    map[element] += count;
                } else {
                    map[element] = count;
                }
            }
        }
        
        // Sort the elements and build the final string
        SortedDictionary<string, int> sortedMap = new SortedDictionary<string, int>(map);
        StringBuilder result = new StringBuilder();
        foreach (var entry in sortedMap) {
            result.Append(entry.Key);
            if (entry.Value > 1) {
                result.Append(entry.Value);
            }
        }
        
        return result.ToString();
    }
}
```
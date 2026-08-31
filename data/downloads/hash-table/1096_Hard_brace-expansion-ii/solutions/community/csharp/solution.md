# 💥Memory beats 100.00%, Runtime beats 80.00% [EXPLAINED]

**Author:** r9n
**Votes:** 10
**Link:** [https://leetcode.com/problems/brace-expansion-ii/solutions/5796461/](https://leetcode.com/problems/brace-expansion-ii/solutions/5796461/)

---

# Intuition
I've noticed that we are given an expression with curly braces, commas, and letters, and my goal is to generate all the possible words formed by combining these parts. The challenge is to correctly handle unions (from commas) and concatenations (from adjacent sets or letters). I also need to process nested braces carefully, ensuring I don\u2019t miss any combinations.

# Approach
I use two stacks: one for sets of words and one for operators. As I process the expression, I handle opening {, commas for union, and closing } for concatenation. The result is merged, sorted, and returned.

# Complexity
- Time complexity:
O(n * m * log m), where n is the length of the expression, and m is the number of unique words.

- Space complexity:
O(n + m) for storing intermediate results and final words.

# Code
```csharp []
class Solution {
    public IList<string> BraceExpansionII(string expression) {
        Stack<HashSet<string>> stack = new Stack<HashSet<string>>();
        Stack<char> opStack = new Stack<char>();
        HashSet<string> currSet = new HashSet<string> { "" };

        for (int i = 0; i < expression.Length; i++) {
            char ch = expression[i];

            if (ch == '{') {
                stack.Push(currSet);
                opStack.Push(ch);
                currSet = new HashSet<string> { "" }; // Reset for the new block
            } else if (ch == '}') {
                HashSet<string> tempSet = currSet;
                while (opStack.Count > 0 && opStack.Peek() != '{') {
                    tempSet = Union(stack.Pop(), tempSet);
                    opStack.Pop();
                }
                opStack.Pop(); // Remove the '{'
                currSet = Concatenate(stack.Pop(), tempSet);
            } else if (ch == ',') {
                stack.Push(currSet);
                opStack.Push(ch);
                currSet = new HashSet<string> { "" }; // Reset for union operation
            } else {
                int j = i;
                while (j < expression.Length && Char.IsLetter(expression[j])) j++;
                string word = expression.Substring(i, j - i);
                currSet = Concatenate(currSet, new HashSet<string> { word });
                i = j - 1;
            }
        }

        while (opStack.Count > 0) {
            currSet = Union(stack.Pop(), currSet);
            opStack.Pop();
        }

        List<string> result = currSet.ToList();
        result.Sort();
        return result;
    }

    // Union combines two sets.
    private HashSet<string> Union(HashSet<string> set1, HashSet<string> set2) {
        set1.UnionWith(set2);
        return set1;
    }

    // Concatenate generates all possible combinations of strings from two sets.
    private HashSet<string> Concatenate(HashSet<string> set1, HashSet<string> set2) {
        HashSet<string> result = new HashSet<string>();
        foreach (string s1 in set1) {
            foreach (string s2 in set2) {
                result.Add(s1 + s2);
            }
        }
        return result;
    }
}

```
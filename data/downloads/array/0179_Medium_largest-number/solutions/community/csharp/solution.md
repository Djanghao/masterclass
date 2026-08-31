# C# Solution for Largest Number Problem

**Author:** Aman_Raj_Sinha
**Votes:** 7
**Link:** [https://leetcode.com/problems/largest-number/solutions/5802407/](https://leetcode.com/problems/largest-number/solutions/5802407/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
For the C# solution, we can approach the problem using a custom IComparer implementation rather than using a lambda expression in the sorting process. We will still rely on sorting, but this time, we will use a different approach to implement the comparison logic.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Convert Numbers to Strings:
	\u2022	Just like the Java solution, we need to convert the integers into strings to compare their concatenation results.
2.	Custom Comparer Using IComparer:
	\u2022	We will implement a custom comparer class using IComparer<string>. The comparer will compare two numbers based on the concatenation of the two strings in both possible orders (i.e., x + y vs y + x).
	\u2022	This comparison will help us determine the order in which to sort the numbers to form the largest possible number.
3.	Sort the Numbers:
	\u2022	After defining the custom comparer, we can use Array.Sort in C# to sort the string representations of the numbers.
4.	Edge Case Handling:
	\u2022	After sorting, if the first number is 0, the entire result should be "0" (e.g., if the input is [0, 0, 0]).
5.	Concatenate the Result:
	\u2022	Finally, concatenate all the sorted strings into a single string and return the result.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
1.	String Conversion:
	\u2022	Converting the integers to strings takes O(n), where n is the number of elements in the array.
2.	Sorting:
	\u2022	Sorting the array using the custom comparator takes O(n log n). Each comparison between two strings involves comparing two concatenated strings, which takes O(k), where k is the average length of the strings.
	\u2022	Therefore, the total time complexity for sorting is O(n log n . k), where k is the average length of the strings.
3.	Concatenation:
	\u2022	Building the result using StringBuilder takes O(n . k), where n is the number of elements and k is the average length of the strings.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
1.	String Conversion:
	\u2022	We use an array of strings to store the string representations of the integers, which requires O(n . k) space.
2.	Sorting:
	\u2022	The space complexity for sorting is O(n) because C#\u2019s Array.Sort is an in-place sort, though the custom comparison function requires constant additional space.
3.	StringBuilder:
	\u2022	The final concatenated result is stored in a StringBuilder, which also requires O(n . k) space.

Thus, the overall space complexity is O(n . k).

# Code
```csharp []
public class Solution {
    // Custom comparator class that implements IComparer<string>
    public class CustomComparer : IComparer<string> {
        public int Compare(string a, string b) {
            // Compare concatenated strings in both possible orders
            string order1 = a + b;
            string order2 = b + a;
            // Return a negative value if order2 should come before order1, for descending sort
            return order2.CompareTo(order1);
        }
    }
    public string LargestNumber(int[] nums) {
        // Convert all integers to strings
        string[] strNums = nums.Select(n => n.ToString()).ToArray();
        
        // Sort the string numbers using the custom comparator
        Array.Sort(strNums, new CustomComparer());
        
        // If the largest number is "0", return "0"
        if (strNums[0] == "0") {
            return "0";
        }

        // Use StringBuilder to efficiently concatenate the sorted numbers
        StringBuilder largestNumber = new StringBuilder();
        foreach (var num in strNums) {
            largestNumber.Append(num);
        }

        // Return the concatenated result as a string
        return largestNumber.ToString();
    }
}
```
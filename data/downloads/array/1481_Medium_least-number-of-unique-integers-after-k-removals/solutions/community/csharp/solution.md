# ✅ Efficient solution with great explanation | C++/Java/C#

**Author:** Muhammad-Diyor
**Votes:** 9
**Link:** [https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/solutions/4735697/](https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/solutions/4735697/)

---

# Intuition\r
So, we need to achieve minimum number of unique numbers and return the number of unique numbers in that case. It doesn't matter where we remove items.\r
\r
# Approach\r
- Initialize a Dictionary:\r
\r
    - Create a Dictionary<int, int> (or Map, or Set, based on what language you use) named dict to store the frequency of each unique integer in the array.\r
\r
- Count Frequencies:\r
    - Iterate through the array (arr) and count the frequency of each unique integer using the dict dictionary.\r
- Sort Dictionary by Frequency:\r
    - Sort the dictionary based on the values (frequencies) in ascending order.\r
- Decrement Frequencies:\r
    - Iterate through the sorted dictionary.\r
    - If k (remaining removals) is greater than the frequency of the current integer, remove the integer and update k.\r
    - If k is less than the frequency, decrement the frequency and set k to 0.\r
\r
- Well done, now return the count of remaining unique integers in the dictionary.\r
\r
#### "Talk is cheap. Show me the code." - Linus Torvalds\r
##### Let's start the coding part\r
\r
# Code\r
```C++ []\r
class Solution {\r
public:\r
    int findLeastNumOfUniqueInts(vector<int>& arr, int k) {\r
        std::unordered_map<int, int> dict;\r
\r
        for (int num : arr) {\r
            if (dict.count(num))\r
                dict[num]++;\r
            else\r
                dict[num] = 1;\r
        }\r
\r
        std::vector<std::pair<int, int>> sortedDict(dict.begin(), dict.end());\r
        std::sort(sortedDict.begin(), sortedDict.end(), [](auto& left, auto& right) {\r
            return left.second < right.second;\r
        });\r
\r
        for (auto& kvp : sortedDict) {\r
            if (k > 0) {\r
                if (k >= kvp.second) {\r
                    k -= kvp.second;\r
                    dict.erase(kvp.first);\r
                } else {\r
                    dict[kvp.first] -= k;\r
                    k = 0;\r
                }\r
            } else {\r
                break;\r
            }\r
        }\r
\r
        return dict.size();\r
    }\r
};\r
```\r
```Java []\r
class Solution {\r
    public int findLeastNumOfUniqueInts(int[] arr, int k) {\r
        Map<Integer, Integer> dict = new HashMap<>();\r
\r
        for (int num : arr) {\r
            dict.put(num, dict.getOrDefault(num, 0) + 1);\r
        }\r
\r
        List<Map.Entry<Integer, Integer>> sortedDict = new ArrayList<>(dict.entrySet());\r
        sortedDict.sort(Map.Entry.comparingByValue());\r
\r
        for (Map.Entry<Integer, Integer> entry : sortedDict) {\r
            int num = entry.getKey();\r
            int freq = entry.getValue();\r
\r
            if (k > 0) {\r
                if (k >= freq) {\r
                    k -= freq;\r
                    dict.remove(num);\r
                } else {\r
                    dict.put(num, freq - k);\r
                    k = 0;\r
                }\r
            } else {\r
                break;\r
            }\r
        }\r
\r
        return dict.size();\r
    }\r
}\r
```\r
```C# []\r
public class Solution {\r
    public int FindLeastNumOfUniqueInts(int[] arr, int k)\r
    {\r
        var dict = new Dictionary<int, int>();\r
\r
        for (var i = 0; i < arr.Length; i++)\r
        {\r
            if (dict.ContainsKey(arr[i]))\r
                dict[arr[i]]++;\r
            else\r
                dict.Add(arr[i], 1);\r
        }\r
\r
        var sortedDict = dict.OrderBy(pair => pair.Value).ToList();\r
\r
        foreach (var kvp in sortedDict)\r
        {\r
            if (k > 0)\r
            {\r
                if (k >= kvp.Value)\r
                {\r
                    k -= kvp.Value;\r
                    dict.Remove(kvp.Key);\r
                }\r
                else\r
                {\r
                    dict[kvp.Key] -= k;\r
                    k = 0;\r
                }\r
            }\r
            else\r
            {\r
                break;\r
            }\r
        }\r
\r
        return dict.Count;\r
    }\r
\r
}\r
```\r
\r
![image.png](./images/0.png)\r
\r
### Don't forget to give an upvote \uD83D\uDE42\r
### Happy coding \uD83E\uDD42\r

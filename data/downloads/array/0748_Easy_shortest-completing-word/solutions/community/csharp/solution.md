# C# 解決方案

**Author:** z087757775
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-completing-word/solutions/6039981/](https://leetcode.com/problems/shortest-completing-word/solutions/6039981/)

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
```csharp []
public class Solution {
    public string ShortestCompletingWord(string licensePlate, string[] words) {
            licensePlate = System.Text.RegularExpressions.Regex.Replace(licensePlate.Replace(" ", "").ToLower(), @"\\d", "");
            int minLength = int.MaxValue;
            string result = "";

            Dictionary<string, int> Din = new Dictionary<string, int>();

            foreach(char s in licensePlate)
            {
                string str = s.ToString();
                if(Din.ContainsKey(str))
                {
                    Din[str]++;
                }
                else
                {
                    Din[str] = 1;
                }
            }
          
            for(int i = 0; i < words.Length; i++)
            {
                string word = words[i].ToLower();
                Dictionary<string, int> DinWord = new Dictionary<string, int>();

                for (int k = 0; k < word.Length; k++)
                {
                    string str = word[k].ToString();
                    if (DinWord.ContainsKey(str))
                    {
                        DinWord[str]++;
                    }
                    else
                    {
                        DinWord[str] = 1;
                    }
                }

                int sumCount = 0;

                foreach(KeyValuePair<string, int> item in Din)
                {
                    if(DinWord.ContainsKey(item.Key) && DinWord[item.Key] >= item.Value)
                    {
                        sumCount++;
                    }
                }


                if (word.Length < minLength && sumCount == Din.Count)
                {
                    minLength = word.Length;
                    result = words[i];
                }

            }

            return result;
    }
}
```
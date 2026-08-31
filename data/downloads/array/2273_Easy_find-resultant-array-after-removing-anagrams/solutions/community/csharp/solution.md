# C# Solution | | Faster Than 100% 👌

**Author:** AsiaShalaldah
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/solutions/2530295/](https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/solutions/2530295/)

---

```
public class Solution {
    public IList<string> RemoveAnagrams(string[] words) {
            IList<string> list = new List<string>();
            Stack<string> stack = new Stack<string>();
            int n = words.Length;
            for (int i = 0; i < n; i++)
            {
                char[] str = words[i].ToCharArray();
                Array.Sort(str);
                if (stack.Count == 0)
                {
                    stack.Push(new string(str));
                    list.Add(words[i]);
                }
                else
                {
                    if(!stack.Peek().Equals(new string(str)))
                    {
                        list.Add(words[i]);
                        stack.Push(new string(str));
                    }
                }
            }
            return list;
    }
}
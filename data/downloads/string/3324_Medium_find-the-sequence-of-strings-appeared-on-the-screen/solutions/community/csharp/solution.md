# Easy solution

**Author:** vemohan15
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-sequence-of-strings-appeared-on-the-screen/solutions/5940688/](https://leetcode.com/problems/find-the-sequence-of-strings-appeared-on-the-screen/solutions/5940688/)

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
    public IList<string> StringSequence(string target) {
        string prev="";
        List<string> a=new List<string>();
        for(int i=0;i<target.Length;i++)
        {
            for(char j='a';j<=target[i];j++)
            {
                var item=prev+j.ToString();
                a.Add(item);
                if(j==target[i])
                {
                    prev+=j.ToString();
                }
                Console.WriteLine(item+"*"+prev+"*"+j+"*"+target[i]);
            }
        }
        return a;
    }
}
```
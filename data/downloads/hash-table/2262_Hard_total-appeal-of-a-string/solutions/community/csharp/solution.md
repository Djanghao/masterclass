# Beats 100% c# solution

**Author:** code-srg
**Votes:** 0
**Link:** [https://leetcode.com/problems/total-appeal-of-a-string/solutions/3548490/](https://leetcode.com/problems/total-appeal-of-a-string/solutions/3548490/)

---

# Intuition
First thought was to use two for loops, I solved it using same but then for larger inputs code was giving timeout issue. Then I found this solution in other solutions.

# Approach
<!-- Describe your approach to solving the problem. -->
26 alphabets array, calcaulate there appeal based on position

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public long AppealSum(string s) {
            List<int> list = Enumerable.Repeat(0, 26).ToList();
            long sum = 0;
            long res = 0;
            for(int i = 0; i < s.Length; ++i)
            {
                //Console.Write("i:"+i+" "+s[i]);
                //Console.Write("  Sum:" + sum);
                //Console.Write("  list[s[i] - 'a']:" + list[s[i] - 'a']);
                sum +=i+1-list[s[i] - 'a'];
                //Console.Write("  Sum:" + sum);
                list[s[i] - 'a'] = i + 1;
                //Console.Write("  list[s[i] - 'a']:" + list[s[i] - 'a']);
                //Console.Write("  res:" + res);
                res += sum;
                //Console.WriteLine("  res:" + res);


            }
            return res;
    }
}
```
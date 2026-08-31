# C# Solution

**Author:** Nishant0073
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-i/solutions/5865826/](https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-i/solutions/5865826/)

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
public class Solution
{
	public static List<char>  Vowels =  ['a','e','i','o','u'];
	public int CountOfSubstrings(string word, int k)
	{
		int ans = 0;
		for (int i = 0; i < word.Length; i++)
		{
			Dictionary<char, bool> dic = new Dictionary<char, bool>() { { 'a', false }, { 'e', false }, { 'i', false }, { 'o', false }, { 'u', false } };
			int constant = k;
			int flag = 0;
			for(int j=i;j<word.Length && (word.Length+k>=5+k);j++)
			{
				if(Vowels.Contains(word[j]) )
				{
					if( dic[word[j]]==false)
					{
						flag++;
						dic[word[j]] = true;
					}
				}
				else
				{
					constant--;
				}
				if(constant==0 && flag==5)
				{
					ans++;
				}
			}
		}
		return ans;
	}
}

```
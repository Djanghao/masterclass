# ✅Easy C# and Go Solution✅

**Author:** shukhratutaboev
**Votes:** 26
**Link:** [https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/solutions/3425049/](https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/solutions/3425049/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func kidsWithCandies(candies []int, extraCandies int) []bool {
	max := 0

	for i := 0; i < len(candies); i++ {
		if max < candies[i] {
			max = candies[i]
		}
	}

	result := make([]bool, len(candies))

	for i := 0; i < len(candies); i++ {
		if candies[i]+extraCandies >= max {
			result[i] = true
		}
	}

	return result
}
```
C#
```
public class Solution {
    public IList<bool> KidsWithCandies(int[] candies, int extraCandies)
    {
        int max = 0;

        for (int i = 0; i < candies.Length; i++)
        {
            if (max < candies[i])
            {
                max = candies[i];
            }
        }

        bool[] result = new bool[candies.Length];

        for (int i = 0; i < candies.Length; i++)
        {
            if (candies[i] + extraCandies >= max)
            {
                result[i] = true;
            }
        }

        return result.ToList();
    }
}
```
![a6c83c54-1d1a-4f26-8273-b687d119dd5b_1679889261.1494205.png](./images/0.png)
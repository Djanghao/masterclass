# Beats 100% of runtime and memory. New and better way to calculate xor sum. Only count number of 1st.

**Author:** nichin
**Votes:** 0
**Link:** [https://leetcode.com/problems/decode-xored-permutation/solutions/4303286/](https://leetcode.com/problems/decode-xored-permutation/solutions/4303286/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n/2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(log n to the base 2 + 1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution
{
  public int[] Decode(int[] encoded)
  {
    var nums = new List<int>();
    var power = new List<int>() { 1 }; // List to store power of 2.

    int n = encoded.Length;
    while (power[power.Count - 1] < n)
    {
      power.Add(power[power.Count - 1] * 2);
    }

    string xor = "";
    n = n + 2; // increment by two because there are n+1 permutation and number start with 0
    // Idea here is to calulate xor or all number if you count the 1's in unit place and % with 0. same this with tense place.
    for (int i = 1; i < power.Count; i++)
    {
      int temp = n;
      int tempSum = 0;

      tempSum += (temp / power[i]) * power[i - 1];
      var remainder = (temp % power[i]);
      if (remainder > power[i - 1])
      {
        tempSum += remainder % power[i - 1];
      }

      xor = tempSum % 2 + xor;
    }
    int xorSum = Convert.ToInt32(xor, 2);

    int firstDigit = xorSum;

    for (int i = 1; i < encoded.Length; i = i + 2)
    {
      firstDigit = firstDigit ^ encoded[i];
    }
    nums.Add(firstDigit);
    foreach (var item in encoded)
    {
      nums.Add(item ^ nums[nums.Count - 1]);
    }

    return nums.ToArray();
  }
}
```
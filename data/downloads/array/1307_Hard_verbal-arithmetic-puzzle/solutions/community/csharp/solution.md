# DFS Track Digit By Digit

**Author:** linda2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/verbal-arithmetic-puzzle/solutions/6024157/](https://leetcode.com/problems/verbal-arithmetic-puzzle/solutions/6024157/)

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
 private bool isValid = false;
private int maxWL = 0;
private void DFSCal(string[] words, string result, int[] chToNum, char[] numToCh, int wIdx = 0, int digitIdx = 0, int sum = 0)
{
	int resLen = result.Length;
	if (resLen == 1 + digitIdx && sum > 9) 
		return;

	if (wIdx >= words.Length)
	{
		int resId = resLen - 1 - digitIdx;
		if (digitIdx > maxWL && sum == 0)
			return;

		if (chToNum[result[0] - 'A'] == 0 && resLen > 1) 
			return;

		if (numToCh[sum % 10] != '.' && numToCh[sum % 10] != result[resId])
			return;

		if (chToNum[result[resId] - 'A'] != -1 && numToCh[sum % 10] == '.')
			return;

		if (resId == 0)
		{
			isValid = true;
			return;
		}
		if (chToNum[result[resId] - 'A'] == -1 && numToCh[sum % 10] == '.')
		{
			int temp = sum % 10;
			int cid = result[resId] - 'A';
			chToNum[cid] = temp;
			numToCh[temp] = result[resId];
			digitIdx++;
			wIdx = 0;
			sum /= 10;
			DFSCal(words, result, chToNum, numToCh, wIdx, digitIdx, sum);

			if (isValid) 
				return;

			chToNum[cid] = -1;
			numToCh[temp] = '.';
			return;
		}

		digitIdx++;
		wIdx = 0;
		sum /= 10;
	}
	if (result.Length - 1 - digitIdx < 0) 
		return;

	if (words[wIdx].Length - 1 - digitIdx < 0)
		DFSCal(words, result, chToNum, numToCh, wIdx + 1, digitIdx, sum);
	else if (chToNum[words[wIdx][words[wIdx].Length - 1 - digitIdx] - 'A'] != -1)
		DFSCal(words, result, chToNum, numToCh, wIdx + 1, digitIdx, sum + chToNum[words[wIdx][words[wIdx].Length - 1 - digitIdx] - 'A']);
	else
	{
		for (int choose = 0; choose <= 9; choose++)
		{
			if (words[wIdx].Length - 1 - digitIdx == 0 && words[wIdx].Length > 1 && choose == 0) 
				continue;

			if (choose == 0 && words[wIdx][words[wIdx].Length - 1 - digitIdx] == words[wIdx][0] && words[wIdx].Length > 1) 
				continue;

			if (numToCh[choose] != '.') continue;
			numToCh[choose] = words[wIdx][words[wIdx].Length - 1 - digitIdx];
			chToNum[words[wIdx][words[wIdx].Length - 1 - digitIdx] - 'A'] = choose;
			DFSCal(words, result, chToNum, numToCh, wIdx + 1, digitIdx, sum + choose);
			if (isValid)
				return;

			numToCh[choose] = '.';
			chToNum[words[wIdx][words[wIdx].Length - 1 - digitIdx] - 'A'] = -1;
		}
	}
}

    public bool IsSolvable(string[] words, string result) {
        int[] chToNum = Enumerable.Repeat(-1, 26).ToArray();
        char[] numToCh = Enumerable.Repeat('.', 10).ToArray();
        for (int i = 0; i < chToNum.Length; i++)
        {
            if (i < words.Length && words[i].Length > result.Length)
                return false;
            else if (i < words.Length)
                maxWL = Math.Max(maxWL, words[i].Length);
        }
        DFSCal(words, result, chToNum, numToCh);
        return isValid;
    }
}
```
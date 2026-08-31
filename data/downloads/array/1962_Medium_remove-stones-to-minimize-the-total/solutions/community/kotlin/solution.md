# [Java / Go / Kotlin] Beat 99~100%, straightforward solution by simply using array

**Author:** chen3210g
**Votes:** 2
**Link:** [https://leetcode.com/problems/remove-stones-to-minimize-the-total/solutions/2960671/](https://leetcode.com/problems/remove-stones-to-minimize-the-total/solutions/2960671/)

---

# Intuition\r
Since the constraint for `piles[i]` is between 1 and 10000. We can build an array with 10001 elements without burden. By labeling the index of this array as the `key` and each number within this array as the `value`, it can serve as a tree map, a more efficient one. Hence, we no longer need a heap to solve the problem in this case.\r
\r
# Approach\r
Here are only a few points that need to care about.\r
1. Build an array with 10001 elements.\r
2. Find the biggest number in the piles, this is the edge of your array.\r
3. Start from the biggest number, operating the array for k times.\r
4. Last, sum up the array.\r
# Complexity\r
- Time complexity: $$O(n)$$\r
\r
- Space complexity: $$O(n)$$\r
\r
# Java Code\r
```\r
class Solution {\r
    public int minStoneSum(int[] piles, int k) {\r
        int n = piles.length;\r
        int[] mapping = new int[10001];\r
        for (int i = 0; i < n; i++) {\r
            mapping[piles[i]]++;\r
        }\r
\r
        int currNum = 0;\r
        // find the edge of mapping\r
        for (int i = 10000; i > 0; i--) {\r
            if (mapping[i] != 0) {\r
                currNum = i;\r
                break;\r
            }\r
        }\r
\r
        for (int i = 0; i < k; i++) {\r
            while (mapping[currNum] == 0) {\r
                currNum--;\r
            }\r
            mapping[currNum]--;\r
            switch (currNum % 2) {\r
                case 0:\r
                    mapping[currNum / 2]++;\r
                    break;\r
                case 1:\r
                    mapping[currNum / 2 + 1]++;\r
                    break;\r
            }\r
        }\r
\r
        int ans = 0;\r
        for (int i = 0; i <= currNum; i++) {\r
            if (mapping[i] > 0) {\r
                ans += (i * mapping[i]);\r
            }\r
        }\r
\r
        return ans;\r
    }\r
}\r
```\r
\r
# Go code\r
```\r
func minStoneSum(piles []int, k int) int {\r
    var n int = len(piles)\r
	var mapping = make([]int, 10001)\r
\r
	for i := 0; i < n; i++ {\r
		mapping[piles[i]]++\r
	}\r
\r
	// Find the edge of mapping\r
	var currNum int = 0\r
	for i := 10000; i > 0; i-- {\r
		if mapping[i] > 0 {\r
			currNum = i\r
			break\r
		}\r
	}\r
\r
	// start operating for k times\r
	for i := 0; i < k; i++ {\r
		for mapping[currNum] == 0 {\r
			currNum--\r
		}\r
		mapping[currNum]--\r
		switch(currNum%2) {\r
		case 0:\r
			mapping[currNum/2]++\r
		case 1:\r
			mapping[currNum/2+1]++\r
		}\r
	}\r
\r
	// start summing up\r
	var ans int = 0\r
	for i := 0; i <= currNum; i++ {\r
		if mapping[i] > 0 {\r
			ans += i*mapping[i]\r
		}\r
	}\r
	\r
	return ans\r
}\r
```\r
\r
# Kotlin code\r
```\r
class Solution {\r
    fun minStoneSum(piles: IntArray, k: Int): Int {\r
        var n: Int = piles.size\r
        val mapping: IntArray = IntArray(10001){0}\r
        for(i in 0 until n) {\r
            mapping[piles[i]]++\r
        }\r
\r
        var currNum: Int = 0\r
        for(i in 10000 downTo 1) {\r
            if(mapping[i] != 0) {\r
                currNum = i\r
                break\r
            }\r
        }\r
\r
        for(i in 0 until k) {\r
            while(mapping[currNum] == 0) {\r
                currNum--\r
            }\r
            mapping[currNum]--\r
            when(currNum % 2) {\r
                0 -> mapping[currNum / 2]++\r
                1 -> mapping[currNum / 2 + 1]++\r
            }\r
        }\r
\r
        // Summing up\r
        var ans: Int = 0\r
        for(i in 0 until currNum+1) {\r
            if(mapping[i] > 0) {\r
                ans += (i * mapping[i])\r
            }\r
        }\r
\r
        return ans\r
    }\r
}\r
```
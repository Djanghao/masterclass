# Intuition

**Author:** singh_avi
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-floored-pairs/solutions/5956895/](https://leetcode.com/problems/sum-of-floored-pairs/solutions/5956895/)

---

# Intuition
This problem seems simple but is tricky. The key idea is as follows:

1. The nums array contains a maximum number m. 
2. For each number from 0 to m, we keep a track of the frequency of each one of them
3. For any number n and p where p > n, the number of elements between n and p (inclusive) can be found in constant time using the prefix array approach on the frequency of elements
4. The main idea is thus for for all the elements from 0 to m, if the frequency of the element is 0, we continue. Else, go for another loop where we multiply the number from 1 to max. Now for each multiplication, all the elements between max*k and max*(k+1) - 1 will have the same quotient k. We multiply the number of elements in the range by k to get the sum. We then multiply the sum with the frequency of the current number and add it to the result. We do this for all the numbers to get the result.

Ex: the current number is 2. All the numbers from 2 -3 will give 1, from 4-5 will give 2, from 6-7 will give 4 and so on


# Approach

# Complexity
- Time complexity:
$$O(N+Max)$$

- Space complexity:
$$O(Max)$$

# Code
```golang []
var MOD = 1_000_000_007

func sumOfFlooredPairs(nums []int) int {
	n := len(nums)

	max := -1

	for i := 0; i < n; i++ {
		if nums[i] > max {
			max = nums[i]
		}
	}

	freqArr := make([]int, max+1)

	for i := 0; i < n; i++ {
		freqArr[nums[i]]++
	}

	prefixArr := make([]int, max+1)

	for i := 1; i <= max; i++ {
		prefixArr[i] = prefixArr[i-1] + freqArr[i]
	}

	result := 0

	for j := 0; j <= max; j++ {

        if freqArr[j] == 0 {
            continue
        }

        sum := 0
		for k := 1; k*j <= max; k++ {
			left := k * j
			right := (k+1)*j - 1

			if right > max {
				right = max
			}

			numNodes := prefixArr[right] - prefixArr[left-1]

			sum = (sum + (k * numNodes)) % MOD
		}

        result = (result + freqArr[j] * sum) % MOD
	}

	return result
}
```
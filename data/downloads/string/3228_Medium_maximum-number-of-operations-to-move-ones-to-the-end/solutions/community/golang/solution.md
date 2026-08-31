# GO | 2 Solutions | Beats 100%

**Author:** 2107mohitverma
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-operations-to-move-ones-to-the-end/solutions/5511190/](https://leetcode.com/problems/maximum-number-of-operations-to-move-ones-to-the-end/solutions/5511190/)

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
```
// MORE CLEAR SOLUTION
func maxOperations(s string) int {
	length := len(s)

	startIndex := -1
	for i := length - 1; i >= 0; i-- {
		if s[i] == '0' {
			startIndex = i
			break
		}
	}

	operations, currentMovementValue := 0, 1
	endIndex := -1
	for i := startIndex; i >= 0; i-- {
		if s[i] == '0' {
			continue
		} else {
			for endIndex = i; endIndex >= 0; endIndex-- {
				if s[endIndex] == '0' {
					break
				}
			}
			operations += currentMovementValue * (i - endIndex)
			currentMovementValue++
			i = endIndex + 1
		}
	}
	return operations
}

// SOLUTION I DID IN CONTEST
// func maxOperations(s string) int {
//     length := len(s)
//     arr := make([]int, length)
//     oneEncountered := false
//     if s[length-1] == '1' {
//         oneEncountered = true
//         arr[length-1] = 0
//     }else {
//          arr[length-1] = 1
//     }
//     for i:=length-2; i>=0; i-- {
//         if s[i] == '0' {
//             if oneEncountered {
//                 arr[i] = arr[i+1]+1
//                 oneEncountered = false
//             }else {
//                 arr[i] = arr[i+1]
//             }
//         }else {
//             oneEncountered = true
//             arr[i] = arr[i+1]
//         }
//     }
//     maxOperations := 0
//     for i:=0; i<length-1; i++ {
//         if s[i] == '1' {
//             maxOperations += arr[i]
//         }
//     }
//     return maxOperations
// }
```
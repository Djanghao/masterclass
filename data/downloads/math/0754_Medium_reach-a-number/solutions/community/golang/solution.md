# A Go Solution comes with explanations.

**Author:** wozaizhe55
**Votes:** 2
**Link:** [https://leetcode.com/problems/reach-a-number/solutions/343335/](https://leetcode.com/problems/reach-a-number/solutions/343335/)

---

golang example
```
func reachNumber(target int) int {
	var sum, step int
	if target < 0 {
		target = -target
	}

	for {
		sum += step
		if sum >= target {
			break
		}
		step++
	}

	if (sum-target)&1 == 0 {
		return step
	}

	if step&1 == 0 {
		return step + 1
	}
	return step + 2
}
```
we can write the targets of every step, when step is small. Like this :
step   targets
0->[0]
1->[-1, **1**]
2->[-3, -1, 1, **3**]
3->[-6, -4, -2, 0, 2, 4, **6**]
...
so, we can find that the targets is 
**even, odd, odd, even, even, odd...**
Each Max value in set of the targets can be calculated by:
```
max = 1 + 2 + 3 +... + step(i)
```
Because we stop circulation when max just more than target, if target has the same odevity with max, it must can be reached in same step.
If target and max have different odevity, target must appear in next different odevity targets, may next step or next next step, it depends on the step's odevity.

Reference:
[My Simple Go Solution](https://leetcode.com/problems/reach-a-number/discuss/340998/My-Simple-Go-Solution)
# Simple Go solution, easy to understand

**Author:** drosh173
**Votes:** 0
**Link:** [https://leetcode.com/problems/alphabet-board-path/solutions/5689122/](https://leetcode.com/problems/alphabet-board-path/solutions/5689122/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Find the next position based on the character, suppose the character is k, then the next position will be $$k - a = 8$$
And we can find the position of the char on the grid as below:
$$newRow = position / 5 $$
$$newCol = position \\% 5 $$ 

Now we have the current position as well as next position and we just need to move and add the directions to the result.

**Up:** Need to move to up direction only when the $$newRow < curRow$$ 
**Left:** Need to move to left direction only when the $$newCol < curCol$$
**Down:** Need to move to down direction only when the $$newRow > curRow$$
**Right:** Need to move to right direction only when the $$newCol > curCol$$

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
```golang []
func alphabetBoardPath(target string) string {
	chars := []rune(target)
	res := []rune{}
	x := 0
	y := 0
	for idx := 0; idx < len(chars); idx++ {
		position := int(chars[idx] - 'a')
		nx := position / 5
		ny := position % 5

        move('U', &res, x - nx)
        move('L', &res, y - ny)
        move('D', &res, nx - x)
        move('R', &res, ny - y)

        res = append(res, '!')
		x = nx
		y = ny
	}
	return string(res)
}

func move(dir rune, list *[]rune, count int) {
    for count > 0 {
        *list = append(*list, dir)
        count--
    }
}
```
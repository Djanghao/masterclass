# [Rust] Easy but I lost its points in biweekly contest.

**Author:** amrro
**Votes:** 2
**Link:** [https://leetcode.com/problems/subrectangle-queries/solutions/685927/](https://leetcode.com/problems/subrectangle-queries/solutions/685927/)

---

This's easy problem, But I lost its points in a Biweekly contest. I always considered `while` as dangerous loop method. You always have to take care of three things: 
- create index, 
- increment or decrement the index, 
- and for inner `while` reset it to its intial value. 

Despite its easy and straightforward solution I lost its point in Biweekly contest. Here's a mistakes that I've made. 

**First mistake I did was is not resetting the inner index: `j`**.
This solution only change the first row value of `i`.
```rust
fn update_subrectangle(&mut self, row1: i32, col1: i32, row2: i32, col2: i32, new_value: i32) {
	let (mut i, mut j) = (row1, col1);

	while i <= row2 { 
		while j <= col2 { 
			self.matrix[i as usize][j as usize] = new_value;
			j += 1;
		}
		i += 1;
		// I should reset the j index here.
	}        
}
```

**When I noticed the previous mistake, I rapidly assumed that I should reset `j` to 0.**.
For example, if it's required to change (`row1`: `1`, `col1`: `4`) to (`row1`: `2`, `col1`: `4`). 
This will reset `j` to `0`, so in the next iteration of `i`, all the row will be changed to the new value.
```rust
fn update_subrectangle(&mut self, row1: i32, col1: i32, row2: i32, col2: i32, new_value: i32) {
	let (mut i, mut j) = (row1, col1);

	while i <= row2 { 
		while j <= col2 { 
			self.matrix[i as usize][j as usize] = new_value;
			j += 1;
		}
		i += 1;
		// I should reset the j index here to be `col1`,
		j = 0;
	}        
}
```

**Finally discovered that, But it was too late. and this was the accepted solution**
```rust
fn update_subrectangle(&mut self, row1: i32, col1: i32, row2: i32, col2: i32, new_value: i32) {
	let (mut i, mut j) = (row1, col1);

	while i <= row2 { 
		while j <= col2 { 
			self.matrix[i as usize][j as usize] = new_value;
			j += 1;
		}
		i += 1;
		// I should reset the j index here to be `col1`,
		j = col1;
	}        
}
```


I wasn't satisfied by the solution at all, hard to read and a lot of hands changing the indices. And I touched all the bad things about the `while` loop. 

**So my final submission is the following:**
This is much clearer and straightforward. 
| Runtime  | 12 ms |   
|-----|:--:|
| Memory | 3.2 MB | 

```rust
fn update_subrectangle(&mut self, row1: i32, col1: i32, row2: i32, col2: i32, new_value: i32) {
	for i in row1..row2 + 1 {
		for j in col1..col2 + 1 {
			self.matrix[i as usize][j as usize] = new_value;
		}
	}
}
```


Thanks. 
